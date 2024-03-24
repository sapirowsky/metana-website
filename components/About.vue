<script setup>
onMounted(() => {
  const image = document.querySelector("#tilt-image");

  image.addEventListener("mousemove", (event) => {
    const { top, bottom, left, right } = event.target.getBoundingClientRect();

    const middleX = (right - left) / 2;
    const middleY = (bottom - top) / 2;

    const clientX = event.clientX;
    const clientY = event.clientY;

    let offsetX = (clientX - middleX) / middleX;
    let offsetY = (middleY - clientY) / middleY;

    event.target.style.transform = `perspective(1000px) rotateY(${
      offsetX * 4
    }deg) rotateX(${offsetY * 4}deg) scale3d(1, 1, 1)`;
  });
});
</script>
<template>
  <div id="about-us" class="mt-20 flex w-full items-center justify-center">
    <div
      class="container flex h-full max-w-screen-xl flex-col items-center justify-center gap-8 px-6 py-4 md:flex-row md:gap-4"
    >
      <div class="grid w-full place-items-center md:w-1/2">
        <NuxtImg
          id="tilt-image"
          format="webp"
          quality="100"
          class="h-auto w-1/2 rounded-lg md:w-3/4"
          src="/iso.webp"
          :alt="$t('about.imgAlt')"
        />
      </div>
      <div class="flex w-full flex-col gap-4 md:w-1/2 lg:gap-8">
        <p class="text-xl md:text-2xl">
          <span class="text-4xl font-bold md:text-6xl">
            {{ $t("about.heading") }}
          </span>
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
