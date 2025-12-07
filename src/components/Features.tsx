'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Active Community',
    description: 'Connect with thousands of passionate trainers. Share strategies, discuss battles, and make friends.',
    type: 'fire',
    gradient: 'from-orange-500 to-red-600',
    glow: 'rgba(249, 115, 22, 0.3)',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    ),
    title: 'Events & Tournaments',
    description: 'Compete in regular tournaments and community events. Win exclusive roles and prizes.',
    type: 'electric',
    gradient: 'from-yellow-400 to-amber-500',
    glow: 'rgba(250, 204, 21, 0.3)',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: 'Trading Hub',
    description: 'Find trading partners easily. Complete your Pokedex and build the perfect team.',
    type: 'water',
    gradient: 'from-blue-400 to-cyan-500',
    glow: 'rgba(59, 130, 246, 0.3)',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: 'Guides & Resources',
    description: 'Access comprehensive guides for all Pokemon games. Competitive battling to shiny hunting.',
    type: 'grass',
    gradient: 'from-green-400 to-emerald-500',
    glow: 'rgba(34, 197, 94, 0.3)',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Creative Showcase',
    description: 'Share your fan art, custom sprites, and creative projects. Get feedback from the community.',
    type: 'psychic',
    gradient: 'from-pink-400 to-purple-500',
    glow: 'rgba(236, 72, 153, 0.3)',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Safe Environment',
    description: 'Our dedicated mod team ensures a friendly, inclusive space. Zero tolerance for toxicity.',
    type: 'dragon',
    gradient: 'from-violet-500 to-purple-600',
    glow: 'rgba(139, 92, 246, 0.3)',
  },
];

export default function Features() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="features" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container-wide relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block text-sm font-bold uppercase tracking-widest mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Why Join Us
          </motion.span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Level Up Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500"> Experience</span>
          </h2>

          <div className="flex justify-center">
            <p className="text-zinc-400 text-lg max-w-lg leading-relaxed text-center" style={{ marginBottom: '40px' }}>
              Everything you need to become the very best trainer
            </p>
          </div>
        </motion.div>

        {/* Pokemon Card-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div
                className="relative h-full rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(180deg, rgba(26,26,46,0.95) 0%, rgba(15,15,26,0.98) 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                }}
              >
                {/* Card top accent with type color */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${feature.gradient}`} />

                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${feature.glow} 0%, transparent 50%)`,
                  }}
                />

                <div className="relative" style={{ padding: '32px 28px' }}>
                  {/* Type badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className={`rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      style={{ width: '60px', height: '60px' }}
                    >
                      {feature.icon}
                    </div>
                    <span
                      className={`text-xs font-bold uppercase tracking-wider rounded-full bg-gradient-to-r ${feature.gradient} text-white`}
                      style={{ padding: '10px 18px' }}
                    >
                      {feature.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-300 transition-all">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-2">
                    {feature.description}
                  </p>

                  {/* Bottom decoration */}
                  <div className="mt-8 pt-5 border-t border-zinc-700/40 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${feature.gradient}`}
                          style={{ opacity: 1 - i * 0.25 }}
                        />
                      ))}
                    </div>
                    <motion.span
                      className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Learn more →
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
