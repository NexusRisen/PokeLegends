import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          void: '#0a0a1a',
          deep: '#0d0d24',
          nebula: '#1a1a3e',
          purple: '#6b21a8',
          pink: '#ec4899',
          blue: '#3b82f6',
          cyan: '#22d3ee',
          gold: '#fbbf24',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-slower': 'spin 30s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'nebula-drift': 'nebulaDrift 30s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
            opacity: '1'
          },
          '50%': {
            boxShadow: '0 0 40px rgba(139, 92, 246, 0.8), 0 0 60px rgba(236, 72, 153, 0.4)',
            opacity: '0.8'
          },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        nebulaDrift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.3' },
          '33%': { transform: 'translate(30px, -20px) scale(1.1)', opacity: '0.5' },
          '66%': { transform: 'translate(-20px, 30px) scale(0.95)', opacity: '0.4' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'cosmic-gradient': 'radial-gradient(ellipse at center, #1a1a3e 0%, #0d0d24 50%, #0a0a1a 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      },
      boxShadow: {
        'cosmic': '0 0 30px rgba(139, 92, 246, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.6)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.6)',
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.6)',
        'glow-gold': '0 0 20px rgba(251, 191, 36, 0.6)',
      },
    },
  },
  plugins: [],
} satisfies Config
