<script setup>
const creator = "<KamilKruszona />";
const currentYear = new Date().getFullYear();
let copyrightYearText = currentYear === 2023 ? 2023 : `2023 - ${currentYear}`;
</script>
<template>
  <footer class="flex justify-center">
    <div
      class="container flex flex-col items-center justify-between px-6 py-2 sm:flex-row"
    >
      <div class="flex items-center gap-2">
        <NuxtImg src="/logo.png" class="h-7" alt="Logo of Metana" />
        <p class="text-sm">
          {{ $t("footer.copyright") }}
          © <span id="year">{{ copyrightYearText }}</span>
          {{ $t("footer.reserved") }}
        </p>
      </div>
      <!-- <div class="tooltip tooltip-top" data-tip="Desgin & development">
        <NuxtLink
          class="text-sm flex items-center text-gray-500"
          to="https://kamilkruszona.dev/"
          target="_b"
        >
          {{ creator }}
        </NuxtLink>
      </div> -->
    </div>
  </footer>
</template>
