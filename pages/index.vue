<script setup>
defineI18nRoute({
  locales: ["pl", "en"],
});
const localePath = useLocalePath();
const { t } = useI18n();

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
});

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
});
</script>
<template>
  <dialog open class="relative w-full">
    <div
      class="flex w-full items-center justify-center gap-4 bg-white p-4 shadow shadow-gray-300 dark:bg-[#0C0D13] dark:shadow-gray-800"
    >
      <p class="text-black dark:text-white">{{ t("cookies.content") }}</p>

      <form method="dialog">
        <button
          class="rounded bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
        >
          Ok
        </button>
      </form>
    </div>
  </dialog>
  <header class="flex justify-center">
    <div class="container flex items-center justify-between px-6 py-2">
      <NuxtLink
        :to="localePath('/')"
        class="font-researcher-squid text-3xl text-[#0071BC]"
        >Metana</NuxtLink
      >
      <div class="flex items-center justify-center gap-6">
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
