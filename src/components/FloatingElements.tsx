'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const pokemonTypes = [
  { color: '#ef4444', name: 'Fire' },
  { color: '#3b82f6', name: 'Water' },
  { color: '#22c55e', name: 'Grass' },
  { color: '#fbbf24', name: 'Electric' },
  { color: '#a855f7', name: 'Psychic' },
  { color: '#6366f1', name: 'Dragon' },
  { color: '#ec4899', name: 'Fairy' },
  { color: '#78716c', name: 'Rock' },
];

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Pokeballs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`pokeball-${i}`}
          className="absolute opacity-[0.03]"
          style={{
            left: `${10 + i * 12}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: ['0vh', '-100vh'],
            rotate: [0, 360 * (i % 2 === 0 ? 1 : -1)],
          }}
          transition={{
            duration: 30 + i * 5,
            repeat: Infinity,
            delay: i * 3,
            ease: 'linear',
          }}
        >
          <div className="w-20 h-20 md:w-32 md:h-32">
            <PokeballSVG />
          </div>
        </motion.div>
      ))}

      {/* Type energy particles */}
      {pokemonTypes.map((type, typeIndex) => (
        <motion.div
          key={`type-${typeIndex}`}
          className="absolute rounded-full blur-sm"
          style={{
            width: 8 + typeIndex * 2,
            height: 8 + typeIndex * 2,
            backgroundColor: type.color,
            left: `${5 + typeIndex * 12}%`,
            opacity: 0.3,
          }}
          animate={{
            y: ['100vh', '-20vh'],
            x: [0, Math.sin(typeIndex) * 100],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 15 + typeIndex * 2,
            repeat: Infinity,
            delay: typeIndex * 2,
            ease: 'linear',
          }}
        />
      ))}

      {/* Sparkle effects */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          <StarSparkle
            color={pokemonTypes[Math.floor(Math.random() * pokemonTypes.length)].color}
            size={Math.random() * 8 + 4}
          />
        </motion.div>
      ))}

      {/* Gradient orbs */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(239,68,68,0.3) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

function PokeballSVG() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#ef4444" />
      <path d="M2 50 L98 50 L98 98 A48 48 0 0 1 2 98 Z" fill="#f8f8f8" />
      <rect x="0" y="46" width="100" height="8" fill="#1f2937" />
      <circle cx="50" cy="50" r="12" fill="#f8f8f8" stroke="#1f2937" strokeWidth="6" />
      <circle cx="50" cy="50" r="5" fill="#1f2937" />
    </svg>
  );
}

function StarSparkle({ color, size }: { color: string; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      style={{ opacity: 0.6 }}
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}
