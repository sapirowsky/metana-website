<script setup>
const props = defineProps(["title", "img", "alt"]);
</script>
<template>
  <div class="relative h-80 w-56">
    <NuxtImg
      :src="props.img"
      class="absolute left-1/2 h-full max-w-full -translate-x-1/2 object-cover"
      :alt="props.alt"
    />
    <div
      class="absolute flex h-full w-full items-end justify-center rounded-3xl bg-gradient-to-t from-gray-300 via-transparent to-transparent p-2 dark:from-gray-900"
    >
      <p class="text-center text-base font-medium">
        {{ props.title }}
      </p>
    </div>
  </div>
</template>
