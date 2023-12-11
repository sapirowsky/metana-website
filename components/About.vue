<script setup>
onMounted(() => {
  const image = document.querySelector("#tilt-image")

  image.addEventListener("mousemove", (event) => {
    const { top, bottom, left, right } = event.target.getBoundingClientRect()

    const middleX = (right - left) / 2
    const middleY = (bottom - top) / 2

    const clientX = event.clientX
    const clientY = event.clientY

    let offsetX = (clientX - middleX) / middleX
    let offsetY = (middleY - clientY) / middleY

    event.target.style.transform = `perspective(1000px) rotateY(${
      offsetX * 4
    }deg) rotateX(${offsetY * 4}deg) scale3d(1, 1, 1)`
  })
})
</script>
<template>
  <div id="about-us" class="w-full flex justify-center items-center mt-20">
    <div
      class="container max-w-screen-xl px-6 py-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 h-full"
    >
      <div class="w-full md:w-1/2 grid place-items-center">
        <NuxtImg
          id="tilt-image"
          format="webp"
          quality="100"
          class="h-auto w-1/2 md:w-3/4 rounded-lg"
          src="/iso.png"
          :alt="$t('about.imgAlt')"
        />
      </div>
      <div class="w-full md:w-1/2 flex flex-col gap-4 lg:gap-8">
        <h1 class="text-4xl md:text-6xl font-bold">
          {{ $t("about.heading") }}
        </h1>
        <p class="text-xl md:text-2xl">
          {{ $t("about.paragraph") }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>
/* #tilt-image {
  transform: perspective(1000px) rotateY(7deg) scale3d(1, 1, 1);
} */
</style>
