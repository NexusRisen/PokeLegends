'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: '🎮',
    title: 'Pokémon Games',
    description: 'Play exciting Pokémon-themed games and compete with other trainers.',
    color: '#ef4444',
  },
  {
    icon: '💬',
    title: 'Active Community',
    description: 'Chat with fellow enthusiasts, share strategies, and make friends.',
    color: '#3b82f6',
  },
  {
    icon: '🏆',
    title: 'Events & Tournaments',
    description: 'Participate in regular events and competitions with rewards.',
    color: '#fbbf24',
  },
  {
    icon: '🎨',
    title: 'Fan Creations',
    description: 'Share your artwork, fan fiction, and creative content.',
    color: '#a855f7',
  },
  {
    icon: '📚',
    title: 'Guides & Resources',
    description: 'Access guides and tips for all Pokémon games.',
    color: '#22c55e',
  },
  {
    icon: '🌟',
    title: 'Friendly Staff',
    description: 'Our team ensures a safe, welcoming environment for all.',
    color: '#ec4899',
  },
];

export default function Features() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <section id="features" className="relative py-24 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">
            <span className="text-purple-300 text-sm font-medium">Why Join Us?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Everything a <span className="text-yellow-400">Trainer</span> Needs
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover what makes Pokémon Legends the perfect community for your journey
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
