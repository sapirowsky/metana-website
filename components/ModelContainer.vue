<script setup></script>
<template>
  <TresCanvas clear-color="#0071bc">
    <TresPerspectiveCamera :position="50" :look-at="0" />
    <OrbitControls :enable-zoom="false" />
    <Suspense>
      <TresMesh>
        <Part />
      </TresMesh>
    </Suspense>
    <TresDirectionalLight :position="[-4, 8, 4]" :intensity="1" cast-shadow />
    <TresDirectionalLight :position="[4, -8, -4]" :intensity="1" cast-shadow />
  </TresCanvas>
</template>
