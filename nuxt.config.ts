import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    '/**': {
      isr: 60 // I choose to revalidate this data in every 1 minutes
    }
  },
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/image'],
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ]
  }
})
