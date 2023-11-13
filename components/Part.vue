<script setup>
const { scene } = await useGLTF("/atest.glb", { draco: true })
</script>
<template>
  <primitive :object="scene" />
</template>
