<template>
  <div id="machines" class="w-full flex justify-center items-center my-20">
    <div
      class="container px-6 py-4 border-t rounded-3xl border-gray-200 dark:border-gray-700 flex flex-col gap-8 items-center"
    >
      <h2 class="text-2xl text-center">
        {{ $t("machines.title") }}
      </h2>
      <div class="flex flex-wrap gap-2 sm:gap-4 p-2 justify-center">
        <MachinesCard
          :title="$t('machines.first.title')"
          :img="$t('machines.first.photo')"
        />
        <MachinesCard
          :title="$t('machines.second.title')"
          :img="$t('machines.second.photo')"
        />
        <MachinesCard
          :title="$t('machines.third.title')"
          :img="$t('machines.third.photo')"
        />
        <MachinesCard
          :title="$t('machines.fourth.title')"
          :img="$t('machines.fourth.photo')"
        />
      </div>
    </div>
  </div>
</template>
