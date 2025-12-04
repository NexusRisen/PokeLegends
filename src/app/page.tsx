'use client';

import { useState } from 'react';
import Preloader from '@/components/Preloader';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FloatingPokemon from '@/components/FloatingPokemon';
import DiscordCTA from '@/components/DiscordCTA';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Epic Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Main Content */}
      <div
        className={`min-h-screen bg-slate-950 transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Floating Pokémon Background */}
        <FloatingPokemon />

        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />

        {/* Discord CTA Section */}
        <DiscordCTA />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
