## Общие настройки

### Body
- **Классы:** `font-['Inter',sans-serif] bg-[#ECECEA]`
- **Описание:** Основной шрифт Inter, фон светло-серый

### Контейнер контента
- **Классы:** `max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[40px]`
- **Описание:** Максимальная ширина 1440px, центрирование, адаптивные горизонтальные отступы

---

## 1. Хедер (Header)

### Основной контейнер хедера
- **Классы:** `max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[40px] py-4 flex justify-between items-center`
- **Описание:** Контейнер с максимальной шириной, адаптивными отступами, вертикальный отступ 16px, flex с пространством между элементами

### Логотип (десктоп)
- **Классы:** `hidden md:block max-w-[222px] 2xl:max-w-[242px]`
- **Описание:** Скрыт на мобильных, виден с md, максимальная ширина 222px (242px на 2xl)

### Логотип (мобильный)
- **Классы:** `block md:hidden`
- **Описание:** Виден только на мобильных устройствах

### Кнопка в хедере
- **Классы:** `inline-flex items-center justify-center gap-2.5 h-12 lg:h-9 rounded-3xl lg:rounded-[18px] px-6 lg:px-4 text-lg lg:text-base font-medium leading-[120%] cursor-pointer transition-colors duration-200 bg-white text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white [&_svg_path]:fill-[#1E1E1E] hover:[&_svg_path]:fill-white`
- **Описание:** Белая кнопка с темным текстом, при hover инвертируется. Высота 48px на мобильных, 36px на десктопе

---

## 2. Кнопки (Buttons)

### Кнопка основная (белая)
- **Классы:** `inline-flex items-center justify-center gap-2.5 h-[72px] lg:h-14 rounded-[36px] lg:rounded-[28px] px-12 lg:px-7 text-2xl lg:text-xl font-semibold leading-[120%] cursor-pointer transition-colors duration-200 bg-white text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white [&_svg_path]:fill-[#1E1E1E] hover:[&_svg_path]:fill-white max-md:w-full`
- **Описание:** Большая белая кнопка, высота 72px на мобильных, 56px на десктопе. Полная ширина на мобильных

### Кнопка основная (темная)
- **Классы:** `inline-flex items-center justify-center gap-2.5 h-[72px] lg:h-14 rounded-[36px] lg:rounded-[28px] px-12 lg:px-7 text-2xl lg:text-xl font-semibold leading-[120%] cursor-pointer transition-colors duration-200 bg-[#1E1E1E] text-white hover:bg-white hover:text-[#1E1E1E] [&_svg_path]:fill-white hover:[&_svg_path]:fill-[#1E1E1E] max-md:w-full`
- **Описание:** Большая темная кнопка, инвертируется при hover

### Кнопка компактная (в хедере)
- **Классы:** `inline-flex items-center justify-center gap-2.5 h-12 lg:h-9 rounded-3xl lg:rounded-[18px] px-6 lg:px-4 text-lg lg:text-base font-medium leading-[120%] cursor-pointer transition-colors duration-200 bg-white text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white [&_svg_path]:fill-[#1E1E1E] hover:[&_svg_path]:fill-white`
- **Описание:** Компактная кнопка для хедера, высота 48px на мобильных, 36px на десктопе

### Бейдж/метка времени
- **Классы:** `bg-[#272727] text-white text-base lg:text-xl h-[42px] lg:h-14 rounded-[21px] lg:rounded-[28px] px-4 lg:px-6 inline-flex items-center justify-center gap-2.5 font-normal leading-[120%] max-md:w-full`
- **Описание:** Темный бейдж с белым текстом, скругленные углы

---

## 3. SVG иконки (Icons)

### SVG иконка в кнопке
- **Классы:** `min-w-[28px]`
- **Описание:** Минимальная ширина 28px для SVG иконок внутри кнопок

### Контейнер иконки в футере
- **Классы:** `w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#2E333C] flex items-center justify-center [&_svg]:max-w-[26px] [&_img]:max-w-[26px] [&_svg_path]:fill-white`
- **Описание:** Круглый контейнер для иконок, размер 48x48px на мобильных, 56x56px на десктопе, темный фон

### Иконка маркера/списка
- **Классы:** `w-8 h-8 lg:w-10 lg:h-10 min-w-[32px] lg:min-w-[40px] min-h-[32px] lg:min-h-[40px] max-w-[32px] lg:max-w-[40px] max-h-[32px] lg:max-h-[40px]`
- **Описание:** Квадратная иконка маркера, размер 32x32px на мобильных, 40x40px на десктопе

---

## 4. Скругления и отступы (Border Radius & Spacing)

### Скругления (Border Radius)

