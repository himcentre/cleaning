import 'dotenv/config';
import { Telegraf, Markup } from 'telegraf';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BOT_TOKEN = process.env.BOT_TOKEN;
const ADMIN_ID = process.env.ADMIN_ID;
const PD_AGREEMENT_URL = process.env.PD_AGREEMENT_URL;

const bot = new Telegraf(BOT_TOKEN);

// Хранилище состояний пользователей
const userStates = new Map();

// Хранилище последних данных пользователей из чек-листа (для консультации)
const lastChecklistData = new Map();

// Типы форм
const FORM_TYPES = {
  AUDIT: 'consultation',
  CHECKLIST: 'kit'
};

// Шаги для формы аудита
const AUDIT_STEPS = {
  WAITING_FOR_PD_AGREEMENT: 'waiting_for_pd_agreement',
  WAITING_FOR_NAME: 'waiting_for_name',
  WAITING_FOR_ORGANIZATION: 'waiting_for_organization',
  WAITING_FOR_PHONE: 'waiting_for_phone'
};

// Шаги для формы получения набора средств
const CHECKLIST_STEPS = {
  WAITING_FOR_PD_AGREEMENT: 'waiting_for_pd_agreement',
  WAITING_FOR_START: 'waiting_for_start',
  WAITING_FOR_NAME: 'waiting_for_name',
  WAITING_FOR_ORGANIZATION: 'waiting_for_organization',
  WAITING_FOR_PHONE: 'waiting_for_phone',
  WAITING_FOR_OBJECTS: 'waiting_for_objects',
  WAITING_FOR_OBJECTS_OTHER: 'waiting_for_objects_other',
  WAITING_FOR_SCALE: 'waiting_for_scale',
  WAITING_FOR_PROBLEMS: 'waiting_for_problems',
  WAITING_FOR_PROBLEMS_OTHER: 'waiting_for_problems_other'
};

async function requestPdAgreement(ctx, formType) {
  const userId = ctx.from.id;
  
  // Сбрасываем состояние
  userStates.set(userId, {
    type: formType,
    step: formType === FORM_TYPES.CHECKLIST 
      ? CHECKLIST_STEPS.WAITING_FOR_PD_AGREEMENT 
      : AUDIT_STEPS.WAITING_FOR_PD_AGREEMENT,
    data: {}
  });

  const agreementMessage = 
    '👋 Здравствуйте! Перед началом работы нам необходимо ваше согласие на обработку персональных данных.\n\n' +
    `Подробнее: ${PD_AGREEMENT_URL || 'ссылка не указана'}`;

  await ctx.reply(
    agreementMessage,
    {
      reply_markup: Markup.inlineKeyboard([
        [Markup.button.callback('✅ Согласиться', 'pd_agreement_accept')]
      ]).reply_markup,
      disable_web_page_preview: true
    }
  );
}

async function startChecklistForm(ctx) {
  await requestPdAgreement(ctx, FORM_TYPES.CHECKLIST);
}

async function startAuditForm(ctx) {
  await requestPdAgreement(ctx, FORM_TYPES.AUDIT);
}

// Обработка ответов для формы аудита
async function handleAuditResponse(ctx) {
  const userId = ctx.from.id;
  const state = userStates.get(userId);
  
  if (!state || state.type !== FORM_TYPES.AUDIT) {
    return false;
  }

  const text = ctx.message?.text || '';

  switch (state.step) {
    case AUDIT_STEPS.WAITING_FOR_PD_AGREEMENT:
      // Согласие обрабатывается через callback, здесь не должно быть
      return false;

    case AUDIT_STEPS.WAITING_FOR_NAME:
      state.data.name = text;
      state.step = AUDIT_STEPS.WAITING_FOR_ORGANIZATION;
      await ctx.reply('Укажите название вашей организации:');
      return true;

    case AUDIT_STEPS.WAITING_FOR_ORGANIZATION:
      state.data.organization = text;
      state.step = AUDIT_STEPS.WAITING_FOR_PHONE;
      await ctx.reply('Укажите ваш номер телефона:');
      return true;

    case AUDIT_STEPS.WAITING_FOR_PHONE:
      state.data.phone = text;
      
      // Отправляем данные админу
      const adminMessage = 
        '📋 Новая заявка на консультацию:\n\n' +
        `👤 ФИО: ${state.data.name}\n` +
        `🏢 Организация: ${state.data.organization}\n` +
        `📞 Телефон: ${state.data.phone}\n` +
        `👤 Username: @${ctx.from.username || 'не указан'}`;

      try {
        await bot.telegram.sendMessage(ADMIN_ID, adminMessage);
        await ctx.reply('✅ Спасибо! Ваша заявка на консультацию отправлена. Мы свяжемся с вами в ближайшее время.');
      } catch (e) {
        console.error('Ошибка при отправке сообщения админу:', e);
        await ctx.reply('⚠️ Ошибка при отправке заявки на консультацию. Пожалуйста, свяжитесь с администратором.');
      }
      
      // Очищаем состояние
      userStates.delete(userId);
      return true;

    default:
      return false;
  }
}

