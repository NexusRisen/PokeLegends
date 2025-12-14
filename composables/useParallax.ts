export function useParallax(speed: number = 0.5) {
  const scrollY = ref(0)
  const windowHeight = ref(0)
  const documentHeight = ref(0)

  const parallaxY = computed(() => scrollY.value * speed)

  const scrollProgress = computed(() => {
    if (documentHeight.value <= windowHeight.value) return 0
    return scrollY.value / (documentHeight.value - windowHeight.value)
  })

  const handleScroll = () => {
    scrollY.value = window.scrollY
  }

  const handleResize = () => {
    windowHeight.value = window.innerHeight
    documentHeight.value = document.body.scrollHeight
  }

  onMounted(() => {
    windowHeight.value = window.innerHeight
    documentHeight.value = document.body.scrollHeight

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
  })

  return {
    scrollY,
    parallaxY,
    scrollProgress,
    windowHeight,
    documentHeight
  }
}
