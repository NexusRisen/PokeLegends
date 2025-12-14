<script setup lang="ts">
import type { Sparkle, MascotExpression } from '~/types'
import gsap from 'gsap'

const { x: mouseX, y: mouseY } = useMousePosition()
const { scrollProgress } = useParallax()

const mascotRef = ref<HTMLElement | null>(null)
const position = ref({ x: 100, y: 100 })
const targetPosition = ref({ x: 100, y: 100 })
const expression = ref<MascotExpression['type']>('happy')
const sparkles = ref<Sparkle[]>([])
const isVisible = ref(true)

let sparkleId = 0
let animationFrame: number

const mascotStyle = computed(() => ({
  transform: `translate(${position.value.x}px, ${position.value.y}px)`,
  opacity: isVisible.value ? 1 : 0
}))

const eyeOffset = computed(() => {
  const dx = (mouseX.value - position.value.x - 48) / 80
  const dy = (mouseY.value - position.value.y - 48) / 80
  return {
    x: Math.max(-4, Math.min(4, dx)),
    y: Math.max(-4, Math.min(4, dy))
  }
})

const updatePosition = () => {
  // Smooth follow with easing
  targetPosition.value.x = mouseX.value - 48
  targetPosition.value.y = mouseY.value - 48

  // Keep within viewport
  targetPosition.value.x = Math.max(0, Math.min(window.innerWidth - 96, targetPosition.value.x))
  targetPosition.value.y = Math.max(0, Math.min(window.innerHeight - 96, targetPosition.value.y))

  position.value.x += (targetPosition.value.x - position.value.x) * 0.08
  position.value.y += (targetPosition.value.y - position.value.y) * 0.08

  // Spawn sparkle trail occasionally
  if (Math.random() > 0.85) {
    spawnSparkle()
  }

  animationFrame = requestAnimationFrame(updatePosition)
}

const spawnSparkle = () => {
  if (sparkles.value.length > 15) return

  const sparkle: Sparkle = {
    id: sparkleId++,
    x: position.value.x + 48 + (Math.random() - 0.5) * 40,
    y: position.value.y + 48 + (Math.random() - 0.5) * 40,
    opacity: 1,
    scale: Math.random() * 0.5 + 0.5
  }
  sparkles.value.push(sparkle)

  // Animate and remove
  gsap.to(sparkle, {
    opacity: 0,
    y: sparkle.y - 30,
    scale: 0,
    duration: 1.2,
    ease: 'power2.out',
    onComplete: () => {
      const index = sparkles.value.findIndex(s => s.id === sparkle.id)
      if (index > -1) sparkles.value.splice(index, 1)
    }
  })
}

// Change expression based on scroll position
watch(scrollProgress, (progress) => {
  if (progress < 0.2) expression.value = 'happy'
  else if (progress < 0.5) expression.value = 'curious'
  else if (progress < 0.8) expression.value = 'excited'
  else expression.value = 'sleepy'
})

// Hide on mobile
const checkMobile = () => {
  isVisible.value = window.innerWidth > 768
}

onMounted(() => {
  position.value = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  }

  checkMobile()
  window.addEventListener('resize', checkMobile)

  animationFrame = requestAnimationFrame(updatePosition)

  // Floating animation
  if (mascotRef.value) {
    gsap.to(mascotRef.value, {
      y: '-=15',
      duration: 2.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1
    })
  }
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrame)
  window.removeEventListener('resize', checkMobile)
})
</script>