#### Большие скругления (секции)
- **Классы:** `rounded-3xl lg:rounded-[40px]`
- **Описание:** Скругление 24px на мобильных, 40px на десктопе для больших секций

#### Средние скругления (карточки)
- **Классы:** `rounded-3xl lg:rounded-[24px]`
- **Описание:** Скругление 24px на мобильных, 24px на десктопе для карточек

#### Скругления кнопок
- **Классы:** `rounded-[36px] lg:rounded-[28px]` (большие кнопки)
- **Классы:** `rounded-3xl lg:rounded-[18px]` (компактные кнопки)
- **Описание:** Адаптивные скругления для кнопок

#### Скругления бейджей
- **Классы:** `rounded-[21px] lg:rounded-[28px]`
- **Описание:** Скругление для бейджей/меток

#### Круглые элементы
- **Классы:** `rounded-full` или `rounded-[40px]`
- **Описание:** Полностью круглые элементы или с радиусом 40px

### Отступы (Spacing)

#### Вертикальные отступы секций
- **Классы:** `py-12 lg:py-24`
- **Описание:** Вертикальные отступы 48px на мобильных, 96px на десктопе

#### Отступы внутри карточек
- **Классы:** `p-6`
- **Описание:** Внутренние отступы карточек 24px

#### Горизонтальные отступы контейнеров
- **Классы:** `px-4 md:px-10 lg:px-[40px]`
- **Описание:** Адаптивные горизонтальные отступы: 16px → 40px → 40px

#### Отступы между элементами
- **Классы:** `gap-2.5`, `gap-3`, `gap-4`, `gap-5`, `gap-6`, `gap-8`, `gap-14`, `gap-16`
- **Описание:** Различные отступы между элементами (10px, 12px, 16px, 20px, 24px, 32px, 56px, 64px)

#### Отступы футера
- **Классы:** `pt-6 pb-8`
- **Описание:** Верхний отступ 24px, нижний 32px

#### Негативные отступы (overlap)
- **Классы:** `-mt-6 lg:-mt-10`
- **Описание:** Негативный верхний отступ для перекрытия секций

---

## 5. Карточки (Cards)

### Основная карточка
- **Классы:** `flex flex-col md:flex-row lg:flex-col gap-4 p-6 rounded-3xl lg:rounded-[24px] bg-white`
- **Описание:** Белая карточка с адаптивной компоновкой (вертикальная на мобильных, горизонтальная на планшетах, вертикальная на десктопе)

### Номер карточки (badge)
- **Классы:** `flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-[#CADEE1] text-[#1E1E1E] text-base font-medium leading-[120%]`
- **Описание:** Круглый номер карточки, размер 32x32px на мобильных, 44x44px на десктопе, светло-голубой фон

### Карточка с изображением
- **Классы:** `w-full lg:w-[70%] rounded-3xl lg:rounded-[40px] bg-[#CADEE1] overflow-hidden`
- **Описание:** Карточка для изображения, ширина 100% на мобильных, 70% на десктопе