// Обработка ответов для формы получения набора средств
async function handleChecklistResponse(ctx) {
  const userId = ctx.from.id;
  const state = userStates.get(userId);
  
  if (!state || state.type !== FORM_TYPES.CHECKLIST) {
    return false;
  }

  const text = ctx.message?.text || '';

  switch (state.step) {
    case CHECKLIST_STEPS.WAITING_FOR_PD_AGREEMENT:
      // Согласие обрабатывается через callback, здесь не должно быть
      return false;

    case CHECKLIST_STEPS.WAITING_FOR_START:
      // Обрабатывается через callback-кнопку
      return false;

    case CHECKLIST_STEPS.WAITING_FOR_NAME:
      state.data.name = text;
      state.step = CHECKLIST_STEPS.WAITING_FOR_ORGANIZATION;
      await ctx.reply('Укажите название вашей организации:');
      return true;

    case CHECKLIST_STEPS.WAITING_FOR_ORGANIZATION:
      state.data.organization = text;
      state.step = CHECKLIST_STEPS.WAITING_FOR_PHONE;
      await ctx.reply('Укажите ваш номер телефона:');
      return true;

    case CHECKLIST_STEPS.WAITING_FOR_PHONE:
      state.data.phone = text;
      // Переход к шагу с объектами
      state.step = CHECKLIST_STEPS.WAITING_FOR_OBJECTS;
      if (!Array.isArray(state.data.objects)) {
        state.data.objects = [];
      }
      await ctx.reply(
        'С какими объектами вы работаете чаще всего?\n\n' +
        'Можно выбрать несколько вариантов.',
        Markup.inlineKeyboard([
          [Markup.button.callback('Промышленные предприятия', 'kit_obj_industrial')],
          [Markup.button.callback('Энергетика / ТЭЦ / заводы', 'kit_obj_energy')],
          [Markup.button.callback('Офисы и бизнес-центры', 'kit_obj_office')],
          [Markup.button.callback('Торговые центры', 'kit_obj_mall')],
          [Markup.button.callback('Медицинские центры', 'kit_obj_med')],
          [Markup.button.callback('Бюджетные учреждения', 'kit_obj_budget')],
          [Markup.button.callback('Свой ответ', 'kit_obj_other')],
          [Markup.button.callback('➡️ Готово', 'kit_objects_done')]
        ])
      );
      return true;

    case CHECKLIST_STEPS.WAITING_FOR_OBJECTS_OTHER:
      if (!Array.isArray(state.data.objects)) {
        state.data.objects = [];
      }
      if (text.trim()) {
        state.data.objects.push(text.trim());
      }
      state.step = CHECKLIST_STEPS.WAITING_FOR_OBJECTS;
      await ctx.reply(
        'Спасибо! Можете выбрать дополнительные варианты из списка выше\n' +
        'и нажать «➡️ Готово», когда закончите выбор.'
      );
      return true;

    case CHECKLIST_STEPS.WAITING_FOR_PROBLEMS_OTHER:
      if (!Array.isArray(state.data.problems)) {
        state.data.problems = [];
      }
      if (text.trim()) {
        state.data.problems.push(text.trim());
      }
      state.step = CHECKLIST_STEPS.WAITING_FOR_PROBLEMS;
      await ctx.reply(
        'Спасибо! Можете выбрать дополнительные варианты из списка выше\n' +
        'и нажать «➡️ Готово», когда закончите выбор.'
      );
      return true;

    default:
      return false;
  }
}

bot.start((ctx) => {
  const payload = ctx.startPayload

  if (payload === 'kit') {
    startChecklistForm(ctx)
  } else if (payload === 'consultation') {
    startAuditForm(ctx)
  }
})

