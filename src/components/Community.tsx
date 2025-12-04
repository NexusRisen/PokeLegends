'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const DISCORD_INVITE = 'https://discord.com/invite/pokemonlegends';

const communityHighlights = [
  { label: 'Active Daily', icon: '🔥' },
  { label: 'Friendly Community', icon: '💖' },
  { label: 'Regular Events', icon: '🎉' },
  { label: 'All Games Discussed', icon: '🎮' },
];

export default function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 px-4 overflow-hidden" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(88,101,242,0.15) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main card */}
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Card background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/20 via-purple-600/10 to-pink-600/10" />
          <div className="absolute inset-0 border border-white/10 rounded-3xl" />

          <div className="relative p-8 md:p-12">
            {/* Discord icon */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#5865F2] rounded-full blur-xl opacity-50" />
                <div className="relative w-20 h-20 rounded-full bg-[#5865F2] flex items-center justify-center">
                  <DiscordIcon className="w-10 h-10 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join the{' '}
              <span className="text-[#5865F2]">Adventure</span>
            </motion.h2>

            <motion.p
              className="text-gray-300 text-center text-lg max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Become part of Pokémon Legends and connect with trainers from around the world.
              Your legendary journey starts with a single click!
            </motion.p>

            {/* Highlights */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {communityHighlights.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm"
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </span>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-xl rounded-2xl transition-colors shadow-lg shadow-[#5865F2]/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <DiscordIcon className="w-7 h-7" />
                Join Pokémon Legends
              </motion.a>
            </motion.div>

            {/* Bottom decoration */}
            <div className="mt-8 flex justify-center gap-2">
              {['⚡', '🌟', '✨', '🌟', '⚡'].map((emoji, i) => (
                <span key={i} className="text-xl opacity-50">
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}
