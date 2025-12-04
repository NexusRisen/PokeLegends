'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function DiscordCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950">
        {/* Animated Discord-colored orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{
            background: 'radial-gradient(circle, rgba(88, 101, 242, 0.4), transparent)',
            left: '20%',
            top: '10%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(114, 137, 218, 0.3), transparent)',
            right: '10%',
            bottom: '10%',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="relative rounded-[3rem] overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Card background with animated gradient border */}
          <div className="absolute inset-0 rounded-[3rem] p-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
            <motion.div
              className="absolute inset-0 rounded-[3rem]"
              style={{
                background: 'linear-gradient(90deg, #a855f7, #ec4899, #eab308, #a855f7)',
                backgroundSize: '300% 100%',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* Main content area */}
          <div className="relative m-[3px] rounded-[calc(3rem-3px)] bg-slate-900/95 backdrop-blur-xl p-12 md:p-16">
            {/* Floating particles inside */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-purple-400"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left side - Discord logo animation */}
              <motion.div
                className="relative flex-shrink-0"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Rotating rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/30"
                  style={{ scale: 1.5 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/20"
                  style={{ scale: 1.8 }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                />

                {/* Glow behind logo */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-3xl"
                  style={{ background: '#5865F2' }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Discord logo container */}
                <motion.div
                  className="relative w-40 h-40 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #5865F2, #7289da)',
                    boxShadow: '0 0 60px rgba(88, 101, 242, 0.6)',
                  }}
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    boxShadow: [
                      '0 0 60px rgba(88, 101, 242, 0.6)',
                      '0 0 100px rgba(88, 101, 242, 0.8)',
                      '0 0 60px rgba(88, 101, 242, 0.6)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {/* Discord Icon */}
                  <motion.svg
                    className="w-20 h-20 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </motion.svg>
                </motion.div>

                {/* Orbiting dots */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      background: ['#fbbf24', '#ef4444', '#22c55e', '#3b82f6', '#a855f7', '#ec4899'][i],
                      boxShadow: `0 0 10px ${['#fbbf24', '#ef4444', '#22c55e', '#3b82f6', '#a855f7', '#ec4899'][i]}`,
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 6 + i,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    initial={{
                      x: Math.cos((i * Math.PI * 2) / 6) * 100,
                      y: Math.sin((i * Math.PI * 2) / 6) * 100,
                    }}
                  />
                ))}
              </motion.div>

              {/* Right side - Content */}
              <div className="text-center lg:text-left flex-1">
                <motion.span
                  className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  🎮 Join 50,000+ Trainers
                </motion.span>

                <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <span className="text-white">Ready to Become a </span>
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      background: 'linear-gradient(135deg, #fbbf24, #ef4444, #a855f7)',
                      backgroundClip: 'text',
                    }}
                  >
                    Legend?
                  </span>
                </motion.h2>

                <motion.p
                  className="text-slate-300 text-lg mb-8 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Join the most epic Pokémon community on Discord! Battle, trade, compete in tournaments,
                  and make friends with trainers from around the world.
                </motion.p>

                {/* CTA Button */}
                <motion.a
                  href="https://discord.gg/pokemonlegends"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full font-bold text-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Button background */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #5865F2, #7289da)',
                    }}
                  />

                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #7289da, #5865F2)',
                    }}
                  />

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-xl"
                    style={{ background: '#5865F2' }}
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Button content */}
                  <span className="relative z-10 flex items-center gap-3 text-white">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                    Join Pokémon Legends
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </span>
                </motion.a>

                {/* Trust indicators */}
                <motion.div
                  className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-slate-400 text-sm"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">●</span>
                    <span>Always Online</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">★</span>
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">♥</span>
                    <span>Active Community</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
