'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 via-black to-purple-900/40" />
        <motion.div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.5), transparent 50%)' }} animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
      </div>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, type: 'spring' }} className="relative mb-6">
          <div className="absolute -inset-12 bg-red-500/50 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -inset-8 bg-yellow-500/40 rounded-full blur-2xl" />
          <div className="relative w-36 h-36 md:w-48 md:h-48">
            <Image src="/logo.jpg" alt="Pokemon Legends" fill className="object-contain rounded-full ring-4 ring-yellow-500/70 shadow-2xl shadow-red-500/60" priority />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-yellow-500/50 via-red-500/50 to-purple-500/50" />
          <h1 className="relative text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">
            <span className="block bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 40px rgba(239,68,68,0.9))' }}>POKEMON</span>
            <span className="block text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent mt-2 tracking-[0.2em]" style={{ filter: 'drop-shadow(0 0 30px rgba(234,179,8,0.9))' }}>LEGENDS</span>
          </h1>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-6">
          <p className="text-2xl md:text-3xl text-gray-200 font-bold">The <span className="text-yellow-400 font-black">ULTIMATE</span> Pokemon Discord</p>
          <p className="text-red-400 font-black text-xl mt-2 tracking-widest">POKELEGENDS.ORG</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-10 flex flex-wrap justify-center gap-10 md:gap-16">
          {[{ value: '50K+', label: 'TRAINERS' }, { value: '24/7', label: 'ACTIVE' }, { value: '#1', label: 'COMMUNITY' }].map((stat, i) => (
            <motion.div key={i} className="text-center" whileHover={{ scale: 1.15 }}>
              <div className="text-5xl md:text-6xl font-black text-yellow-400" style={{ filter: 'drop-shadow(0 0 20px rgba(234,179,8,0.8))' }}>{stat.value}</div>
              <div className="text-sm text-gray-500 font-black tracking-[0.3em] mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-12 flex flex-col sm:flex-row gap-5">
          <motion.a href="https://discord.gg/pokemonlegends" target="_blank" rel="noopener noreferrer" className="group relative px-12 py-6 rounded-xl font-black text-2xl text-white overflow-hidden uppercase tracking-wider" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl blur-lg opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 rounded-xl" />
            <span className="relative flex items-center justify-center gap-3">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
              JOIN NOW
            </span>
          </motion.a>
          <motion.a href="#features" className="group relative px-12 py-6 rounded-xl font-black text-2xl overflow-hidden uppercase tracking-wider border-[3px] border-yellow-500 hover:border-yellow-400" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <div className="absolute inset-0 bg-yellow-500/20 group-hover:bg-yellow-500/30 transition-colors rounded-lg" />
            <span className="relative text-yellow-400">EXPLORE</span>
          </motion.a>
        </motion.div>
        <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2" animate={{ y: [0, 15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-8 h-14 border-2 border-yellow-500/50 rounded-full flex justify-center">
            <motion.div className="w-2 h-4 bg-yellow-400 rounded-full mt-2" animate={{ y: [0, 20, 0] }} transition={{ duration: 2, repeat: Infinity }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}