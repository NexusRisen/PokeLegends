'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/50 to-slate-950">
        {/* Animated aurora effect */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(ellipse at 20% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(ellipse at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(ellipse at 50% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
              'radial-gradient(ellipse at 20% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute w-[800px] h-[800px] rounded-full blur-[120px]"
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent)',
              left: '-10%',
              top: '-20%',
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full blur-[100px]"
            style={{
              background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3), transparent)',
              right: '-10%',
              top: '20%',
            }}
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full blur-[80px]"
            style={{
              background: 'radial-gradient(circle, rgba(251, 191, 36, 0.3), transparent)',
              left: '30%',
              bottom: '-10%',
            }}
            animate={{
              x: [0, 60, 0],
              y: [0, -60, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Stars */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Shooting stars */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              boxShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff',
            }}
            initial={{
              x: '120%',
              y: '-20%',
              opacity: 0,
            }}
            animate={{
              x: [null, '-20%'],
              y: [null, '120%'],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 5 + Math.random() * 3,
              repeatDelay: 8,
            }}
          />
        ))}
      </div>

      {/* Floating Legendary Silhouettes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mewtwo silhouette */}
        <motion.div
          className="absolute right-[5%] top-[15%] w-64 h-64 opacity-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-purple-400">
            <ellipse cx="50" cy="30" rx="15" ry="20" />
            <ellipse cx="50" cy="60" rx="20" ry="25" />
            <path d="M30 60 Q20 80 25 95" strokeWidth="8" stroke="currentColor" fill="none" />
            <path d="M70 60 Q80 80 75 95" strokeWidth="8" stroke="currentColor" fill="none" />
            <ellipse cx="38" cy="25" rx="4" ry="6" className="fill-purple-300" />
            <ellipse cx="62" cy="25" rx="4" ry="6" className="fill-purple-300" />
            <path d="M50 5 Q45 -5 40 10" strokeWidth="6" stroke="currentColor" fill="none" />
          </svg>
        </motion.div>

        {/* Rayquaza silhouette */}
        <motion.div
          className="absolute left-[5%] top-[30%] w-80 h-80 opacity-10"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-green-400">
            <path d="M20 90 Q30 70 25 50 Q20 30 35 20 Q50 10 60 25 Q70 40 65 60 Q60 80 70 95" strokeWidth="12" stroke="currentColor" fill="none" />
            <circle cx="50" cy="20" r="10" />
          </svg>
        </motion.div>

        {/* Arceus silhouette */}
        <motion.div
          className="absolute right-[15%] bottom-[20%] w-72 h-72 opacity-10"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, -3, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-yellow-400">
            <ellipse cx="50" cy="50" rx="25" ry="15" />
            <path d="M25 50 Q10 45 5 35" strokeWidth="4" stroke="currentColor" fill="none" />
            <path d="M75 50 Q90 45 95 35" strokeWidth="4" stroke="currentColor" fill="none" />
            <circle cx="50" cy="30" r="12" />
            <ellipse cx="50" cy="25" rx="20" ry="8" className="fill-yellow-300" />
          </svg>
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center"
        style={{ y, opacity, scale }}
      >
        {/* Floating Pokéball decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`pokeball-${i}`}
              className="absolute"
              style={{
                left: `${15 + (i % 3) * 35}%`,
                top: `${20 + Math.floor(i / 3) * 50}%`,
              }}
              animate={{
                y: [0, -30 - i * 5, 0],
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            >
              <div
                className="w-8 h-8 rounded-full opacity-20"
                style={{
                  background: 'linear-gradient(180deg, #ef4444 50%, #fff 50%)',
                  boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Logo/Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Glow behind text */}
          <motion.div
            className="absolute inset-0 blur-3xl opacity-50"
            style={{
              background: 'linear-gradient(90deg, #ef4444, #eab308, #a855f7)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <motion.h1
            className="relative text-6xl md:text-8xl lg:text-9xl font-black tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #ef4444 25%, #ec4899 50%, #a855f7 75%, #3b82f6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          >
            POKÉMON
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative mt-2"
        >
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-widest"
            style={{
              background: 'linear-gradient(90deg, #fbbf24, #f59e0b)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 0 60px rgba(251, 191, 36, 0.5)',
            }}
          >
            LEGENDS
          </motion.h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mt-8 text-xl md:text-2xl text-slate-300 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <span className="text-purple-400">Join the ultimate</span>{' '}
          <span className="text-yellow-400 font-semibold">Pokémon</span>{' '}
          <span className="text-purple-400">community and become a</span>{' '}
          <motion.span
            className="text-transparent bg-clip-text font-bold"
            style={{
              background: 'linear-gradient(90deg, #ef4444, #f59e0b, #eab308)',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Legend
          </motion.span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Join Discord Button */}
          <motion.a
            href="https://discord.gg/pokemonlegends"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-full font-bold text-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button glow */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #5865F2, #7289da)',
                boxShadow: '0 0 30px rgba(88, 101, 242, 0.5)',
              }}
              animate={{
                boxShadow: [
                  '0 0 30px rgba(88, 101, 242, 0.5)',
                  '0 0 50px rgba(88, 101, 242, 0.8)',
                  '0 0 30px rgba(88, 101, 242, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />

            <span className="relative z-10 flex items-center gap-3 text-white">
              {/* Discord Icon */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Join Discord
            </span>
          </motion.a>

          {/* Explore Button */}
          <motion.button
            className="group relative px-8 py-4 rounded-full font-bold text-lg overflow-hidden border-2 border-yellow-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10 text-yellow-400 group-hover:text-yellow-300 transition-colors">
              Explore More
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-slate-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
