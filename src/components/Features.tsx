'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: '🎮',
    title: 'Pokémon Games',
    description: 'Play exciting Pokémon-themed games and compete with other trainers.',
    color: '#ef4444',
    glow: 'hover:shadow-red-500/20',
  },
  {
    icon: '💬',
    title: 'Active Community',
    description: 'Chat with fellow enthusiasts, share strategies, and make friends.',
    color: '#3b82f6',
    glow: 'hover:shadow-blue-500/20',
  },
  {
    icon: '🏆',
    title: 'Events & Tournaments',
    description: 'Participate in regular events and competitions with rewards.',
    color: '#fbbf24',
    glow: 'hover:shadow-yellow-500/20',
  },
  {
    icon: '🎨',
    title: 'Fan Creations',
    description: 'Share your artwork, fan fiction, and creative content.',
    color: '#a855f7',
    glow: 'hover:shadow-purple-500/20',
  },
  {
    icon: '📚',
    title: 'Guides & Resources',
    description: 'Access guides and tips for all Pokémon games.',
    color: '#22c55e',
    glow: 'hover:shadow-green-500/20',
  },
  {
    icon: '🌟',
    title: 'Friendly Staff',
    description: 'Our team ensures a safe, welcoming environment for all.',
    color: '#ec4899',
    glow: 'hover:shadow-pink-500/20',
  },
];

export default function Features() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <section id="features" className="relative py-28 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 mb-10">
            <span className="text-purple-300 text-sm font-medium">Why Join Us?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8">
            Everything a <span className="text-yellow-400">Trainer</span> Needs
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover what makes Pokémon Legends the perfect community for your journey
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`h-full p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10
                  hover:bg-white/10 hover:border-white/20 hover:-translate-y-2
                  hover:shadow-2xl ${feature.glow}
                  transition-all duration-300 cursor-pointer`}
              >
                {/* Icon with glow effect */}
                <div className="relative mb-5">
                  <div
                    className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                    style={{ backgroundColor: feature.color }}
                  />
                  <div
                    className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-2xl sm:text-3xl
                      group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="mt-5 h-1 w-0 group-hover:w-full rounded-full transition-all duration-500"
                  style={{ backgroundColor: feature.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
