'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const features = [
  {
    icon: '⚔️',
    title: 'Epic Battles',
    description: 'Engage in thrilling Pokémon battles with trainers from around the world.',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    icon: '🏆',
    title: 'Tournaments',
    description: 'Compete in weekly tournaments and climb the legendary leaderboards.',
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    icon: '🤝',
    title: 'Trading Hub',
    description: 'Trade rare Pokémon and build your ultimate collection.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: '🎮',
    title: 'Mini Games',
    description: 'Enjoy exclusive Pokémon-themed games and activities.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '📚',
    title: 'Pokédex Wiki',
    description: 'Access comprehensive guides and strategies for every Pokémon.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: '🎁',
    title: 'Daily Rewards',
    description: 'Earn exclusive rewards and rare Pokémon through daily activities.',
    gradient: 'from-pink-500 to-rose-500',
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
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30 mb-4">
            ✨ Why Join Us?
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-white">Become a </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #fbbf24, #ef4444, #a855f7)' }}
            >
              Pokémon Master
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Experience the most immersive Pokémon community on Discord
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="text-3xl md:text-4xl font-black bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, #fbbf24, #f59e0b)' }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-slate-400 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-purple-500/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 bg-gradient-to-br ${feature.gradient}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
