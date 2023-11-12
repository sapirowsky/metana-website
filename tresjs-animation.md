const { onLoop } = useRenderLoop()
const animationRef = shallowRef()
onLoop(({ delta }) => {
if (animationRef.value) {
animationRef.value.rotation.y += delta / 3
animationRef.value.rotation.x += 0.001
}
})
