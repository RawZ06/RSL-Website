// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  extends: ["@nuxt/ui-pro"],
  modules: [
    "@nuxt/ui",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@nuxtjs/mdc",
  ],
  nitro: {
    experimental: {
      openAPI: true,
    },
  },
  ssr: false,
});