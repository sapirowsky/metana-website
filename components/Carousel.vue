<script setup>
const { t } = useI18n()
const list = [
  {
    img: "./panasonic.png",
    alt: t("faq.second.answer.first.title"),
    title: t("faq.second.answer.first.title"),
    desc: t("faq.second.answer.first.about"),
  },
  {
    img: "./mazak.png",
    alt: t("faq.second.answer.second.title"),
    title: t("faq.second.answer.second.title"),
    desc: t("faq.second.answer.second.about"),
  },
  {
    img: "./panasonic.png",
    alt: t("faq.second.answer.third.title"),
    title: t("faq.second.answer.third.title"),
    desc: t("faq.second.answer.third.about"),
  },
  {
    img: "./kovosvit-mas.png",
    alt: t("faq.second.answer.fourth.title"),
    title: t("faq.second.answer.fourth.title"),
    desc: t("faq.second.answer.third.about"),
  },
]
const directionBinded = ref("5rem")
const lastItem = ref(0)
const currentItem = ref(0)
const changeSlide = async (slide, direction) => {
  directionBinded.value = await direction
  lastItem.value = currentItem.value
  if (slide < 0) {
    currentItem.value = list.length - 1

    return
  }
  if (slide >= list.length) {
    currentItem.value = 0
    return
  }

  currentItem.value = slide
}
</script>
<template>
  <ul class="relative w-full h-full">
    <span class="absolute top-1/2 -translate-y-1/2 h-max -left-5 z-20">
      <button class="btn p-2" @click="changeSlide(currentItem - 1, '-5rem')">
        <UiArrowBack />
      </button>
    </span>
    <li
      v-for="(item, index) in list"
      :key="index"
      class="flex flex-col md:flex-row gap-2 transition-transform pr-10"
      :class="
        currentItem === index
          ? 'visible translate-x-0'
          : 'carousel-invisible-card'
      "
    >
      <div class="w-full md:w-1/2 grid place-content-center">
        <NuxtImg class="max-w-full max-h-80" :src="item.img" />
      </div>
      <div class="w-full md:w-1/2 flex flex-col gap-4">
        <h2 class="text-2xl font-bold">{{ item.title }}</h2>
        <p>{{ item.desc }}</p>
      </div>
    </li>
    <span class="absolute top-1/2 -translate-y-1/2 h-max -right-5 z-20">
      <button class="btn p-2" @click="changeSlide(currentItem + 1, '5rem')">
        <UiArrowForward />
      </button>
    </span>
  </ul>
</template>
<style>
.carousel-invisible-card {
  visibility: hidden;
  width: 0;
  height: 0;
  --tw-translate-x: v-bind(directionBinded);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
</style>
