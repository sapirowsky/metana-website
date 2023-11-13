<script setup>
const { scene } = await useGLTF("/atestv2.glb", { draco: true })
</script>
<template>
  <primitive :object="scene" />
</template>
