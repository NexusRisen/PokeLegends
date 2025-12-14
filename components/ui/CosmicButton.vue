<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost' | 'discord'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  external: false
})

const baseClasses = 'relative inline-flex items-center justify-center font-display font-bold transition-all duration-300 overflow-hidden group cursor-pointer'

const variantClasses = {
  primary: 'bg-gradient-to-r from-cosmic-purple via-cosmic-pink to-cosmic-purple bg-[length:200%_100%] text-white shadow-glow-purple hover:shadow-cosmic hover:bg-right',
  secondary: 'bg-transparent border-2 border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple hover:text-white',
  ghost: 'bg-cosmic-deep/50 backdrop-blur-sm text-white hover:bg-cosmic-purple/30 border border-cosmic-purple/30',
  discord: 'bg-[#5865F2] text-white hover:bg-[#4752C4] shadow-lg hover:shadow-[#5865F2]/50'
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm rounded-lg gap-2',
  md: 'px-6 py-3 text-base rounded-xl gap-2',
  lg: 'px-8 py-4 text-lg rounded-2xl gap-3'
}

const classes = computed(() => [
  baseClasses,
  variantClasses[props.variant],
  sizeClasses[props.size]
])
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :class="classes"
  >
    <!-- Shine effect -->
    <span
      class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"
    />

    <!-- Content -->
    <span class="relative z-10 flex items-center gap-2">
      <slot />
    </span>

    <!-- Particle effect on hover -->
    <span class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      <span class="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" />
      <span class="absolute top-1/3 right-1/4 w-1 h-1 bg-cosmic-cyan rounded-full animate-ping animate-delay-200" />
      <span class="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cosmic-pink rounded-full animate-ping animate-delay-300" />
    </span>
  </component>
</template>
