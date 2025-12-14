<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const isLoaded = ref(false)
const loadingProgress = ref(0)
const loadingMessage = ref('Entering the cosmos...')

const loadingMessages = [
  'Entering the cosmos...',
  'Summoning legendary Pokemon...',
  'Aligning the stars...',
  'Opening the portal...',
  'Ready to explore!'
]

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  // Simulate loading with progress
  let progress = 0
  const loadingInterval = setInterval(() => {
    progress += Math.random() * 15 + 5
    if (progress >= 100) {
      progress = 100
      clearInterval(loadingInterval)

      // Fade out loader
      gsap.to('.loader', {
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        ease: 'power2.inOut',
        onComplete: () => {
          isLoaded.value = true
        }
      })
    }
    loadingProgress.value = Math.min(progress, 100)
    loadingMessage.value = loadingMessages[Math.floor((progress / 100) * (loadingMessages.length - 1))]
  }, 150)
})

useSeoMeta({
  title: 'Pokémon Mythicals | Cosmic Pokemon Community',
  ogTitle: 'Pokémon Mythicals',
  description: 'Join the most mystical Pokemon community in the cosmos. Active trading, tournaments, legendary encounters, and a welcoming community of trainers from across the universe.',
  ogDescription: 'Enter the cosmic Pokemon universe',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="relative">
    <!-- Loading Screen -->
    <div
      v-if="!isLoaded"
      class="loader fixed inset-0 z-[100] flex items-center justify-center bg-cosmic-void"
    >
      <!-- Background effects -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cosmic-purple/10 blur-3xl animate-nebula-drift" />
        <div class="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-cosmic-pink/10 blur-3xl animate-nebula-drift animate-delay-1000" />
      </div>

      <div class="relative text-center px-4">
        <!-- Animated Pokeball loader -->
        <div class="relative w-20 h-20 mx-auto mb-6">
          <!-- Outer glow -->
          <div class="absolute inset-0 rounded-full bg-cosmic-purple/30 blur-xl animate-pulse" />

          <!-- Pokeball SVG -->
          <svg viewBox="0 0 100 100" class="w-full h-full animate-spin-slow">
            <!-- Top half (red with cosmic gradient) -->
            <defs>
              <linearGradient id="cosmicRed" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ec4899" />
                <stop offset="100%" stop-color="#6b21a8" />
              </linearGradient>
            </defs>
            <path d="M50 5 A45 45 0 0 1 95 50 L65 50 A15 15 0 0 0 35 50 L5 50 A45 45 0 0 1 50 5Z" fill="url(#cosmicRed)" />
            <!-- Bottom half (white/silver) -->
            <path d="M50 95 A45 45 0 0 1 5 50 L35 50 A15 15 0 0 0 65 50 L95 50 A45 45 0 0 1 50 95Z" fill="#e5e7eb" />
            <!-- Center button -->
            <circle cx="50" cy="50" r="12" fill="#fff" stroke="#333" stroke-width="3" />
            <circle cx="50" cy="50" r="6" fill="#333" />
            <!-- Middle line -->
            <rect x="5" y="48" width="90" height="4" fill="#333" />
          </svg>
        </div>

        <!-- Loading text -->
        <p class="font-display text-lg cosmic-text mb-4">
          {{ loadingMessage }}
        </p>

        <!-- Progress bar -->
        <div class="w-48 h-1 bg-cosmic-deep rounded-full mx-auto overflow-hidden">
          <div
            class="h-full bg-gradient-to-r from-cosmic-purple via-cosmic-pink to-cosmic-cyan rounded-full transition-all duration-300"
            :style="{ width: `${loadingProgress}%` }"
          />
        </div>

        <!-- Progress percentage -->
        <p class="text-white/40 text-sm mt-2 font-mono">
          {{ Math.round(loadingProgress) }}%
        </p>
      </div>
    </div>

    <!-- Main Content (hidden until loaded) -->
    <div :class="isLoaded ? 'opacity-100' : 'opacity-0'" class="transition-opacity duration-500">
      <!-- Background Layer (fixed) -->
      <CosmicBackground />

      <!-- Mascot (fixed, follows cursor) -->
      <Mascot />

      <!-- Content -->
      <div class="relative z-10">
        <TheNavbar />

        <main>
          <HeroGateway />
          <FeatureConstellation />
          <LegendarySanctuary />
        </main>

        <TheFooter />
      </div>
    </div>
  </div>
</template>
