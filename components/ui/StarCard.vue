<script setup lang="ts">
interface Props {
  hoverable?: boolean
  glowColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  hoverable: true,
  glowColor: 'rgba(139, 92, 246, 0.15)'
})

const cardRef = ref<HTMLElement | null>(null)
const isHovered = ref(false)
const mousePosition = ref({ x: 0, y: 0 })

const handleMouseMove = (event: MouseEvent) => {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  mousePosition.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}

const glowStyle = computed(() => {
  if (!isHovered.value) return {}
  return {
    background: `radial-gradient(circle at ${mousePosition.value.x}px ${mousePosition.value.y}px, ${props.glowColor}, transparent 50%)`
  }
})
</script>

<template>
  <div
    ref="cardRef"
    class="glass-panel p-6 relative overflow-hidden transition-all duration-300"
    :class="{
      'hover:scale-[1.02] hover:shadow-cosmic cursor-pointer': hoverable
    }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @mousemove="handleMouseMove"
  >
    <!-- Dynamic glow based on mouse position -->
    <div
      class="absolute inset-0 pointer-events-none transition-opacity duration-300"
      :class="isHovered ? 'opacity-100' : 'opacity-0'"
      :style="glowStyle"
    />

    <!-- Content -->
    <div class="relative z-10">
      <slot />
    </div>

    <!-- Corner decorations -->
    <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cosmic-purple/50 rounded-tl-lg" />
    <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cosmic-purple/50 rounded-tr-lg" />
    <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cosmic-purple/50 rounded-bl-lg" />
    <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cosmic-purple/50 rounded-br-lg" />
  </div>
</template>
