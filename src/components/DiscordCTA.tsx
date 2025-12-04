'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function DiscordCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-3xl p-[2px]">
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(90deg, #a855f7, #ec4899, #fbbf24, #a855f7)',
                backgroundSize: '300% 100%',
              }}
              animate={{ backgroundPosition: ['0% 0%', '100% 0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* Content */}
          <div className="relative m-[2px] rounded-[calc(1.5rem-2px)] bg-slate-900/95 p-10 md:p-14">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              {/* Discord Logo */}
              <motion.div
                className="relative flex-shrink-0"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(88, 101, 242, 0.5), transparent)',
                    filter: 'blur(30px)',
                  }}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div
                  className="relative w-28 h-28 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #5865F2, #7289da)',
                    boxShadow: '0 0 40px rgba(88, 101, 242, 0.5)',
                  }}
                >
                  <svg className="w-14 h-14 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </div>
              </motion.div>

              {/* Text Content */}
              <div className="text-center lg:text-left flex-1">
                <motion.span
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  🎮 Join 50,000+ Trainers
                </motion.span>

                <motion.h2
                  className="text-3xl md:text-4xl lg:text-5xl font-black mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="text-white">Ready to Become a </span>
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(135deg, #fbbf24, #ef4444, #a855f7)' }}
                  >
                    Legend?
                  </span>
                </motion.h2>

                <motion.p
                  className="text-slate-300 mb-6 max-w-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Join the most epic Pokémon community on Discord! Battle, trade, compete in tournaments, and make friends with trainers worldwide.
                </motion.p>

                {/* CTA Button */}
                <motion.a
                  href="https://discord.gg/pokemonlegends"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg text-white"
                  style={{
                    background: 'linear-gradient(135deg, #5865F2, #7289da)',
                    boxShadow: '0 0 30px rgba(88, 101, 242, 0.5)',
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  Join Pokémon Legends
                </motion.a>

                {/* Trust indicators */}
                <motion.div
                  className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 text-slate-400 text-sm"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <span className="flex items-center gap-1">
                    <span className="text-green-400">●</span> Always Online
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span> 4.9/5 Rating
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-purple-400">♥</span> Active Community
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
