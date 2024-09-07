<template>
  <div class="hero min-h-screen bg-hero-pattern bg-cover bg-center relative">
    <div class="absolute inset-0 bg-black opacity-60"></div>
    <div class="hero-content relative z-10 container mx-auto px-4 py-8 md:py-16">
      <div class="max-w-md mx-auto md:max-w-xl md:mx-0">
        <h1 class="text-2xl md:text-4xl lg:text-5xl text-white font-bold mb-4 leading-tight">
          Купить ворота в Якутске от официального дилера Алютех
        </h1>
        <p class="text-xl md:text-2xl text-yellow-300 font-semibold mb-6">
          Купите ворота по выгодной цене!
        </p>
        <ul class="text-white text-sm md:text-base space-y-2 mb-6">
          <li class="flex items-center">
            <i class="las la-check-circle text-green-400 mr-2"></i>
            Автоматические ворота и роллетные системы
          </li>
          <li class="flex items-center">
            <i class="las la-check-circle text-green-400 mr-2"></i>
            Низкие цены и гарантия 2 года
          </li>
          <li class="flex items-center">
            <i class="las la-check-circle text-green-400 mr-2"></i>
            Сертифицированные монтажники
          </li>
        </ul>
        <div class="flex flex-col space-y-3">
          <a class="btn btn-primary btn-lg w-full" href="#price-section">
            Рассчитать стоимость
          </a>
          <a class="btn btn-outline btn-lg w-full text-white border-white hover:bg-white hover:text-primary" href="#works-section">
            Наши работы
          </a>
        </div>
      </div>
    </div>
  </div>
  <section id="works-section" aria-labelledby="gallery-title" class="py-12">
    <div class="container mx-auto px-4">
      <h2 id="gallery-title" class="text-3xl font-bold mb-8 text-center">Галерея выполненных проектов</h2>

      <div class="relative">
        <div class="carousel" ref="carousel">
          <div v-for="image in visibleImages" :key="image" class="carousel-item">
            <div class="relative overflow-hidden rounded-lg shadow-lg h-64 md:h-96">
              <nuxt-img
                  :src="`/vorota/${image}.jpeg`"
                  class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  :sizes="imageSizes"
                  format="webp"
                  loading="lazy"
                  :alt="`Реализованный проект ${image} - Ворота Алютех в Якутске`"
                  placeholder
                  quality="80"
              />
              <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button @click="openLightbox(image)" class="btn btn-primary" aria-label="Увеличить изображение">
                  <i class="las la-search-plus text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <button @click="scrollCarousel('prev')" class="absolute left-2 top-1/2 transform -translate-y-1/2 btn btn-circle btn-primary" aria-label="Предыдущее изображение">❮</button>
        <button @click="scrollCarousel('next')" class="absolute right-2 top-1/2 transform -translate-y-1/2 btn btn-circle btn-primary" aria-label="Следующее изображение">❯</button>
      </div>

      <div class="flex justify-center mt-4">
        <div v-for="i in 3" :key="i"
             @click="scrollToImage((i - 1) * Math.floor(visibleImages.length / 3))"
             class="w-3 h-3 rounded-full mx-1 cursor-pointer"
             :class="getActiveDotClass(i)">
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <div v-if="lightboxOpen" class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center" @click="closeLightbox">
      <img :src="`/vorota/${lightboxImage}.jpeg`" class="max-w-full max-h-full object-contain" :alt="`Увеличенное изображение проекта ${lightboxImage}`" />
    </div>
  </section>

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
import { useSeoMeta, useHead } from '#imports';
import GenericPanel from '~/components/commons/GenericPanel';
import ogBanner from '../assets/images/logo.png';

const siteName = 'Торгово-монтажная компания - Официальный дилер Алютех в Якутске';
const siteUrl = 'https://www.vorota-yakutia.ru';
const pageTitle = 'Купить ворота Алютех в Якутске | Цены от официального дилера';
const pageDescription = 'Купить ворота в Якутске от официального дилера Алютех. Автоматические ворота, роллетные системы и шлагбаумы. Гарантия 2 года, низкие цены, сертифицированные монтажники. Бесплатный замер!';

