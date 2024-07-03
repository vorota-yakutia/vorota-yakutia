<template>

  <div class="hero min-h-screen bg-hero-pattern bg-cover bg-center">
    <div class="hero-content text-center">
      <div class="max-w-xl">
        <h1 data-aos="zoom-out" class="text-4xl text-white md:text-5xl font-bold mb-6">
          Установка ворот в Якутске
        </h1>
        <p
            data-aos="fade-down"
            data-aos-delay="300"
            class="text-white md:text-lg mb-6"
        >
          Автоматические ворота, роллетные системы, шлагбаумы и перегрузочное оборудование. «АЛЮТЕХ» предлагает
          продукцию как бытового, так и промышленного назначения. Все изделия проходят многоступенчатый контроль
          качества.
        </p>
        <div class="flex justify-center space-x-5">
          <a
              data-aos="fade-down"
              data-aos-delay="600"
              class="btn btn-sm md:btn-md btn-primary"
              href="#price-section"
          >
            Получить прайс
          </a>
          <a
              data-aos="fade-down"
              data-aos-delay="600"
              class="btn btn-sm md:btn-md bg-base-100"
              href="#works-section"
          >
            Наши работы
          </a>
        </div>
      </div>
    </div>
  </div>
  <div id="works-section">
    <generic-panel>
      <div class="flex flex-col p-6">
        <h1 class="text-3xl md:text-3xl mb-5">Наши работы</h1>
      </div>
    </generic-panel>
    <div class="carousel w-full space-x-4">
      <div v-for="image in images" :key="image" class="carousel-item">
        <nuxt-img
            :src="`/vorota/${image}.jpeg`"
            class="rounded-box max-w-full h-96 object-cover"
            :sizes="imageSizes"
            format="webp"
            fit="cover"
            loading="lazy"
            :alt="`Наша работа ${image}`"
            :placeholder="[10, 10, 75]"
        />
      </div>
    </div>
  </div>
  <generic-panel>
    <div id="price-section" class="flex flex-col p-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-3xl mb-5">Получить расчет цены на расчет ворот ALUTECH</h1>

      <div class="mb-4">
        <h2 class="mb-2">Монтажные работы</h2>
        <div class="flex flex-col space-y-2">
          <label class="flex items-center">
            <input type="radio" name="installation" value="yes" class="radio radio-primary" checked/>
            <span class="ml-2">Интересует цена на монтаж</span>
          </label>
          <label class="flex items-center">
            <input type="radio" name="installation" value="no" class="radio radio-primary"/>
            <span class="ml-2">Монтаж не нужен</span>
          </label>
        </div>
      </div>

      <div class="mb-4">
        <label for="phone" class="block mb-2">Номер телефона *</label>
        <input type="tel" id="phone" name="phone" class="input input-bordered w-full" required/>
      </div>

      <div class="mb-4">
        <label for="comment" class="block mb-2">Комментарий (если нужно)</label>
        <textarea id="comment" name="comment" class="textarea textarea-bordered w-full"></textarea>
      </div>

      <div class="mb-4 flex items-center">
        <input type="checkbox" id="agreement" name="agreement" class="checkbox checkbox-primary" required/>
        <label for="agreement" class="ml-2">Даю согласие на обработку персональных данных</label>
      </div>

      <button type="submit" class="btn btn-primary">Отправить</button>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col p-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-3xl mb-5">Как нас найти?</h1>
      <div id="map" class="w-full h-64"></div>
    </div>
  </generic-panel>

</template>

<script>
import { ref, onMounted } from 'vue';
import { useHead } from '#app';
import { definePageMeta } from '#imports';
import GenericPanel from '~/components/commons/GenericPanel';
import ogBanner from '../assets/images/logo.png';

export default {
  components: {
    GenericPanel,
  },
  setup () {
    definePageMeta({
      layout: 'default',
    });

    const siteName = 'Алютех - Ворота Якутск';
    const siteUrl = 'https://www.vorota-yakutia.ru';

    useHead({
      htmlAttrs: {
        lang: 'ru',
      },
      title: 'Ворота Якутск - Автоматические ворота и роллетные системы',
      titleTemplate: '%s | ' + siteName,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Автоматические ворота, роллетные системы, шлагбаумы и перегрузочное оборудование. «АЛЮТЕХ» предлагает продукцию как бытового, так и промышленного назначения. Все изделия проходят многоступенчатый контроль качества.',
        },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: siteUrl },
        { property: 'og:title', content: 'Ворота Якутск - Автоматические ворота и роллетные системы' },
        { property: 'og:description', content: 'Автоматические ворота, роллетные системы, шлагбаумы и перегрузочное оборудование от АЛЮТЕХ в Якутске.' },
        { property: 'og:image', content: ogBanner },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: siteUrl },
        { name: 'twitter:title', content: 'Ворота Якутск - Автоматические ворота и роллетные системы' },
        { name: 'twitter:description', content: 'Автоматические ворота, роллетные системы, шлагбаумы и перегрузочное оборудование от АЛЮТЕХ в Якутске.' },
        { name: 'twitter:image', content: ogBanner },
      ],
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
            name: 'Алютех - Ворота Якутск',
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
            description: 'Автоматические ворота, роллетные системы, шлагбаумы и перегрузочное оборудование в Якутске.',
          }),
        },
      ],
    });

    onMounted(() => {
      DG.then(() => {
        const map = DG.map('map', {
          center: [62.057323, 129.735834], // Координаты центра карты
          zoom: 14.3,
        });

        DG.marker([62.057323, 129.735834]).addTo(map).bindLabel('Алютех', {
          static: true,
        });
      });
    });

    const images = ref(Array.from({ length: 40 }, (_, i) => i + 1));

    const imageSizes = computed(() => ({
      sm: '100vw',
      md: '50vw',
      lg: '400px',
      xl: '500px',
      '2xl': '600px',
    }));

    return {
      images,
      imageSizes,
    };
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 400px;
}
</style>
