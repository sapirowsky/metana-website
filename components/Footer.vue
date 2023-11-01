<script setup>
const creator = "<KamilKruszona/>"
const currentYear = new Date().getFullYear()
let copyrightYearText = currentYear === 2023 ? 2023 : `2023 - ${currentYear}`
</script>
<template>
  <footer class="flex justify-center">
    <div
      class="container px-6 py-2 flex items-center justify-between flex-col sm:flex-row"
    >
      <div class="flex items-center gap-2">
        <NuxtImg src="/logo.png" class="h-7" alt="Logo of Metana" />
        <p class="text-sm">
          Copyright © <span id="year">{{ copyrightYearText }}</span
          >, All right reserved
        </p>
      </div>
      <div class="tooltip tooltip-top" data-tip="Desgin & development">
        <NuxtLink
          class="text-sm flex items-center"
          to="https://kamilkruszona.dev/"
          target="_b"
        >
          {{ creator }}
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
