<script setup>
const { scene } = await useGLTF("/atestv2.glb", { draco: true })
const { onLoop } = useRenderLoop()
const animationRef = shallowRef()
onLoop(({ delta }) => {
  if (animationRef.value) {
    animationRef.value.rotation.y += delta / 3
    animationRef.value.rotation.x += 0.003
  }
})
</script>
<template>
  <primitive ref="animationRef" :object="scene" />
</template>