useSeoMeta({
  title: () => 'Купить ворота в Якутске | ТМК - Автоматические двери и ворота',
  ogTitle: () => 'Купить ворота в Якутске | ТМК - Автоматические двери и ворота',
  description: pageDescription,
  ogDescription: pageDescription,
  ogSiteName: siteName,
  ogImage: ogBanner,
  twitterCard: 'summary_large_image',
  twitterTitle: () => `${pageTitle} | ${siteName}`,
  twitterDescription: pageDescription,
  twitterImage: ogBanner,
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
          name: 'ТМК - Автоматические двери и ворота',
          url: 'https://www.vorota-yakutia.ru/',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'ТМК - Автоматические двери и ворота',
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
          description: 'Купить ворота в Якутске от официального дилера Алютех. Продажа, установка и обслуживание автоматических ворот, роллетных систем и шлагбаумов. Гарантия 2 года, низкие цены, сертифицированные монтажники.',
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
const carousel = ref(null);
const allImages = ref(Array.from({ length: 40 }, (_, i) => i + 1));
const visibleImages = ref(allImages.value.slice(0, 6));
const lastLoadedIndex = ref(5);
const lightboxOpen = ref(false);
const lightboxImage = ref(null);
const currentImageIndex = ref(0);

const imageSizes = computed(() => ({
  sm: '100vw',
  md: '50vw',
  lg: '33vw',
  xl: '25vw',
}));

const loadMoreImages = () => {
  if (lastLoadedIndex.value >= allImages.value.length - 1) return;
  const nextIndex = lastLoadedIndex.value + 1;
  const newImages = allImages.value.slice(nextIndex, nextIndex + 3);
  visibleImages.value.push(...newImages);
  lastLoadedIndex.value = Math.min(nextIndex + 2, allImages.value.length - 1);
};

const openLightbox = (image) => {
  lightboxImage.value = image;
  lightboxOpen.value = true;
};

const closeLightbox = () => {
  lightboxOpen.value = false;
};

const getActiveDotClass = (dotIndex) => {
  const imageIndex = currentImageIndex.value;
  const totalImages = visibleImages.value.length;
  const thirdOfTotal = Math.floor(totalImages / 3);

  if (dotIndex === 1 && imageIndex < thirdOfTotal) {
    return 'bg-primary';
  } else if (dotIndex === 2 && imageIndex >= thirdOfTotal && imageIndex < 2 * thirdOfTotal) {
    return 'bg-primary';
  } else if (dotIndex === 3 && imageIndex >= 2 * thirdOfTotal) {
    return 'bg-primary';
  } else {
    return 'bg-gray-300';
  }
};

const scrollToImage = (index) => {
  if (!carousel.value) return;
  const targetIndex = Math.min(index, visibleImages.value.length - 1);
  carousel.value.scrollLeft = targetIndex * carousel.value.clientWidth;
  currentImageIndex.value = targetIndex;

  if (targetIndex >= visibleImages.value.length - 3) {
    loadMoreImages();
  }
};

const scrollCarousel = (direction) => {
  if (!carousel.value) return;

  const scrollAmount = carousel.value.clientWidth;
  if (direction === 'next') {
    if (currentImageIndex.value < visibleImages.value.length - 1) {
      carousel.value.scrollLeft += scrollAmount;
      currentImageIndex.value++;
    }
  } else {
    if (currentImageIndex.value > 0) {
      carousel.value.scrollLeft -= scrollAmount;
      currentImageIndex.value--;
    }
  }

  if (direction === 'next' && currentImageIndex.value >= visibleImages.value.length - 3) {
    loadMoreImages();
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

@media (min-width: 768px) {
  .hero-content {
    text-align: left;
  }
  .btn {
    width: auto;
  }
  .flex-col {
    flex-direction: row;
  }
  .space-y-3 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 0;
    margin-bottom: 0;
  }
  .space-y-3 {
    margin-right: 1rem;
  }
}

.carousel {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

@media (min-width: 640px) {
  .carousel-item {
    flex: 0 0 50%;
  }
}
@media (min-width: 1024px) {
  .carousel-item {
    flex: 0 0 33.333333%;
  }
}
</style>
