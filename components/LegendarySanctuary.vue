<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const sectionRef = ref<HTMLElement | null>(null)
const { stats } = useDiscordStats()

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  if (!sectionRef.value) return

  // Portal animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 60%'
    }
  })

  tl.fromTo('.portal-ring',
    { scale: 0, opacity: 0, rotation: -180 },
    { scale: 1, opacity: 1, rotation: 0, duration: 1.2, stagger: 0.15, ease: 'back.out(1.7)' }
  )
  .fromTo('.portal-content',
    { scale: 0.5, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' },
    '-=0.6'
  )
  .fromTo('.sanctuary-title',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
    '-=0.4'
  )
  .fromTo('.sanctuary-desc',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
    '-=0.4'
  )
  .fromTo('.sanctuary-cta',
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' },
    '-=0.3'
  )
  .fromTo('.trust-badge',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' },
    '-=0.2'
  )

  // Legendary silhouettes
  gsap.fromTo('.legendary-silhouette',
    { opacity: 0, y: 50 },
    {
      opacity: 0.12,
      y: 0,
      duration: 2,
      stagger: 0.4,
      ease: 'power2.out',
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
    id="community"
    ref="sectionRef"
    class="relative min-h-screen py-32 flex items-center justify-center overflow-hidden"
  >
    <!-- Legendary Pokemon Silhouettes Background -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Arceus-inspired ring/circle -->
      <div class="legendary-silhouette absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-0">
        <svg viewBox="0 0 200 200" class="w-full h-full">
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="rgba(251, 191, 36, 0.2)"
            stroke-width="2"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="rgba(251, 191, 36, 0.15)"
            stroke-width="1"
          />
        </svg>
      </div>

      <!-- Giratina wings hint - left -->
      <div class="legendary-silhouette absolute bottom-20 left-10 w-80 h-80 opacity-0">
        <svg viewBox="0 0 100 100" class="w-full h-full">
          <path
            d="M10 50 Q30 20 50 30 Q40 50 50 70 Q30 80 10 50Z"
            fill="rgba(139, 92, 246, 0.15)"
          />
        </svg>
      </div>

      <!-- Palkia/Dialga gem shape - right -->
      <div class="legendary-silhouette absolute top-1/3 right-10 w-48 h-48 opacity-0">
        <svg viewBox="0 0 100 100" class="w-full h-full">
          <polygon
            points="50,5 95,50 50,95 5,50"
            fill="none"
            stroke="rgba(236, 72, 153, 0.2)"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
      <!-- Portal Effect -->
      <div class="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-12">
        <!-- Portal rings -->
        <div
          class="portal-ring absolute inset-0 rounded-full border-2 border-cosmic-purple/60"
          style="animation: spin 25s linear infinite;"
        />
        <div
          class="portal-ring absolute inset-4 rounded-full border border-cosmic-pink/50"
          style="animation: spin 20s linear infinite reverse;"
        />
        <div
          class="portal-ring absolute inset-8 rounded-full border border-cosmic-cyan/40"
          style="animation: spin 30s linear infinite;"
        />
        <div
          class="portal-ring absolute inset-12 rounded-full border border-cosmic-gold/30"
          style="animation: spin 15s linear infinite reverse;"
        />

        <!-- Inner glow -->
        <div class="absolute inset-16 rounded-full bg-gradient-radial from-cosmic-purple/30 via-cosmic-pink/20 to-transparent animate-pulse" />

        <!-- Portal content -->
        <div class="portal-content absolute inset-0 flex flex-col items-center justify-center opacity-0">
          <div class="glass-panel p-6 sm:p-8 rounded-full">
            <!-- Discord Logo -->
            <svg class="w-12 h-12 sm:w-16 sm:h-16 text-[#5865F2] mb-3 mx-auto" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
            </svg>

            <div class="text-center">
              <p class="text-white/50 text-xs uppercase tracking-wider mb-1">Join</p>
              <p class="font-display text-2xl sm:text-3xl cosmic-text font-bold">
                {{ stats.isLoading ? '...' : stats.memberCount.toLocaleString() }}+
              </p>
              <p class="text-white/50 text-sm">Trainers</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Text Content -->
      <h2 class="sanctuary-title font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0">
        <UiGlowingText>Enter the Sanctuary</UiGlowingText>
      </h2>

      <p class="sanctuary-desc text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-0">
        Step through the portal and join a legendary community of Pokemon trainers
        from across the cosmos. Your adventure awaits.
      </p>

      <!-- CTA -->
      <div class="sanctuary-cta opacity-0">
        <UiCosmicButton
          href="https://discord.gg/HbXGMCaX2d"
          external
          size="lg"
          class="animate-pulse-glow"
        >
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
          </svg>
          Join Pokémon Mythicals
        </UiCosmicButton>
      </div>

      <!-- Trust indicators -->
      <div class="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        <div class="trust-badge flex items-center gap-2 text-white/50 text-sm opacity-0">
          <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span>24/7 Active</span>
        </div>
        <div class="trust-badge flex items-center gap-2 text-white/50 text-sm opacity-0">
          <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span>All Ages Welcome</span>
        </div>
        <div class="trust-badge flex items-center gap-2 text-white/50 text-sm opacity-0">
          <svg class="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span>Free to Join</span>
        </div>
        <div class="trust-badge flex items-center gap-2 text-white/50 text-sm opacity-0">
          <svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span>Weekly Events</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 50%, var(--tw-gradient-to) 100%);
}
</style>