<template>
  <div
    class="fixed inset-0 z-40 pointer-events-none overflow-hidden"
    aria-hidden="true"
  >
    <!-- Sparkle trail -->
    <TransitionGroup name="sparkle">
      <div
        v-for="sparkle in sparkles"
        :key="sparkle.id"
        class="absolute rounded-full"
        :style="{
          left: `${sparkle.x}px`,
          top: `${sparkle.y}px`,
          width: `${8 * sparkle.scale}px`,
          height: `${8 * sparkle.scale}px`,
          opacity: sparkle.opacity,
          background: 'radial-gradient(circle, rgba(236,72,153,0.8) 0%, rgba(139,92,246,0.4) 50%, transparent 70%)',
          boxShadow: '0 0 10px rgba(236, 72, 153, 0.6)'
        }"
      />
    </TransitionGroup>

    <!-- Mew mascot -->
    <div
      ref="mascotRef"
      class="absolute w-24 h-24 transition-opacity duration-300"
      :style="mascotStyle"
    >
      <!-- Glow effect behind Mew -->
      <div class="absolute inset-0 rounded-full bg-cosmic-pink/20 blur-xl animate-pulse-glow" />

      <svg viewBox="0 0 100 100" class="w-full h-full drop-shadow-lg">
        <!-- Tail -->
        <path
          d="M70 55 Q85 45 80 30 Q78 20 70 25"
          stroke="#F8BBD9"
          stroke-width="10"
          fill="none"
          stroke-linecap="round"
          class="origin-bottom-left"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 70 55; 5 70 55; 0 70 55; -5 70 55; 0 70 55"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>

        <!-- Body -->
        <ellipse cx="50" cy="58" rx="22" ry="26" fill="#F8BBD9" />

        <!-- Head -->
        <circle cx="50" cy="32" r="22" fill="#F8BBD9" />

        <!-- Inner ears -->
        <ellipse cx="32" cy="14" rx="7" ry="11" fill="#F8BBD9" />
        <ellipse cx="68" cy="14" rx="7" ry="11" fill="#F8BBD9" />
        <ellipse cx="32" cy="16" rx="4" ry="6" fill="#FFB6C1" />
        <ellipse cx="68" cy="16" rx="4" ry="6" fill="#FFB6C1" />

        <!-- Eyes with tracking -->
        <g :style="{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }">
          <!-- Eye whites -->
          <ellipse cx="42" cy="30" rx="7" ry="8" fill="white" />
          <ellipse cx="58" cy="30" rx="7" ry="8" fill="white" />

          <!-- Pupils -->
          <circle cx="43" cy="31" r="4" fill="#4A90D9" />
          <circle cx="59" cy="31" r="4" fill="#4A90D9" />

          <!-- Eye shine -->
          <circle cx="44" cy="29" r="1.5" fill="white" />
          <circle cx="60" cy="29" r="1.5" fill="white" />
        </g>

        <!-- Expressions -->
        <g v-if="expression === 'happy'">
          <path d="M 45 40 Q 50 44 55 40" stroke="#333" stroke-width="1.5" fill="none" stroke-linecap="round" />
        </g>
        <g v-else-if="expression === 'curious'">
          <ellipse cx="50" cy="41" rx="3" ry="2.5" fill="#333" />
        </g>
        <g v-else-if="expression === 'excited'">
          <path d="M 44 39 Q 50 46 56 39" stroke="#333" stroke-width="1.5" fill="none" stroke-linecap="round" />
          <ellipse cx="50" cy="42" rx="4" ry="3" fill="#FF6B8A" opacity="0.6" />
        </g>
        <g v-else-if="expression === 'sleepy'">
          <path d="M 40 30 L 46 32" stroke="#333" stroke-width="2" stroke-linecap="round" />
          <path d="M 54 32 L 60 30" stroke="#333" stroke-width="2" stroke-linecap="round" />
          <path d="M 47 42 L 53 42" stroke="#333" stroke-width="1.5" stroke-linecap="round" />
        </g>

        <!-- Blush -->
        <ellipse cx="35" cy="38" rx="5" ry="3" fill="#FFB6C1" opacity="0.5" />
        <ellipse cx="65" cy="38" rx="5" ry="3" fill="#FFB6C1" opacity="0.5" />

        <!-- Feet -->
        <ellipse cx="38" cy="82" rx="8" ry="5" fill="#F8BBD9" />
        <ellipse cx="62" cy="82" rx="8" ry="5" fill="#F8BBD9" />

        <!-- Cosmic glow around Mew -->
        <circle cx="50" cy="50" r="48" fill="url(#mewGlow)" />

        <defs>
          <radialGradient id="mewGlow">
            <stop offset="60%" stop-color="transparent" />
            <stop offset="85%" stop-color="rgba(236, 72, 153, 0.15)" />
            <stop offset="100%" stop-color="rgba(139, 92, 246, 0.1)" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.sparkle-enter-active {
  transition: all 0.3s ease-out;
}
.sparkle-leave-active {
  transition: all 0.5s ease-in;
}
.sparkle-enter-from {
  opacity: 0;
  transform: scale(0);
}
.sparkle-leave-to {
  opacity: 0;
  transform: scale(0) translateY(-20px);
}
</style>
