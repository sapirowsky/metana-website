<script setup>
const { scene } = await useGLTF("/atest.glb")
</script>
<template>
  <primitive :object="scene" />
</template>
