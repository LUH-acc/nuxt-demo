// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    baseURL: '/'
  },
  appConfig: {
    foo: 'nuxt config foo',
  },
  extends: [
    './some-app',
  ],
  runtimeConfig: {
    apiSecretToken: process.env.NUXT_API_SECRET, 
    public: {
      apiSecretToken: process.env.NUXT_API_SECRET,
    },
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0',
  },
  vite: {
    
  },
  modules: [
    '@unocss/nuxt',
  ],
  css: [
    '@unocss/reset/tailwind-compat.css',
    '~/assets/style/index.css',
  ]
})