### Сетка карточек
- **Классы:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8`
- **Описание:** Адаптивная сетка: 1 колонка → 2 колонки → 3 колонки

---

## 6. Футер (Footer)

### Основной контейнер футера
- **Классы:** `-mt-6 lg:-mt-10 pt-6 pb-8 rounded-t-[24px] lg:rounded-t-[40px] bg-[#212429]`
- **Описание:** Темный фон (#212429), скругленные верхние углы, негативный верхний отступ для перекрытия

### Внутренний контейнер футера
- **Классы:** `max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[40px] flex items-center justify-between max-[900px]:flex-col max-[900px]:justify-center max-[900px]:gap-6`
- **Описание:** Адаптивная компоновка: горизонтальная на больших экранах, вертикальная на маленьких

### Логотип в футере
- **Классы:** `max-w-[186px]`
- **Описание:** Максимальная ширина логотипа 186px

### Ссылки в футере
- **Классы:** `flex items-center gap-3`
- **Описание:** Горизонтальное расположение ссылок с отступом 12px

### Контейнер группы ссылок
- **Классы:** `flex items-center gap-4 lg:gap-14 max-[900px]:flex-col max-[900px]:justify-center max-[900px]:items-start max-[900px]:gap-6`
- **Описание:** Адаптивная группа ссылок: горизонтальная на больших экранах, вертикальная на маленьких

### Текст ссылок в футере
- **Классы:** `text-white text-base lg:text-xl font-medium leading-[120%]`
- **Описание:** Белый текст, размер 16px на мобильных, 20px на десктопе

---

## Цветовая палитра

### Основные цвета
- **Фон body:** `bg-[#ECECEA]` (светло-серый)
- **Фон секций:** `bg-[#F4F4F4]` (светло-серый)
- **Фон футера:** `bg-[#212429]` (темно-серый)
- **Фон карточек:** `bg-white` (белый)
- **Фон кнопок (светлая):** `bg-white` (белый)
- **Фон кнопок (темная):** `bg-[#1E1E1E]` (черный)
- **Фон бейджа:** `bg-[#272727]` (темно-серый)
- **Фон номеров карточек:** `bg-[#CADEE1]` (светло-голубой)
- **Фон иконок:** `bg-[#2E333C]` (темно-серый)

### Цвета текста
- **Основной текст:** `text-[#1E1E1E]` (почти черный)
- **Белый текст:** `text-white`
- **Текст с прозрачностью:** `text-[#1E1E1E] opacity-40`

---

## Типографика

### Заголовки

#### H1
- **Классы:** `text-[35px] lg:text-[56px] leading-[120%] font-normal` или `font-bold`
- **Описание:** Размер 35px на мобильных, 56px на десктопе

#### H2
- **Классы:** `text-[32px] lg:text-[48px] font-medium leading-[120%]`
- **Описание:** Размер 32px на мобильных, 48px на десктопе

#### H3
- **Классы:** `text-sm lg:text-base font-normal leading-[120%] uppercase opacity-40`
- **Описание:** Маленький заголовок с прозрачностью, uppercase

### Текст

#### Большой текст
- **Классы:** `text-xl lg:text-2xl font-medium leading-[120%]`
- **Описание:** Размер 20px на мобильных, 24px на десктопе

#### Обычный текст
- **Классы:** `text-lg lg:text-2xl font-medium leading-[120%]`
- **Описание:** Размер 18px на мобильных, 24px на десктопе

#### Мелкий текст
- **Классы:** `text-base lg:text-xl font-medium leading-[120%]`
- **Описание:** Размер 16px на мобильных, 20px на десктопе

---

## Адаптивность (Breakpoints)

### Используемые breakpoints
- **md:** 768px и выше (планшеты)
- **lg:** 1024px и выше (десктопы)
- **2xl:** 1536px и выше (большие экраны)
- **max-[900px]:** кастомный breakpoint для футера

### Паттерны адаптивности
- Мобильный-first подход
- Базовые стили для мобильных устройств
- Префиксы `md:`, `lg:`, `2xl:` для больших экранов
- Использование `max-md:`, `max-[900px]:` для мобильных стилей

---

## Переходы и анимации

### Переходы кнопок
- **Классы:** `transition-colors duration-200`
- **Описание:** Плавный переход цветов за 200ms

### Hover эффекты
- **Кнопки:** Инверсия цветов фона и текста
- **SVG пути:** Изменение fill цвета при hover через `[&_svg_path]:fill-[#1E1E1E] hover:[&_svg_path]:fill-white`

---

## Примеры использования

### Пример хедера
```html
<header class="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[40px] py-4 flex justify-between items-center">
  <a href="/">
    <img class="hidden md:block max-w-[222px] 2xl:max-w-[242px]" src="/logo.svg" alt="logo">
    <img class="block md:hidden" src="/logo-mobile.svg" alt="logo">
  </a>
  <a class="inline-flex items-center justify-center gap-2.5 h-12 lg:h-9 rounded-3xl lg:rounded-[18px] px-6 lg:px-4 text-lg lg:text-base font-medium leading-[120%] cursor-pointer transition-colors duration-200 bg-white text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white">
    Кнопка
  </a>
</header>
```

### Пример карточки
```html
<div class="flex flex-col md:flex-row lg:flex-col gap-4 p-6 rounded-3xl lg:rounded-[24px] bg-white">
  <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-[#CADEE1] text-[#1E1E1E] text-base font-medium leading-[120%]">1</div>
  <div class="text-[#1E1E1E] text-xl lg:text-2xl font-medium leading-[120%]">Текст карточки</div>
</div>
```

### Пример кнопки
```html
<a class="inline-flex items-center justify-center gap-2.5 h-[72px] lg:h-14 rounded-[36px] lg:rounded-[28px] px-12 lg:px-7 text-2xl lg:text-xl font-semibold leading-[120%] cursor-pointer transition-colors duration-200 bg-white text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white max-md:w-full">
  Зарегистрироваться
</a>
```

---

## Примечания

1. Все размеры указаны в пикселях через произвольные значения Tailwind
2. Используется адаптивный дизайн с мобильным-first подходом
3. Все hover эффекты имеют плавные переходы
4. Контейнеры имеют максимальную ширину 1440px и центрируются
5. Скругления адаптивны и увеличиваются на больших экранах
6. Отступы увеличиваются пропорционально размеру экрана
