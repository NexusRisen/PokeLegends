<script setup lang="ts">
const loadingProgress = ref(0)
const phase = ref<'loading' | 'summoning' | 'legendary' | 'redirect'>('loading')
const currentLegendary = ref(0)
const showFlash = ref(false)

const legendaries = [
  { id: 384, name: 'Rayquaza', color: '#2E8B57' },
  { id: 150, name: 'Mewtwo', color: '#9B59B6' },
  { id: 249, name: 'Lugia', color: '#A8D8EA' },
  { id: 250, name: 'Ho-Oh', color: '#E74C3C' },
  { id: 483, name: 'Dialga', color: '#3498DB' },
  { id: 484, name: 'Palkia', color: '#E91E63' },
  { id: 487, name: 'Giratina', color: '#2C3E50' },
  { id: 493, name: 'Arceus', color: '#F1C40F' },
]

const loadingMessages = [
  'Awakening ancient powers...',
  'Opening dimensional rifts...',
  'Summoning legendary spirits...',
  'Channeling cosmic energy...',
  'The legends arise...',
]

const currentMessage = computed(() => {
  const index = Math.min(Math.floor(loadingProgress.value / 25), loadingMessages.length - 1)
  return loadingMessages[index]
})

onMounted(() => {
  // Progress simulation
  const progressInterval = setInterval(() => {
    if (loadingProgress.value >= 100) {
      clearInterval(progressInterval)
      phase.value = 'summoning'
      return
    }
    loadingProgress.value += Math.random() * 2 + 1
  }, 60)

  // Cycle through legendaries during loading
  const legendaryInterval = setInterval(() => {
    currentLegendary.value = (currentLegendary.value + 1) % legendaries.length
  }, 800)

  watch(phase, (newPhase) => {
    if (newPhase === 'summoning') {
      clearInterval(legendaryInterval)
      setTimeout(() => {
        showFlash.value = true
        setTimeout(() => {
          phase.value = 'legendary'
          showFlash.value = false
        }, 300)
      }, 1000)
    }
    if (newPhase === 'legendary') {
      setTimeout(() => {
        phase.value = 'redirect'
      }, 2000)
    }
    if (newPhase === 'redirect') {
      setTimeout(() => {
        window.location.href = 'https://nexusrisen.net/'
      }, 1000)
    }
  })
})

useSeoMeta({
  title: 'Pokémon Legends | Redirecting...',
  description: 'Redirecting to Nexus Risen',
})
</script>

