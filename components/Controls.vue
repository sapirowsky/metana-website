<script setup>
const colorMode = useColorMode();
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>
<template>
  <div class="flex items-center gap-4">
    <div class="dropdown dropdown-end">
      <label
        tabindex="0"
        class="btn border-none bg-transparent p-0 hover:bg-transparent"
      >
        <UiLanguage class="h-6 w-6 fill-black dark:fill-white md:h-8 md:w-8" />
        <UiArrowFacedDown class="fill-gray-800 dark:fill-gray-300" />
      </label>
      <ul
        tabindex="0"
        class="menu dropdown-content rounded-box z-[1] w-max bg-gray-300 p-2 shadow dark:bg-gray-800"
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
              class="badge badge-outline badge-sm font-mono font-bold tracking-widest opacity-50"
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
        class="relative grid h-8 w-8 cursor-pointer place-content-center rounded-full p-[auto] md:h-10 md:w-10"
        @click="
          colorMode.preference === 'dark'
            ? (colorMode.preference = 'light')
            : (colorMode.preference = 'dark')
        "
      >
        <Transition name="theme-switch">
          <UiDark
            class="theme-icon absolute h-8 w-8 md:h-10 md:w-10"
            v-if="colorMode.preference === 'dark'"
          />
        </Transition>
        <Transition name="theme-switch">
          <UiLight
            class="theme-icon absolute h-8 w-8 md:h-10 md:w-10"
            v-if="colorMode.preference === 'light'"
          />
        </Transition>
        <Transition name="theme-switch">
          <UiTheme
            class="theme-icon absolute h-8 w-8 md:h-10 md:w-10"
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
  transition:
    opacity,
    rotate 0.3s ease;
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
