// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-12-01',
  devtools: { enabled: true },

  ssr: false,

  app: {
    head: {
      title: 'Pokémon Legends | Cosmic Pokemon Community',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Join the most legendary Pokemon community in the cosmos. Active trading, tournaments, legendary encounters, and a welcoming community of trainers from across the universe.' },
        { name: 'keywords', content: 'Pokemon, Discord, Pokemon Legends, Pokemon trading, Pokemon community, Sysbots, shiny Pokemon, legendary Pokemon' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://pokelegends.org' },
        { property: 'og:title', content: 'Pokémon Legends | Cosmic Pokemon Community' },
        { property: 'og:description', content: 'Enter the cosmic Pokemon universe. Join thousands of trainers in the ultimate Pokemon Discord community.' },
        { property: 'og:image', content: '/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Pokémon Legends' },
        { name: 'twitter:description', content: 'Enter the cosmic Pokemon universe' },
        { name: 'twitter:image', content: '/og-image.jpg' },
        { name: 'theme-color', content: '#6b21a8' },
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/logo.jpg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@vueuse/nuxt',
  ],

  build: {
    transpile: ['gsap'],
  },

  nitro: {
    preset: 'github-pages'
  },

  experimental: {
    payloadExtraction: false
  }
})
