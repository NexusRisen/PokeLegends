<script setup lang="ts">
interface Props {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  gradient?: boolean
  glow?: boolean
  constellation?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
  gradient: true,
  glow: true,
  constellation: false
})

const textRef = ref<HTMLElement | null>(null)
const stars = ref<Array<{ x: number; y: number; delay: number; size: number }>>([])

onMounted(() => {
  if (props.constellation && textRef.value) {
    const rect = textRef.value.getBoundingClientRect()
    const starCount = Math.floor(rect.width / 40) + 3

    for (let i = 0; i < starCount; i++) {
      stars.value.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        size: Math.random() * 2 + 1
      })
    }
  }
})

const textClasses = computed(() => ({
  'cosmic-text': props.gradient,
  'glow-text': props.glow
}))
</script>

<template>
  <component
    :is="tag"
    ref="textRef"
    class="relative inline-block"
    :class="textClasses"
  >
    <slot />

    <!-- Constellation stars overlay -->
    <span
      v-if="constellation && stars.length"
      class="absolute inset-0 pointer-events-none overflow-visible"
    >
      <span
        v-for="(star, i) in stars"
        :key="i"
        class="absolute rounded-full bg-white animate-twinkle"
        :style="{
          left: `${star.x}%`,
          top: `${star.y}%`,
          width: `${star.size}px`,
          height: `${star.size}px`,
          animationDelay: `${star.delay}s`,
          boxShadow: '0 0 4px rgba(255,255,255,0.8)'
        }"
      />
    </span>
  </component>
</template>
