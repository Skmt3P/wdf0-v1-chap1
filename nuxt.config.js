module.exports = {
  mode: 'universal',
  srcDir: 'app',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Oi-deyo JavaScript',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'a javascript curation site'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Oi-deyo JavaScript'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://javascript.oiweb.app'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Oi-deyo JavaScript'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'a javascript curation site'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '~/assets/image/icon.png'
      },
      { name: 'twitter:site', content: '@Skmt3P' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/base.css',
    '~/assets/css/tailwind.css',
    '~/assets/css/buefy.scss',
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/firebase',
    {
      src: '~/plugins/vue-carousel',
      ssr: false
    },
    '~/plugins/vue-inject',
    '~/plugins/buefy'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'nuxt-buefy',
    '@nuxtjs/style-resources',
    ['@nuxtjs/dotenv', { filename: '.env' }]
  ],

  styleResources: {
    scss: ['~assets/css/_variables.scss']
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  env: {
    APIKEY: process.env.APIKEY,
    AUTHDOMAIN: process.env.AUTHDOMAIN,
    DATABASEURL: process.env.DATABASEURL,
    PROJECTID: process.env.PROJECTID,
    STORAGEBUCKET: process.env.STORAGEBUCKET,
    MESSAGINGSENDERID: process.env.MESSAGINGSENDERID
  },

  build: {
    publicPath: '/assets/',
    /*
    ** Custom option here
    */
    // vendor: ['buefy'],
    // postcss: {
    //   plugins: {
    //     'postcss-custom-properties': true
    //   }
    // },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        // if (process.server && process.browser) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.performance = config.performance || {}
      config.performance.maxEntrypointSize = 1200 * 1024
      config.performance.maxAssetSize = 700 * 1024
    }
  }
}
