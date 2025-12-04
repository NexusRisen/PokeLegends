'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-black flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-2xl"></div>
          <Image
            src="/logo.jpg"
            alt="Pokemon Legends"
            fill
            className="object-cover rounded-full border-4 border-yellow-500/50"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 mb-2">
          POKEMON
        </h1>
        <h2 className="text-4xl md:text-6xl font-black text-yellow-400 tracking-[0.3em] mb-8">
          LEGENDS
        </h2>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          The Ultimate Pokemon Discord Community
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://discord.gg/pokemonlegends"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xl rounded-2xl transition-all hover:scale-105"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            Join Discord
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-yellow-500 text-yellow-400 font-bold text-xl rounded-2xl transition-all hover:bg-yellow-500/10 hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
