'use client';

const DISCORD_INVITE = 'https://discord.com/invite/pokemonlegends';

export default function Footer() {
  return (
    <footer className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 flex-shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="48" fill="#ef4444" />
              <path d="M2 50 L98 50 L98 98 A48 48 0 0 1 2 98 Z" fill="#f8f8f8" />
              <rect x="0" y="46" width="100" height="8" fill="#1f2937" />
              <circle cx="50" cy="50" r="12" fill="#f8f8f8" stroke="#1f2937" strokeWidth="6" />
              <circle cx="50" cy="50" r="5" fill="#1f2937" />
            </svg>
          </div>
          <span className="text-xl sm:text-2xl font-black">
            <span className="text-white">Pokémon</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 ml-1.5 sm:ml-2">Legends</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-8 sm:mb-10 max-w-md mx-auto text-base sm:text-lg px-2">
          The ultimate Pokémon community on Discord. Join trainers from around the world!
        </p>

        {/* Discord Button */}
        <a
          href={DISCORD_INVITE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-w-[180px] sm:min-w-[200px] bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold rounded-lg transition-colors mb-10 sm:mb-12 px-6 sm:px-8 py-3 sm:py-4"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
          <span className="text-sm sm:text-base whitespace-nowrap">Join Discord Server</span>
        </a>

        {/* Divider */}
        <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-8 sm:mb-10" />

        {/* Copyright */}
        <div className="text-xs sm:text-sm text-gray-500 space-y-2 sm:space-y-3 px-2">
          <p>Made with <span className="text-red-500">❤️</span> for the Pokémon community</p>
          <p className="text-gray-600 text-xs max-w-md mx-auto leading-relaxed">
            This is a fan-made community site. Pokémon is a trademark of Nintendo/Creatures Inc./GAME FREAK Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
