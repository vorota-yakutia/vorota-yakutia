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
        <img :src="`/vorota/${image}.jpeg`" class="rounded-box max-w-full h-96 object-cover"/>
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

    useHead({
      title: 'Ворота Якутск',
      description: 'Автоматические ворота, роллетные системы, шлагбаумы и перегрузочное оборудование. «АЛЮТЕХ» предлагает\n' +
          '          продукцию как бытового, так и промышленного назначения. Все изделия проходят многоступенчатый контроль\n' +
          '          качества.',
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png',
        },
      ],
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: ogBanner,
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

    return {
      images,
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
