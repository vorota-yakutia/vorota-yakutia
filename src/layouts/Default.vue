<template>
  <div data-theme="lofi">
    <header class="sticky top-0 bg-base-100 z-40 shadow-md px-4 py-2">
      <div class="container mx-auto flex justify-center md:justify-start items-center">
        <NuxtLink to="/" @click.native="scrollToTop" class="btn btn-ghost p-0 flex items-center cursor-pointer">
          <img src="~/assets/images/logo.png" alt="Ворота в Якутске - Алютех" class="h-10 w-auto mr-2">
        </NuxtLink>
      </div>
    </header>

    <slot />

    <!-- Floating contact buttons -->
    <div class="fixed bottom-16 right-8 flex flex-col space-y-4 z-50">
      <a href="tel:+79142706573" class="btn btn-circle btn-primary btn-lg tooltip tooltip-left flex items-center justify-center" data-tip="Позвонить">
        <i class="las la-phone text-2xl"></i>
      </a>
      <a href="https://wa.me/79142706573" class="btn btn-circle btn-success btn-lg tooltip tooltip-left flex items-center justify-center" data-tip="WhatsApp">
        <i class="lab la-whatsapp text-2xl"></i>
      </a>
    </div>

    <footer class="bg-base-200 text-base-content">
      <div class="container mx-auto px-4 py-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="mb-8 md:mb-0">
            <img src="~/assets/images/logo.png" alt="Алютех - официальный дилер в Якутске" class="h-12 w-auto mb-4">
            <p class="max-w-xs">Торгово-монтажная компания - официальный дилер Алютех в Якутске и Якутии. Гарантия 2 года на все виды работ.</p>
          </div>
          <div>
            <h3 class="footer-title mb-4">ПРОДУКЦИЯ</h3>
            <ul class="space-y-2">
              <li><a class="link link-hover">Автоматические ворота</a></li>
              <li><a class="link link-hover">Секционные ворота</a></li>
              <li><a class="link link-hover">Откатные ворота</a></li>
              <li><a class="link link-hover">Роллетные системы</a></li>
              <li><a class="link link-hover">Шлагбаумы</a></li>
              <li><a class="link link-hover">Перегородки</a></li>
            </ul>
          </div>
          <div>
            <h3 class="footer-title mb-4">УСЛУГИ</h3>
            <ul class="space-y-2">
              <li><a class="link link-hover">Бесплатный замер</a></li>
              <li><a class="link link-hover">Монтаж</a></li>
              <li><a class="link link-hover">Сервисное обслуживание</a></li>
              <li><a class="link link-hover">Ремонт</a></li>
              <li><a class="link link-hover">Автоматизация ворот</a></li>
            </ul>
          </div>
          <div>
            <h3 class="footer-title mb-4">КОНТАКТЫ</h3>
            <ul class="space-y-2">
              <li>
                <a href="tel:+79142706573" class="link link-hover flex items-center">
                  <i class="las la-phone mr-2"></i>+7 914 270-65-73
                </a>
              </li>
              <li>
                <a href="https://wa.me/79142706573" class="link link-hover flex items-center">
                  <i class="lab la-whatsapp mr-2"></i>WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:paeg1@yandex.ru" class="link link-hover flex items-center">
                  <i class="las la-envelope mr-2"></i>paeg1@yandex.ru
                </a>
              </li>
              <li class="flex items-center">
                <i class="las la-map-marker mr-2"></i>г. Якутск, ул. Халтурина, 22/1Б
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="border-t border-base-300">
        <div class="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div class="text-center md:text-left mb-4 md:mb-0">
            <p>ИП Павлов Е. Е. ИНН 143516824206</p>
            <p>© {{new Date().getFullYear()}} Официальный дилер Алютех в Якутске. Все права защищены.</p>
          </div>
          <div class="flex justify-center md:justify-end space-x-4">
            <a href="https://www.instagram.com/alutech_gate_ykt" target="_blank" aria-label="Instagram" class="btn btn-ghost btn-circle">
              <i class="lab la-instagram text-2xl"></i>
            </a>
            <a href="https://wa.me/79142706573" target="_blank" aria-label="WhatsApp" class="btn btn-ghost btn-circle">
              <i class="lab la-whatsapp text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
    <SpeedInsights />
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
const THEMES = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
];
export default {
  components: {
    SpeedInsights,
  },
  setup () {
    const theme = ref(null);
    watch(theme, (value) => {
      localStorage.setItem('daisyui-theme', value);
    });
    onMounted(() => {
      theme.value = localStorage.getItem('daisyui-theme') || 'dark';
    });
    return {
      theme,
      themes: THEMES,
    };
  },
};
</script>

<style scoped>
@keyframes glow {
  0%, 100% { box-shadow: 0 0 5px #4ade80, 0 0 10px #4ade80; }
  50% { box-shadow: 0 0 20px #4ade80, 0 0 30px #4ade80; }
}

.btn-success {
  animation: glow 2s infinite;
}

.btn-circle {
  width: 4rem;
  height: 4rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 640px) {
  .btn-circle {
    width: 3.5rem;
    height: 3.5rem;
  }

  .fixed.bottom-16.right-8 {
    bottom: 4rem;
    right: 1rem;
  }
}

@media (max-width: 768px) {
  .footer > div {
    flex-direction: column;
  }

  .footer > div > div {
    margin-bottom: 2rem;
  }
}

.footer-title {
  @apply font-bold text-lg;
}
</style>
