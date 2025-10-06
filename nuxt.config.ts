import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  $development: {
    devtools: { enabled: false }
  },

  $production: {
    devtools: { enabled: false }
  },

  target: 'static',

  generate: {
    fallback: true
  },

  css: [
    '~/assets/css/main.css'
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})