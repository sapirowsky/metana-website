<script setup>
const { t } = useI18n();
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
    img: "./brother.png",
    alt: t("faq.second.answer.third.title"),
    title: t("faq.second.answer.third.title"),
    desc: t("faq.second.answer.third.about"),
  },
  {
    img: "./kovosvit-mas.png",
    alt: t("faq.second.answer.fourth.title"),
    title: t("faq.second.answer.fourth.title"),
    desc: t("faq.second.answer.fourth.about"),
  },
];
const directionBinded = ref("5rem");
const lastItem = ref(0);
const currentItem = ref(0);
const changeSlide = async (slide, direction) => {
  directionBinded.value = await direction;
  lastItem.value = currentItem.value;
  if (slide < 0) {
    currentItem.value = list.length - 1;

    return;
  }
  if (slide >= list.length) {
    currentItem.value = 0;
    return;
  }

  currentItem.value = slide;
};
</script>
<template>
  <ul class="relative h-full w-full">
    <span
      class="absolute -left-8 top-1/2 z-20 h-max -translate-y-1/2 md:-left-5"
    >
      <button class="btn p-2" @click="changeSlide(currentItem - 1, '-5rem')">
        <UiArrowBack />
      </button>
    </span>
    <li
      v-for="(item, index) in list"
      :key="index"
      class="flex flex-col gap-2 pl-6 pr-6 transition-transform md:flex-row md:pl-0 md:pr-10"
      :class="
        currentItem === index
          ? 'visible translate-x-0'
          : 'carousel-invisible-card'
      "
    >
      <div class="grid w-full place-content-center md:w-1/2">
        <NuxtImg class="max-h-80 max-w-full" :src="item.img" :alt="item.alt" />
      </div>
      <div class="flex w-full flex-col gap-4 md:w-1/2">
        <h2 class="text-2xl font-bold">{{ item.title }}</h2>
        <p>{{ item.desc }}</p>
      </div>
    </li>
    <span
      class="absolute -right-8 top-1/2 z-20 h-max -translate-y-1/2 md:-right-5"
    >
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
