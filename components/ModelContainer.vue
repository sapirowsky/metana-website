<script setup>
const { pause, resume } = useRenderLoop()
</script>
<template>
  <TresCanvas clear-color="#0071bc">
    <TresPerspectiveCamera :position="50" :look-at="0" />
    <OrbitControls :enable-zoom="false" />
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
