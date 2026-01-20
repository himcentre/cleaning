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
  AUDIT: 'audit',
  CHECKLIST: 'checklist'
};

// Шаги для формы аудита
const AUDIT_STEPS = {
  WAITING_FOR_PD_AGREEMENT: 'waiting_for_pd_agreement',
  WAITING_FOR_NAME: 'waiting_for_name',
  WAITING_FOR_ORGANIZATION: 'waiting_for_organization',
  WAITING_FOR_PHONE: 'waiting_for_phone'
};

// Шаги для формы чек-листа
const CHECKLIST_STEPS = {
  WAITING_FOR_PD_AGREEMENT: 'waiting_for_pd_agreement',
  WAITING_FOR_START: 'waiting_for_start',
  WAITING_FOR_COMPANY: 'waiting_for_company',
  WAITING_FOR_FORMAT: 'waiting_for_format',
  WAITING_FOR_FORMAT_OTHER: 'waiting_for_format_other',
  WAITING_FOR_STAGE: 'waiting_for_stage',
  WAITING_FOR_READINESS: 'waiting_for_readiness',
  WAITING_FOR_NAME: 'waiting_for_name',
  WAITING_FOR_PHONE: 'waiting_for_phone'
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
        '📋 Новая заявка на аудит:\n\n' +
        `👤 ФИО: ${state.data.name}\n` +
        `🏢 Организация: ${state.data.organization}\n` +
        `📞 Телефон: ${state.data.phone}\n` +
        `👤 Username: @${ctx.from.username || 'не указан'}`;

      try {
        await bot.telegram.sendMessage(ADMIN_ID, adminMessage);
        await ctx.reply('✅ Спасибо! Ваша заявка на аудит отправлена. Мы свяжемся с вами в ближайшее время.');
      } catch (e) {
        console.error('Ошибка при отправке сообщения админу:', e);
        await ctx.reply('⚠️ Ошибка при отправке заявки на аудит. Пожалуйста, свяжитесь с администратором.');
      }
      
      // Очищаем состояние
      userStates.delete(userId);
      return true;

    default:
      return false;
  }
}

