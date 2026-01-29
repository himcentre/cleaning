<template>
  <div class="min-h-screen font-['Inter',sans-serif] bg-[#ECECEA]">
    <!-- Header -->
    <header class="bg-white">
      <div class="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[40px] py-4 flex justify-between items-center">
        <a href="https://himcentre.ru" target="_blank" class="hidden md:block">
          <img class="h-[50px]" src="/logo.svg" alt="Химэкоцентр">
        </a>
        <a href="https://himcentre.ru" target="_blank" class="block md:hidden">
          <img class="h-[50px]" src="/logo-mobile.svg" alt="Химэкоцентр">
        </a>
        <a href="tel:+73952597939" class="inline-flex items-center justify-center gap-2.5 h-12 lg:h-9 rounded-3xl lg:rounded-[18px] px-6 lg:px-4 text-lg font-semibold leading-[120%] cursor-pointer transition-colors duration-200 bg-white text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white [&_svg_path]:fill-[#1E1E1E] hover:[&_svg_path]:fill-white">
          8 (3952) 59-79-39
        </a>
      </div>
    </header>

    <!-- Hero Section -->
    <main>
      <section class="bg-gradient-to-r max-md:bg-gradient-to-b from-[var(--color-brand-1)] to-[var(--color-brand-2)]">
        <div class="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[40px]">
          <div class="flex gap-8 lg:gap-14 items-center">
            <div class="py-12 lg:py-24 w-[650px] min-w-[650px] max-lg:w-[50%] max-lg:min-w-[50%] max-md:w-full max-md:min-w-full">
              <h1 class="text-[35px] lg:text-[72px] leading-[130%] font-bold text-white mb-6">
                Снижаем расход клининговых компаний <span class="text-[var(--color-brand-1)] bg-white px-2">до&nbsp;30%</span>
              </h1>
              <p class="text-xl lg:text-3xl font-medium leading-[120%] text-white mb-8">
                Подберем моющие средства под объекты, чтобы вы <span class="font-bold">тратили меньше</span> и <span class="font-bold">зарабатывали больше</span>
              </p>
              <a href="https://t.me/HimcentreCleaningBot?start=kit" target="_blank" class="text-center inline-flex items-center justify-center gap-2.5 py-4 rounded-[36px] lg:rounded-full px-6 lg:px-7 text-base md:text-xl font-semibold leading-[120%] cursor-pointer transition-colors duration-200 bg-white text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white [&_svg_path]:fill-[#1E1E1E] hover:[&_svg_path]:fill-white max-md:w-full">
                Бесплатный набор химии для вашей компании
                <svg class="min-w-[28px] ml-2" width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.9187 6.1625L23.6937 26.0875C23.375 27.4937 22.5437 27.8438 21.3625 27.1812L14.925 22.4375L11.8187 25.425C11.475 25.7687 11.1875 26.0562 10.525 26.0562L10.9875 19.5L22.9187 8.71875C23.4375 8.25625 22.8062 8 22.1125 8.4625L7.36246 17.75L1.01246 15.7625C-0.368794 15.3313 -0.393794 14.3813 1.29996 13.7188L26.1375 4.15C27.2875 3.71875 28.2937 4.40625 27.9187 6.1625Z"/>
                </svg>
              </a>
              
            </div>
            <div class="flex justify-center max-md:hidden relative self-stretch">
              <img 
                src="/hero-vector.svg" 
                alt="Логотип компании" 
                class="w-[100%]"
              />
              <img 
                src="/speaker.png" 
                alt="Менеджер"
                class="absolute bottom-0 right-0 w-[500px] hidden xl:block pointer-events-none"
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Pain Points Section -->
      <section class="py-12 lg:py-24 bg-white overflow-hidden relative bg-[url('/shape.svg')] bg-no-repeat bg-size-[50%_50%] bg-position-[left_150%]">
        <!-- <img src="/shape.svg" class="absolute top-[100px] left-[-250px] h-[500px]"> -->
        <div class="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[40px] flex items-center gap-10 max-md:flex-col">
          <h2 class="text-[32px] lg:text-[64px] font-semibold leading-[120%] text-center text-[#1E1E1E] mb-12 w-[50%] max-md:w-full">
            Мы работаем как&nbsp;партнёр по&nbsp;снабжению
            </h2>
          
          <div class="flex flex-col max-md:grid-cols-1 gap-5 lg:gap-8 w-[50%] max-md:w-full">
            <div class="flex items-center gap-4 px-6 py-4 rounded-3xl lg:rounded-[24px] bg-cyan-50 self-start max-md:w-full">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-[var(--color-brand-2)] text-white text-base font-medium leading-[120%]">
                <i class="bi bi-droplet text-2xl max-lg:text-xl"></i>
              </div>
              <p class="text-[#1E1E1E] text-xl lg:text-2xl font-medium leading-[120%]"><span class="font-bold">Подбор средств</span> под объект и загрязнения</p>
            </div>
            <div class="flex items-center gap-4 px-6 py-4 rounded-3xl lg:rounded-[24px] bg-cyan-50 self-start max-md:w-full">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-[var(--color-brand-2)] text-white text-base font-medium leading-[120%]">
                <i class="bi bi-truck text-2xl max-lg:text-xl"></i>
              </div>
              <p class="text-[#1E1E1E] text-xl lg:text-2xl font-medium leading-[120%]"><span class="font-bold">Выезд на объект</span> по необходимости</p>
            </div>
            <div class="flex items-center gap-4 px-6 py-4 rounded-3xl lg:rounded-[24px] bg-cyan-50 self-start max-md:w-full">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-[var(--color-brand-2)] text-white text-base font-medium leading-[120%]">
                <i class="bi bi-person-lines-fill text-2xl max-lg:text-xl"></i>
              </div>
              <p class="text-[#1E1E1E] text-xl lg:text-2xl font-medium leading-[120%]"><span class="font-bold">Персональный менеджер</span> всегда на связи</p>
            </div>
            <div class="flex items-center gap-4 px-6 py-4 rounded-3xl lg:rounded-[24px] bg-cyan-50 self-start max-md:w-full">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-[var(--color-brand-2)] text-white text-base font-medium leading-[120%]">
                <i class="bi bi-box-seam text-2xl max-lg:text-xl"></i>
              </div>
              <p class="text-[#1E1E1E] text-xl lg:text-2xl font-medium leading-[120%]"><span class="font-bold">Доставка</span> на следующий день <span class="font-bold">без задержек</span></p>
            </div>
            <div class="flex items-center gap-4 px-6 py-4 rounded-3xl lg:rounded-[24px] bg-cyan-50 self-start max-md:w-full">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-[var(--color-brand-2)] text-white text-base font-medium leading-[120%]">
                <i class="bi bi-stars text-2xl max-lg:text-xl"></i>
              </div>
              <p class="text-[#1E1E1E] text-xl lg:text-2xl font-medium leading-[120%]">Знаем, как <span class="font-bold">убрать то, что другие не могут</span></p>
            </div>
          </div>

          
        </div>
      </section>

      <!-- Best Sellers Section -->
      <section class="py-12 lg:py-24 bg-[#F4F4F4] max-w-[100vw] overflow-x-hidden">
        <div class="max-w-[1440px] mx-auto">
          <div class="px-4 md:px-10 lg:px-[40px]">
            <h2 class="text-[32px] lg:text-[48px] font-medium leading-[120%] text-center text-[#1E1E1E] mb-12">
              Хиты продаж
            </h2>
          </div>
          <!-- Swiper для мобильных и планшетов, grid для десктопов -->
          <div class="xl:hidden relative px-4 md:px-10 lg:px-[40px]">
            <swiper
              :slides-per-view="1"
              :space-between="24"
              :modules="[Navigation]"
              :navigation="{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom'
              }"
              :breakpoints="{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 24
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32
                }
              }"
              class="best-sellers-swiper"
            >
              <swiper-slide v-for="product in products" :key="product.id">
                <div class="bg-white rounded-3xl lg:rounded-[24px] p-6 flex flex-col h-full">
                  <div class="w-full h-[200px] mb-4 rounded-2xl overflow-hidden bg-white flex items-center justify-center relative">
                    <img :src="product.image" :alt="product.title" class="w-full h-full object-contain">
                    <span v-if="product.badge" class="absolute top-2 right-2 bg-[var(--color-brand-1)] text-white text-xs font-semibold px-3 py-1 rounded-full">{{ product.badge }}</span>
                  </div>
                  <h3 class="text-lg lg:text-xl font-medium leading-[130%] text-[#1E1E1E] mb-2">
                    {{ product.title }}
                  </h3>
                  <p class="text-2xl lg:text-3xl font-bold leading-[120%] text-[#1E1E1E] mt-auto">
                    {{ product.price }} <span v-if="product.priceNote" class="text-base lg:text-lg font-normal">{{ product.priceNote }}</span>
                  </p>
                </div>
              </swiper-slide>
            </swiper>
            <!-- Кастомные стрелки навигации -->
            <button class="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[var(--color-brand-1)] hover:text-white transition-colors text-[#1E1E1E]">
              <i class="bi bi-chevron-left text-2xl"></i>
            </button>
            <button class="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[var(--color-brand-1)] hover:text-white transition-colors text-[#1E1E1E]">
              <i class="bi bi-chevron-right text-2xl"></i>
            </button>
          </div>
          <!-- Grid для широких экранов (xl и выше) -->
          <div class="hidden xl:grid xl:grid-cols-5 gap-8 px-4 md:px-10 lg:px-[40px]">
            <div v-for="product in products" :key="product.id" class="bg-white rounded-3xl lg:rounded-[24px] p-6 flex flex-col">
              <div class="w-full h-[200px] mb-4 rounded-2xl overflow-hidden bg-white flex items-center justify-center relative">
                <img :src="product.image" :alt="product.title" class="w-full h-full object-contain">
                <span v-if="product.badge" class="absolute top-2 right-2 bg-[var(--color-brand-1)] text-white text-xs font-semibold px-3 py-1 rounded-full">{{ product.badge }}</span>
              </div>
              <h3 class="text-lg lg:text-xl font-medium leading-[130%] text-[#1E1E1E] mb-2">
                {{ product.title }}
              </h3>
              <p class="text-2xl lg:text-3xl font-bold leading-[120%] text-[#1E1E1E] mt-auto">
                {{ product.price }} <span v-if="product.priceNote" class="text-base lg:text-lg font-normal">{{ product.priceNote }}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-12 lg:py-24 bg-[#F4F4F4] bg-[url('/shape.svg')] bg-no-repeat bg-size-[50%_50%] bg-position-[150%_100%]">
        <div class="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[40px] flex flex-col items-center">
          <h2 class="text-[32px] lg:text-[48px] font-medium leading-[120%] text-center text-[#1E1E1E] mb-12">
            Почему клининг выбирает нас?
          </h2>
          <div class="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 lg:gap-8 mb-24 max-md:mb-12 w-full">
            <div class="p-6 rounded-3xl lg:rounded-[24px] bg-white">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-[var(--color-brand-1)] text-white text-base font-medium leading-[120%]">
                <i class="bi bi-percent text-2xl max-lg:text-xl"></i>
              </div>
              <p class="text-[#1E1E1E] text-3xl lg:text-4xl font-bold leading-[120%] mb-2 mt-4">до 30%</p>
              <p class="text-[#1E1E1E] text-lg lg:text-xl font-medium leading-[130%]">экономия на расходах</p>
            </div>
            <div class="p-6 rounded-3xl lg:rounded-[24px] bg-white">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-[var(--color-brand-1)] text-white text-base font-medium leading-[120%]">
                <i class="bi bi-star-fill text-2xl max-lg:text-xl"></i>
              </div>
              <p class="text-[#1E1E1E] text-3xl lg:text-4xl font-bold leading-[120%] mt-4">98%</p>
              <p class="text-[#1E1E1E] text-lg lg:text-xl font-medium leading-[130%]">компаний отмечают улучшение качества уборки</p>
            </div>
            <!-- <div class="p-6 rounded-3xl lg:rounded-[24px] bg-white">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-[var(--color-brand-1)] text-white text-base font-medium leading-[120%]">
                <i class="bi bi-person-lines-fill text-2xl max-lg:text-xl"></i>
              </div>
              <p class="text-[#1E1E1E] text-3xl lg:text-4xl font-bold leading-[120%] mt-4">24/7</p>
              <p class="text-[#1E1E1E] text-lg lg:text-xl font-medium leading-[130%]">оперативная поддержка и консультации по продуктам</p>
            </div> -->
            <div class="p-6 rounded-3xl lg:rounded-[24px] bg-white">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-[var(--color-brand-1)] text-white text-base font-medium leading-[120%]">
                <i class="bi bi-shop text-2xl max-lg:text-xl"></i>
              </div>
              <p class="text-[#1E1E1E] text-lg lg:text-xl font-medium leading-[130%] mt-4"><span class="font-black">Склад и розничный магазин</span> в Иркутске</p>
            </div>
            <div class="p-6 rounded-3xl lg:rounded-[24px] bg-white">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-[var(--color-brand-1)] text-white text-base font-medium leading-[120%]">
                <i class="bi bi-calendar-check text-2xl max-lg:text-xl"></i>
              </div>
              <p class="text-[#1E1E1E] text-lg lg:text-xl font-medium leading-[130%] mt-4">Индивидуальная <span class="font-black">отсрочка платежей</span></p>
            </div>
            <div class="p-6 rounded-3xl lg:rounded-[24px] bg-white">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-[var(--color-brand-1)] text-white text-base font-medium leading-[120%]">
                <i class="bi bi-box-seam text-2xl max-lg:text-xl"></i>
              </div>
              <p class="text-[#1E1E1E] text-lg lg:text-xl font-medium leading-[130%] mt-4">Оборудование под туалетные комнаты <span class="font-black">всегда в наличии</span></p>
            </div>
          </div>

          <div class="flex flex-wrap gap-4 justify-center">
            <a href="https://t.me/HimcentreCleaningBot?start=consultation" target="_blank" class="inline-flex items-center justify-center gap-2.5 h-[60px] lg:h-14 rounded-[36px] lg:rounded-[28px] px-10 lg:px-7 text-base md:text-xl font-semibold leading-[120%] cursor-pointer transition-colors duration-200 bg-[#1E1E1E] text-white hover:bg-white hover:text-[#1E1E1E] [&_svg_path]:fill-white hover:[&_svg_path]:fill-[#1E1E1E] max-lg:w-full text-center">
              Получить консультацию
              <svg class="min-w-[28px] ml-2" width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.9187 6.1625L23.6937 26.0875C23.375 27.4937 22.5437 27.8438 21.3625 27.1812L14.925 22.4375L11.8187 25.425C11.475 25.7687 11.1875 26.0562 10.525 26.0562L10.9875 19.5L22.9187 8.71875C23.4375 8.25625 22.8062 8 22.1125 8.4625L7.36246 17.75L1.01246 15.7625C-0.368794 15.3313 -0.393794 14.3813 1.29996 13.7188L26.1375 4.15C27.2875 3.71875 28.2937 4.40625 27.9187 6.1625Z"/>
              </svg>
            </a>
            <a href="https://t.me/HimcentreCleaningBot?start=kit" target="_blank" class="inline-flex items-center justify-center gap-2.5 h-[60px] lg:h-14 rounded-[36px] lg:rounded-[28px] px-6 lg:px-7 text-base md:text-xl font-semibold leading-[120%] cursor-pointer transition-colors duration-200 bg-gradient-to-r from-[var(--color-brand-1)] to-[var(--color-brand-2)] text-white hover:from-[var(--color-brand-2)] hover:to-[var(--color-brand-1)] transition-colors max-lg:w-full [&_svg_path]:fill-white text-center">
              Бесплатный набор химии для вашей компании
              <svg class="min-w-[28px] ml-2" width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.9187 6.1625L23.6937 26.0875C23.375 27.4937 22.5437 27.8438 21.3625 27.1812L14.925 22.4375L11.8187 25.425C11.475 25.7687 11.1875 26.0562 10.525 26.0562L10.9875 19.5L22.9187 8.71875C23.4375 8.25625 22.8062 8 22.1125 8.4625L7.36246 17.75L1.01246 15.7625C-0.368794 15.3313 -0.393794 14.3813 1.29996 13.7188L26.1375 4.15C27.2875 3.71875 28.2937 4.40625 27.9187 6.1625Z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <!-- Solution / Partners Section -->
      <section class="py-12 lg:py-24 bg-white">
        <div class="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[40px] flex gap-10 max-md:flex-col">
          <div class="w-[50%] max-md:w-full">
            <h2 class="text-[32px] lg:text-[48px] font-bold leading-[120%] text-[#1E1E1E] mb-8">
              Официальный дистрибьютор сертифицированных производителей
            </h2>
            <p class="text-xl lg:text-2xl font-medium leading-[140%] text-[#1E1E1E] max-w-4xl mb-10">
              Мы сотрудничаем с ведущими заводами России <span class="max-md:hidden inline">по производству профессиональной моющей химии</span>
            </p>
          </div>
          <div class="flex flex-col gap-5 lg:gap-6 w-[50%] max-md:w-full">
            <div class="flex gap-4 p-6 rounded-3xl lg:rounded-[24px] bg-[#F4F4F4] items-center">
              <img src="/marker.svg" class="w-10 h-10">
              <p class="text-[#1E1E1E] text-lg lg:text-xl font-medium leading-[140%]">Эксклюзивный представитель <span class="font-bold">PROSEPT</span> в регионе</p>
            </div>
            <div class="flex gap-4 p-6 rounded-3xl lg:rounded-[24px] bg-[#F4F4F4] items-center">
              <img src="/marker.svg" class="w-10 h-10">
              <p class="text-[#1E1E1E] text-lg lg:text-xl font-medium leading-[140%]">Официальный дистрибьютор <span class="font-bold">VORTEX</span></p>
            </div>
            <div class="flex gap-4 p-6 rounded-3xl lg:rounded-[24px] bg-[#F4F4F4] items-center">
              <img src="/marker.svg" class="w-10 h-10">
              <p class="text-[#1E1E1E] text-lg lg:text-xl font-medium leading-[140%]">Официальный дистрибьютор <span class="font-bold">PROTISSUE</span></p>
            </div>
          </div>

          <!-- <div class="bg-white p-6 rounded-3xl lg:rounded-[24px] mb-10 w-full max-w-4xl">
            <p class="font-medium text-[#1E1E1E] text-xl lg:text-2xl leading-[140%] mb-3">
              Наличие сертификатов (СГР), документации и инструкций
            </p>
            <p class="text-[#4B4B4B] text-base lg:text-lg leading-[150%]">
              Для всей продукции предоставляем полный пакет документов: сертификаты соответствия, санитарно-гигиенические заключения, инструкции по применению и схемы разведения.
            </p>
          </div> -->

          
        </div>
      </section>

      <!-- Clients Section -->
      <section class="py-12 lg:py-24 bg-[#F4F4F4]">
        <div class="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[40px] flex flex-col items-center">
          <h2 class="text-[32px] lg:text-[48px] font-medium leading-[120%] text-center text-[#1E1E1E] mb-12">
            Среди наших клиентов
          </h2>

          <div class="grid grid-cols-[repeat(6,1fr)] max-md:grid-cols-[repeat(3,1fr)] gap-8 max-md:gap-4 mb-24 max-md:mb-12">
            <div class="rounded-lg overflow-hidden max-w-[100px]">
              <img src="/logo-ink.png" alt="ИНК" class="w-full h-full object-contain">
            </div>
            <div class="rounded-lg overflow-hidden max-w-[100px]">
              <img src="/logo-airport.png" alt="Аэропорт Иркутск" class="w-full h-full object-contain">
            </div>
            <div class="rounded-lg overflow-hidden max-w-[100px]">
              <img src="/logo-iraero.png" alt="ИрАэро" class="w-full h-full object-contain">
            </div>
            <div class="rounded-lg overflow-hidden max-w-[100px]">
              <img src="/logo-irkutskenergo.png" alt="Иркутскэнерго" class="w-full h-full object-contain">
            </div>
            <div class="rounded-lg overflow-hidden max-w-[100px]">
              <img src="/logo-igu.jpg" alt="ИрНИТУ" class="w-full h-full object-contain">
            </div>
            <div class="rounded-lg overflow-hidden max-w-[100px]">
              <img src="/logo-alfa.png" alt="Альфа-Банк" class="w-full h-full object-contain">
            </div>
          </div>

          <div class="flex flex-wrap gap-4 justify-center">
            <a href="https://t.me/HimcentreCleaningBot?start=consultation" target="_blank" class="inline-flex items-center justify-center gap-2.5 h-[60px] lg:h-14 rounded-[36px] lg:rounded-[28px] px-10 lg:px-7 text-base md:text-xl font-semibold leading-[120%] cursor-pointer transition-colors duration-200 bg-[#1E1E1E] text-white hover:bg-white hover:text-[#1E1E1E] [&_svg_path]:fill-white hover:[&_svg_path]:fill-[#1E1E1E] max-lg:w-full text-center">
              Получить консультацию
              <svg class="min-w-[28px] ml-2" width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.9187 6.1625L23.6937 26.0875C23.375 27.4937 22.5437 27.8438 21.3625 27.1812L14.925 22.4375L11.8187 25.425C11.475 25.7687 11.1875 26.0562 10.525 26.0562L10.9875 19.5L22.9187 8.71875C23.4375 8.25625 22.8062 8 22.1125 8.4625L7.36246 17.75L1.01246 15.7625C-0.368794 15.3313 -0.393794 14.3813 1.29996 13.7188L26.1375 4.15C27.2875 3.71875 28.2937 4.40625 27.9187 6.1625Z"/>
              </svg>
            </a>
            <a href="https://t.me/HimcentreCleaningBot?start=kit" target="_blank" class="inline-flex items-center justify-center gap-2.5 h-[60px] lg:h-14 rounded-[36px] lg:rounded-[28px] px-6 lg:px-7 text-base md:text-xl font-semibold leading-[120%] cursor-pointer transition-colors duration-200 bg-gradient-to-r from-[var(--color-brand-1)] to-[var(--color-brand-2)] text-white hover:from-[var(--color-brand-2)] hover:to-[var(--color-brand-1)] transition-colors max-lg:w-full [&_svg_path]:fill-white text-center">
              Бесплатный набор химии для вашей компании
              <svg class="min-w-[28px] ml-2" width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.9187 6.1625L23.6937 26.0875C23.375 27.4937 22.5437 27.8438 21.3625 27.1812L14.925 22.4375L11.8187 25.425C11.475 25.7687 11.1875 26.0562 10.525 26.0562L10.9875 19.5L22.9187 8.71875C23.4375 8.25625 22.8062 8 22.1125 8.4625L7.36246 17.75L1.01246 15.7625C-0.368794 15.3313 -0.393794 14.3813 1.29996 13.7188L26.1375 4.15C27.2875 3.71875 28.2937 4.40625 27.9187 6.1625Z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="-mt-6 lg:-mt-10 pt-6 pb-8 rounded-t-[24px] lg:rounded-t-[40px] bg-[#212429]">
      <div class="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[40px] flex items-center justify-between max-[900px]:flex-col max-[900px]:justify-center max-[900px]:gap-6">
        <a href="https://himcentre.ru" target="_blank" class="text-white text-base lg:text-xl font-medium leading-[120%] max-w-[186px]">
          <img src="/logo-white.svg" alt="Химэкоцентр">
        </a>
        <div class="flex items-center gap-4 lg:gap-14 max-[900px]:flex-col max-[900px]:justify-center max-[900px]:items-start max-[900px]:gap-6">
          <a href="tel:+73952597939" class="text-white text-base lg:text-xl font-medium leading-[120%] hover:opacity-80 transition-opacity flex items-center gap-4">
            <div class="rounded-full bg-[#2e333c] p-3">
              <img src="/phone-icon.svg" alt="Телефон">
            </div>
            8 (3952) 59-79-39
          </a>
        </div>
      </div>
    </footer>

   
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const selectedCertificate = ref(null)

const openCertificate = (certPath) => {
  selectedCertificate.value = certPath
  document.body.style.overflow = 'hidden'
}

const closeCertificate = () => {
  selectedCertificate.value = null
  document.body.style.overflow = ''
}

const products = [
  {
    id: 1,
    title: 'Листовые полотенца V-укладки PROTissue C192',
    price: '72,12 ₽',
    priceNote: 'за пачку',
    image: '/tissues.png',
    badge: null
  },
  {
    id: 2,
    title: 'Бумага туалетная СЕРАЯ 200м однослойная',
    price: '59 ₽',
    priceNote: null,
    image: '/toilet-paper.jpg',
    badge: null
  },
  {
    id: 3,
    title: 'MP Prof+ PROSEPT 5л средство усиленного действия для мытья полов',
    price: '1 359 ₽',
    priceNote: null,
    image: '/mp-prof.png',
    badge: null
  },
  {
    id: 4,
    title: 'МОП 40см шубка 100% микрофибра МЕЛАНЖ',
    price: '239 ₽',
    priceNote: null,
    image: '/mop.jpg',
    badge: 'новинка'
  },
  {
    id: 5,
    title: 'BT Bath DEZ+ PROSEPT 5л ср-во для уборки с активным хлором',
    price: '1 039 ₽',
    priceNote: null,
    image: '/bt-bath.png',
    badge: null
  }
]
</script>

<style>
  :root {
    --color-brand-1: #03A367;
    --color-brand-2: #009AB2;
  }

  .best-sellers-swiper {
    padding-bottom: 20px;
    overflow: visible;
  }

  .best-sellers-swiper .swiper-wrapper {
    padding-left: 0;
    padding-right: 0;
  }

  .best-sellers-swiper .swiper-slide {
    height: auto;
  }

  .swiper-button-prev-custom,
  .swiper-button-next-custom {
    display: flex !important;
  }

  .swiper-button-prev-custom.swiper-button-disabled,
  .swiper-button-next-custom.swiper-button-disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
</style>