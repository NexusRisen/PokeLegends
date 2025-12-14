<script setup lang="ts">
import type { Star, Nebula } from '~/types'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let animationId: number

const stars: Star[] = []
const nebulae: Nebula[] = []
const shootingStars: Array<{
  x: number
  y: number
  length: number
  speed: number
  angle: number
  opacity: number
}> = []

const STAR_COUNT = 350
const NEBULA_COUNT = 5

const { normalizedX, normalizedY } = useMousePosition()
const { scrollY } = useParallax()

const initCanvas = () => {
  if (!canvasRef.value) return

  const canvas = canvasRef.value
  ctx = canvas.getContext('2d')

  const resize = () => {
    if (!canvas) return
    canvas.width = window.innerWidth
    canvas.height = Math.max(window.innerHeight * 3, document.body.scrollHeight)
    initStars()
    initNebulae()
  }

  window.addEventListener('resize', resize)
  resize()
}

const initStars = () => {
  stars.length = 0
  if (!canvasRef.value) return

  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * canvasRef.value.width,
      y: Math.random() * canvasRef.value.height,
      size: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.5 + 0.1,
      twinkleOffset: Math.random() * Math.PI * 2
    })
  }
}

const initNebulae = () => {
  nebulae.length = 0
  if (!canvasRef.value) return

  const colors = [
    'rgba(139, 92, 246, 0.12)',  // Purple
    'rgba(236, 72, 153, 0.10)',  // Pink
    'rgba(59, 130, 246, 0.08)',  // Blue
    'rgba(34, 211, 238, 0.06)',  // Cyan
    'rgba(251, 191, 36, 0.05)'   // Gold
  ]

  for (let i = 0; i < NEBULA_COUNT; i++) {
    nebulae.push({
      x: Math.random() * canvasRef.value.width,
      y: (canvasRef.value.height / NEBULA_COUNT) * i + Math.random() * 300,
      size: Math.random() * 500 + 300,
      color: colors[i % colors.length],
      opacity: 0.3 + Math.random() * 0.3,
      speed: {
        x: (Math.random() - 0.5) * 0.3,
        y: (Math.random() - 0.5) * 0.2
      }
    })
  }
}

const spawnShootingStar = () => {
  if (Math.random() > 0.003 || shootingStars.length > 2) return
  if (!canvasRef.value) return

  const startX = Math.random() * canvasRef.value.width
  const startY = Math.random() * (canvasRef.value.height * 0.5)

  shootingStars.push({
    x: startX,
    y: startY + scrollY.value,
    length: Math.random() * 150 + 80,
    speed: Math.random() * 20 + 15,
    angle: Math.PI / 4 + (Math.random() - 0.5) * 0.4,
    opacity: 1
  })
}

const drawNebulae = (time: number) => {
  if (!ctx || !canvasRef.value) return

  nebulae.forEach((nebula, index) => {
    // Slowly drift
    nebula.x += nebula.speed.x
    nebula.y += nebula.speed.y

    // Wrap around
    if (nebula.x < -nebula.size) nebula.x = canvasRef.value!.width + nebula.size
    if (nebula.x > canvasRef.value!.width + nebula.size) nebula.x = -nebula.size

    // Breathing effect
    const breathe = Math.sin(time * 0.0005 + index) * 0.1 + 1

    const gradient = ctx!.createRadialGradient(
      nebula.x + normalizedX.value * 20,
      nebula.y - scrollY.value * 0.2,
      0,
      nebula.x + normalizedX.value * 20,
      nebula.y - scrollY.value * 0.2,
      nebula.size * breathe
    )
    gradient.addColorStop(0, nebula.color)
    gradient.addColorStop(0.5, nebula.color.replace(/[\d.]+\)$/, `${nebula.opacity * 0.5})`))
    gradient.addColorStop(1, 'transparent')

    ctx!.fillStyle = gradient
    ctx!.beginPath()
    ctx!.arc(
      nebula.x + normalizedX.value * 20,
      nebula.y - scrollY.value * 0.2,
      nebula.size * breathe,
      0,
      Math.PI * 2
    )
    ctx!.fill()
  })
}

