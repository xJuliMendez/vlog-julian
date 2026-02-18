export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/eslint'],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Julian - Vlog',
      meta: [
        { name: 'description', content: 'The blog' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
