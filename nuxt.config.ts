export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  $development: {
    devtools: { enabled: true }
  },

  target: 'static',

  generate: {
    fallback: true
  }
})