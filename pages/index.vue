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
      "bg-white text-black dark:bg-[#13151a] dark:text-white transition-all",
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
    <!-- <Faq /> -->
    <Machines />
    <Contact />
  </main>
  <Footer />
</template>
