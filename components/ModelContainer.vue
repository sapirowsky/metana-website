<script setup>
const { pause, resume } = useRenderLoop();

const { hasFinishLoading, progress } = await useProgress();
</script>
<template>
  <Transition
    name="fade-overlay"
    enter-active-class="opacity-1 transition-opacity duration-200"
    leave-active-class="opacity-0 transition-opacity duration-200"
  >
    <div
      v-show="!hasFinishLoading"
      class="absolute inset-0 flex h-full w-full items-center justify-center text-black"
    >
      <progress class="progress w-1/2" :value="progress" max="100"></progress>
    </div>
  </Transition>

  <TresCanvas :alpha="true">
    <TresPerspectiveCamera :position="[40, 50, 50]" :look-at="0" />
    <OrbitControls
      :enable-zoom="false"
      :enable-pan="false"
      :enable-rotate="true"
    />

    <Suspense>
      <TresMesh>
        <Part />
      </TresMesh>
    </Suspense>
    <TresDirectionalLight :position="[0, 1, 0]" :intensity="1.5" />
    <TresDirectionalLight :position="[0, -1, 0]" :intensity="1.5" />
    <TresDirectionalLight :position="[-1, 0, 0]" :intensity="1.5" />
    <TresDirectionalLight :position="[1, 0, 0]" :intensity="1" />
    <TresDirectionalLight :position="[0, 0, 1]" :intensity="1" />
    <TresDirectionalLight :position="[0, 0, -1]" :intensity="1" />
  </TresCanvas>
</template>
