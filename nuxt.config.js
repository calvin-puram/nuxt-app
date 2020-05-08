export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Technical Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'all about technical blog writing'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#39b982', height: '5px', continuous: true },
  /*
   ** Global CSS
   */
  css: ['~assets/styles/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/core-components.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /**
   * environmental variable
   */
  env: {
    baseUrl: 'https://nuxt-blog-6b57a.firebaseio.com',
    fbApiKey: 'AIzaSyC_9d7pTAnnQnMDQu-4z38Q3u8W6dq3jps'
  },
  /**
   * router config
   */
  router: {
    // middleware: 'log',
    extendRoutes(routes, resolve) {
      routes.push({
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      });
    }
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  }
};
