'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/components/Preloader';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DiscordCTA from '@/components/DiscordCTA';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="bg-black min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div
        className={`transition-opacity duration-700 ${
          isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Hero />
        <Features />
        <DiscordCTA />
        <Footer />
      </div>
    </main>
  );
}
