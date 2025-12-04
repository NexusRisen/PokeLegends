'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: '🎮',
    title: 'Pokémon Games',
    description: 'Play exciting Pokémon-themed games, catch virtual Pokémon, and compete with other trainers in fun challenges.',
    gradient: 'from-red-500 to-orange-500',
    delay: 0,
  },
  {
    icon: '💬',
    title: 'Active Community',
    description: 'Chat with fellow Pokémon enthusiasts, share strategies, discuss your favorite games, and make new friends.',
    gradient: 'from-blue-500 to-cyan-500',
    delay: 0.1,
  },
  {
    icon: '🏆',
    title: 'Events & Tournaments',
    description: 'Participate in regular community events, tournaments, and competitions with exciting rewards.',
    gradient: 'from-yellow-500 to-amber-500',
    delay: 0.2,
  },
  {
    icon: '🎨',
    title: 'Fan Creations',
    description: 'Share your Pokémon artwork, fan fiction, theories, and creative content with the community.',
    gradient: 'from-purple-500 to-pink-500',
    delay: 0.3,
  },
  {
    icon: '📚',
    title: 'Guides & Resources',
    description: 'Access comprehensive guides, tips, and resources for all Pokémon games - from classics to the latest releases.',
    gradient: 'from-green-500 to-emerald-500',
    delay: 0.4,
  },
  {
    icon: '🌟',
    title: 'Friendly Staff',
    description: 'Our dedicated team ensures a safe, welcoming environment for trainers of all ages and experience levels.',
    gradient: 'from-indigo-500 to-violet-500',
    delay: 0.5,
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

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Why Join Us?
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">Everything a </span>
            <span
              className="text-transparent bg-clip-text"
              style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #ef4444 100%)',
                WebkitBackgroundClip: 'text',
              }}
            >
              Trainer
            </span>
            <span className="text-white"> Needs</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover what makes Pokémon Legends the perfect community for your Pokémon journey
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  isInView,
}: {
  feature: (typeof features)[0];
  isInView: boolean;
}) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: feature.delay }}
    >
      <motion.div
        className="relative h-full p-6 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden"
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Hover glow effect */}
        <motion.div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feature.gradient}`}
          style={{ filter: 'blur(40px)', opacity: 0.1 }}
        />

        {/* Top gradient line */}
        <motion.div
          className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
        />

        {/* Icon */}
        <motion.div
          className="relative mb-4"
          whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div
            className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} text-2xl`}
          >
            {feature.icon}
          </div>
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
          {feature.title}
        </h3>

        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
          {feature.description}
        </p>

        {/* Decorative corner */}
        <div className="absolute bottom-0 right-0 w-20 h-20 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="currentColor" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}
