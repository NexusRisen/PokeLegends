'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: '⚔️',
    title: 'Pokemon Battles',
    description: 'Challenge trainers worldwide in epic battles.',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    icon: '🏆',
    title: 'Tournaments',
    description: 'Compete in weekly tournaments with prizes.',
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    icon: '🔄',
    title: 'Trading Hub',
    description: 'Trade rare Pokemon with community members.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: '🎮',
    title: 'Mini Games',
    description: 'Play exclusive Pokemon-themed games.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '📖',
    title: 'Pro Guides',
    description: 'Master the meta with expert strategies.',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    icon: '🎁',
    title: 'Giveaways',
    description: 'Win rare Pokemon in daily giveaways.',
    gradient: 'from-pink-500 to-rose-500',
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="features" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <span className="text-sm font-semibold text-red-400">WHY CHOOSE US</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Join the <span className="text-yellow-400">Legend</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Experience the ultimate Pokemon community with features designed for true trainers
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="p-6 rounded-2xl bg-gray-900/80 border border-gray-800 hover:border-gray-700 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
