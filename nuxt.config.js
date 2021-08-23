export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Miguel Ceccarelli | Médico dermatologista no Rio de Janeiro",
    htmlAttrs: {
      lang: "pt-br"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Dr. Miguel Ceccarelli, Médico dermatologista no Rio de Janeiro, especialista em tratamentos (unhas, diagnóstico, tratamento e prevenção de doenças da pele, pelos, mucosas e cabelos). Agende sua consulta." },
      { hid: "keywords", name: "keywords", content: "dermatologista, clínica dermatológica, unhas, diagnóstico, tratamento e prevenção de doenças da pele, pelos, mucosas, cabelos, consulta com dermatologista, dermatologista no Rio de Janeiro" },
      { hid: "robots", name: "robots", content: "index, follow" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // './generator'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/sitemap",

    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            code: 'br',
            iso: 'pt-BR',
            name: 'Português'
          },
          {
            code: 'en',
            iso: 'en-US',
            name: 'Inglês'
          },
          {
            code: 'es',
            iso: 'es',
            name: 'Espanhol'
          }
        ],

        baseUrl: 'https://miguelceccarelli.com',
        defaultLocale: 'br',

        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          redirectOn: 'root',
        },
        
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            br: {
              greeting: 'Olá mundo!'
            },

            en: {
              greeting: 'Hello world!'
            },
            es: {
              greeting: '¡Hola mundo!'
            }
          }
        }
      }
    ]
  ],

  sitemap: {
    hostname: 'https://www.miguelceccarelli.com',
    gzip: true,
    exclude: [

    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: "https://miguelblog-api.glitch.me/api/v2/"
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  target: 'server',

  generate: {
    crawler: false // default - true
  }
};
