// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/fonts',
    '@nuxt/icon'
  ],

  fonts: {
    defaults: {
      weights: [300, 400, 500, 600, 700, 800],
      styles: ['normal'],
    },
    families: [
      { name: 'Manrope', provider: 'google', styles: ['normal'] },
      { name: 'Poppins', provider: 'google', styles: ['normal'] },
    ]
  },

  icon: {
    collections: [
      'solar',
    ],
    mode: 'svg',
    serverBundle: {
      collections: ['solar'],
    }
  },

  css: [
    '~/assets/css/app.css',
  ],

  vite: { plugins: [tailwindcss()] },
})