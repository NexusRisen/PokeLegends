'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const features = [
  { icon: '⚔️', title: 'EPIC BATTLES', description: 'Dominate in thrilling Pokemon battles against trainers worldwide.', color: 'red' },
  { icon: '⚔️', title: 'TOURNAMENTS', description: 'Compete in weekly tournaments and prove you are the best.', color: 'yellow' },
  { icon: '⚔️', title: 'TRADING HUB', description: 'Trade rare Pokemon and complete your ultimate collection.', color: 'green' },
  { icon: '⚔️', title: 'MINI GAMES', description: 'Enjoy exclusive Pokemon-themed games and challenges.', color: 'blue' },
  { icon: '⚔️', title: 'POKEDEX WIKI', description: 'Master every Pokemon with our comprehensive guides.', color: 'purple' },
  { icon: '⚔️', title: 'DAILY REWARDS', description: 'Earn exclusive rewards and rare Pokemon every day.', color: 'pink' },
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
        if (start >= end) { setCount(end); clearInterval(timer); }
        else { setCount(Math.floor(start)); }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const colorMap: Record<string, string> = {
    red: 'from-red-600 to-orange-500 shadow-red-500/50',
    yellow: 'from-yellow-500 to-amber-500 shadow-yellow-500/50',
    green: 'from-green-500 to-emerald-500 shadow-green-500/50',
    blue: 'from-blue-500 to-cyan-500 shadow-blue-500/50',
    purple: 'from-purple-500 to-pink-500 shadow-purple-500/50',
    pink: 'from-pink-500 to-rose-500 shadow-pink-500/50',
  };

  return (
    <section id="features" className="relative py-28 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black" />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <motion.span className="inline-block px-6 py-3 rounded-full text-sm font-black uppercase tracking-widest bg-red-500/20 text-red-400 border border-red-500/40 mb-6" whileHover={{ scale: 1.05 }}>Why Join Us?</motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">BECOME A </span>
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 30px rgba(239,68,68,0.5))' }}>LEGEND</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">The most epic Pokemon community on Discord awaits you</p>
        </motion.div>

        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          {[{ value: 50000, label: 'TRAINERS', suffix: '+' }, { value: 1000, label: 'DAILY BATTLES', suffix: '+' }, { value: 898, label: 'POKEMON', suffix: '' }, { value: 99, label: 'UPTIME', suffix: '%' }].map((stat) => (
            <motion.div key={stat.label} className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 text-center overflow-hidden group" whileHover={{ scale: 1.05, borderColor: 'rgba(234,179,8,0.5)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-4xl md:text-5xl font-black text-yellow-400" style={{ filter: 'drop-shadow(0 0 10px rgba(234,179,8,0.5))' }}><AnimatedCounter value={stat.value} suffix={stat.suffix} /></div>
                <p className="text-gray-500 font-bold tracking-widest text-xs mt-2">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div key={feature.title} className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 hover:border-red-500/50 transition-all duration-300 overflow-hidden" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }} whileHover={{ y: -10, scale: 1.02 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 bg-gradient-to-br from-red-600 to-orange-500 shadow-lg`}>{feature.icon}</div>
              <h3 className="relative text-2xl font-black text-white mb-3 tracking-wide">{feature.title}</h3>
              <p className="relative text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}