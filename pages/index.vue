<script setup>
defineI18nRoute({
  locales: ["pl", "en"],
})
const localePath = useLocalePath()

useSeoMeta({
  description:
    "Jesteśmy firmą zajmującą się produkcją skomplikowanych, precyzyjnych konstrukcji stalowych oraz obróbką metali na terenie Śląska dla wiodących producentów przemysłu elektroenergetycznego, motoryzacyjnego i maszynowego. Wykonujemy usługi w zakresie cięcia laserem, obróbki skrawaniem, spawania, frezowania itp.",
  ogTitle: "Metana",
  ogDescription:
    "Jesteśmy firmą zajmującą się produkcją skomplikowanych, precyzyjnych konstrukcji stalowych oraz obróbką metali na terenie Śląska dla wiodących producentów przemysłu elektroenergetycznego, motoryzacyjnego i maszynowego. Wykonujemy usługi w zakresie cięcia laserem, obróbki skrawaniem, spawania, frezowania itp.",
  ogImage: "",
  ogUrl: "https://www.metana.net/",
  twitterTitle: "Metana",
  twitterDescription:
    "Jesteśmy firmą zajmującą się produkcją skomplikowanych, precyzyjnych konstrukcji stalowych oraz obróbką metali na terenie Śląska dla wiodących producentów przemysłu elektroenergetycznego, motoryzacyjnego i maszynowego. Wykonujemy usługi w zakresie cięcia laserem, obróbki skrawaniem, spawania, frezowania itp.",
  twitterImage: "http://localhost:3000/logo.png",
  twitterCard:
    "Jeżeli potrzebujesz skomplikowanych detali, wykonanych z najwyższą precyzją to skontaktuj się z nami.",
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
        class="text-4xl text-[#0071BC] font-caveat-600"
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
