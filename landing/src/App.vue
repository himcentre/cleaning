<template>
  <div class="min-h-screen font-['Inter',sans-serif] bg-[#ECECEA]">
    <!-- Header -->
    <header class="bg-white">
      <div class="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[40px] py-4 flex justify-between items-center">
        <img class="h-[50px] hidden md:block" src="/logo.svg" alt="Химэкоцентр">
        <img class="h-[50px] block md:hidden" src="/logo-mobile.svg" alt="Химэкоцентр">
        <a href="tel:+73952951966" class="inline-flex items-center justify-center gap-2.5 h-12 lg:h-9 rounded-3xl lg:rounded-[18px] px-6 lg:px-4 text-lg font-semibold leading-[120%] cursor-pointer transition-colors duration-200 bg-white text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white [&_svg_path]:fill-[#1E1E1E] hover:[&_svg_path]:fill-white">
          8 (3952) 951-966
        </a>
      </div>
    </header>

    <!-- Hero Section -->
    <main>
      <section class="py-12 lg:py-24 bg-gradient-to-r max-md:bg-gradient-to-b from-blue-600 to-blue-300">
        <div class="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[40px]">
          <div class="grid md:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div>
              <h1 class="text-[35px] lg:text-[56px] leading-[130%] font-bold text-white mb-6">
                Подготовка кухни к проверкам Роспотребнадзора <span class="text-blue-500 bg-white">без штрафов и остановки работы</span>
              </h1>
              <p class="text-xl lg:text-2xl font-medium leading-[120%] text-white mb-8">
                Экспертный аудит санитарных процессов и ХАССП от сертифицированного специалиста
              </p>
              <a href="https://t.me/HimcentreHaccpAuditBot?start=checklist" target="_blank" class="text-center inline-flex items-center justify-center gap-2.5 py-4 rounded-[36px] lg:rounded-full px-6 lg:px-7 text-2xl lg:text-xl font-semibold leading-[120%] cursor-pointer transition-colors duration-200 bg-white text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white [&_svg_path]:fill-[#1E1E1E] hover:[&_svg_path]:fill-white max-md:w-full">
                Получить бесплатный чек-лист проверки кухни
                <svg class="hidden lg:block min-w-[28px] ml-2" width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.9187 6.1625L23.6937 26.0875C23.375 27.4937 22.5437 27.8438 21.3625 27.1812L14.925 22.4375L11.8187 25.425C11.475 25.7687 11.1875 26.0562 10.525 26.0562L10.9875 19.5L22.9187 8.71875C23.4375 8.25625 22.8062 8 22.1125 8.4625L7.36246 17.75L1.01246 15.7625C-0.368794 15.3313 -0.393794 14.3813 1.29996 13.7188L26.1375 4.15C27.2875 3.71875 28.2937 4.40625 27.9187 6.1625Z"/>
                </svg>
              </a>
              <!-- <div class="block xl:hidden bg-blue-500 rounded-[64px] p-8">
                <div class="text-white text-2xl font-medium mb-4 text-center">Бесплатный чек-лист проверки кухни</div>
                <button class="inline-flex items-center justify-center gap-2.5 h-[72px] lg:h-14 rounded-[36px] lg:rounded-[28px] px-12 lg:px-7 text-2xl lg:text-xl font-semibold leading-[120%] cursor-pointer transition-colors duration-200 bg-white text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white [&_svg_path]:fill-[#1E1E1E] hover:[&_svg_path]:fill-white w-full">
                  Получить
                  <svg class="min-w-[28px] ml-2" width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.9187 6.1625L23.6937 26.0875C23.375 27.4937 22.5437 27.8438 21.3625 27.1812L14.925 22.4375L11.8187 25.425C11.475 25.7687 11.1875 26.0562 10.525 26.0562L10.9875 19.5L22.9187 8.71875C23.4375 8.25625 22.8062 8 22.1125 8.4625L7.36246 17.75L1.01246 15.7625C-0.368794 15.3313 -0.393794 14.3813 1.29996 13.7188L26.1375 4.15C27.2875 3.71875 28.2937 4.40625 27.9187 6.1625Z"/>
                  </svg>
                </button>
              </div> -->
              
            </div>
            <div class="flex justify-center">
              <img 
                src="/ekaterina-1.webp" 
                alt="Екатерина Куницына" 
                class="w-full lg:w-[70%] rounded-3xl lg:rounded-[40px] bg-[#CADEE1] overflow-hidden object-cover max-md:hidden"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Pain Points Section -->
      <section class="py-12 lg:py-24 bg-white">
        <div class="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[40px] flex flex-col items-center">
          <h2 class="text-[32px] lg:text-[48px] font-medium leading-[120%] text-center text-[#1E1E1E] mb-12">
            С какими проблемами к нам приходят
          </h2>
          <div class="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 lg:gap-8">
            <div class="flex flex-col md:flex-row lg:flex-col gap-4 p-6 rounded-3xl lg:rounded-[24px] bg-blue-50">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-red-500 text-white text-base font-medium leading-[120%]">
                <i class="bi bi-file-earmark-text text-2xl max-lg:text-xl"></i>
              </div>
              <p class="text-[#1E1E1E] text-xl lg:text-2xl font-medium leading-[120%]">Отсутствуют инструкции и регламенты</p>
            </div>
            <div class="flex flex-col md:flex-row lg:flex-col gap-4 p-6 rounded-3xl lg:rounded-[24px] bg-blue-50">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-red-500 text-white text-base font-medium leading-[120%]">
                <i class="bi bi-exclamation-triangle-fill text-2xl max-lg:text-xl"></i>
              </div>
              <p class="text-[#1E1E1E] text-xl lg:text-2xl font-medium leading-[120%]">Штрафы, предписания и замечания после проверок</p>
            </div>
            <div class="flex flex-col md:flex-row lg:flex-col gap-4 p-6 rounded-3xl lg:rounded-[24px] bg-blue-50">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-red-500 text-white text-base font-medium leading-[120%]">
                <i class="bi bi-building text-2xl max-lg:text-xl"></i>
              </div>
              <p class="text-[#1E1E1E] text-xl lg:text-2xl font-medium leading-[120%]">Подготовка к открытию нового ресторана / кухни / производства</p>
            </div>
            <div class="flex flex-col md:flex-row lg:flex-col gap-4 p-6 rounded-3xl lg:rounded-[24px] bg-blue-50 col-span-3 max-lg:col-span-1">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-red-500 text-white text-base font-medium leading-[120%]">
                <i class="bi bi-shield-exclamation text-2xl max-lg:text-xl"></i>
              </div>
              <div class="text-[#1E1E1E] text-xl lg:text-2xl font-medium leading-[120%] flex gap-4 max-lg:flex-col">
                <div>Страх внеплановых проверок и неуверенность в готовности кухни</div>
                <div class="text-sm lg:text-base font-medium leading-[120%] text-gray-500 max-lg:mt-8">* c 2025 года перестал действовать мораторий на внеплановые проверки согласно Постановлению Правительства РФ от 10.03.2022 № 336</div>
              </div>
            </div>
          </div>

         
          <div class="inline-block text-center text-xl lg:text-2xl font-medium leading-[120%] bg-red-50 text-red-500 mt-12 px-12 py-6 rounded-[12px]">
            <i class="bi bi-pause-circle-fill text-2xl lg:text-2xl"></i>
            Одна проверка — и бизнес может остановиться на недели.
          </div>
        </div>
      </section>

      <!-- Solution Section -->
      <section class="py-12 lg:py-24 bg-[#F4F4F4]">
        <div class="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[40px] flex flex-col items-center">
          <h2 class="text-[32px] lg:text-[48px] font-medium leading-[120%] text-center text-[#1E1E1E] mb-12">
            Мы поможем разобраться до того, как возникнут проблемы
          </h2>
          <!-- <p class="text-xl lg:text-2xl font-medium leading-[120%] text-center text-[#1E1E1E] mb-12">
            Вы получите понятный аудит кухни и процессов:
          </p> -->
          <div class="grid md:grid-cols-2 gap-5 lg:gap-8">
            <div class="flex flex-col md:flex-row lg:flex-col gap-4 p-6 rounded-3xl lg:rounded-[24px] bg-white">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-blue-100 text-[#1E1E1E] text-base font-medium leading-[120%]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-[#1E1E1E] text-xl lg:text-2xl font-medium leading-[150%]">Внешний <span class="bg-blue-500 text-white px-1">выездной аудит</span> кухни и процессов</p>
            </div>
            <div class="flex flex-col md:flex-row lg:flex-col gap-4 p-6 rounded-3xl lg:rounded-[24px] bg-white">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-blue-100 text-[#1E1E1E] text-base font-medium leading-[150%]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-[#1E1E1E] text-xl lg:text-2xl font-medium leading-[150%]">Анализ <span class="bg-blue-500 text-white px-1">рисков и критических точек</span> по ХАССП</p>
            </div>
            <div class="flex flex-col md:flex-row lg:flex-col gap-4 p-6 rounded-3xl lg:rounded-[24px] bg-white">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-blue-100 text-[#1E1E1E] text-base font-medium leading-[150%]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-[#1E1E1E] text-xl lg:text-2xl font-medium leading-[150%]"><span class="bg-blue-500 text-white px-1">Документирование</span> всех стадий и процедур</p>
            </div>
            <div class="flex flex-col md:flex-row lg:flex-col gap-4 p-6 rounded-3xl lg:rounded-[24px] bg-white">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-blue-100 text-[#1E1E1E] text-base font-medium leading-[150%]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-[#1E1E1E] text-xl lg:text-2xl font-medium leading-[150%]">Разработка <span class="bg-blue-500 text-white px-1">системы мониторинга</span> и ответственности</p>
            </div>
            <div class="flex flex-col md:flex-row lg:flex-col gap-4 p-6 rounded-3xl lg:rounded-[24px] bg-white">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-blue-100 text-[#1E1E1E] text-base font-medium leading-[150%]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-[#1E1E1E] text-xl lg:text-2xl font-medium leading-[150%]">Разработка <span class="bg-blue-500 text-white px-1">корректирующих действий</span></p>
            </div>
            <div class="flex flex-col md:flex-row lg:flex-col gap-4 p-6 rounded-3xl lg:rounded-[24px] bg-white">
              <div class="flex w-8 h-8 lg:w-11 lg:h-11 justify-center items-center aspect-square rounded-[40px] bg-blue-100 text-[#1E1E1E] text-base font-medium leading-[150%]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-[#1E1E1E] text-xl lg:text-2xl font-medium leading-[150%]"><span class="bg-blue-500 text-white px-1">Обучение персонала</span> по должностным инструкциям: кто за что отвечает</p>
            </div>
          </div>
          <a href="https://t.me/HimcentreHaccpAuditBot?start=audit" target="_blank" class="inline-flex items-center justify-center gap-2.5 h-[72px] lg:h-14 rounded-[36px] lg:rounded-[28px] px-12 lg:px-7 text-2xl lg:text-xl font-semibold leading-[120%] cursor-pointer transition-colors duration-200 bg-[#1E1E1E] text-white hover:bg-white hover:text-[#1E1E1E] [&_svg_path]:fill-white hover:[&_svg_path]:fill-[#1E1E1E] max-md:w-full mt-12">
            Заказать аудит
            <svg class="min-w-[28px] ml-2" width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.9187 6.1625L23.6937 26.0875C23.375 27.4937 22.5437 27.8438 21.3625 27.1812L14.925 22.4375L11.8187 25.425C11.475 25.7687 11.1875 26.0562 10.525 26.0562L10.9875 19.5L22.9187 8.71875C23.4375 8.25625 22.8062 8 22.1125 8.4625L7.36246 17.75L1.01246 15.7625C-0.368794 15.3313 -0.393794 14.3813 1.29996 13.7188L26.1375 4.15C27.2875 3.71875 28.2937 4.40625 27.9187 6.1625Z"/>
            </svg>
          </a>
        </div>
      </section>

      <!-- Expert Section -->
      <section class="py-12 lg:py-24 bg-white">
        <div class="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[40px]">
          <h2 class="text-[32px] lg:text-[48px] font-medium leading-[120%] text-center text-[#1E1E1E] mb-12">
            Аудит проводит сертифицированный специалист по России и странам СНГ
          </h2>
          <div class="grid md:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div class="flex justify-start self-start">
              <img 
                src="/ekaterina-2.webp" 
                alt="Екатерина Куницына" 
                class="w-full lg:w-[70%] rounded-3xl lg:rounded-[40px] bg-[#CADEE1] overflow-hidden object-cover"
              />
            </div>
            <div>
              <h3 class="text-[35px] lg:text-[56px] leading-[120%] font-bold text-[#1E1E1E] mb-4">Екатерина Куницына</h3>
              <ul class="space-y-4 mb-8 text-[#1E1E1E] text-xl lg:text-2xl font-medium leading-[120%]">
                <li class="flex items-center gap-4">
                  <img src="/marker.svg" alt="Маркер">
                  Аудитор внешних проверок
                </li>
                <li class="flex items-center gap-3">
                  <img src="/marker.svg" alt="Маркер">
                  Специалист по внедрению ХАССП
                </li>
                <li class="flex items-center gap-3">
                  <img src="/marker.svg" alt="Маркер">
                  Эксперт по профессиональным средствам для уборки предприятий
                </li>
              </ul>
              <div class="bg-blue-50 p-6 rounded-3xl lg:rounded-[24px] mb-8">
                <p class="font-medium text-[#1E1E1E] text-xl lg:text-2xl leading-[120%] mb-3">Формула доверия:</p>
                <ul class="space-y-2 text-[#1E1E1E] text-lg lg:text-2xl font-medium leading-[120%]">
                  <li class="flex items-center gap-2">
                    <span class="text-[#1E1E1E]">•</span>
                    практический опыт
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-[#1E1E1E]">•</span>
                    понимание реальных проверок
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-[#1E1E1E]">•</span>
                    знание санитарных норм
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-[#1E1E1E]">•</span>
                    опыт работы с предприятиями региона
                  </li>
                </ul>
              </div>
              <div class="mb-8">
                <p class="text-[#1E1E1E] mb-4 font-medium text-xl lg:text-2xl leading-[120%]">Сертификаты:</p>
                <div class="grid grid-cols-2 gap-4 lg:gap-8">
                  <div class="bg-white rounded-3xl lg:rounded-[24px] p-4 cursor-pointer shadow-md hover:shadow-xl transition-shadow" @click="openCertificate('/cert-1.jpg')">
                    <div class="aspect-[3/4] bg-[#F4F4F4] rounded-3xl lg:rounded-[24px] flex items-center justify-center text-[#1E1E1E]">
                      <img src="/cert-1.jpg" alt="Сертификат 1">
                    </div>
                  </div>
                  <div class="bg-white rounded-3xl lg:rounded-[24px] p-4 cursor-pointer shadow-md hover:shadow-xl transition-shadow" @click="openCertificate('/cert-2.jpg')">
                    <div class="aspect-[3/4] bg-[#F4F4F4] rounded-3xl lg:rounded-[24px] flex items-center justify-center text-[#1E1E1E]">
                      <img src="/cert-2.jpg" alt="Сертификат 2">
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-4">
                <a href="https://t.me/HimcentreHaccpAuditBot?start=audit" target="_blank" class="inline-flex items-center justify-center gap-2.5 h-[72px] lg:h-14 rounded-[36px] lg:rounded-[28px] px-12 lg:px-7 text-2xl lg:text-xl font-semibold leading-[120%] cursor-pointer transition-colors duration-200 bg-[#1E1E1E] text-white hover:bg-white hover:text-[#1E1E1E] [&_svg_path]:fill-white hover:[&_svg_path]:fill-[#1E1E1E] max-md:w-full">
                  Заказать аудит
                  <svg class="min-w-[28px] ml-2" width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.9187 6.1625L23.6937 26.0875C23.375 27.4937 22.5437 27.8438 21.3625 27.1812L14.925 22.4375L11.8187 25.425C11.475 25.7687 11.1875 26.0562 10.525 26.0562L10.9875 19.5L22.9187 8.71875C23.4375 8.25625 22.8062 8 22.1125 8.4625L7.36246 17.75L1.01246 15.7625C-0.368794 15.3313 -0.393794 14.3813 1.29996 13.7188L26.1375 4.15C27.2875 3.71875 28.2937 4.40625 27.9187 6.1625Z"/>
                  </svg>
                </a>
                <a href="https://t.me/HimcentreHaccpAuditBot?start=checklist" target="_blank" class="text-center inline-flex items-center justify-center gap-2.5 py-4 rounded-[36px] lg:rounded-full px-6 lg:px-7 text-2xl lg:text-xl font-semibold leading-[120%] cursor-pointer transition-colors duration-200 bg-white text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white [&_svg_path]:fill-[#1E1E1E] hover:[&_svg_path]:fill-white max-md:w-full border-2 border-[#1E1E1E]">
                  Получить бесплатный чек-лист проверки кухни
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="-mt-6 lg:-mt-10 pt-6 pb-8 rounded-t-[24px] lg:rounded-t-[40px] bg-[#212429]">
      <div class="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[40px] flex items-center justify-between max-[900px]:flex-col max-[900px]:justify-center max-[900px]:gap-6">
        <div class="text-white text-base lg:text-xl font-medium leading-[120%] max-w-[186px]">
          <img src="/logo-white.svg" alt="Химэкоцентр">
        </div>
        <div class="flex items-center gap-4 lg:gap-14 max-[900px]:flex-col max-[900px]:justify-center max-[900px]:items-start max-[900px]:gap-6">
          <a href="tel:+73952951966" class="text-white text-base lg:text-xl font-medium leading-[120%] hover:opacity-80 transition-opacity flex items-center gap-4">
            <div class="rounded-full bg-[#2e333c] p-3">
              <img src="/phone-icon.svg" alt="Телефон">
            </div>
            8 (3952) 951-966
          </a>
        </div>
      </div>
    </footer>

    <!-- Certificate Modal -->
    <div 
      v-if="selectedCertificate" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity"
      @click="closeCertificate"
      @keydown.esc="closeCertificate"
    >
      <div class="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
        <button 
          @click.stop="closeCertificate"
          class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-white rounded-full p-2"
          aria-label="Закрыть"
        >
          <svg class="w-8 h-8" fill="none" stroke="black" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img 
          :src="selectedCertificate" 
          alt="Сертификат" 
          class="max-w-full max-h-[90vh] object-contain rounded-lg"
          @click.stop
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedCertificate = ref(null)

const openCertificate = (certPath) => {
  selectedCertificate.value = certPath
  document.body.style.overflow = 'hidden'
}

const closeCertificate = () => {
  selectedCertificate.value = null
  document.body.style.overflow = ''
}
</script>
