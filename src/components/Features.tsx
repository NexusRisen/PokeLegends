'use client';

const features = [
  { icon: '⚔️', title: 'Pokemon Battles', description: 'Challenge trainers worldwide in epic battles.', color: 'bg-red-500' },
  { icon: '🏆', title: 'Tournaments', description: 'Compete in weekly tournaments with prizes.', color: 'bg-yellow-500' },
  { icon: '🔄', title: 'Trading Hub', description: 'Trade rare Pokemon with community members.', color: 'bg-green-500' },
  { icon: '🎮', title: 'Mini Games', description: 'Play exclusive Pokemon-themed games.', color: 'bg-blue-500' },
  { icon: '📖', title: 'Pro Guides', description: 'Master the meta with expert strategies.', color: 'bg-purple-500' },
  { icon: '🎁', title: 'Giveaways', description: 'Win rare Pokemon in daily giveaways.', color: 'bg-pink-500' },
];

export default function Features() {
  return (
    <section id="features" className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-semibold mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Join the <span className="text-yellow-400">Legend</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Experience the ultimate Pokemon community with features designed for true trainers
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:border-gray-700 transition-colors"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