bot.command('kit', async (ctx) => {
  startChecklistForm(ctx)
})

bot.command('consultation', async (ctx) => {
  startAuditForm(ctx)
})

bot.command('myid', async (ctx) => {
  try {
    await ctx.reply(`Ваш ID: ${ctx.from.id}`);
  } catch (e) {
    console.error('Необработанная ошибка в команде /myid', e);
  }
});

// Обработчик кнопки "Получить набор средств" (старт анкеты)
bot.action('checklist_start', async (ctx) => {
  const userId = ctx.from.id;
  const state = userStates.get(userId);
  
  if (!state || state.type !== FORM_TYPES.CHECKLIST) {
    await ctx.answerCbQuery('Сессия истекла. Пожалуйста, начните заново.');
    return;
  }
  
  state.step = CHECKLIST_STEPS.WAITING_FOR_NAME;
  
  // Убираем кнопки из предыдущего сообщения
  try {
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] });
  } catch (e) {
    // Игнорируем ошибку, если сообщение уже было отредактировано
  }
  
  await ctx.answerCbQuery();
  await ctx.reply('Укажите вашу фамилию и имя:');
});

// Обработчики выбора объектов (множественный выбор)
bot.action('kit_obj_industrial', async (ctx) => {
  await handleKitObjectsSelection(ctx, 'Промышленные предприятия');
});

bot.action('kit_obj_energy', async (ctx) => {
  await handleKitObjectsSelection(ctx, 'Энергетика / ТЭЦ / заводы');
});

bot.action('kit_obj_office', async (ctx) => {
  await handleKitObjectsSelection(ctx, 'Офисы и бизнес-центры');
});

bot.action('kit_obj_mall', async (ctx) => {
  await handleKitObjectsSelection(ctx, 'Торговые центры');
});

bot.action('kit_obj_med', async (ctx) => {
  await handleKitObjectsSelection(ctx, 'Медицинские центры');
});

bot.action('kit_obj_budget', async (ctx) => {
  await handleKitObjectsSelection(ctx, 'Бюджетные учреждения');
});

bot.action('kit_obj_other', async (ctx) => {
  const userId = ctx.from.id;
  const state = userStates.get(userId);

  if (!state || state.type !== FORM_TYPES.CHECKLIST) {
    await ctx.answerCbQuery('Сессия истекла. Пожалуйста, начните заново.');
    return;
  }

  state.step = CHECKLIST_STEPS.WAITING_FOR_OBJECTS_OTHER;
  await ctx.answerCbQuery();
  await ctx.reply('Напишите свой вариант объектов, с которыми вы работаете чаще всего:');
});

async function handleKitObjectsSelection(ctx, label) {
  const userId = ctx.from.id;
  const state = userStates.get(userId);

  if (!state || state.type !== FORM_TYPES.CHECKLIST || state.step !== CHECKLIST_STEPS.WAITING_FOR_OBJECTS) {
    await ctx.answerCbQuery('Пожалуйста, следуйте шагам анкеты последовательно.');
    return;
  }

  if (!Array.isArray(state.data.objects)) {
    state.data.objects = [];
  }
  const index = state.data.objects.indexOf(label);
  let actionText;
  if (index === -1) {
    state.data.objects.push(label);
    actionText = `Добавлено: ${label}`;
  } else {
    state.data.objects.splice(index, 1);
    actionText = `Убрано: ${label}`;
  }

  const selected = new Set(state.data.objects);

  const keyboard = Markup.inlineKeyboard([
    [Markup.button.callback(`${selected.has('Промышленные предприятия') ? '✅ ' : ''}Промышленные предприятия`, 'kit_obj_industrial')],
    [Markup.button.callback(`${selected.has('Энергетика / ТЭЦ / заводы') ? '✅ ' : ''}Энергетика / ТЭЦ / заводы`, 'kit_obj_energy')],
    [Markup.button.callback(`${selected.has('Офисы и бизнес-центры') ? '✅ ' : ''}Офисы и бизнес-центры`, 'kit_obj_office')],
    [Markup.button.callback(`${selected.has('Торговые центры') ? '✅ ' : ''}Торговые центры`, 'kit_obj_mall')],
    [Markup.button.callback(`${selected.has('Медицинские центры') ? '✅ ' : ''}Медицинские центры`, 'kit_obj_med')],
    [Markup.button.callback(`${selected.has('Бюджетные учреждения') ? '✅ ' : ''}Бюджетные учреждения`, 'kit_obj_budget')],
    [Markup.button.callback('Свой ответ', 'kit_obj_other')],
    [Markup.button.callback('➡️ Готово', 'kit_objects_done')]
  ]);

  try {
    await ctx.editMessageReplyMarkup(keyboard.reply_markup);
  } catch (e) {
    // если не удалось изменить (например, старое сообщение) — просто игнорируем
  }

  await ctx.answerCbQuery(actionText);
}

