<script setup>
const { pause, resume } = useRenderLoop()

const { hasFinishLoading, progress } = await useProgress()
</script>
<template>
  <Transition
    name="fade-overlay"
    enter-active-class="opacity-1 transition-opacity duration-200"
    leave-active-class="opacity-0 transition-opacity duration-200"
  >
    <div
      v-show="!hasFinishLoading"
      class="absolute inset-0 w-full h-full z-20 flex justify-center items-center text-black font-mono"
    >
      <progress class="progress w-1/2" :value="progress" max="100"></progress>
    </div>
  </Transition>

  <TresCanvas clear-color="#0071bc">
    <TresPerspectiveCamera :position="[40, 50, 50]" :look-at="0" />
    <OrbitControls :enable-zoom="false" :auto-rotate="true" />

    <Suspense>
      <TresMesh>
        <Part />
      </TresMesh>
    </Suspense>

    <TresDirectionalLight :position="[0, 1, 0]" :intensity="1" />
    <TresDirectionalLight :position="[0, -1, 0]" :intensity="1" />
    <TresDirectionalLight :position="[-1, 0, 0]" :intensity="1" />
    <TresDirectionalLight :position="[1, 0, 0]" :intensity="1" />
    <TresDirectionalLight :position="[0, 0, 1]" :intensity="1" />
    <TresDirectionalLight :position="[0, 0, -1]" :intensity="1" />
  </TresCanvas>
</template>
