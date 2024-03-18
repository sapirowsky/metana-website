<script setup>
defineI18nRoute({
  locales: ["pl", "en"],
})
const localePath = useLocalePath()
const { t } = useI18n()

useSeoMeta({
  description: t("meta.description"),
  ogTitle: t("meta.ogTitle"),
  ogDescription: t("meta.ogDescription"),
  ogImage: t("meta.ogImage"),
  ogUrl: t("meta.ogUrl"),
  twitterTitle: t("meta.twitterTitle"),
  twitterDescription: t("meta.twitterDescription"),
  twitterImage: t("meta.twitterImage"),
  twitterCard: t("meta.twitterCard"),
})

useHead({
  title: "Metana",
  htmlAttrs: {
    lang: "pl",
    class: "scroll-smooth",
  },
  bodyAttrs: {
    class:
      "bg-white text-black dark:bg-[#0C0D13] dark:text-white transition-all",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.ico",
    },
  ],
})
</script>
<template>
  <dialog open class="w-full relative">
    <div
      class="flex gap-4 justify-center items-center p-4 w-full bg-white dark:bg-[#0C0D13] shadow shadow-gray-300 dark:shadow-gray-800"
    >
      <p class="text-black dark:text-white">{{ t("cookies.content") }}</p>

      <form method="dialog">
        <button
          class="bg-black dark:bg-white text-white dark:text-black py-2 px-4 rounded"
        >
          Ok
        </button>
      </form>
    </div>
  </dialog>
  <header class="flex justify-center">
    <div class="container px-6 py-2 flex justify-between items-center">
      <NuxtLink
        :to="localePath('/')"
        class="text-3xl text-[#0071BC] font-researcher-squid"
        >Metana</NuxtLink
      >
      <div class="flex justify-center items-center gap-6">
        <Navigation />
        <Controls />
      </div>
    </div>
  </header>
  <main>
    <Hero />
    <About />
    <Machines />
    <Contact />
  </main>
  <Footer />
</template>
