<script setup lang="ts">
const currentYear = new Date().getFullYear()

const quickLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Community', href: '#community' },
  { label: 'Discord', href: 'https://discord.gg/HbXGMCaX2d', external: true }
]

const scrollToSection = (href: string) => {
  if (href.startsWith('#')) {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <footer class="relative py-16 overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-t from-cosmic-void via-cosmic-deep/80 to-transparent" />

    <!-- Floating debris decoration -->
    <div class="absolute bottom-24 left-10 w-6 h-6 rounded-full bg-cosmic-purple/20 animate-float blur-sm" />
    <div class="absolute bottom-40 right-16 w-4 h-4 rounded-full bg-cosmic-pink/15 animate-float-slow blur-sm" />
    <div class="absolute bottom-16 right-1/3 w-5 h-5 rounded-full bg-cosmic-cyan/15 animate-float-slower blur-sm" />
    <div class="absolute bottom-32 left-1/4 w-3 h-3 rounded-full bg-cosmic-gold/10 animate-float blur-sm" />

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="relative w-12 h-12">
              <img
                src="/logo.jpg"
                alt="Pokemon Mythical"
                class="w-full h-full rounded-full object-cover ring-2 ring-cosmic-purple/50"
              />
              <div class="absolute inset-0 rounded-full animate-pulse-glow opacity-30" />
            </div>
            <div>
              <span class="font-display text-xl sm:text-2xl cosmic-text font-bold">
                Pokémon
              </span>
              <span class="font-display text-xl sm:text-2xl text-white font-bold ml-1">
                Mythical
              </span>
            </div>
          </div>
          <p class="text-white/60 max-w-md mb-6 text-sm sm:text-base">
            A cosmic community for Pokemon trainers. Trade, battle, create, and explore
            the universe together. Join thousands of trainers on their legendary journey.
          </p>
          <UiCosmicButton
            href="https://discord.gg/HbXGMCaX2d"
            external
            size="sm"
            variant="discord"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
            </svg>
            Join Our Discord
          </UiCosmicButton>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-display text-lg font-bold text-white mb-4">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.label">
              <a
                :href="link.href"
                :target="link.external ? '_blank' : undefined"
                :rel="link.external ? 'noopener noreferrer' : undefined"
                class="text-white/60 hover:text-cosmic-pink transition-colors flex items-center gap-2"
                @click.prevent="!link.external && scrollToSection(link.href)"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-cosmic-purple/50" />
                {{ link.label }}
                <svg v-if="link.external" class="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="h-px bg-gradient-to-r from-transparent via-cosmic-purple/30 to-transparent mb-8" />

      <!-- Bottom bar -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p class="text-white/40 text-xs sm:text-sm">
          &copy; {{ currentYear }} Pokémon Mythical. Not affiliated with Nintendo, The Pokémon Company, or Game Freak.
        </p>
        <p class="text-white/40 text-xs sm:text-sm">
          <a
            href="https://pokelegends.org"
            class="hover:text-cosmic-purple transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            pokelegends.org
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>