// Завершение выбора объектов
bot.action('kit_objects_done', async (ctx) => {
  const userId = ctx.from.id;
  const state = userStates.get(userId);

  if (!state || state.type !== FORM_TYPES.CHECKLIST) {
    await ctx.answerCbQuery('Сессия истекла. Пожалуйста, начните заново.');
    return;
  }

  if (!Array.isArray(state.data.objects) || state.data.objects.length === 0) {
    await ctx.answerCbQuery('Пожалуйста, выберите хотя бы один вариант или укажите свой ответ.');
    return;
  }

  // Отдельным сообщением фиксируем выбранные ответы
  const objectsSummary =
    'С какими объектами вы работаете чаще всего?\n' +
    state.data.objects.map((o) => `🟢 ${o}`).join('\n');
  await ctx.reply(objectsSummary);

  state.step = CHECKLIST_STEPS.WAITING_FOR_SCALE;

  try {
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] });
  } catch (e) {
    // игнорируем, если уже изменено
  }

  await ctx.answerCbQuery();
  await ctx.reply(
    'Примерный масштаб по площади объекта?',
    Markup.inlineKeyboard([
      [Markup.button.callback('Небольшие объекты', 'kit_scale_small')],
      [Markup.button.callback('Средние объёмы', 'kit_scale_medium')],
      [Markup.button.callback('Крупные объекты', 'kit_scale_large')]
    ])
  );
});

// Масштаб объектов
bot.action('kit_scale_small', async (ctx) => {
  await handleKitScaleSelection(ctx, 'Небольшие объекты');
});

bot.action('kit_scale_medium', async (ctx) => {
  await handleKitScaleSelection(ctx, 'Средние объёмы');
});

bot.action('kit_scale_large', async (ctx) => {
  await handleKitScaleSelection(ctx, 'Крупные объекты');
});

async function handleKitScaleSelection(ctx, label) {
  const userId = ctx.from.id;
  const state = userStates.get(userId);

  if (!state || state.type !== FORM_TYPES.CHECKLIST || state.step !== CHECKLIST_STEPS.WAITING_FOR_SCALE) {
    await ctx.answerCbQuery('Сессия истекла. Пожалуйста, начните заново.');
    return;
  }

  state.data.scale = label;
  state.step = CHECKLIST_STEPS.WAITING_FOR_PROBLEMS;

  try {
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] });
  } catch (e) {
    // игнорируем
  }

  await ctx.answerCbQuery();
  if (!Array.isArray(state.data.problems)) {
    state.data.problems = [];
  }

  // Фиксируем выбранный ответ отдельным сообщением
  await ctx.reply(
    'Примерный масштаб по площади объекта?\n' +
    `🟢 ${label}`
  );

  await ctx.reply(
    'С какими проблемами сложнее всего сейчас справляться?\n\n' +
    'Можно выбрать несколько вариантов.',
    Markup.inlineKeyboard([
      [Markup.button.callback('Жировые и масляные загрязнения', 'kit_prob_grease')],
      [Markup.button.callback('Производственные загрязнения', 'kit_prob_industrial')],
      [Markup.button.callback('Сильные загрязнения полов', 'kit_prob_floor')],
      [Markup.button.callback('Санузлы и сантехника', 'kit_prob_wc')],
      [Markup.button.callback('Налёты, известь, ржавчина', 'kit_prob_scale')],
      [Markup.button.callback('После строительных работ', 'kit_prob_postbuild')],
      [Markup.button.callback('Большой расход бумажной продукции', 'kit_prob_paper')],
      [Markup.button.callback('Высокие затраты на моющие средства', 'kit_prob_cost')],
      [Markup.button.callback('Свой ответ', 'kit_prob_other')],
      [Markup.button.callback('➡️ Готово', 'kit_problems_done')]
    ])
  );
}

// Обработчики выбора проблем (множественный выбор)
bot.action('kit_prob_grease', async (ctx) => {
  await handleKitProblemsSelection(ctx, 'Жировые и масляные загрязнения');
});

