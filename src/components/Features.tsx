'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: '🎮',
    title: 'Pokémon Games',
    description: 'Play exciting Pokémon-themed games, catch virtual Pokémon, and compete with other trainers in fun challenges.',
    color: '#ef4444',
  },
  {
    icon: '💬',
    title: 'Active Community',
    description: 'Chat with fellow Pokémon enthusiasts, share strategies, discuss your favorite games, and make new friends.',
    color: '#3b82f6',
  },
  {
    icon: '🏆',
    title: 'Events & Tournaments',
    description: 'Participate in regular community events, tournaments, and competitions with exciting rewards.',
    color: '#fbbf24',
  },
  {
    icon: '🎨',
    title: 'Fan Creations',
    description: 'Share your Pokémon artwork, fan fiction, theories, and creative content with the community.',
    color: '#a855f7',
  },
  {
    icon: '📚',
    title: 'Guides & Resources',
    description: 'Access comprehensive guides, tips, and resources for all Pokémon games - from classics to the latest releases.',
    color: '#22c55e',
  },
  {
    icon: '🌟',
    title: 'Friendly Staff',
    description: 'Our dedicated team ensures a safe, welcoming environment for trainers of all ages and experience levels.',
    color: '#ec4899',
  },
];

export default function Features() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="features" className="relative py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #ef4444 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-purple-500/20 border border-purple-500/30 text-purple-300 mb-6">
            Why Join Us?
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
            Everything a{' '}
            <span className="text-yellow-400">Trainer</span>
            {' '}Needs
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover what makes Pokémon Legends the perfect community for your Pokémon journey
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 text-2xl"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

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