<template>
  <div class="preloader">
    <!-- Cosmic Background -->
    <div class="cosmic-bg">
      <div class="stars"></div>
      <div class="stars stars-2"></div>
      <div class="stars stars-3"></div>
      <div class="nebula nebula-1"></div>
      <div class="nebula nebula-2"></div>
      <div class="nebula nebula-3"></div>
    </div>

    <!-- Animated Cosmic Rings -->
    <div class="cosmic-rings">
      <div class="ring ring-1"></div>
      <div class="ring ring-2"></div>
      <div class="ring ring-3"></div>
      <div class="ring ring-4"></div>
    </div>

    <!-- Floating Particles -->
    <div class="particles">
      <div v-for="i in 40" :key="i" class="particle" :style="{
        '--x': `${Math.random() * 100}%`,
        '--delay': `${Math.random() * 5}s`,
        '--duration': `${3 + Math.random() * 4}s`,
        '--size': `${2 + Math.random() * 6}px`,
        '--color': legendaries[i % legendaries.length].color
      }"></div>
    </div>

    <!-- Lightning Effects -->
    <div v-if="phase === 'summoning'" class="lightning-container">
      <div v-for="i in 8" :key="i" class="lightning" :style="{ '--angle': `${i * 45}deg` }"></div>
    </div>

    <!-- Flash Effect -->
    <Transition name="flash">
      <div v-if="showFlash" class="flash-overlay"></div>
    </Transition>

    <!-- Main Content -->
    <div class="content">
      <!-- Legendary Pokemon Display -->
      <div class="legendary-container" :class="{ 'summoning': phase === 'summoning', 'revealed': phase === 'legendary' }">
        <!-- Aura Effect -->
        <div class="aura" :style="{ '--aura-color': legendaries[currentLegendary].color }"></div>
        <div class="aura aura-2" :style="{ '--aura-color': legendaries[currentLegendary].color }"></div>

        <!-- Pokemon Sprite -->
        <div class="pokemon-wrapper">
          <img
            v-for="(legendary, index) in legendaries"
            :key="legendary.id"
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${legendary.id}.gif`"
            :alt="legendary.name"
            class="pokemon-sprite"
            :class="{ 'active': currentLegendary === index }"
          />
        </div>

        <!-- Orbiting Pokeballs -->
        <div class="orbit">
          <div v-for="i in 6" :key="i" class="orbit-ball" :style="{ '--orbit-delay': `${i * -1}s` }">
            <div class="mini-pokeball"></div>
          </div>
        </div>
      </div>

      <!-- Title -->
      <h1 class="title">
        <span class="title-poke">POKÉMON</span>
        <span class="title-legends">LEGENDS</span>
      </h1>

      <!-- Loading Message -->
      <p class="loading-message">{{ currentMessage }}</p>

      <!-- Progress Section -->
      <div class="progress-section" v-if="phase === 'loading'">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: `${Math.min(loadingProgress, 100)}%` }">
            <div class="progress-glow"></div>
          </div>
          <div class="progress-particles">
            <div v-for="i in 10" :key="i" class="progress-particle" :style="{
              left: `${Math.min(loadingProgress, 100)}%`,
              '--p-delay': `${i * 0.1}s`
            }"></div>
          </div>
        </div>
        <span class="progress-text">{{ Math.floor(Math.min(loadingProgress, 100)) }}%</span>
      </div>

      <!-- Summoning Text -->
      <div v-if="phase === 'summoning'" class="summoning-text">
        <span>SUMMONING LEGENDS</span>
        <div class="summoning-dots">
          <span>.</span><span>.</span><span>.</span>
        </div>
      </div>

      <!-- Legendary Revealed -->
      <div v-if="phase === 'legendary' || phase === 'redirect'" class="legendary-text">
        <span class="legendary-caught">✨ THE LEGENDS HAVE SPOKEN ✨</span>
        <span class="redirect-text">Entering Nexus Risen...</span>
      </div>
    </div>

    <!-- Corner Decorations -->
    <div class="corner corner-tl"></div>
    <div class="corner corner-tr"></div>
    <div class="corner corner-bl"></div>
    <div class="corner corner-br"></div>
  </div>
</template>

<style scoped>
.preloader {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #030014;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

/* Cosmic Background */
.cosmic-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.stars {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(2px 2px at 20px 30px, #fff, transparent),
    radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
    radial-gradient(1px 1px at 90px 40px, #fff, transparent),
    radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.6), transparent),
    radial-gradient(1px 1px at 160px 120px, #fff, transparent);
  background-size: 200px 200px;
  animation: twinkle 4s ease-in-out infinite;
}

.stars-2 {
  background-position: 50px 50px;
  animation-delay: -1s;
}

.stars-3 {
  background-position: 100px 100px;
  animation-delay: -2s;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.nebula {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: nebula-drift 20s ease-in-out infinite;
}

.nebula-1 {
  width: 600px;
  height: 600px;
  top: -200px;
  left: -100px;
  background: radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%);
}

.nebula-2 {
  width: 500px;
  height: 500px;
  bottom: -150px;
  right: -100px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, transparent 70%);
  animation-delay: -5s;
}

.nebula-3 {
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
  animation-delay: -10s;
}

@keyframes nebula-drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(30px, -20px) scale(1.1); }
  50% { transform: translate(-20px, 30px) scale(0.9); }
  75% { transform: translate(-30px, -30px) scale(1.05); }
}

/* Cosmic Rings */
.cosmic-rings {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ring-1 {
  width: 300px;
  height: 300px;
  border-color: rgba(147, 51, 234, 0.3);
  animation: ring-rotate 20s linear infinite;
}

.ring-2 {
  width: 400px;
  height: 400px;
  border-color: rgba(236, 72, 153, 0.2);
  animation: ring-rotate 30s linear infinite reverse;
}

.ring-3 {
  width: 500px;
  height: 500px;
  border-color: rgba(59, 130, 246, 0.15);
  animation: ring-rotate 40s linear infinite;
}

.ring-4 {
  width: 600px;
  height: 600px;
  border-color: rgba(245, 158, 11, 0.1);
  animation: ring-rotate 50s linear infinite reverse;
}

@keyframes ring-rotate {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

/* Particles */
.particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  left: var(--x);
  bottom: -20px;
  width: var(--size);
  height: var(--size);
  background: var(--color);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--color), 0 0 20px var(--color);
  animation: particle-rise var(--duration) var(--delay) infinite linear;
}

@keyframes particle-rise {
  0% {
    transform: translateY(0) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: scale(1);
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) scale(0.5);
    opacity: 0;
  }
}

/* Lightning */
.lightning-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.lightning {
  position: absolute;
  width: 3px;
  height: 150px;
  background: linear-gradient(to top, #F1C40F, transparent);
  transform-origin: bottom center;
  transform: rotate(var(--angle));
  animation: lightning-flash 0.15s ease-out infinite;
  animation-delay: calc(var(--angle) / 360 * 0.5s);
}

@keyframes lightning-flash {
  0%, 100% { opacity: 0; transform: rotate(var(--angle)) scaleY(0.5); }
  50% { opacity: 1; transform: rotate(var(--angle)) scaleY(1.5); }
}

/* Flash Overlay */
.flash-overlay {
  position: fixed;
  inset: 0;
  background: white;
  z-index: 100;
}

.flash-enter-active,
.flash-leave-active {
  transition: opacity 0.3s ease;
}

.flash-enter-from,
.flash-leave-to {
  opacity: 0;
}

/* Content */
.content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

/* Legendary Container */
.legendary-container {
  position: relative;
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
}

.legendary-container.summoning {
  animation: shake 0.1s infinite;
}

.legendary-container.revealed .aura {
  animation: aura-burst 0.5s ease-out forwards;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

@keyframes aura-burst {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(3); opacity: 0; }
}

.aura {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--aura-color) 0%, transparent 70%);
  opacity: 0.5;
  animation: aura-pulse 2s ease-in-out infinite;
}

.aura-2 {
  inset: -40px;
  opacity: 0.3;
  animation-delay: -1s;
}

@keyframes aura-pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 0.8; }
}

.pokemon-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pokemon-sprite {
  position: absolute;
  width: 150px;
  height: 150px;
  object-fit: contain;
  opacity: 0;
  transform: scale(0.8);
  filter: drop-shadow(0 0 20px currentColor);
  transition: all 0.3s ease;
}

.pokemon-sprite.active {
  opacity: 1;
  transform: scale(1);
  animation: pokemon-float 3s ease-in-out infinite;
}

@keyframes pokemon-float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-15px) scale(1.05); }
}

/* Orbit */
.orbit {
  position: absolute;
  inset: -30px;
  animation: orbit-rotate 6s linear infinite;
}

.orbit-ball {
  position: absolute;
  width: 20px;
  height: 20px;
  animation: orbit-ball 6s var(--orbit-delay) linear infinite;
}

.orbit-ball:nth-child(1) { top: 0; left: 50%; transform: translateX(-50%); }
.orbit-ball:nth-child(2) { top: 25%; right: 0; }
.orbit-ball:nth-child(3) { bottom: 25%; right: 0; }
.orbit-ball:nth-child(4) { bottom: 0; left: 50%; transform: translateX(-50%); }
.orbit-ball:nth-child(5) { bottom: 25%; left: 0; }
.orbit-ball:nth-child(6) { top: 25%; left: 0; }

@keyframes orbit-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.mini-pokeball {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(180deg, #ff4444 50%, #fff 50%);
  border: 2px solid #333;
  position: relative;
  animation: orbit-ball-spin 1s linear infinite reverse;
}

.mini-pokeball::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: #333;
  transform: translateY(-50%);
}

.mini-pokeball::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  background: #fff;
  border: 2px solid #333;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

@keyframes orbit-ball-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Title */
.title {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.title-poke {
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 0.3em;
  color: #fff;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
}

.title-legends {
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  background: linear-gradient(90deg, #F1C40F, #E74C3C, #9B59B6, #3498DB, #F1C40F);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-flow 3s linear infinite;
  filter: drop-shadow(0 0 20px rgba(241, 196, 15, 0.5));
}

@keyframes gradient-flow {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

/* Loading Message */
.loading-message {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 30px;
  letter-spacing: 0.1em;
  animation: message-fade 2s ease-in-out infinite;
}

@keyframes message-fade {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

/* Progress Section */
.progress-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: visible;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #9B59B6, #E74C3C, #F1C40F);
  border-radius: 10px;
  position: relative;
  transition: width 0.1s ease;
}

.progress-glow {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
  animation: progress-shine 1.5s linear infinite;
}

@keyframes progress-shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.progress-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
}

.progress-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #F1C40F;
  border-radius: 50%;
  animation: progress-particle-float 1s var(--p-delay) infinite;
}

@keyframes progress-particle-float {
  0% { transform: translateY(0) scale(1); opacity: 1; }
  100% { transform: translateY(-30px) scale(0); opacity: 0; }
}

.progress-text {
  margin-top: 15px;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: monospace;
  background: linear-gradient(90deg, #F1C40F, #E74C3C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Summoning Text */
.summoning-text {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #F1C40F;
  text-shadow: 0 0 20px rgba(241, 196, 15, 0.8);
  animation: summoning-pulse 0.3s infinite;
}

@keyframes summoning-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.summoning-dots span {
  animation: dot-bounce 0.6s infinite;
  display: inline-block;
}

.summoning-dots span:nth-child(2) { animation-delay: 0.2s; }
.summoning-dots span:nth-child(3) { animation-delay: 0.4s; }

@keyframes dot-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Legendary Text */
.legendary-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.legendary-caught {
  font-size: 1.8rem;
  font-weight: bold;
  background: linear-gradient(90deg, #F1C40F, #fff, #F1C40F);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: legendary-glow 1s linear infinite;
}

@keyframes legendary-glow {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

.redirect-text {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  animation: fade-pulse 1s infinite;
}

@keyframes fade-pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

/* Corner Decorations */
.corner {
  position: fixed;
  width: 100px;
  height: 100px;
  pointer-events: none;
}

.corner::before,
.corner::after {
  content: '';
  position: absolute;
  background: linear-gradient(90deg, #F1C40F, transparent);
}

.corner::before {
  width: 100%;
  height: 2px;
}

.corner::after {
  width: 2px;
  height: 100%;
}

.corner-tl { top: 20px; left: 20px; }
.corner-tl::before { top: 0; left: 0; }
.corner-tl::after { top: 0; left: 0; }

.corner-tr { top: 20px; right: 20px; }
.corner-tr::before { top: 0; right: 0; background: linear-gradient(-90deg, #F1C40F, transparent); }
.corner-tr::after { top: 0; right: 0; }

.corner-bl { bottom: 20px; left: 20px; }
.corner-bl::before { bottom: 0; left: 0; }
.corner-bl::after { bottom: 0; left: 0; }

.corner-br { bottom: 20px; right: 20px; }
.corner-br::before { bottom: 0; right: 0; background: linear-gradient(-90deg, #F1C40F, transparent); }
.corner-br::after { bottom: 0; right: 0; }

/* Responsive */
@media (max-width: 640px) {
  .title-poke { font-size: 2rem; }
  .title-legends { font-size: 2.5rem; }
  .legendary-container { width: 150px; height: 150px; }
  .pokemon-sprite { width: 120px; height: 120px; }
}
</style>
