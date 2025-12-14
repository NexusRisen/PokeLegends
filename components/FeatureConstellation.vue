<script setup lang="ts">
import type { Feature } from '~/types'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const sectionRef = ref<HTMLElement | null>(null)

const features = ref<Feature[]>([
  {
    id: 'community',
    title: 'Active Community',
    description: 'Join thousands of trainers sharing their Pokemon journey daily',
    icon: '👥',
    color: '#6b21a8',
    glowColor: 'rgba(107, 33, 168, 0.4)',
    position: { x: 15, y: 25 }
  },
  {
    id: 'events',
    title: 'Events & Tournaments',
    description: 'Compete in weekly tournaments and special cosmic events',
    icon: '🏆',
    color: '#fbbf24',
    glowColor: 'rgba(251, 191, 36, 0.4)',
    position: { x: 50, y: 10 }
  },
  {
    id: 'trading',
    title: 'Trading Hub',
    description: 'Safe and active trading marketplace for all Pokemon games',
    icon: '🔄',
    color: '#22d3ee',
    glowColor: 'rgba(34, 211, 238, 0.4)',
    position: { x: 85, y: 25 }
  },
  {
    id: 'guides',
    title: 'Guides & Resources',
    description: 'Comprehensive guides for competitive play and shiny hunting',
    icon: '📚',
    color: '#3b82f6',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    position: { x: 25, y: 70 }
  },
  {
    id: 'creative',
    title: 'Creative Showcase',
    description: 'Share your fan art, memes, and creative Pokemon content',
    icon: '🎨',
    color: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.4)',
    position: { x: 75, y: 70 }
  },
  {
    id: 'safe',
    title: 'Safe Environment',
    description: 'Moderated space welcoming trainers of all ages and skill levels',
    icon: '🛡️',
    color: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    position: { x: 50, y: 90 }
  }
])

const hoveredFeature = ref<string | null>(null)

// Constellation lines connecting features
const constellationLines = computed(() => [
  { from: 'community', to: 'events' },
  { from: 'events', to: 'trading' },
  { from: 'community', to: 'guides' },
  { from: 'trading', to: 'creative' },
  { from: 'guides', to: 'creative' },
  { from: 'guides', to: 'safe' },
  { from: 'creative', to: 'safe' },
  { from: 'events', to: 'safe' }
])

const getLineCoords = (fromId: string, toId: string) => {
  const from = features.value.find(f => f.id === fromId)
  const to = features.value.find(f => f.id === toId)
  if (!from || !to) return null

  return {
    x1: from.position.x,
    y1: from.position.y,
    x2: to.position.x,
    y2: to.position.y
  }
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  if (!sectionRef.value) return

  // Animate section title
  gsap.fromTo('.feature-title',
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%'
      }
    }
  )

  // Animate constellation lines drawing
  gsap.fromTo('.constellation-line',
    { strokeDashoffset: 200 },
    {
      strokeDashoffset: 0,
      duration: 1.5,
      stagger: 0.15,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 60%'
      }
    }
  )

  // Animate feature stars appearing
  gsap.fromTo('.feature-star',
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      stagger: 0.12,
      ease: 'back.out(2)',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 50%'
      }
    }
  )
})
</script>

<template>
  <section
    id="features"
    ref="sectionRef"
    class="relative min-h-screen py-32 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-16 sm:mb-24">
        <h2 class="feature-title font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <UiGlowingText>Constellation of Features</UiGlowingText>
        </h2>
        <p class="feature-title text-white/60 text-lg sm:text-xl max-w-2xl mx-auto">
          Discover the stars that make our cosmic community shine
        </p>
      </div>

      <!-- Constellation Map - Desktop -->
      <div class="relative hidden lg:block aspect-[16/9] max-w-5xl mx-auto">
        <!-- SVG Constellation Lines -->
        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="rgba(139, 92, 246, 0.6)" />
              <stop offset="50%" stop-color="rgba(236, 72, 153, 0.6)" />
              <stop offset="100%" stop-color="rgba(34, 211, 238, 0.6)" />
            </linearGradient>
          </defs>

          <line
            v-for="(line, index) in constellationLines"
            :key="index"
            v-bind="getLineCoords(line.from, line.to)"
            stroke="url(#lineGradient)"
            stroke-width="0.15"
            stroke-dasharray="200"
            class="constellation-line"
            :style="{ strokeDashoffset: 200 }"
          />
        </svg>

        <!-- Feature Stars -->
        <div
          v-for="feature in features"
          :key="feature.id"
          class="feature-star absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
          :style="{
            left: `${feature.position.x}%`,
            top: `${feature.position.y}%`
          }"
          @mouseenter="hoveredFeature = feature.id"
          @mouseleave="hoveredFeature = null"
        >
          <!-- Star glow effect -->
          <div
            class="absolute inset-0 rounded-full blur-2xl transition-all duration-500 -z-10"
            :class="hoveredFeature === feature.id ? 'scale-[2] opacity-70' : 'scale-100 opacity-40'"
            :style="{ backgroundColor: feature.color }"
          />

          <!-- Star core -->
          <div
            class="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-3xl sm:text-4xl transition-all duration-300 border-2"
            :class="hoveredFeature === feature.id ? 'scale-125' : 'scale-100'"
            :style="{
              backgroundColor: `${feature.color}20`,
              borderColor: `${feature.color}60`,
              boxShadow: `0 0 30px ${feature.glowColor}`
            }"
          >
            {{ feature.icon }}
          </div>

          <!-- Feature Card (appears on hover) -->
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 scale-90 translate-y-4"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-90 translate-y-4"
          >
            <div
              v-if="hoveredFeature === feature.id"
              class="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-64 z-20"
            >
              <UiStarCard :hoverable="false" :glow-color="feature.glowColor">
                <h3
                  class="font-display text-lg font-bold mb-2"
                  :style="{ color: feature.color }"
                >
                  {{ feature.title }}
                </h3>
                <p class="text-white/70 text-sm">
                  {{ feature.description }}
                </p>
              </UiStarCard>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Mobile/Tablet Feature Grid -->
      <div class="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
        <UiStarCard
          v-for="feature in features"
          :key="feature.id"
          :glow-color="feature.glowColor"
        >
          <div class="flex items-start gap-4">
            <div
              class="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
              :style="{
                backgroundColor: `${feature.color}20`,
                boxShadow: `0 0 20px ${feature.glowColor}`
              }"
            >
              {{ feature.icon }}
            </div>
            <div>
              <h3
                class="font-display font-bold text-lg mb-1"
                :style="{ color: feature.color }"
              >
                {{ feature.title }}
              </h3>
              <p class="text-white/60 text-sm">{{ feature.description }}</p>
            </div>
          </div>
        </UiStarCard>
      </div>
    </div>
  </section>
</template>
