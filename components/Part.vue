<script setup>
const { scene, nodes, animations, materials } = await useGLTF("/scene.glb", {
  draco: true,
})
console.log(nodes)
</script>
<template>
  <primitive :object="scene" />
</template>
