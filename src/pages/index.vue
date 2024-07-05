<template>

  <div class="hero min-h-screen bg-hero-pattern bg-cover bg-center">
    <div class="hero-content text-center">
      <div class="max-w-xl">
        <h1 class="text-4xl text-white md:text-5xl font-bold mb-6">
          Профессиональный монтаж ворот в Якутске
        </h1>
        <p class="text-white md:text-lg mb-6">
          Эксперты в установке автоматических ворот, роллетных конструкций, шлагбаумов и погрузочно-разгрузочного
          оборудования. Компания «АЛЮТЕХ» - ваш надежный партнер в сфере бытовых и промышленных решений. Гарантируем
          безупречное качество каждого изделия благодаря тщательной проверке на всех этапах производства.
        </p>
        <div class="flex justify-center space-x-5">
          <a class="btn btn-sm md:btn-md btn-primary" href="#price-section">
            Узнать стоимость
          </a>
          <a class="btn btn-sm md:btn-md bg-base-100" href="#works-section">
            Портфолио проектов
          </a>
        </div>
      </div>
    </div>
  </div>
  <div id="works-section">
    <generic-panel>
      <div class="flex flex-col p-6">
        <h1 class="text-3xl md:text-3xl mb-5">Галерея выполненных проектов</h1>
      </div>
    </generic-panel>
    <div class="carousel w-full space-x-4">
      <div v-for="image in visibleImages" :key="image" class="carousel-item">
        <nuxt-img
            :src="`/vorota/${image}.jpeg`"
            class="rounded-box max-w-full h-96 object-cover"
            :sizes="imageSizes"
            format="webp"
            fit="cover"
            loading="lazy"
            :alt="`Реализованный проект ${image}`"
            :placeholder="[10, 10, 75]"
            quality="80"
            preload
        />
      </div>
    </div>
  </div>
  <generic-panel>
    <div id="price-section" class="flex flex-col p-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-3xl mb-5">Рассчитать стоимость монтажа ворот ALUTECH</h1>

      <div class="mb-4">
        <h2 class="mb-2">Услуги по установке</h2>
        <div class="flex flex-col space-y-2">
          <label class="flex items-center">
            <input type="radio" name="installation" value="yes" class="radio radio-primary" checked/>
            <span class="ml-2">Нужен расчет стоимости монтажа</span>
          </label>
          <label class="flex items-center">
            <input type="radio" name="installation" value="no" class="radio radio-primary"/>
            <span class="ml-2">Только поставка, без монтажа</span>
          </label>
        </div>
      </div>

      <div class="mb-4">
        <label for="phone" class="block mb-2">Контактный телефон *</label>
        <input type="tel" id="phone" name="phone" class="input input-bordered w-full" required/>
      </div>

      <div class="mb-4">
        <label for="comment" class="block mb-2">Дополнительная информация</label>
        <textarea id="comment" name="comment" class="textarea textarea-bordered w-full"></textarea>
      </div>

      <div class="mb-4 flex items-center">
        <input type="checkbox" id="agreement" name="agreement" class="checkbox checkbox-primary" required/>
        <label for="agreement" class="ml-2">Я согласен на обработку личных данных</label>
      </div>

      <button type="submit" class="btn btn-primary">Отправить заявку</button>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col p-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-3xl mb-5">Наше расположение</h1>
      <div id="map" class="w-full h-64"></div>
    </div>
  </generic-panel>

</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useServerSeoMeta, useSeoMeta, useHead } from '#imports';
import GenericPanel from '~/components/commons/GenericPanel';
import ogBanner from '../assets/images/logo.png';

const siteName = 'Официальный представитель АЛЮТЕХ в Якутске';
const siteUrl = 'https://www.vorota-yakutia.ru';
const pageTitle = 'Ворота в Якутске - Инновационные решения для вашего комфорта';
const pageDescription = 'Ведущий поставщик автоматических ворот, роллетных систем, шлагбаумов и перегрузочного оборудования в Якутске. «АЛЮТЕХ» - гарант качества и инноваций для бытового и промышленного применения.';

useServerSeoMeta({
  title: () => `${pageTitle} | ${siteName}`,
  ogTitle: () => `${pageTitle} | ${siteName}`,
  description: pageDescription,
  ogDescription: 'Профессиональная установка автоматических ворот, роллетных систем, шлагбаумов и перегрузочного оборудования от АЛЮТЕХ в Якутске. Качество, проверенное временем.',
  ogImage: ogBanner,
  twitterCard: 'summary_large_image',
  twitterTitle: () => `${pageTitle} | ${siteName}`,
  twitterDescription: 'Профессиональная установка автоматических ворот, роллетных систем, шлагбаумов и перегрузочного оборудования от АЛЮТЕХ в Якутске. Качество, проверенное временем.',
  twitterImage: ogBanner,
});

useSeoMeta({
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
  'format-detection': 'telephone=no',
});

useHead({
  htmlAttrs: {
    lang: 'ru',
  },
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'canonical', href: siteUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Официальный представитель АЛЮТЕХ в Якутске',
        image: `${siteUrl}/assets/images/logo.png`,
        telephone: '+79142706573',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Якутск',
          addressRegion: 'Республика Саха (Якутия)',
          addressCountry: 'RU',
        },
        url: siteUrl,
        priceRange: '₽₽₽',
        description: 'Профессиональная установка и обслуживание автоматических ворот, роллетных систем, шлагбаумов и перегрузочного оборудования в Якутске.',
      }),
    },
  ],
});

const allImages = ref(Array.from({ length: 40 }, (_, i) => i + 1));
const visibleImages = ref(allImages.value.slice(0, 10)); // Изначально загружаем только 10 изображений
const lastLoadedIndex = ref(9);

const imageSizes = computed(() => ({
  sm: '100vw',
  md: '50vw',
  lg: '400px',
  xl: '500px',
  '2xl': '600px',
}));

const loadMoreImages = () => {
  const nextIndex = lastLoadedIndex.value + 1;
  if (nextIndex < allImages.value.length) {
    visibleImages.value.push(...allImages.value.slice(nextIndex, nextIndex + 5));
    lastLoadedIndex.value = nextIndex + 4;
  }
};

let imageObserver;

onMounted(() => {
  // Lazy load the map
  const mapObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      DG.then(() => {
        const map = DG.map('map', {
          center: [62.057323, 129.735834],
          zoom: 14.3,
        });
        DG.marker([62.057323, 129.735834]).addTo(map).bindLabel('Алютех', {
          static: true,
        });
      });
      mapObserver.disconnect();
    }
  });
  mapObserver.observe(document.getElementById('map'));

  // Setup image loading observer
  imageObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      loadMoreImages();
      // Re-observe the last image
      const lastImage = document.querySelector('#works-section .carousel-item:last-child');
      if (lastImage) {
        imageObserver.unobserve(entries[0].target);
        imageObserver.observe(lastImage);
      }
    }
  }, { rootMargin: '100px' });

  const lastImage = document.querySelector('#works-section .carousel-item:last-child');
  if (lastImage) {
    imageObserver.observe(lastImage);
  }
});

onUnmounted(() => {
  if (imageObserver) {
    imageObserver.disconnect();
  }
});
</script>


<style scoped>
#map {
  width: 100%;
  height: 400px;
}
</style>
