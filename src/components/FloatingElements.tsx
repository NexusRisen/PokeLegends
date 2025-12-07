'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Pokeball SVG Component
const Pokeball = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 100 100" className={className} style={style}>
    <defs>
      <linearGradient id="pokeballRed" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ff1a1a" />
        <stop offset="100%" stopColor="#cc0000" />
      </linearGradient>
      <linearGradient id="pokeballWhite" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e0e0e0" />
      </linearGradient>
      <filter id="pokeglow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#pokeballRed)" stroke="#222" strokeWidth="2"/>
    <rect x="0" y="48" width="100" height="4" fill="#222"/>
    <path d="M 2 50 A 48 48 0 0 1 98 50" fill="url(#pokeballRed)"/>
    <path d="M 2 50 A 48 48 0 0 0 98 50" fill="url(#pokeballWhite)"/>
    <circle cx="50" cy="50" r="12" fill="#222"/>
    <circle cx="50" cy="50" r="8" fill="#fff" filter="url(#pokeglow)"/>
    <circle cx="50" cy="50" r="5" fill="#fff"/>
  </svg>
);

// Pokemon silhouettes
const PikachuSilhouette = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M50 95c-20 0-35-15-35-35 0-15 8-28 20-35l-10-20 25 15 25-15-10 20c12 7 20 20 20 35 0 20-15 35-35 35z"/>
  </svg>
);

const CharmanderSilhouette = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M30 90c-5 0-10-5-10-15 0-8 5-15 10-18V45c0-15 10-30 25-35 5-2 10 0 12 5l8-10c2 5 0 12-3 18 8 5 13 15 13 27v7c5 3 10 10 10 18 0 10-5 15-10 15-3 0-5-2-8-5-5 3-12 5-22 5s-17-2-22-5c-3 3-5 5-8 5z"/>
  </svg>
);

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Epic gradient orbs with Pokemon colors */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(238,21,21,0.15) 0%, transparent 60%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 60%)',
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(250,204,21,0.1) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Pokeballs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`pokeball-${i}`}
          className="absolute"
          style={{
            left: `${10 + i * 20}%`,
            top: `${15 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 1.5,
          }}
        >
          <Pokeball
            className="opacity-20 hover:opacity-40 transition-opacity"
            style={{ width: 40 + i * 10, height: 40 + i * 10 }}
          />
        </motion.div>
      ))}

      {/* Pokemon silhouettes floating */}
      <motion.div
        className="absolute left-[5%] top-[60%]"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <PikachuSilhouette className="w-24 h-24 text-yellow-500/20" />
      </motion.div>

      <motion.div
        className="absolute right-[10%] top-[20%]"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      >
        <CharmanderSilhouette className="w-20 h-20 text-orange-500/20" />
      </motion.div>

      {/* Sparkle particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: 2 + Math.random() * 4,
            height: 2 + Math.random() * 4,
            background: ['#ff4444', '#facc15', '#3b82f6', '#22c55e'][i % 4],
          }}
          animate={{
            y: [0, -100 - Math.random() * 100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: 'easeOut',
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Glowing lines */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-full"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(238,21,21,0.2), transparent)',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-0 right-1/3 w-px h-full"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.2), transparent)',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
    </div>
  );
}
