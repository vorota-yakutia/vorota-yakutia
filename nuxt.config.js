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
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  site: {
    url: 'https://www.vorota-yakutia.ru',
  },

  sitemap: {
    // Используем функцию для динамической генерации конфигурации
    // Это позволяет нам использовать значения из site.url
    configFunction: ({ sitemap, nuxtConfig }) => {
      sitemap.hostname = nuxtConfig.site.url;
      sitemap.gzip = true; // Создаем сжатую версию sitemap
      sitemap.lastmod = new Date(); // Устанавливаем дату последнего изменения
      sitemap.exclude = ['/admin/**']; // Исключаем административные страницы, если они есть

      // Добавляем только главную страницу, так как это одностраничный сайт
      sitemap.routes = [
        {
          url: '/',
          changefreq: 'daily',
          priority: 1,
        },
      ];
    },
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Disallow: ['/admin', '/tmp', '/private'],
    Sitemap: 'https://www.vorota-yakutia.ru/sitemap.xml',
    BlankLine: true,
    Comment: 'Правила для всех поисковых роботов',
    CrawlDelay: 10,
    CleanParam: 'ref /articles/',
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
        {
          rel: 'stylesheet',
          href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
      script: [
        {
          src: 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full',
          type: 'text/javascript',
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
    dir: 'assets/images',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
      '3xl': 1920,
    },
  },

  devtools: {
    enabled: true,
  },
});
