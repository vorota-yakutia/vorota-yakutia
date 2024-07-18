<template>
  <div class="hero min-h-screen bg-hero-pattern bg-cover bg-center">
    <div class="hero-content text-center">
      <!-- Десктопная версия -->
      <div class="max-w-xl">
        <h1 class="text-4xl text-white md:text-5xl font-bold mb-6">
          Торгово-монтажная компания - Официальный дилер Алютех в Якутске
        </h1>
        <p class="text-white md:text-lg mb-6">
          Авторизованный партнёр Alutech в Якутии. Продажа и установка автоматических ворот, роллетных систем и шлагбаумов.
          Низкие цены, гарантия 2 года, сертифицированные монтажники. Узнайте стоимость уже сегодня!
        </p>
        <div class="flex justify-center space-x-5">
          <a class="btn btn-sm md:btn-md btn-primary" href="#price-section">
            Рассчитать стоимость
          </a>
          <a class="btn btn-sm md:btn-md bg-base-100" href="#works-section">
            Наши работы
          </a>
        </div>
      </div>
    </div>
  </div>
  <div id="works-section">
    <generic-panel>
      <div class="flex flex-col p-6">
        <h2 class="text-3xl md:text-3xl mb-5">Галерея выполненных проектов</h2>
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
            :alt="`Реализованный проект ${image} - Ворота Алютех в Якутске`"
            placeholder
            quality="80"
        />
      </div>
    </div>
  </div>
  <generic-panel>
    <div id="price-section" class="flex flex-col p-6 bg-white rounded-lg shadow-lg">
      <h2 class="text-3xl mb-5">Рассчитать стоимость монтажа ворот ALUTECH в Якутске</h2>

      <div class="mb-4">
        <h3 class="mb-2">Услуги по установке</h3>
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
      <h2 class="text-3xl mb-5">Наше расположение в Якутске</h2>
      <div id="map" class="w-full h-64"></div>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col p-6 bg-white rounded-lg shadow-lg">
      <h2 class="text-3xl mb-5">Сертификат</h2>
      <nuxt-img
          :src="`/sertificat.webp`"
          class="rounded-box max-w-full h-96 object-cover"
          :sizes="imageSizes"
          format="webp"
          fit="cover"
          loading="lazy"
          :alt="`Сертификат Алютех`"
          placeholder
          quality="80"
      />
    </div>
  </generic-panel>
</template>

<script setup>
import { useServerSeoMeta, useSeoMeta, useHead } from '#imports';
import GenericPanel from '~/components/commons/GenericPanel';
import ogBanner from '../assets/images/logo.png';

const siteName = 'Торгово-монтажная компания - Официальный дилер Алютех в Якутске';
const siteUrl = 'https://www.vorota-yakutia.ru';
const pageTitle = 'Купить ворота Алютех в Якутске | Цены от официального дилера';
const pageDescription = 'Официальный дилер Алютех в Якутске. Продажа и установка автоматических ворот, роллетных систем и шлагбаумов. Гарантия 2 года, низкие цены, сертифицированные монтажники. Бесплатный замер!';

useServerSeoMeta({
  title: () => `${pageTitle} | ${siteName}`,
  ogTitle: () => `${pageTitle} | ${siteName}`,
  description: pageDescription,
  ogDescription: pageDescription,
  ogSiteName: siteName,
  ogImage: ogBanner,
  twitterCard: 'summary_large_image',
  twitterTitle: () => `${pageTitle} | ${siteName}`,
  twitterDescription: pageDescription,
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
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
    {
      rel: 'canonical',
      href: siteUrl,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Торгово-монтажная компания - Официальный дилер Алютех в Якутске',
          url: 'https://www.vorota-yakutia.ru/',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Торгово-монтажная компания - Официальный дилер Алютех в Якутске',
          image: `${siteUrl}/assets/images/logo.png`,
          telephone: '+79142706573',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Якутск',
            addressRegion: 'Республика Саха (Якутия)',
            addressCountry: 'RU',
          },
          areaServed: [
            {
              '@type': 'State',
              name: 'Республика Саха (Якутия)',
            },
          ],
          url: siteUrl,
          priceRange: '₽₽₽',
          description: 'Официальный дилер Алютех в Якутске. Продажа, установка и обслуживание автоматических ворот, роллетных систем и шлагбаумов. Гарантия 2 года, низкие цены, сертифицированные монтажники.',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Продукция Алютех',
            itemListElement: [
              {
                '@type': 'OfferCatalog',
                name: 'Автоматические секционные ворота',
              },
              {
                '@type': 'OfferCatalog',
                name: 'Откатные ворота',
              },
              {
                '@type': 'OfferCatalog',
                name: 'Промышленные ворота',
              },
              {
                '@type': 'OfferCatalog',
                name: 'Автоматика для ворот',
              },
              {
                '@type': 'OfferCatalog',
                name: 'Рольставни',
              },
              {
                '@type': 'OfferCatalog',
                name: 'Перегородки',
              },
            ],
          },
          serviceArea: {
            '@type': 'State',
            name: 'Республика Саха (Якутия)',
          },
          makesOffer: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Бесплатный замер',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Монтаж',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Обслуживание',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Ремонт',
              },
            },
          ],
        },
      ]),
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
  if (process.client) {
    const mapObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (typeof DG !== 'undefined') {
          DG.then(() => {
            const map = DG.map('map', {
              center: [62.057323, 129.735834],
              zoom: 14.3,
            });
            DG.marker([62.057323, 129.735834]).addTo(map).bindLabel('Алютех - Ворота Якутии', {
              static: true,
            });
          });
        }
        mapObserver.disconnect();
      }
    });
    mapObserver.observe(document.getElementById('map'));
  }

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