// Обработка ответов для формы чек-листа
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
      // Обрабатывается через callback
      return false;

    case CHECKLIST_STEPS.WAITING_FOR_COMPANY:
      state.data.company = text;
      state.step = CHECKLIST_STEPS.WAITING_FOR_FORMAT;
      await ctx.reply(
        'Какой у вас формат?',
        Markup.inlineKeyboard([
          [Markup.button.callback('Кафе / ресторан', 'format_cafe')],
          [Markup.button.callback('Бар / кофейня', 'format_bar')],
          [Markup.button.callback('Столовая', 'format_canteen')],
          [Markup.button.callback('Пекарня / кулинария', 'format_bakery')],
          [Markup.button.callback('Производственная кухня', 'format_production')],
          [Markup.button.callback('Другое', 'format_other')]
        ])
      );
      return true;

    case CHECKLIST_STEPS.WAITING_FOR_FORMAT_OTHER:
      state.data.format = text;
      state.step = CHECKLIST_STEPS.WAITING_FOR_STAGE;
      await ctx.reply(
        'На каком этапе вы сейчас?',
        Markup.inlineKeyboard([
          [Markup.button.callback('Работаем, были проверки', 'stage_working_checked')],
          [Markup.button.callback('Работаем, проверок не было', 'stage_working_unchecked')],
          [Markup.button.callback('Открытие / запуск', 'stage_opening')],
          [Markup.button.callback('Получали предписание', 'stage_warning')]
        ])
      );
      return true;

    case CHECKLIST_STEPS.WAITING_FOR_STAGE:
      // Обрабатывается через callback
      return false;

    case CHECKLIST_STEPS.WAITING_FOR_READINESS:
      // Обрабатывается через callback
      return false;

    case CHECKLIST_STEPS.WAITING_FOR_NAME:
      state.data.name = text;
      state.step = CHECKLIST_STEPS.WAITING_FOR_PHONE;
      await ctx.reply('Укажите ваш номер телефона:');
      return true;

    case CHECKLIST_STEPS.WAITING_FOR_PHONE:
      state.data.phone = text;
      
      // Отправляем финальное сообщение и PDF
      await ctx.reply(
        '✅ Направляем вам упрощённый чек-лист первичной самопроверки.\n' +
        'Он позволяет оценить базовые требования и организации процессов.'
      );

      // Отправляем PDF (путь нужно будет настроить)
      try {
        const pdfPath = join(__dirname, 'Чек-лист ХАССП.pdf');
        await ctx.replyWithDocument({
          source: readFileSync(pdfPath),
          filename: 'Чек-лист ХАССП.pdf'
        });
      } catch (e) {
        console.error('Ошибка при отправке PDF:', e);
        await ctx.reply('⚠️ Файл чек-листа временно недоступен. Пожалуйста, свяжитесь с администратором.');
      }

      // Отправляем сообщение с предложением консультации
      await ctx.reply(
        'Если вам необходим <b>внешний выездной аудит, документирование всех стадий и процедур и обучение персонала</b>, мы готовы провести бесплатную консультацию и рассказать, какие решения подойдут именно для вашего предприятия.',
        {
          parse_mode: 'HTML',
          reply_markup: Markup.inlineKeyboard([
            [Markup.button.callback('👉 Получить бесплатную консультацию', 'request_consultation')]
          ]).reply_markup
        }
      );

      // Отправляем данные админу
      const adminMessage = 
        '📋 Новая заявка на чек-лист:\n\n' +
        `🏢 Компания: ${state.data.company}\n` +
        `📋 Формат: ${state.data.format}\n` +
        `📊 Этап: ${state.data.stage}\n` +
        `✅ Готовность: ${state.data.readiness}\n` +
        `👤 ФИО: ${state.data.name}\n` +
        `📞 Телефон: ${state.data.phone}\n` +
        `👤 Username: @${ctx.from.username || 'не указан'}`;

      try {
        await bot.telegram.sendMessage(ADMIN_ID, adminMessage);
      } catch (e) {
        console.error('Ошибка при отправке сообщения админу:', e);
      }
      
      // Сохраняем данные пользователя для возможного запроса консультации
      lastChecklistData.set(userId, {
        company: state.data.company,
        format: state.data.format,
        stage: state.data.stage,
        readiness: state.data.readiness,
        name: state.data.name,
        phone: state.data.phone,
        username: ctx.from.username || 'не указан'
      });
      
      // Очищаем состояние
      userStates.delete(userId);
      return true;

    default:
      return false;
  }
}

bot.start((ctx) => {
  const payload = ctx.startPayload

  if (payload === 'checklist') {
    startChecklistForm(ctx)
  } else if (payload === 'audit') {
    startAuditForm(ctx)
  }
})

bot.command('checklist', async (ctx) => {
  startChecklistForm(ctx)
})

bot.command('audit', async (ctx) => {
  startAuditForm(ctx)
})

bot.command('myid', async (ctx) => {
  try {
    await ctx.reply(`Ваш ID: ${ctx.from.id}`);
  } catch (e) {
    console.error('Необработанная ошибка в команде /myid', e);
  }
});

// Обработчик кнопки "Начать" для чек-листа
bot.action('checklist_start', async (ctx) => {
  const userId = ctx.from.id;
  const state = userStates.get(userId);
  
  if (!state || state.type !== FORM_TYPES.CHECKLIST) {
    await ctx.answerCbQuery('Сессия истекла. Пожалуйста, начните заново.');
    return;
  }
  
  state.step = CHECKLIST_STEPS.WAITING_FOR_COMPANY;
  
  // Убираем кнопки из предыдущего сообщения
  try {
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] });
  } catch (e) {
    // Игнорируем ошибку, если сообщение уже было отредактировано
  }
  
  await ctx.answerCbQuery();
  await ctx.reply('Укажите название вашей компании:');
});

// Обработчики выбора формата для чек-листа
bot.action('format_cafe', async (ctx) => {
  await handleFormatSelection(ctx, 'Кафе / ресторан');
});

bot.action('format_bar', async (ctx) => {
  await handleFormatSelection(ctx, 'Бар / кофейня');
});