bot.action('kit_prob_industrial', async (ctx) => {
  await handleKitProblemsSelection(ctx, 'Производственные загрязнения');
});

bot.action('kit_prob_floor', async (ctx) => {
  await handleKitProblemsSelection(ctx, 'Сильные загрязнения полов');
});

bot.action('kit_prob_wc', async (ctx) => {
  await handleKitProblemsSelection(ctx, 'Санузлы и сантехника');
});

bot.action('kit_prob_scale', async (ctx) => {
  await handleKitProblemsSelection(ctx, 'Налёты, известь, ржавчина');
});

bot.action('kit_prob_postbuild', async (ctx) => {
  await handleKitProblemsSelection(ctx, 'После строительных работ');
});

bot.action('kit_prob_paper', async (ctx) => {
  await handleKitProblemsSelection(ctx, 'Большой расход бумажной продукции');
});

bot.action('kit_prob_cost', async (ctx) => {
  await handleKitProblemsSelection(ctx, 'Высокие затраты на моющие средства');
});

bot.action('kit_prob_other', async (ctx) => {
  const userId = ctx.from.id;
  const state = userStates.get(userId);

  if (!state || state.type !== FORM_TYPES.CHECKLIST) {
    await ctx.answerCbQuery('Сессия истекла. Пожалуйста, начните заново.');
    return;
  }

  state.step = CHECKLIST_STEPS.WAITING_FOR_PROBLEMS_OTHER;
  await ctx.answerCbQuery();
  await ctx.reply('Опишите своими словами, с какими проблемами сложнее всего сейчас справляться:');
});

async function handleKitProblemsSelection(ctx, label) {
  const userId = ctx.from.id;
  const state = userStates.get(userId);

  if (!state || state.type !== FORM_TYPES.CHECKLIST || state.step !== CHECKLIST_STEPS.WAITING_FOR_PROBLEMS) {
    await ctx.answerCbQuery('Пожалуйста, следуйте шагам анкеты последовательно.');
    return;
  }

  if (!Array.isArray(state.data.problems)) {
    state.data.problems = [];
  }

  const index = state.data.problems.indexOf(label);
  let actionText;
  if (index === -1) {
    state.data.problems.push(label);
    actionText = `Добавлено: ${label}`;
  } else {
    state.data.problems.splice(index, 1);
    actionText = `Убрано: ${label}`;
  }

  const selected = new Set(state.data.problems);

  const keyboard = Markup.inlineKeyboard([
    [Markup.button.callback(`${selected.has('Жировые и масляные загрязнения') ? '✅ ' : ''}Жировые и масляные загрязнения`, 'kit_prob_grease')],
    [Markup.button.callback(`${selected.has('Производственные загрязнения') ? '✅ ' : ''}Производственные загрязнения`, 'kit_prob_industrial')],
    [Markup.button.callback(`${selected.has('Сильные загрязнения полов') ? '✅ ' : ''}Сильные загрязнения полов`, 'kit_prob_floor')],
    [Markup.button.callback(`${selected.has('Санузлы и сантехника') ? '✅ ' : ''}Санузлы и сантехника`, 'kit_prob_wc')],
    [Markup.button.callback(`${selected.has('Налёты, известь, ржавчина') ? '✅ ' : ''}Налёты, известь, ржавчина`, 'kit_prob_scale')],
    [Markup.button.callback(`${selected.has('После строительных работ') ? '✅ ' : ''}После строительных работ`, 'kit_prob_postbuild')],
    [Markup.button.callback(`${selected.has('Большой расход бумажной продукции') ? '✅ ' : ''}Большой расход бумажной продукции`, 'kit_prob_paper')],
    [Markup.button.callback(`${selected.has('Высокие затраты на моющие средства') ? '✅ ' : ''}Высокие затраты на моющие средства`, 'kit_prob_cost')],
    [Markup.button.callback('Свой ответ', 'kit_prob_other')],
    [Markup.button.callback('➡️ Готово', 'kit_problems_done')]
  ]);

  try {
    await ctx.editMessageReplyMarkup(keyboard.reply_markup);
  } catch (e) {
    // игнорируем ошибку изменения старого сообщения
  }

  await ctx.answerCbQuery(actionText);
}

