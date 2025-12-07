'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const DISCORD_INVITE = 'https://discord.com/invite/pokemonlegends';
const DISCORD_SERVER_ID = '1095036363348377623';

// Pokeball SVG
const PokeballIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="48" fill="#ee1515" stroke="#222" strokeWidth="3"/>
    <rect x="0" y="47" width="100" height="6" fill="#222"/>
    <path d="M 2 50 A 48 48 0 0 0 98 50" fill="#fff"/>
    <circle cx="50" cy="50" r="14" fill="#222"/>
    <circle cx="50" cy="50" r="9" fill="#fff"/>
  </svg>
);

export default function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [onlineCount, setOnlineCount] = useState('500+');

  useEffect(() => {
    const fetchDiscordStats = async () => {
      try {
        const response = await fetch(
          `https://discord.com/api/guilds/${DISCORD_SERVER_ID}/widget.json`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.presence_count) {
            setOnlineCount(data.presence_count.toLocaleString());
          }
        }
      } catch (error) {
        console.log('Using fallback online count');
      }
    };

    fetchDiscordStats();
  }, []);

  const serverFeatures = [
    { icon: '🟢', label: `${onlineCount} Online`, color: 'from-green-500 to-emerald-500' },
    { icon: '⚡', label: 'Active 24/7', color: 'from-yellow-400 to-amber-500' },
    { icon: '🎮', label: 'Weekly Events', color: 'from-blue-400 to-cyan-500' },
    { icon: '✨', label: 'Verified Server', color: 'from-purple-400 to-pink-500' },
  ];

  return (
    <section id="community" className="relative section-padding overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Pokeballs decoration */}
      <motion.div
        className="absolute top-10 left-[10%] opacity-10"
        animate={{ rotate: 360, y: [0, -15, 0] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, y: { duration: 3, repeat: Infinity } }}
      >
        <PokeballIcon className="w-20 h-20" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-[15%] opacity-10"
        animate={{ rotate: -360, y: [0, 15, 0] }}
        transition={{ rotate: { duration: 25, repeat: Infinity, ease: 'linear' }, y: { duration: 4, repeat: Infinity } }}
      >
        <PokeballIcon className="w-16 h-16" />
      </motion.div>

      <div className="container-narrow relative z-10">
        <motion.div
          className="relative overflow-hidden rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            background: 'linear-gradient(180deg, rgba(26,26,46,0.95) 0%, rgba(15,15,26,0.98) 100%)',
            border: '1px solid rgba(238,21,21,0.2)',
          }}
        >
          {/* Top accent bar with Pokemon gradient */}
          <div className="h-2 w-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500" />

          {/* Gradient border glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(238,21,21,0.15) 0%, transparent 50%)',
            }}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <div className="relative" style={{ padding: '48px 48px 64px 48px' }}>
            {/* Header */}
            <div className="text-center mb-14">
              {/* Giant Pokeball Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
                className="inline-block mb-8"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <PokeballIcon className="w-28 h-28" />
                  </motion.div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-red-500/30 rounded-full blur-xl -z-10" />
                </div>
              </motion.div>

              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                Ready to
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500"> Catch &apos;Em All?</span>
              </motion.h2>

              <div className="flex justify-center">
                <motion.p
                  className="text-zinc-400 text-lg max-w-md leading-relaxed text-center"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  Join the ultimate Pokemon Discord community. Your legendary journey starts here.
                </motion.p>
              </div>
            </div>

            {/* Server Features with Pokemon type styling */}
            <div className="flex flex-wrap justify-center gap-4" style={{ marginBottom: '60px' }}>
              {serverFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-3 rounded-full text-white"
                  style={{
                    padding: '14px 24px',
                    background: 'rgba(30,30,50,0.8)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <span className="text-xl">{feature.icon}</span>
                  <span className="text-sm font-semibold">{feature.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Epic CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="text-center"
            >
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex"
              >
                {/* Animated glow background */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-2xl opacity-70 blur-lg group-hover:opacity-100 transition-opacity"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                />

                <div
                  className="relative flex items-center gap-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold text-lg rounded-2xl transition-all group-hover:scale-105 shadow-2xl"
                  style={{ padding: '22px 44px' }}
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  <span>Join Pokemon Legends</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