bot.action('format_canteen', async (ctx) => {
  await handleFormatSelection(ctx, 'Столовая');
});

bot.action('format_bakery', async (ctx) => {
  await handleFormatSelection(ctx, 'Пекарня / кулинария');
});

bot.action('format_production', async (ctx) => {
  await handleFormatSelection(ctx, 'Производственная кухня');
});

bot.action('format_other', async (ctx) => {
  const userId = ctx.from.id;
  const state = userStates.get(userId);
  
  if (!state || state.type !== FORM_TYPES.CHECKLIST) {
    await ctx.answerCbQuery('Сессия истекла. Пожалуйста, начните заново.');
    return;
  }
  
  state.step = CHECKLIST_STEPS.WAITING_FOR_FORMAT_OTHER;
  
  // Получаем текст исходного сообщения
  const originalText = ctx.callbackQuery.message.text || 'Какой у вас формат?';
  
  // Редактируем сообщение, добавляя выбранный ответ и убирая кнопки
  await ctx.editMessageText(
    `${originalText}\n✅ Другое`,
    { reply_markup: { inline_keyboard: [] } }
  );
  
  await ctx.answerCbQuery();
  await ctx.reply('Укажите ваш формат:');
});

async function handleFormatSelection(ctx, format) {
  const userId = ctx.from.id;
  const state = userStates.get(userId);
  
  if (!state || state.type !== FORM_TYPES.CHECKLIST) {
    await ctx.answerCbQuery('Сессия истекла. Пожалуйста, начните заново.');
    return;
  }
  
  state.data.format = format;
  state.step = CHECKLIST_STEPS.WAITING_FOR_STAGE;
  
  // Получаем текст исходного сообщения
  const originalText = ctx.callbackQuery.message.text || 'Какой у вас формат?';
  
  // Редактируем сообщение, добавляя выбранный ответ и убирая кнопки
  await ctx.editMessageText(
    `${originalText}\n✅ ${format}`,
    { reply_markup: { inline_keyboard: [] } }
  );
  
  await ctx.answerCbQuery();
  
  // Отправляем новый вопрос
  await ctx.reply(
    'На каком этапе вы сейчас?',
    Markup.inlineKeyboard([
      [Markup.button.callback('Работаем, были проверки', 'stage_working_checked')],
      [Markup.button.callback('Работаем, проверок не было', 'stage_working_unchecked')],
      [Markup.button.callback('Открытие / запуск', 'stage_opening')],
      [Markup.button.callback('Получали предписание', 'stage_warning')]
    ])
  );
}

// Обработчики выбора этапа для чек-листа
bot.action('stage_working_checked', async (ctx) => {
  await handleStageSelection(ctx, 'Работаем, были проверки');
});

bot.action('stage_working_unchecked', async (ctx) => {
  await handleStageSelection(ctx, 'Работаем, проверок не было');
});

bot.action('stage_opening', async (ctx) => {
  await handleStageSelection(ctx, 'Открытие / запуск');
});

bot.action('stage_warning', async (ctx) => {
  await handleStageSelection(ctx, 'Получали предписание');
});

async function handleStageSelection(ctx, stage) {
  const userId = ctx.from.id;
  const state = userStates.get(userId);
  
  if (!state || state.type !== FORM_TYPES.CHECKLIST) {
    await ctx.answerCbQuery('Сессия истекла. Пожалуйста, начните заново.');
    return;
  }
  
  state.data.stage = stage;
  state.step = CHECKLIST_STEPS.WAITING_FOR_READINESS;
  
  // Получаем текст исходного сообщения
  const originalText = ctx.callbackQuery.message.text || 'На каком этапе вы сейчас?';
  
  // Редактируем сообщение, добавляя выбранный ответ и убирая кнопки
  await ctx.editMessageText(
    `${originalText}\n✅ ${stage}`,
    { reply_markup: { inline_keyboard: [] } }
  );
  
  await ctx.answerCbQuery();
  
  // Отправляем новый вопрос
  await ctx.reply(
    'Как вы оцениваете готовность предприятия к проверке?',
    Markup.inlineKeyboard([
      [Markup.button.callback('Уверены, всё в порядке', 'readiness_confident')],
      [Markup.button.callback('Есть сомнения', 'readiness_doubts')],
      [Markup.button.callback('Скорее не готовы', 'readiness_not_ready')]
    ])
  );
}

