'use client';

import { motion } from 'framer-motion';

const floatingElements = [
  { left: '5%', top: '20%', size: 40, color: '#fbbf24', delay: 0, duration: 20 },
  { left: '15%', top: '60%', size: 30, color: '#ef4444', delay: 2, duration: 25 },
  { left: '25%', top: '30%', size: 35, color: '#a855f7', delay: 4, duration: 22 },
  { left: '75%', top: '25%', size: 45, color: '#3b82f6', delay: 1, duration: 18 },
  { left: '85%', top: '55%', size: 35, color: '#22c55e', delay: 3, duration: 24 },
  { left: '90%', top: '75%', size: 30, color: '#ec4899', delay: 5, duration: 20 },
];

const pokeballs = [
  { left: '10%', top: '40%', delay: 0 },
  { left: '30%', top: '70%', delay: 1 },
  { left: '50%', top: '15%', delay: 2 },
  { left: '70%', top: '45%', delay: 3 },
  { left: '88%', top: '20%', delay: 4 },
];

export default function FloatingPokemon() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating orbs */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full opacity-20"
          style={{
            left: el.left,
            top: el.top,
            width: el.size,
            height: el.size,
            background: `radial-gradient(circle, ${el.color}, transparent)`,
            filter: 'blur(8px)',
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating Pokéballs */}
      {pokeballs.map((ball, i) => (
        <motion.div
          key={`ball-${i}`}
          className="absolute"
          style={{ left: ball.left, top: ball.top }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            delay: ball.delay,
            ease: 'easeInOut',
          }}
        >
          <div
            className="w-6 h-6 rounded-full opacity-30"
            style={{
              background: 'linear-gradient(180deg, #ef4444 50%, #f8fafc 50%)',
              boxShadow: '0 0 10px rgba(239, 68, 68, 0.3)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
