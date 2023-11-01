<script setup></script>
<template>
  <TresCanvas clear-color="#0071bc">
    <TresPerspectiveCamera :position="30" :look-at="0" />
    <OrbitControls />
    <Suspense>
      <TresMesh>
        <Part />
      </TresMesh>
    </Suspense>
    <TresDirectionalLight :position="[-4, 8, 4]" :intensity="1.5" cast-shadow />
    <TresDirectionalLight
      :position="[4, -8, -4]"
      :intensity="1.5"
      cast-shadow
    />
  </TresCanvas>
</template>
