'use client';

import { motion } from 'framer-motion';

const pokemonData = [
  {
    name: 'Pikachu',
    color: '#f6e652',
    path: 'M50 15 L55 30 L70 30 L58 40 L63 55 L50 45 L37 55 L42 40 L30 30 L45 30 Z',
    size: 60,
  },
  {
    name: 'Charizard',
    color: '#ff6b35',
    path: 'M50 10 Q30 25 25 45 Q35 55 50 50 Q65 55 75 45 Q70 25 50 10 M35 60 L30 80 M65 60 L70 80',
    size: 80,
  },
  {
    name: 'Mewtwo',
    color: '#a855f7',
    path: 'M50 10 Q40 5 45 20 Q45 35 50 40 Q55 35 55 20 Q60 5 50 10 M40 45 Q30 55 35 70 M60 45 Q70 55 65 70',
    size: 70,
  },
  {
    name: 'Gengar',
    color: '#7c3aed',
    path: 'M25 35 Q25 15 50 10 Q75 15 75 35 Q80 60 50 70 Q20 60 25 35 M35 30 L35 40 M65 30 L65 40',
    size: 65,
  },
  {
    name: 'Eevee',
    color: '#c8a87c',
    path: 'M35 15 L40 35 M65 15 L60 35 M50 30 Q30 35 25 50 Q30 65 50 70 Q70 65 75 50 Q70 35 50 30',
    size: 55,
  },
  {
    name: 'Lucario',
    color: '#3b82f6',
    path: 'M40 10 L35 25 M60 10 L65 25 M50 25 Q35 30 30 45 Q35 65 50 70 Q65 65 70 45 Q65 30 50 25',
    size: 65,
  },
];

export default function FloatingPokemon() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {pokemonData.map((pokemon, index) => {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const duration = 20 + Math.random() * 15;
        const delay = index * 2;

        return (
          <motion.div
            key={pokemon.name}
            className="absolute"
            style={{
              left: `${startX}%`,
              top: `${startY}%`,
            }}
            animate={{
              x: [0, 100, -50, 80, 0],
              y: [0, -80, 50, -30, 0],
              rotate: [0, 10, -10, 5, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }}
          >
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-full blur-xl"
                style={{
                  background: pokemon.color,
                  opacity: 0.3,
                  transform: 'scale(1.5)',
                }}
              />

              {/* Pokemon silhouette */}
              <svg
                width={pokemon.size}
                height={pokemon.size}
                viewBox="0 0 100 100"
                className="relative z-10"
              >
                <path
                  d={pokemon.path}
                  fill={pokemon.color}
                  stroke={pokemon.color}
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Additional floating Pokéballs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`ball-${i}`}
          className="absolute"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i,
          }}
        >
          <div
            className="w-6 h-6 rounded-full opacity-20"
            style={{
              background: 'linear-gradient(180deg, #ef4444 50%, #f8fafc 50%)',
              boxShadow: '0 0 15px rgba(239, 68, 68, 0.4)',
            }}
          >
            <div
              className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-900 -translate-y-1/2"
            />
            <div
              className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-slate-900 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            >
              <div className="w-1 h-1 rounded-full bg-white" />
            </div>
          </div>
        </motion.div>
      ))}

      {/* Energy particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`energy-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: ['#fbbf24', '#ef4444', '#a855f7', '#3b82f6', '#22c55e'][i % 5],
            boxShadow: `0 0 10px ${['#fbbf24', '#ef4444', '#a855f7', '#3b82f6', '#22c55e'][i % 5]}`,
          }}
          animate={{
            y: [0, -200],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}
