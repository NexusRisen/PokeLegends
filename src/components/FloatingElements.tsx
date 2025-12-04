'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Pokeballs */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`pokeball-${i}`}
          className="absolute opacity-[0.04]"
          style={{
            left: `${15 + i * 25}%`,
            top: `${20 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            y: { duration: 6 + i, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 20 + i * 5, repeat: Infinity, ease: 'linear' },
          }}
        >
          <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-32 md:h-32">
            <circle cx="50" cy="50" r="48" fill="#ef4444" />
            <path d="M2 50 L98 50 L98 98 A48 48 0 0 1 2 98 Z" fill="#f8f8f8" />
            <rect x="0" y="46" width="100" height="8" fill="#1f2937" />
            <circle cx="50" cy="50" r="12" fill="#f8f8f8" stroke="#1f2937" strokeWidth="6" />
            <circle cx="50" cy="50" r="5" fill="#1f2937" />
          </svg>
        </motion.div>
      ))}

      {/* Sparkle stars */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute text-yellow-400/20"
          style={{
            left: `${10 + i * 15}%`,
            top: `${15 + (i % 3) * 30}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </motion.div>
      ))}

      {/* Gradient orbs */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(239,68,68,0.3) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-1/3 h-1/3 rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-1/4 h-1/4 rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
