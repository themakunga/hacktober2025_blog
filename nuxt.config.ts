import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from 'vite-tsconfig-paths'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/image'],
  plugins: [],
  vite: {
    plugins: [tailwindcss(), tsconfigPaths()],
  },
  css: ["~/assets/app.css"],
})
