'use client';

const features = [
  { icon: '⚔️', title: 'Pokemon Battles', desc: 'Challenge trainers worldwide and prove your skills in competitive battles.', bg: 'bg-red-500' },
  { icon: '🏆', title: 'Tournaments', desc: 'Compete in weekly tournaments with exclusive prizes and rankings.', bg: 'bg-yellow-500' },
  { icon: '🔄', title: 'Trading Hub', desc: 'Trade rare Pokemon with trusted community members safely.', bg: 'bg-green-500' },
  { icon: '🎮', title: 'Mini Games', desc: 'Play fun Pokemon-themed games and earn awesome rewards.', bg: 'bg-blue-500' },
  { icon: '📖', title: 'Pro Guides', desc: 'Learn winning strategies from experienced Pokemon trainers.', bg: 'bg-purple-500' },
  { icon: '🎁', title: 'Giveaways', desc: 'Win rare Pokemon and items in our daily community giveaways.', bg: 'bg-pink-500' },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-red-500/20 text-red-400 text-sm font-bold rounded-full mb-4">
            FEATURES
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Why Join <span className="text-yellow-400">Pokemon Legends</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need for the ultimate Pokemon experience
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all hover:-translate-y-1"
            >
              <div className={`w-16 h-16 ${f.bg} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
