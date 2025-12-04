import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DiscordCTA from '@/components/DiscordCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <Features />
      <DiscordCTA />
      <Footer />
    </main>
  );
}
