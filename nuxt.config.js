// const LANG = 'en_US';
// const TYPE = 'website';
// const URL = 'https://hippocrades.com';
// const SITE_NAME = 'hippocrades.com';

// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  preset: 'node-server',

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-gtag',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  site: {
    url: 'https://www.vorota-yakutia.ru',
  },

  sitemap: {
    hostname: 'https://www.vorota-yakutia.ru', // Замените на ваш реальный URL
    gzip: true,
    exclude: ['/admin/**'],
    urls: [
      {
        loc: '/',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date().toISOString(),
        images: [
          '/vorota/1.jpeg',
          '/vorota/2.jpeg',
          '/vorota/3.jpeg',
          '/vorota/4.jpeg',
          '/vorota/5.jpeg',
          '/vorota/6.jpeg',
          '/vorota/7.jpeg',
          '/vorota/8.jpeg',
          '/vorota/9.jpeg',
          '/vorota/10.jpeg',
          '/vorota/11.jpeg',
          '/vorota/12.jpeg',
          '/vorota/13.jpeg',
          '/vorota/14.jpeg',
          '/vorota/15.jpeg',
          '/vorota/16.jpeg',
          '/vorota/17.jpeg',
          '/vorota/18.jpeg',
          '/vorota/19.jpeg',
          '/vorota/20.jpeg',
          '/vorota/21.jpeg',
          '/vorota/22.jpeg',
          '/vorota/23.jpeg',
          '/vorota/24.jpeg',
          '/vorota/25.jpeg',
          '/vorota/26.jpeg',
          '/vorota/27.jpeg',
          '/vorota/28.jpeg',
          '/vorota/29.jpeg',
          '/vorota/30.jpeg',
          '/vorota/31.jpeg',
          '/vorota/32.jpeg',
          '/vorota/33.jpeg',
          '/vorota/34.jpeg',
          '/vorota/35.jpeg',
          '/vorota/36.jpeg',
          '/vorota/37.jpeg',
          '/vorota/38.jpeg',
          '/vorota/39.jpeg',
          '/vorota/40.jpeg',
          '/sertificat.webp',
        ].map(path => ({
          loc: `https://www.vorota-yakutia.ru${path}`,
          caption: path.includes('sertificat') ? 'Сертификат Алютех' : 'Ворота Алютех в Якутске',
          title: path.includes('sertificat') ? 'Сертификат качества Алютех' : `Пример реализованного проекта Алютех №${path.match(/\d+/)?.[0] || ''}`,
          // Свойство license не поддерживается в этом формате, поэтому мы его убрали
        })),
      },
    ],
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://www.vorota-yakutia.ru/sitemap.xml',
  },

  gtag: {
    id: 'G-M1KERXTK1H', // TODO: Add your google analytics 4 tag here
  },

  srcDir: './src',

  runtimeConfig: {
    public: {
      yourEnv: process.env.YOUR_ENV,
    },
  },

  plugins: [
    {
      src: '@/plugins/aos',
      ssr: false,
      mode: 'client',
    },
    '~/plugins/jsonld',
  ],

  app: {
    head: {
      link: [
        // Предзагрузка CSS файла
        {
          rel: 'preload',
          as: 'style',
          href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css',
          onload: 'this.onload=null;this.rel=\'stylesheet\'',
        },
        // Фавикон
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        // Предварительное соединение с доменом 2GIS
        {
          rel: 'preconnect',
          href: 'https://maps.api.2gis.ru',
        },
      ],
      script: [
        // Асинхронная загрузка скрипта 2GIS
        {
          src: 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full',
          async: true,
          defer: true,
        },
      ],
      // Добавление критических стилей inline
      style: [
        {
          children: `
            /* Вставьте сюда критические стили из line-awesome.min.css */
            /* Например: */
            .la {
              font-family: 'Line Awesome Free';
              font-weight: 400;
            }
            /* Добавьте другие критические стили по необходимости */
          `,
          type: 'text/css',
        },
      ],
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },

  headlessui: {
    prefix: 'Headless',
  },

  build: {
    optimizeCSS: true,
    optimizeJS: true,
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
    extend (config, ctx) {
      config.resolve.symlinks = false;
    },
  },

  image: {
    provider: 'vercel',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
    domains: [
      'www.vorota-yakutia.ru', // Добавьте здесь домен вашего сайта
    ],
  },

  devtools: {
    enabled: true,
  },
});
