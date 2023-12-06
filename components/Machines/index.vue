<template>
  <div id="machines" class="w-full flex justify-center items-center my-20">
    <div
      class="container px-6 py-4 border-t rounded-3xl border-gray-200 dark:border-gray-700 flex flex-col gap-8 items-center"
    >
      <h2 class="text-2xl text-center">
        Innowacyjne rozwiązania technologiczne
      </h2>
      <div class="flex flex-wrap gap-2 sm:gap-4 p-2 justify-center">
        <MachinesCard
          title="Robot Spawalniczy Panasonic"
          img="/panasonic.png"
        />
        <MachinesCard title="Tokarka Mazak" img="/mazak.png" />
        <MachinesCard title="Frezarka Brother" img="/brother.png" />
        <MachinesCard title="Tokarka Kovosvit" img="/kovosvit-mas.png" />
      </div>
    </div>
  </div>
</template>
