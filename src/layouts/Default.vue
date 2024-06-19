<template>
  <div data-theme="lofi">
      <div class="navbar fixed bg-base-100 z-40 shadow-sm">
        <div class="navbar-start">
          <a class="btn btn-ghost md:text-xl flex items-center">
            <img src="~/assets/images/logo.png" alt="Алютех" class="h-8 w-auto">
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <!-- TODO: You can add menu here -->
        </div>
        <div class="navbar-end flex flex-wrap justify-end space-x-4">
          <a href="tel:+79142706573" class="flex items-center space-x-2 text-lg md:text-xl">
            <i class="la la-phone"></i>
            <span>+7 914 270-65-73</span>
          </a>
          <a href="https://wa.me/79142706573" class="flex items-center space-x-2 text-lg md:text-xl">
            <i class="la la-whatsapp"></i>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    <slot />
    <footer class="footer footer-center p-10 bg-base-50">
      <div>
        <a class="btn btn-ghost md:text-xl flex items-center">
          <img src="~/assets/images/logo.png" alt="Алютех" class="h-8 w-auto">
        </a>
        <p class="md:font-bold">
          ООО компани нейм ИНН 213123213123
        </p>
        <p>Алютех. Ворота Якутии © {{new Date().getFullYear()}}</p>
      </div>
      <div>
        <div class="grid grid-flow-col gap-4">
          <a href="https://www.instagram.com/alutech_gate_ykt" target="_blank">
            <i class="lab la-instagram text-4xl"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
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
