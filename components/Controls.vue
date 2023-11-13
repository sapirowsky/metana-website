<script setup>
const colorMode = useColorMode()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
<template>
  <div class="flex items-center gap-4">
    <div class="dropdown dropdown-end">
      <label
        tabindex="0"
        class="btn bg-transparent border-none hover:bg-transparent p-0"
      >
        <UiLanguage class="fill-black dark:fill-white h-6 w-6 md:h-8 md:w-8" />
        <UiArrowFacedDown class="fill-gray-800 dark:fill-gray-300" />
      </label>
      <ul
        tabindex="0"
        class="dropdown-content z-[1] menu p-2 shadow bg-gray-300 dark:bg-gray-800 rounded-box w-max"
      >
        <li v-for="{ code, name } in locales" :key="code">
          <NuxtLink
            :to="switchLocalePath(code)"
            :class="{
              'bg-gray-400 dark:bg-gray-900': code === locale,
            }"
            :external="true"
          >
            <span
              class="badge badge-sm badge-outline font-mono font-bold tracking-widest opacity-50"
            >
              {{ code }}
            </span>
            <p>{{ name }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="tooltip tooltip-left" :data-tip="$t('controls.changeTheme')">
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
        <p class="sr-only">{{ $t("controls.changeTheme") }}</p>
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
