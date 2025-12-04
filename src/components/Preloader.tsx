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
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0f0f1a 50%, #000000 100%)',
        }}
        exit={{ opacity: 0, scale: 1.5 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: ['#ef4444', '#fbbf24', '#a855f7', '#3b82f6', '#22c55e'][Math.floor(Math.random() * 5)],
              }}
              animate={{
                y: [0, -1000],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* DNA Helix Pokeballs */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                rotateY: 360,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.15,
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.div
                className="w-8 h-8"
                animate={{
                  x: Math.cos((i / 12) * Math.PI * 2 + Date.now() / 1000) * 150,
                  y: Math.sin((i / 12) * Math.PI * 4) * 100 + (i - 6) * 25,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <MiniPokeball delay={i * 0.1} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Main Pokeball */}
          <motion.div
            className="relative"
            animate={
              phase === 'catching'
                ? {
                    rotate: [-15, 15, -10, 10, -5, 5, 0],
                    y: [0, -20, 0],
                  }
                : phase === 'caught'
                ? { scale: [1, 1.2, 0] }
                : {}
            }
            transition={{
              duration: phase === 'catching' ? 1.5 : 0.8,
              ease: 'easeInOut',
            }}
          >
            <MainPokeball progress={progress} phase={phase} />
          </motion.div>

          {/* Loading text */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{
                background: 'linear-gradient(90deg, #ef4444, #fbbf24, #a855f7, #3b82f6, #ef4444)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                backgroundPosition: ['0% center', '200% center'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {phase === 'loading' && 'Catching Legends...'}
              {phase === 'catching' && 'Almost there...'}
              {phase === 'caught' && 'Gotcha!'}
            </motion.h2>

            {/* Progress bar */}
            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #ef4444, #fbbf24, #22c55e)',
                }}
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Progress percentage */}
            <motion.p
              className="mt-3 text-gray-400 font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.p>
          </motion.div>
        </div>

        {/* Corner decorations */}
        <motion.div
          className="absolute top-8 left-8 w-24 h-24 border-l-4 border-t-4 border-red-500/30 rounded-tl-3xl"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-8 right-8 w-24 h-24 border-r-4 border-t-4 border-yellow-500/30 rounded-tr-3xl"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-8 left-8 w-24 h-24 border-l-4 border-b-4 border-purple-500/30 rounded-bl-3xl"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-8 right-8 w-24 h-24 border-r-4 border-b-4 border-blue-500/30 rounded-br-3xl"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

function MainPokeball({ progress, phase }: { progress: number; phase: string }) {
  return (
    <div className="relative w-40 h-40 md:w-52 md:h-52">
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl"
        style={{
          background: 'radial-gradient(circle, rgba(239,68,68,0.4) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Pokeball body */}
      <motion.div
        className="relative w-full h-full rounded-full overflow-hidden shadow-2xl"
        style={{
          boxShadow: '0 0 60px rgba(239,68,68,0.3), inset 0 0 30px rgba(0,0,0,0.3)',
        }}
        animate={{
          rotateY: phase === 'loading' ? 360 : 0,
        }}
        transition={{
          duration: 3,
          repeat: phase === 'loading' ? Infinity : 0,
          ease: 'linear',
        }}
      >
        {/* Top half - Red */}
        <div
          className="absolute top-0 left-0 right-0 h-1/2"
          style={{
            background: 'linear-gradient(180deg, #ff6b6b 0%, #ee5a5a 30%, #dc2626 70%, #b91c1c 100%)',
          }}
        >
          {/* Shine effect */}
          <div
            className="absolute top-2 left-4 w-16 h-8 rounded-full opacity-40"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, transparent 100%)',
            }}
          />
        </div>

        {/* Bottom half - White */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2"
          style={{
            background: 'linear-gradient(180deg, #f8f8f8 0%, #e8e8e8 50%, #d4d4d4 100%)',
          }}
        />

        {/* Center band */}
        <div className="absolute top-1/2 left-0 right-0 h-4 -translate-y-1/2 bg-gray-900 flex items-center justify-center">
          {/* Center button */}
          <motion.div
            className="relative w-14 h-14 rounded-full bg-gray-100 border-4 border-gray-900 flex items-center justify-center z-10"
            animate={{
              boxShadow: phase === 'caught'
                ? ['0 0 0 rgba(34,197,94,0)', '0 0 30px rgba(34,197,94,0.8)', '0 0 0 rgba(34,197,94,0)']
                : ['0 0 10px rgba(255,255,255,0.3)', '0 0 20px rgba(255,255,255,0.5)', '0 0 10px rgba(255,255,255,0.3)'],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            <motion.div
              className="w-8 h-8 rounded-full"
              style={{
                background: progress >= 100
                  ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
                  : 'linear-gradient(135deg, #e5e5e5 0%, #a3a3a3 100%)',
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Sparkle effects */}
      {phase === 'caught' && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400 rounded-full"
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 1, 0],
                x: Math.cos((i / 8) * Math.PI * 2) * 100,
                y: Math.sin((i / 8) * Math.PI * 2) * 100,
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.05,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}

function MiniPokeball({ delay }: { delay: number }) {
  return (
    <motion.div
      className="w-8 h-8 rounded-full overflow-hidden shadow-lg"
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
        delay,
      }}
    >
      <div className="w-full h-1/2 bg-gradient-to-b from-red-400 to-red-600" />
      <div className="w-full h-1/2 bg-gradient-to-b from-gray-100 to-gray-300" />
      <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 bg-gray-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-gray-900" />
      </div>
    </motion.div>
  );
}
