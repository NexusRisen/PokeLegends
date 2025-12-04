'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const features = [
  {
    icon: '⚔️',
    title: 'Epic Battles',
    description: 'Engage in thrilling Pokémon battles with trainers from around the world.',
    color: 'from-red-500 to-orange-500',
    glow: 'rgba(239, 68, 68, 0.5)',
  },
  {
    icon: '🏆',
    title: 'Tournaments',
    description: 'Compete in weekly tournaments and climb the legendary leaderboards.',
    color: 'from-yellow-500 to-amber-500',
    glow: 'rgba(234, 179, 8, 0.5)',
  },
  {
    icon: '🤝',
    title: 'Trading Hub',
    description: 'Trade rare Pokémon and build your ultimate collection.',
    color: 'from-green-500 to-emerald-500',
    glow: 'rgba(34, 197, 94, 0.5)',
  },
  {
    icon: '🎮',
    title: 'Mini Games',
    description: 'Enjoy exclusive Pokémon-themed games and activities.',
    color: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59, 130, 246, 0.5)',
  },
  {
    icon: '📚',
    title: 'Pokédex Wiki',
    description: 'Access comprehensive guides and strategies for every Pokémon.',
    color: 'from-purple-500 to-pink-500',
    glow: 'rgba(168, 85, 247, 0.5)',
  },
  {
    icon: '🎁',
    title: 'Daily Rewards',
    description: 'Earn exclusive rewards and rare Pokémon through daily activities.',
    color: 'from-pink-500 to-rose-500',
    glow: 'rgba(236, 72, 153, 0.5)',
  },
];

const stats = [
  { value: 50000, label: 'Trainers', suffix: '+' },
  { value: 1000, label: 'Daily Battles', suffix: '+' },
  { value: 898, label: 'Pokémon Species', suffix: '' },
  { value: 99, label: 'Uptime', suffix: '%' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-[150px] opacity-30"
          style={{
            background: 'radial-gradient(circle, #a855f7, transparent)',
            left: '10%',
            top: '20%',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full blur-[120px] opacity-20"
          style={{
            background: 'radial-gradient(circle, #ef4444, transparent)',
            right: '15%',
            bottom: '20%',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ✨ Why Join Us?
          </motion.span>

          <motion.h2
            className="text-4xl md:text-6xl font-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white">Become a </span>
            <span
              className="text-transparent bg-clip-text"
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #ef4444, #a855f7)',
                backgroundClip: 'text',
              }}
            >
              Pokémon Master
            </span>
          </motion.h2>

          <motion.p
            className="text-slate-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the most immersive Pokémon community on Discord with exclusive features
            and endless adventures.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <div className="relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm text-center overflow-hidden">
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.2), transparent)',
                  }}
                />

                <motion.div
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.1 }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </motion.div>
                <p className="text-slate-400 mt-2 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
            >
              <motion.div
                className="relative h-full p-8 rounded-3xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm overflow-hidden cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated border gradient */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${feature.glow}, transparent)`,
                    padding: '2px',
                  }}
                />

                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-1 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ background: feature.glow }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color.split(' ')[0].replace('from-', '')}, ${feature.color.split(' ')[1].replace('to-', '')})`.replace('from-', '').replace('to-', ''),
                    }}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className={`w-full h-full rounded-2xl flex items-center justify-center bg-gradient-to-br ${feature.color}`}
                    >
                      {feature.icon}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Learn more link */}
                  <motion.div
                    className="mt-6 flex items-center gap-2 text-sm font-semibold text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span>Learn more</span>
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.div>
                </div>

                {/* Corner decoration */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${feature.color} blur-2xl`} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
