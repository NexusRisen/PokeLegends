'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '⚔️',
    title: 'Pokemon Battles',
    description: 'Challenge trainers worldwide in epic battles. Test your strategy and prove your worth.',
    color: 'bg-gradient-to-br from-red-500 to-orange-500',
  },
  {
    icon: '🏆',
    title: 'Tournaments',
    description: 'Compete in weekly tournaments with exclusive prizes. Rise through the ranks.',
    color: 'bg-gradient-to-br from-yellow-500 to-amber-500',
  },
  {
    icon: '🔄',
    title: 'Trading Hub',
    description: 'Trade rare Pokemon with verified community members. Build your dream team.',
    color: 'bg-gradient-to-br from-green-500 to-emerald-500',
  },
  {
    icon: '🎮',
    title: 'Mini Games',
    description: 'Play exclusive Pokemon-themed games and activities. Earn rewards.',
    color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
  },
  {
    icon: '📖',
    title: 'Pro Guides',
    description: 'Master the competitive meta with expert strategies from top trainers.',
    color: 'bg-gradient-to-br from-purple-500 to-violet-500',
  },
  {
    icon: '🎁',
    title: 'Giveaways',
    description: 'Win rare Pokemon and items in daily giveaways. Everyone can win.',
    color: 'bg-gradient-to-br from-pink-500 to-rose-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-[#0a0a0f] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-500/10 to-yellow-500/10 border border-red-500/20 rounded-full text-sm font-bold text-red-400 mb-6">
            ✨ FEATURES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Why Join{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              The Legend
            </span>
            ?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Experience the ultimate Pokemon community with features built for trainers
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="relative p-6 rounded-2xl bg-gray-900/80 border border-gray-800 h-full hover:border-gray-700 transition-colors overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center text-3xl mb-5 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {feature.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
