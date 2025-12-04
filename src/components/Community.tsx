'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const DISCORD_INVITE = 'https://discord.com/invite/pokemonlegends';

const highlights = [
  { icon: '🔥', label: 'Active Daily' },
  { icon: '💖', label: 'Friendly Community' },
  { icon: '🎉', label: 'Regular Events' },
  { icon: '🎮', label: 'All Games' },
];

export default function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5865F2]/10 to-transparent" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="rounded-3xl bg-white/5 border border-white/10 p-8 sm:p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Discord Icon */}
          <div className="mb-10">
            <div className="w-24 h-24 rounded-full bg-[#5865F2] flex items-center justify-center mx-auto shadow-lg shadow-[#5865F2]/30">
              <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Join the <span className="text-[#5865F2]">Adventure</span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Become part of Pokémon Legends and connect with trainers from around the world.
            Your legendary journey starts here!
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/5 border border-white/10"
              >
                <span className="text-lg sm:text-xl mr-2 sm:mr-3">{item.icon}</span>
                <span className="text-gray-300 text-xs sm:text-sm font-medium whitespace-nowrap">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block min-w-[280px] bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-xl rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-[#5865F2]/30"
          >
            <div className="flex items-center justify-center space-x-3 px-10 py-5">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <span>Join Pokémon Legends</span>
            </div>
          </a>

          {/* Decoration */}
          <div className="mt-10 flex justify-center space-x-4">
            {['⚡', '🌟', '✨', '🌟', '⚡'].map((emoji, i) => (
              <span key={i} className="text-2xl opacity-40">{emoji}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
