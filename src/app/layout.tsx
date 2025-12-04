import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pokelegends.org'),
  title: {
    default: "Pokémon Legends | The Ultimate Discord Community - pokelegends.org",
    template: "%s | Pokémon Legends - pokelegends.org",
  },
  description: "Join Pokémon Legends at pokelegends.org - The most epic Pokémon community on Discord! Battle, trade, compete in tournaments, and become a Legend with 50,000+ trainers worldwide. Visit pokelegends.org today!",
  keywords: [
    "Pokemon Legends",
    "Pokémon Legends",
    "pokelegends.org",
    "Pokemon Discord",
    "Pokémon Discord",
    "Pokemon Community",
    "Pokémon Community",
    "Pokemon Trading",
    "Pokemon Battles",
    "Pokemon Tournaments",
    "Discord Gaming Community",
    "Pokemon Server",
    "Best Pokemon Discord",
    "Pokemon Online",
    "Catch Pokemon",
    "Pokemon Games",
    "Legendary Pokemon",
    "pokelegends",
    "poke legends"
  ],
  authors: [{ name: "Pokémon Legends", url: "https://pokelegends.org" }],
  creator: "Pokémon Legends Community",
  publisher: "pokelegends.org",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Pokémon Legends | The Ultimate Discord Community - pokelegends.org",
    description: "Join 50,000+ trainers at pokelegends.org! The most epic Pokémon community on Discord. Battle, trade, compete in tournaments, and become a Legend!",
    url: "https://pokelegends.org",
    siteName: "Pokémon Legends - pokelegends.org",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pokémon Legends - The Ultimate Discord Community - pokelegends.org",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokémon Legends | pokelegends.org",
    description: "Join 50,000+ trainers at pokelegends.org! The most epic Pokémon Discord community. Battle, trade & become a Legend!",
    images: ["/images/og-image.jpg"],
    creator: "@pokemonlegends",
    site: "@pokemonlegends",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://pokelegends.org",
  },
  category: "gaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-950 text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
