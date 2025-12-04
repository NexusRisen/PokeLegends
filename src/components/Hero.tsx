'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const DISCORD_INVITE = 'https://discord.com/invite/pokemonlegends';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-blue-900/20" />

      {/* Animated rings */}
      {mounted && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2 opacity-10"
              style={{
                width: 300 + i * 150,
                height: 300 + i * 150,
                borderColor: ['#ef4444', '#a855f7', '#3b82f6'][i],
              }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 20 + i * 10, repeat: Infinity, ease: 'linear' }}
            />
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <div className="inline-block px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30">
            <div className="flex items-center justify-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-purple-300 text-sm font-medium whitespace-nowrap">Community Active Now</span>
            </div>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="block text-white mb-4">Pokémon</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500">
            Legends
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-14 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Join the ultimate <span className="text-yellow-400 font-semibold">Pokémon community</span> on Discord.
          Connect with trainers, share your journey, and become a legend!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Primary Button */}
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[220px] bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-lg rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-[#5865F2]/30"
          >
            <div className="flex items-center justify-center space-x-3 px-8 py-4">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <span>Join Our Server</span>
            </div>
          </a>

          {/* Secondary Button */}
          <a
            href="#features"
            className="w-full sm:w-auto min-w-[180px] bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-xl border border-white/20 transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-center justify-center space-x-2 px-8 py-4">
              <span>Explore</span>
              <span>→</span>
            </div>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="w-7 h-11 rounded-full border-2 border-white/30 mx-auto flex justify-center p-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-white/60"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
