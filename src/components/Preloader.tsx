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
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100 && phase === 'loading') {
      setPhase('catching');
      setTimeout(() => setPhase('caught'), 1500);
      setTimeout(() => setPhase('complete'), 2500);
      setTimeout(onComplete, 3000);
    }
  }, [progress, phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'complete' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
            {/* Animated stars */}
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            {/* Floating energy particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  background: i % 2 === 0
                    ? 'radial-gradient(circle, #fbbf24, transparent)'
                    : 'radial-gradient(circle, #a855f7, transparent)',
                }}
                animate={{
                  y: [0, -200, 0],
                  x: [0, Math.random() * 100 - 50, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Pokéball Container */}
            <motion.div
              className="relative w-48 h-48"
              animate={
                phase === 'catching'
                  ? { rotate: [-10, 10, -10, 10, 0], y: [0, -20, 0] }
                  : phase === 'caught'
                  ? { scale: [1, 1.2, 1] }
                  : {}
              }
              transition={{
                duration: phase === 'catching' ? 1.5 : 0.5,
                ease: 'easeInOut',
              }}
            >
              {/* Glow effect behind pokeball */}
              <motion.div
                className="absolute inset-0 rounded-full blur-3xl"
                style={{
                  background: phase === 'caught'
                    ? 'radial-gradient(circle, #22c55e, transparent)'
                    : 'radial-gradient(circle, #ef4444, transparent)',
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Pokéball SVG */}
              <svg viewBox="0 0 100 100" className="w-full h-full relative z-10">
                {/* Top half - Red */}
                <motion.path
                  d="M 50 5 A 45 45 0 0 1 95 50 L 5 50 A 45 45 0 0 1 50 5"
                  fill="url(#redGradient)"
                  stroke="#1a1a2e"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />

                {/* Bottom half - White */}
                <motion.path
                  d="M 50 95 A 45 45 0 0 1 5 50 L 95 50 A 45 45 0 0 1 50 95"
                  fill="url(#whiteGradient)"
                  stroke="#1a1a2e"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                />

                {/* Center band */}
                <motion.rect
                  x="5"
                  y="45"
                  width="90"
                  height="10"
                  fill="#1a1a2e"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />

                {/* Center button outer ring */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="15"
                  fill="#1a1a2e"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                />

                {/* Center button inner */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="10"
                  fill={phase === 'caught' ? '#22c55e' : '#f8fafc'}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1 }}
                >
                  {phase === 'caught' && (
                    <animate
                      attributeName="fill"
                      values="#22c55e;#86efac;#22c55e"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  )}
                </motion.circle>

                {/* Shine effect */}
                <motion.ellipse
                  cx="35"
                  cy="30"
                  rx="8"
                  ry="4"
                  fill="rgba(255,255,255,0.6)"
                  transform="rotate(-45 35 30)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />

                {/* Gradients */}
                <defs>
                  <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#dc2626" />
                    <stop offset="100%" stopColor="#b91c1c" />
                  </linearGradient>
                  <linearGradient id="whiteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f8fafc" />
                    <stop offset="50%" stopColor="#e2e8f0" />
                    <stop offset="100%" stopColor="#cbd5e1" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Sparkles around pokeball when caught */}
              {phase === 'caught' && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`sparkle-${i}`}
                      className="absolute w-3 h-3"
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                      initial={{ scale: 0, x: 0, y: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        x: Math.cos((i * Math.PI * 2) / 8) * 100,
                        y: Math.sin((i * Math.PI * 2) / 8) * 100,
                      }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                      <svg viewBox="0 0 24 24" className="w-full h-full">
                        <path
                          d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                          fill="#fbbf24"
                        />
                      </svg>
                    </motion.div>
                  ))}
                </>
              )}
            </motion.div>

            {/* Loading text */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.h2
                className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                {phase === 'loading' && 'Loading...'}
                {phase === 'catching' && 'Catching...'}
                {phase === 'caught' && 'Gotcha!'}
              </motion.h2>

              {/* Progress bar */}
              {phase === 'loading' && (
                <div className="mt-6 w-64 h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                  <motion.div
                    className="h-full rounded-full relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(90deg, #ef4444, #f59e0b, #eab308)',
                      width: `${progress}%`,
                    }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </motion.div>
                </div>
              )}

              <motion.p
                className="mt-4 text-slate-400 text-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {phase === 'loading' && `${progress}% Complete`}
                {phase === 'catching' && 'Preparing your adventure...'}
                {phase === 'caught' && 'Welcome to Pokémon Legends!'}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
