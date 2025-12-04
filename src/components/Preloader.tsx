'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'catching' | 'caught'>('loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase('catching');
          setTimeout(() => {
            setPhase('caught');
            setTimeout(onComplete, 800);
          }, 1500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        style={{
          background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0f0f1a 50%, #000000 100%)',
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Main content */}
        <div className="flex flex-col items-center px-8">
          {/* Pokeball */}
          <motion.div
            className="mb-10"
            animate={
              phase === 'catching'
                ? { rotate: [-15, 15, -10, 10, -5, 5, 0], y: [0, -20, 0] }
                : phase === 'caught'
                ? { scale: [1, 1.2, 0] }
                : {}
            }
            transition={{ duration: phase === 'catching' ? 1.5 : 0.8 }}
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-red-500/30 blur-2xl" />

              {/* Pokeball SVG */}
              <motion.svg
                viewBox="0 0 100 100"
                className="w-full h-full relative z-10 drop-shadow-2xl"
                animate={{ rotateY: phase === 'loading' ? 360 : 0 }}
                transition={{ duration: 3, repeat: phase === 'loading' ? Infinity : 0, ease: 'linear' }}
              >
                {/* Top half - Red */}
                <path d="M50 2 A48 48 0 0 1 98 50 L2 50 A48 48 0 0 1 50 2" fill="#ef4444" />
                {/* Bottom half - White */}
                <path d="M50 98 A48 48 0 0 1 2 50 L98 50 A48 48 0 0 1 50 98" fill="#f5f5f5" />
                {/* Center band */}
                <rect x="0" y="46" width="100" height="8" fill="#1f2937" />
                {/* Center button outer */}
                <circle cx="50" cy="50" r="14" fill="#f5f5f5" stroke="#1f2937" strokeWidth="6" />
                {/* Center button inner */}
                <circle
                  cx="50"
                  cy="50"
                  r="6"
                  fill={progress >= 100 ? '#22c55e' : '#d4d4d4'}
                />
                {/* Shine */}
                <ellipse cx="35" cy="30" rx="12" ry="8" fill="white" opacity="0.3" />
              </motion.svg>
            </div>
          </motion.div>

          {/* Text */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            {phase === 'loading' && 'Catching Legends...'}
            {phase === 'catching' && 'Almost there...'}
            {phase === 'caught' && 'Gotcha!'}
          </h2>

          {/* Progress bar container */}
          <div className="w-full max-w-xs">
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Percentage */}
            <p className="text-gray-400 text-center mt-4 font-mono text-lg">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-red-500/30 rounded-tl-2xl" />
        <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-yellow-500/30 rounded-tr-2xl" />
        <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-purple-500/30 rounded-bl-2xl" />
        <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-blue-500/30 rounded-br-2xl" />
      </motion.div>
    </AnimatePresence>
  );
}
