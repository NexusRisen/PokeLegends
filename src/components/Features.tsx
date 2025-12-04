'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: '⚔️',
    title: 'Pokemon Battles',
    description: 'Battle other trainers and test your skills.',
  },
  {
    icon: '🏆',
    title: 'Tournaments',
    description: 'Compete in community tournaments and events.',
  },
  {
    icon: '🔄',
    title: 'Trading',
    description: 'Trade Pokemon with other community members.',
  },
  {
    icon: '🎮',
    title: 'Mini Games',
    description: 'Play fun Pokemon-themed games and activities.',
  },
  {
    icon: '📖',
    title: 'Guides & Tips',
    description: 'Learn strategies and get help from the community.',
  },
  {
    icon: '🎁',
    title: 'Giveaways',
    description: 'Participate in regular community giveaways.',
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Why Join <span className="text-yellow-400">Pokemon Legends</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Join our growing Pokemon community on Discord
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-gray-700 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-2xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
