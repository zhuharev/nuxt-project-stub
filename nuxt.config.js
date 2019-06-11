const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'checks',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js + Vuetify.js project'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Material+Icons'
      }
    ]
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/auth', '@nuxtjs/toast', '@nuxtjs/proxy'],
  plugins: [{ src: '~/plugins/vuetify.js' }, { src: '~/plugins/api.js' }],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/token.json',
            method: 'get',
            propertyName: 'token'
          },
          logout: false, // { url: "/api/v1/auth/logout", method: "post" },
          user: {
            url: '/user.json',
            method: 'get',
            propertyName: 'user'
          }
        },
        tokenRequired: true
      }
    },
    // plugins: ['~/plugins/auth.js'],
    redirect: {
      login: false,
      logout: false,
      callback: false,
      home: false
    }
  },
  axios: {
    proxy: true,
    // browserBaseURL: "",
    // baseURL: process.env.BASE_URL || "http://localhost:3000",
    debug: true
  },
  proxy: [
    [
      process.env.REST_PROXY_URL || 'http://localhost:8000/api/v1',
      { changeOrigin: true }
    ],
    [
      process.env.RPC_PROXY_URL || 'http://localhost:8000/rpc/v1',
      { changeOrigin: true }
    ]
  ],
  css: ['~/assets/style/app.styl'],
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^vuetify/],
    plugins: [new VuetifyLoaderPlugin()],
    extractCSS: true,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|dist|.nuxt)/
        })
      }
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
