<template>
  <div id="machines" class="my-20 flex w-full items-center justify-center">
    <div
      class="container flex flex-col items-center gap-8 rounded-3xl border-t border-gray-200 px-6 py-4 dark:border-gray-700"
    >
      <h2 class="text-center text-2xl">
        {{ $t("machines.title") }}
      </h2>
      <div class="flex flex-wrap justify-center gap-2 p-2 sm:gap-4">
        <MachinesCard
          :title="$t('machines.first.title')"
          :img="$t('machines.first.photo')"
          :alt="$t('machines.first.title')"
        />
        <MachinesCard
          :title="$t('machines.second.title')"
          :img="$t('machines.second.photo')"
          :alt="$t('machines.second.title')"
        />
        <MachinesCard
          :title="$t('machines.third.title')"
          :img="$t('machines.third.photo')"
          :alt="$t('machines.third.title')"
        />
        <MachinesCard
          :title="$t('machines.fourth.title')"
          :img="$t('machines.fourth.photo')"
          :alt="$t('machines.fourth.title')"
        />
      </div>
    </div>
  </div>
</template>
