'use client';

const DISCORD_INVITE = 'https://discord.gg/pokelegends';

const footerLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Community', href: '#community' },
  { name: 'Discord', href: DISCORD_INVITE },
];

export default function Footer() {
  return (
    <footer id="about" className="relative border-t border-zinc-800/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />

      <div className="container-wide relative z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 text-left">
            <div className="flex items-center gap-3 mb-4 justify-start">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                <img src="/logo.jpg" alt="Pokemon Legends" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">Pokemon</span>
                <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 ml-1">Legends</span>
              </div>
            </div>

            <p className="text-zinc-500 max-w-sm leading-relaxed text-sm text-left">
              The ultimate Pokemon community on Discord. Connect with trainers worldwide,
              participate in events, and become a legend.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-zinc-500 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            {new Date().getFullYear()} Pokemon Legends. Fan-made community.
          </p>
          <p className="text-zinc-700 text-xs">
            Pokemon is a trademark of Nintendo/Creatures Inc./GAME FREAK Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
