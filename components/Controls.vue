<script setup>
const colorMode = useColorMode()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
<template>
  <div class="flex items-center gap-4">
    <!-- <ul>
      <li v-for="{ code, name } in locales" :key="code">
        <NuxtLink :to="switchLocalePath(code)">
          {{ name }}
        </NuxtLink>
      </li>
    </ul> -->
    <div class="tooltip tooltip-left" data-tip="Change theme">
      <button
        class="h-8 w-8 md:h-10 md:w-10 rounded-full cursor-pointer grid place-content-center relative p-[auto]"
        @click="
          colorMode.preference === 'dark'
            ? (colorMode.preference = 'light')
            : (colorMode.preference = 'dark')
        "
      >
        <Transition name="theme-switch">
          <UiDark
            class="h-8 w-8 md:h-10 md:w-10 theme-icon absolute"
            v-if="colorMode.preference === 'dark'"
          />
        </Transition>
        <Transition name="theme-switch">
          <UiLight
            class="h-8 w-8 md:h-10 md:w-10 theme-icon absolute"
            v-if="colorMode.preference === 'light'"
          />
        </Transition>
        <Transition name="theme-switch">
          <UiTheme
            class="h-8 w-8 md:h-10 md:w-10 theme-icon absolute"
            v-if="colorMode.preference === 'system'"
          />
        </Transition>
        <p class="sr-only">Change Theme</p>
      </button>
    </div>
  </div>
</template>

<style>
.theme-switch-enter-active,
.theme-switch-leave-active {
  transition: opacity, rotate 0.3s ease;
}

.theme-switch-leave-from,
.theme-switch-enter-to {
  opacity: 1;
  rotate: 0deg;
}

.theme-switch-enter-from,
.theme-switch-leave-to {
  opacity: 0;
  rotate: 180deg;
}
</style>
