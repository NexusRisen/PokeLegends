<script setup lang="ts">
import gsap from 'gsap'

const { stats } = useDiscordStats()

const heroRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const statsRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.5 })

  // Title animation - cosmic dust emergence
  tl.fromTo(
    titleRef.value,
    { opacity: 0, y: 60, filter: 'blur(20px)' },
    { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out' }
  )
  .fromTo(
    subtitleRef.value,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
    '-=0.8'
  )
  .fromTo(
    statsRef.value,
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
    '-=0.5'
  )
  .fromTo(
    ctaRef.value,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
    '-=0.3'
  )
})

const scrollToFeatures = () => {
  const features = document.getElementById('features')
  if (features) {
    features.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section
    id="hero"
    ref="heroRef"
    class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
  >
    <!-- Legendary Pokemon Silhouettes -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Rayquaza silhouette - right side -->
      <div class="absolute top-20 right-0 w-72 h-[500px] opacity-[0.07] transform translate-x-1/4">
        <svg viewBox="0 0 100 300" class="w-full h-full">
          <path
            d="M50 0 Q55 20 52 40 Q58 60 54 90 Q62 110 56 140 Q65 160 58 190 Q68 220 60 250 Q70 280 65 300
               Q60 280 55 250 Q45 220 40 190 Q48 160 44 140 Q38 110 46 90 Q42 60 48 40 Q45 20 50 0Z"
            fill="currentColor"
            class="text-cosmic-cyan"
          />
          <!-- Eyes -->
          <circle cx="45" cy="25" r="3" class="fill-cosmic-gold opacity-50" />
          <circle cx="55" cy="25" r="3" class="fill-cosmic-gold opacity-50" />
        </svg>
      </div>

      <!-- Mewtwo silhouette - left side -->
      <div class="absolute bottom-32 left-0 w-56 h-80 opacity-[0.06] transform -translate-x-1/4">
        <svg viewBox="0 0 100 160" class="w-full h-full">
          <!-- Head -->
          <ellipse cx="50" cy="25" rx="18" ry="22" fill="currentColor" class="text-cosmic-purple" />
          <!-- Body -->
          <ellipse cx="50" cy="80" rx="22" ry="35" fill="currentColor" class="text-cosmic-purple" />
          <!-- Tail hint -->
          <path d="M65 100 Q80 130 70 160" stroke="currentColor" stroke-width="8" fill="none" class="text-cosmic-purple" />
          <!-- Glowing eyes -->
          <circle cx="43" cy="22" r="2" class="fill-cosmic-pink opacity-50" />
          <circle cx="57" cy="22" r="2" class="fill-cosmic-pink opacity-50" />
        </svg>
      </div>

      <!-- Arceus ring hint - top -->
      <div class="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-32 opacity-[0.04]">
        <svg viewBox="0 0 200 60" class="w-full h-full">
          <ellipse cx="100" cy="30" rx="90" ry="25" stroke="currentColor" stroke-width="3" fill="none" class="text-cosmic-gold" />
        </svg>
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <!-- Floating cosmic orbs decoration -->
      <div class="absolute -top-24 left-1/4 w-4 h-4 rounded-full bg-cosmic-purple animate-float opacity-60" />
      <div class="absolute -top-16 right-1/3 w-3 h-3 rounded-full bg-cosmic-pink animate-float-slow opacity-50" />
      <div class="absolute top-0 left-10 w-2 h-2 rounded-full bg-cosmic-cyan animate-float-slower opacity-40" />
      <div class="absolute -top-8 right-10 w-3 h-3 rounded-full bg-cosmic-gold animate-float opacity-30" />

      <!-- Main Title -->
      <div ref="titleRef" class="opacity-0">
        <h1 class="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight">
          <UiGlowingText tag="span" constellation class="block">
            POKÉMON
          </UiGlowingText>
          <UiGlowingText tag="span" class="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 cosmic-text-gold">
            MYTHICALS
          </UiGlowingText>
        </h1>
      </div>

      <!-- Subtitle -->
      <p
        ref="subtitleRef"
        class="font-body text-lg sm:text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto opacity-0"
      >
        Enter the cosmic realm where legendary trainers unite across the stars
      </p>

      <!-- Discord Stats HUD -->
      <div
        ref="statsRef"
        class="glass-panel inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 sm:px-10 py-4 sm:py-5 mb-10 opacity-0"
      >
        <!-- Online Status -->
        <div class="flex items-center gap-3">
          <div class="relative">
            <div class="w-3 h-3 rounded-full bg-green-500" />
            <div class="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping" />
          </div>
          <div class="text-left">
            <div class="text-2xl sm:text-3xl font-display font-bold cosmic-text">
              {{ stats.isLoading ? '...' : stats.onlineCount.toLocaleString() }}
            </div>
            <div class="text-xs text-white/50 uppercase tracking-wider">Online Now</div>
          </div>
        </div>

        <div class="w-px h-14 bg-gradient-to-b from-transparent via-cosmic-purple/50 to-transparent hidden sm:block" />

        <!-- Channels -->
        <div class="text-left">
          <div class="text-2xl sm:text-3xl font-display font-bold text-white">
            50+
          </div>
          <div class="text-xs text-white/50 uppercase tracking-wider">Channels</div>
        </div>

        <div class="w-px h-14 bg-gradient-to-b from-transparent via-cosmic-purple/50 to-transparent hidden sm:block" />

        <!-- Events -->
        <div class="text-left">
          <div class="text-2xl sm:text-3xl font-display font-bold text-cosmic-gold">
            24/7
          </div>
          <div class="text-xs text-white/50 uppercase tracking-wider">Active</div>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div ref="ctaRef" class="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
        <UiCosmicButton
          href="https://discord.gg/HbXGMCaX2d"
          external
          size="lg"
          variant="primary"
        >
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
          </svg>
          Enter the Universe
        </UiCosmicButton>

        <UiCosmicButton
          variant="ghost"
          size="lg"
          @click="scrollToFeatures"
        >
          <span>Explore</span>
          <svg class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </UiCosmicButton>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-60">
      <div class="w-6 h-10 rounded-full border-2 border-cosmic-purple/60 flex justify-center pt-2">
        <div class="w-1.5 h-3 rounded-full bg-cosmic-purple animate-bounce" />
      </div>
    </div>
  </section>
</template>