// Обработчики выбора готовности для чек-листа
bot.action('readiness_confident', async (ctx) => {
  await handleReadinessSelection(ctx, 'Уверены, всё в порядке');
});

bot.action('readiness_doubts', async (ctx) => {
  await handleReadinessSelection(ctx, 'Есть сомнения');
});

bot.action('readiness_not_ready', async (ctx) => {
  await handleReadinessSelection(ctx, 'Скорее не готовы');
});

async function handleReadinessSelection(ctx, readiness) {
  const userId = ctx.from.id;
  const state = userStates.get(userId);
  
  if (!state || state.type !== FORM_TYPES.CHECKLIST) {
    await ctx.answerCbQuery('Сессия истекла. Пожалуйста, начните заново.');
    return;
  }
  
  state.data.readiness = readiness;
  state.step = CHECKLIST_STEPS.WAITING_FOR_NAME;
  
  // Получаем текст исходного сообщения
  const originalText = ctx.callbackQuery.message.text || 'Как вы оцениваете готовность предприятия к проверке?';
  
  // Редактируем сообщение, добавляя выбранный ответ и убирая кнопки
  await ctx.editMessageText(
    `${originalText}\n✅ ${readiness}`,
    { reply_markup: { inline_keyboard: [] } }
  );
  
  await ctx.answerCbQuery();
  
  // Отправляем новый вопрос
  await ctx.reply('Укажите ваше имя и фамилию:');
}

// Обработчик запроса бесплатной консультации
bot.action('request_consultation', async (ctx) => {
  const userId = ctx.from.id;
  
  // Отправляем подтверждение пользователю
  await ctx.answerCbQuery('✅ Заявка отправлена!');
  await ctx.reply('✅ Спасибо! Ваша заявка на бесплатную консультацию отправлена. Мы свяжемся с вами в ближайшее время.');

  // Получаем данные пользователя из последней заявки на чек-лист
  const checklistData = lastChecklistData.get(userId);
  
  // Отправляем уведомление админу
  let adminMessage = '📞 Новая заявка на бесплатную консультацию:\n\n';
  
  if (checklistData) {
    // Если есть данные из чек-листа, используем их
    adminMessage += 
      `🏢 Компания: ${checklistData.company}\n` +
      `📋 Формат: ${checklistData.format}\n` +
      `📊 Этап: ${checklistData.stage}\n` +
      `✅ Готовность: ${checklistData.readiness}\n` +
      `👤 ФИО: ${checklistData.name}\n` +
      `📞 Телефон: ${checklistData.phone}\n` +
      `👤 Username: @${checklistData.username}`;
  } else {
    // Если данных нет, отправляем базовую информацию
    adminMessage += 
      `👤 Username: @${ctx.from.username || 'не указан'}\n` +
      `🆔 User ID: ${userId}\n` +
      `👤 Имя: ${ctx.from.first_name || 'не указано'} ${ctx.from.last_name || ''}`.trim();
  }

  try {
    await bot.telegram.sendMessage(ADMIN_ID, adminMessage);
  } catch (e) {
    console.error('Ошибка при отправке сообщения админу:', e);
  }
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
      'Мы подготовили короткий чек-лист, который поможет понять,\n' +
      'готова ли ваша кухня к проверке.\n' +
      'Ответьте на несколько вопросов — и вы получите его бесплатно.'
    );
    await ctx.reply(
      'Нажмите кнопку "Начать" для продолжения.',
      Markup.inlineKeyboard([
        [Markup.button.callback('Начать', 'checklist_start')]
      ])
    );
  } else if (state.type === FORM_TYPES.AUDIT) {
    state.step = AUDIT_STEPS.WAITING_FOR_NAME;
    await ctx.answerCbQuery('Спасибо за согласие!');
    await ctx.editMessageText(
      'Для оформления заявки на аудит, пожалуйста, заполните следующие данные:'
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
