export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)
  const normalizedX = ref(0)
  const normalizedY = ref(0)

  const updatePosition = (event: MouseEvent) => {
    x.value = event.clientX
    y.value = event.clientY

    if (typeof window !== 'undefined') {
      normalizedX.value = (event.clientX / window.innerWidth) * 2 - 1
      normalizedY.value = (event.clientY / window.innerHeight) * 2 - 1
    }
  }

  onMounted(() => {
    window.addEventListener('mousemove', updatePosition, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', updatePosition)
  })

  return { x, y, normalizedX, normalizedY }
}
