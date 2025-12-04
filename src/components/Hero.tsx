'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const stars = [
  { left: '10%', top: '15%', size: 2, delay: 0 },
  { left: '20%', top: '25%', size: 1, delay: 0.5 },
  { left: '30%', top: '10%', size: 3, delay: 1 },
  { left: '40%', top: '30%', size: 2, delay: 0.3 },
  { left: '50%', top: '20%', size: 1, delay: 0.8 },
  { left: '60%', top: '35%', size: 2, delay: 0.2 },
  { left: '70%', top: '15%', size: 3, delay: 0.6 },
  { left: '80%', top: '25%', size: 1, delay: 0.4 },
  { left: '90%', top: '20%', size: 2, delay: 0.9 },
  { left: '15%', top: '45%', size: 1, delay: 0.1 },
  { left: '25%', top: '55%', size: 2, delay: 0.7 },
  { left: '35%', top: '50%', size: 1, delay: 0.5 },
  { left: '45%', top: '60%', size: 3, delay: 0.3 },
  { left: '55%', top: '45%', size: 2, delay: 0.8 },
  { left: '65%', top: '55%', size: 1, delay: 0.2 },
  { left: '75%', top: '50%', size: 2, delay: 0.6 },
  { left: '85%', top: '60%', size: 1, delay: 0.4 },
  { left: '95%', top: '45%', size: 2, delay: 0.9 },
  { left: '5%', top: '70%', size: 1, delay: 0.1 },
  { left: '12%', top: '80%', size: 2, delay: 0.7 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent)',
            left: '-10%',
            top: '-10%',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3), transparent)',
            right: '-5%',
            top: '20%',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.3), transparent)',
            left: '30%',
            bottom: '10%',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: star.size,
              height: star.size,
              left: star.left,
              top: star.top,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
            <motion.div
              className="absolute inset-0 rounded-full opacity-50"
              style={{
                background: 'radial-gradient(circle, rgba(239, 68, 68, 0.4), transparent)',
                filter: 'blur(40px)',
              }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <Image
              src="/PokeLegends/logo.jpg"
              alt="Pokémon Legends Logo"
              fill
              className="object-contain rounded-full"
              priority
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-2">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #fbbf24 0%, #ef4444 50%, #a855f7 100%)',
              }}
            >
              POKÉMON
            </span>
          </h1>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-widest bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, #fbbf24, #f59e0b)',
            }}
          >
            LEGENDS
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-slate-300 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Join the ultimate <span className="text-yellow-400 font-semibold">Pokémon</span> community
          and become a <span className="text-purple-400 font-semibold">Legend</span>
        </motion.p>

        {/* Website URL */}
        <motion.p
          className="mt-2 text-purple-400 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          pokelegends.org
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Discord Button */}
          <motion.a
            href="https://discord.gg/pokemonlegends"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-8 py-4 rounded-full font-bold text-lg text-white overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #5865F2, #7289da)',
              boxShadow: '0 0 30px rgba(88, 101, 242, 0.5)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Join Discord
            </span>
          </motion.a>

          {/* Website Button */}
          <motion.a
            href="https://pokelegends.org"
            className="px-8 py-4 rounded-full font-bold text-lg text-yellow-400 border-2 border-yellow-500/50 hover:bg-yellow-500/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit pokelegends.org
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <span className="text-sm">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
