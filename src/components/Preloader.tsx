'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'catching' | 'caught' | 'complete'>('loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100 && phase === 'loading') {
      setPhase('catching');
      setTimeout(() => setPhase('caught'), 800);
      setTimeout(() => setPhase('complete'), 1500);
      setTimeout(onComplete, 1800);
    }
  }, [progress, phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'complete' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0f]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-transparent to-yellow-950/20" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Pokeball */}
            <motion.div
              className="relative w-32 h-32"
              animate={
                phase === 'catching'
                  ? { rotate: [-15, 15, -15, 15, 0], y: [0, -20, 0] }
                  : phase === 'caught'
                  ? { scale: [1, 1.2, 1] }
                  : {}
              }
              transition={{ duration: phase === 'catching' ? 0.8 : 0.3 }}
            >
              {/* Glow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: phase === 'caught'
                    ? 'radial-gradient(circle, rgba(34, 197, 94, 0.6), transparent)'
                    : 'radial-gradient(circle, rgba(239, 68, 68, 0.4), transparent)',
                  filter: 'blur(20px)',
                }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Pokeball SVG */}
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                <path
                  d="M 50 5 A 45 45 0 0 1 95 50 L 5 50 A 45 45 0 0 1 50 5"
                  fill="url(#redGrad)"
                  stroke="#1a1a2e"
                  strokeWidth="3"
                />
                <path
                  d="M 50 95 A 45 45 0 0 1 5 50 L 95 50 A 45 45 0 0 1 50 95"
                  fill="#f1f5f9"
                  stroke="#1a1a2e"
                  strokeWidth="3"
                />
                <rect x="5" y="46" width="90" height="8" fill="#1a1a2e" />
                <circle cx="50" cy="50" r="12" fill="#1a1a2e" />
                <circle
                  cx="50"
                  cy="50"
                  r="8"
                  fill={phase === 'caught' ? '#22c55e' : '#f8fafc'}
                />
                <ellipse cx="35" cy="30" rx="6" ry="3" fill="rgba(255,255,255,0.5)" transform="rotate(-30 35 30)" />
                <defs>
                  <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#b91c1c" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Text */}
            <div className="mt-8 text-center">
              <motion.h2
                className="text-2xl font-black bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {phase === 'loading' && 'Loading...'}
                {phase === 'catching' && 'Catching...'}
                {phase === 'caught' && 'Gotcha!'}
              </motion.h2>

              {/* Progress bar */}
              {phase === 'loading' && (
                <div className="mt-4 w-48 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-red-500 to-yellow-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}

              <p className="mt-3 text-gray-500 text-sm">
                {phase === 'loading' && `${progress}%`}
                {phase === 'catching' && 'Almost there...'}
                {phase === 'caught' && 'Welcome to Pokemon Legends!'}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