// Завершение выбора проблем и завершение анкеты по набору средств
bot.action('kit_problems_done', async (ctx) => {
  const userId = ctx.from.id;
  const state = userStates.get(userId);

  if (!state || state.type !== FORM_TYPES.CHECKLIST) {
    await ctx.answerCbQuery('Сессия истекла. Пожалуйста, начните заново.');
    return;
  }

  if (!Array.isArray(state.data.problems) || state.data.problems.length === 0) {
    await ctx.answerCbQuery('Пожалуйста, выберите хотя бы один вариант или укажите свой ответ.');
    return;
  }

  try {
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] });
  } catch (e) {
    // игнорируем
  }

  await ctx.answerCbQuery();

  // Отдельным сообщением фиксируем выбранные ответы
  const problemsSummary =
    'С какими проблемами сложнее всего сейчас справляться?\n' +
    state.data.problems.map((p) => `🟢 ${p}`).join('\n');
  await ctx.reply(problemsSummary);

  // Сообщения по шагам 8 и 9
  await ctx.reply(
    'На основе ваших ответов мы подберём\n' +
    'набор профессиональных средств,\n' +
    'чтобы вы могли проверить эффективность\n' +
    'на своих объектах, а не «на словах».'
  );

  await ctx.reply(
    '✅ Спасибо.\n' +
    'Наш специалист свяжется с вами\n' +
    'и подтвердит состав набора.'
  );

  // Сообщение админу
  const adminMessage =
    '📦 Новая заявка на набор средств:\n\n' +
    `👤 ФИО: ${state.data.name}\n` +
    `🏢 Организация: ${state.data.organization}\n` +
    `📞 Телефон: ${state.data.phone}\n` +
    `🏗 Объекты: ${Array.isArray(state.data.objects) ? state.data.objects.join(', ') : 'не указаны'}\n` +
    `📐 Масштаб: ${state.data.scale || 'не указан'}\n` +
    `⚙️ Проблемы: ${Array.isArray(state.data.problems) ? state.data.problems.join(', ') : 'не указаны'}\n` +
    `👤 Username: @${ctx.from.username || 'не указан'}`;

  try {
    await bot.telegram.sendMessage(ADMIN_ID, adminMessage);
  } catch (e) {
    console.error('Ошибка при отправке сообщения админу:', e);
  }

  userStates.delete(userId);
});

// Обработчик согласия на обработку персональных данных
bot.action('pd_agreement_accept', async (ctx) => {
  const userId = ctx.from.id;
  const state = userStates.get(userId);
  
  if (!state) {
    await ctx.answerCbQuery('Сессия истекла. Пожалуйста, начните заново.');
    return;
  }

  // Обновляем состояние в зависимости от типа формы
  if (state.type === FORM_TYPES.CHECKLIST) {
    state.step = CHECKLIST_STEPS.WAITING_FOR_START;
    await ctx.answerCbQuery('Спасибо за согласие!');
    await ctx.editMessageText(
      'Вы можете получить бесплатный набор профессиональной химии,\n' +
      'подобранный под ваши объекты и задачи клининга.\n\n' +
      'Ответьте на несколько вопросов — это займёт не более 1 минуты.'
    );
    await ctx.reply(
      'Для продолжения нажмите кнопку ниже.',
      Markup.inlineKeyboard([
        [Markup.button.callback('👉 Получить набор средств', 'checklist_start')]
      ])
    );
  } else if (state.type === FORM_TYPES.AUDIT) {
    state.step = AUDIT_STEPS.WAITING_FOR_NAME;
    await ctx.answerCbQuery('Спасибо за согласие!');
    await ctx.editMessageText(
      'Для оформления заявки на консультацию, пожалуйста, заполните следующие данные:'
    );
    await ctx.reply('Укажите вашу фамилию и имя:');
  }
});

// Обработчик текстовых сообщений (регистрируется после команд)
bot.on('text', async (ctx) => {
  // Пропускаем команды - проверяем через entities для надежности
  const isCommand = ctx.message.entities?.some(
    entity => entity.type === 'bot_command'
  );
  
  if (isCommand || ctx.message.text?.startsWith('/')) {
    return;
  }

  // Пробуем обработать как ответ на форму аудита
  if (await handleAuditResponse(ctx)) {
    return;
  }

  // Пробуем обработать как ответ на форму чек-листа
  if (await handleChecklistResponse(ctx)) {
    return;
  }
});

// Запуск long polling
bot.launch().then(() => console.log('🤖 Bot started'));

// Корректная остановка при SIGINT/SIGTERM
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
