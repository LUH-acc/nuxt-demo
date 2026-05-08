// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  extends: [
    './some-app',
  ],
  runtimeConfig: {
    apiSecretToken: process.env.NUXT_API_SECRET, 
    public: {
      apiSecretToken: process.env.NUXT_API_SECRET,
    },
  },
})
