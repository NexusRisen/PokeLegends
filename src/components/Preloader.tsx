'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Animated Pokeball SVG
const Pokeball = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs>
      <linearGradient id="preloaderRed" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ff3b3b" />
        <stop offset="100%" stopColor="#cc0000" />
      </linearGradient>
      <filter id="preloaderGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#preloaderRed)" stroke="#222" strokeWidth="3"/>
    <rect x="0" y="47" width="100" height="6" fill="#222"/>
    <path d="M 2 50 A 48 48 0 0 0 98 50" fill="#fff"/>
    <circle cx="50" cy="50" r="14" fill="#222"/>
    <circle cx="50" cy="50" r="9" fill="#fff" filter="url(#preloaderGlow)"/>
  </svg>
);

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [loadingText, setLoadingText] = useState('Catching Pokemon...');

  const loadingMessages = [
    'Catching Pokemon...',
    'Opening Pokedex...',
    'Loading trainers...',
    'Preparing battle...',
    'Ready to explore!',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + Math.random() * 8 + 3;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const msgIndex = Math.min(Math.floor(progress / 25), loadingMessages.length - 1);
    setLoadingText(loadingMessages[msgIndex]);
  }, [progress]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0f]"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background Grid */}
          <div className="absolute inset-0 bg-grid opacity-30" />

          {/* Pokemon-themed Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/15 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />

          {/* Main Content */}
          <div className="relative flex flex-col items-center px-8">
            {/* Spinning Pokeball */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="mb-8 relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <Pokeball className="w-24 h-24" />
              </motion.div>
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-red-500/30 rounded-full blur-xl -z-10"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-black text-white mb-2"
            >
              Pokemon{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500">
                Legends
              </span>
            </motion.h1>

            {/* Loading Text */}
            <motion.p
              key={loadingText}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-zinc-400 text-sm mb-8"
            >
              {loadingText}
            </motion.p>

            {/* Progress Bar */}
            <div className="w-64 sm:w-80">
              <div className="w-full h-2 bg-zinc-800/80 rounded-full overflow-hidden border border-zinc-700/50">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              {/* Percentage */}
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span className="text-xs text-zinc-500">Loading</span>
                </div>
                <span className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 font-bold font-mono">
                  {Math.min(Math.round(progress), 100)}%
                </span>
              </div>
            </div>

            {/* Decorative dots */}
            <motion.div
              className="flex gap-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-yellow-500"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
