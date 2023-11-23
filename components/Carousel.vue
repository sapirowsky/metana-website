<script setup>
const list = [
  {
    img: "./panasonic.png",
    title: "Welding robot",
    desc: "We are using Panasonic welding robot to enhance and make our work faster.",
  },
  {
    img: "https://images.unsplash.com/photo-1605661538864-acf18427564c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Car, woman, passion hihi",
    desc: "Yea very cool photo i know",
  },
  {
    img: "./panasonic.png",
    title: "Welding robot",
    desc: "We are using Panasonic welding robot to enhance and make our work faster.",
  },
  {
    img: "https://images.unsplash.com/photo-1605661538864-acf18427564c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Car, woman, passion hihi",
    desc: "Yea very cool photo i know",
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
    <li
      @click="changeSlide(currentItem - 1, '-5rem')"
      class="absolute top-1/2 -translate-y-1/2 h-max -left-4 z-20"
    >
      Prev
    </li>
    <li
      v-for="(item, index) in list"
      :key="index"
      class="flex gap-2 transition-transform"
      :class="
        currentItem === index
          ? 'visible translate-x-0'
          : 'carousel-invisible-card'
      "
    >
      <div class="w-1/2 grid place-content-center">
        <NuxtImg class="max-w-full max-h-80" :src="item.img" />
      </div>
      <div class="w-1/2">
        <h2>{{ item.title }}</h2>
        <p>{{ item.desc }}</p>
        {{ index }}
      </div>
    </li>
    <li
      @click="changeSlide(currentItem + 1, '5rem')"
      class="absolute top-1/2 -translate-y-1/2 h-max -right-4 z-20"
    >
      Next
    </li>
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
