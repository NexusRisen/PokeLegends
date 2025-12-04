'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: '⚔️',
    title: 'Pokemon Battles',
    description: 'Challenge trainers worldwide in epic battles. Test your strategy and prove your worth.',
    gradient: 'from-red-500 to-orange-500',
    glow: 'shadow-red-500/20',
  },
  {
    icon: '🏆',
    title: 'Tournaments',
    description: 'Compete in weekly tournaments with exclusive prizes. Rise through the ranks.',
    gradient: 'from-yellow-500 to-amber-500',
    glow: 'shadow-yellow-500/20',
  },
  {
    icon: '🔄',
    title: 'Trading Hub',
    description: 'Trade rare Pokemon with verified community members. Build your dream team.',
    gradient: 'from-green-500 to-emerald-500',
    glow: 'shadow-green-500/20',
  },
  {
    icon: '🎮',
    title: 'Mini Games',
    description: 'Play exclusive Pokemon-themed games. Earn rewards and have fun.',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/20',
  },
  {
    icon: '📖',
    title: 'Pro Guides',
    description: 'Master the meta with expert strategies. Learn from the best trainers.',
    gradient: 'from-purple-500 to-violet-500',
    glow: 'shadow-purple-500/20',
  },
  {
    icon: '🎁',
    title: 'Giveaways',
    description: 'Win rare Pokemon and items in daily giveaways. Everyone has a chance.',
    gradient: 'from-pink-500 to-rose-500',
    glow: 'shadow-pink-500/20',
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="features" className="relative py-32 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-yellow-500/10 border border-red-500/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
              WHY CHOOSE US
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">Join the </span>
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
              Legend
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Experience the ultimate Pokemon community with features designed for true trainers
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl mb-6 shadow-lg ${feature.glow}`}>
                  {feature.icon}
                </div>
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                {/* Hover accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
