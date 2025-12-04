'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const links = [
  { label: 'Discord', href: 'https://discord.gg/pokemonlegends', external: true },
  { label: 'Features', href: '#features', external: false },
];

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />

      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Brand */}
          <motion.div
            className="flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-14 h-14">
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl" />
                <Image
                  src="/logo.jpg"
                  alt="Pokemon Legends"
                  fill
                  className="object-contain rounded-full ring-2 ring-yellow-500/30"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black">
                  <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                    POKEMON
                  </span>
                  <span className="text-white"> LEGENDS</span>
                </h3>
                <a
                  href="https://pokelegends.org"
                  className="text-sm text-gray-500 hover:text-yellow-400 transition-colors"
                >
                  pokelegends.org
                </a>
              </div>
            </div>
            <p className="text-gray-500 text-sm text-center lg:text-left max-w-xs">
              The ultimate Pokemon Discord community for trainers worldwide.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="text-gray-400 hover:text-white font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Social */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="https://discord.gg/pokemonlegends"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 hover:border-[#5865F2] transition-all"
            >
              <svg className="w-5 h-5 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.36-.698.772-1.362 1.225-1.993a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.12-.098.246-.198.373-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
              </svg>
              <span className="text-gray-400 group-hover:text-white font-medium transition-colors">Discord</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Pokemon Legends. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Pokemon © Nintendo/Creatures Inc./GAME FREAK inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
