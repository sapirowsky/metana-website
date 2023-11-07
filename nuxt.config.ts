// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/robots",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@tresjs/nuxt",
    "@averjs/nuxt-compression",
  ],
  i18n: {
    locales: [
      {
        code: "pl",
        name: "Polski",
      },
      {
        code: "en",
        name: "English",
      },
    ],
    defaultLocale: "pl",
    strategy: "prefix_except_default",
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  colorMode: {
    classSuffix: "",
  },
  robots: {
    UserAgent: "*",
    Disallow: "",
  },
  image: {
    format: ["webp"],
    inject: true,
    quality: 96,
  },
  ui: {},
})
