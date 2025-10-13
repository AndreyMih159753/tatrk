import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  $development: {
    devtools: { enabled: false }
  },

  $production: {
    devtools: { enabled: false }
  },

  app: {
    head: {
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'True and the Rainbow Kingdom'
    }
  },

  target: 'static',

  generate: {
    fallback: true
  },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/favicon.css'
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})