const drawStars = (time: number) => {
  if (!ctx) return

  stars.forEach(star => {
    const twinkle = Math.sin(time * 0.003 + star.twinkleOffset) * 0.4 + 0.6
    const parallaxX = normalizedX.value * star.speed * 30
    const parallaxY = normalizedY.value * star.speed * 30

    const x = star.x + parallaxX
    const y = star.y + parallaxY - scrollY.value * star.speed * 0.5

    // Only draw if in viewport (with buffer)
    const viewportY = scrollY.value
    if (y < viewportY - 100 || y > viewportY + window.innerHeight + 100) return

    ctx!.beginPath()
    ctx!.arc(x, y, star.size * twinkle, 0, Math.PI * 2)
    ctx!.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`
    ctx!.fill()

    // Add glow to larger stars
    if (star.size > 1.8) {
      const glowGradient = ctx!.createRadialGradient(x, y, 0, x, y, star.size * 6)
      glowGradient.addColorStop(0, `rgba(255, 255, 255, ${0.3 * twinkle})`)
      glowGradient.addColorStop(0.5, `rgba(139, 92, 246, ${0.1 * twinkle})`)
      glowGradient.addColorStop(1, 'transparent')

      ctx!.fillStyle = glowGradient
      ctx!.beginPath()
      ctx!.arc(x, y, star.size * 6, 0, Math.PI * 2)
      ctx!.fill()
    }
  })
}

const drawShootingStars = () => {
  if (!ctx) return

  for (let i = shootingStars.length - 1; i >= 0; i--) {
    const star = shootingStars[i]

    star.x += Math.cos(star.angle) * star.speed
    star.y += Math.sin(star.angle) * star.speed
    star.opacity -= 0.015

    if (star.opacity <= 0) {
      shootingStars.splice(i, 1)
      continue
    }

    const tailX = star.x - Math.cos(star.angle) * star.length
    const tailY = star.y - Math.sin(star.angle) * star.length

    const gradient = ctx!.createLinearGradient(star.x, star.y, tailX, tailY)
    gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`)
    gradient.addColorStop(0.3, `rgba(139, 92, 246, ${star.opacity * 0.7})`)
    gradient.addColorStop(1, 'transparent')

    ctx!.strokeStyle = gradient
    ctx!.lineWidth = 2
    ctx!.lineCap = 'round'
    ctx!.beginPath()
    ctx!.moveTo(star.x, star.y)
    ctx!.lineTo(tailX, tailY)
    ctx!.stroke()

    // Bright head
    ctx!.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
    ctx!.beginPath()
    ctx!.arc(star.x, star.y, 3, 0, Math.PI * 2)
    ctx!.fill()
  }
}

const animate = (time: number) => {
  if (!ctx || !canvasRef.value) {
    animationId = requestAnimationFrame(animate)
    return
  }

  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)

  drawNebulae(time)
  drawStars(time)
  spawnShootingStar()
  drawShootingStars()

  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  initCanvas()
  animationId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
})
</script>

<template>
  <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    <!-- Base gradient -->
    <div class="absolute inset-0 bg-cosmic-radial" />

    <!-- Canvas for stars and nebulae -->
    <canvas
      ref="canvasRef"
      class="absolute inset-0"
      aria-hidden="true"
    />

    <!-- CSS Nebula overlays for extra depth -->
    <div
      class="nebula-cloud w-[600px] h-[600px] bg-cosmic-purple/10 top-[10%] left-[10%]"
    />
    <div
      class="nebula-cloud w-[500px] h-[500px] bg-cosmic-pink/10 top-[30%] right-[15%] animate-delay-1000"
    />
    <div
      class="nebula-cloud w-[400px] h-[400px] bg-cosmic-cyan/5 bottom-[20%] left-[20%] animate-delay-2000"
    />
  </div>
</template>
