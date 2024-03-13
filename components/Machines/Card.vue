<script setup>
const props = defineProps(["title", "img", "alt"])
</script>
<template>
  <div class="relative w-56 h-80">
    <NuxtImg
      :src="props.img"
      class="absolute max-w-full h-full left-1/2 -translate-x-1/2 object-cover"
      :alt="props.alt"
    />
    <div
      class="w-full h-full bg-gradient-to-t from-gray-300 dark:from-gray-900 via-transparent to-transparent rounded-3xl absolute flex items-end justify-center p-2"
    >
      <p class="font-medium text-base text-center">
        {{ props.title }}
      </p>
    </div>
  </div>
</template>
