<script setup>
const { scene } = await useGLTF("/scene.glb")
</script>
<template>
  <primitive :object="scene" />
</template>
