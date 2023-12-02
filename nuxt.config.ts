// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
  },
  sourcemap: true,
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
        file: "pl.json",
      },
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
    ],
    lazy: true,
    defaultLocale: "pl",
    langDir: "lang",
    strategy: "prefix_except_default",
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.js",
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
