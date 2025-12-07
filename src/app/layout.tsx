import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://pokelegends.org'),
  title: {
    default: "Pokemon Legends | Discord Server & Pokemon Sysbots Community",
    template: "%s | Pokemon Legends",
  },
  description: "Join Pokemon Legends - The ultimate Pokemon Discord Server featuring Pokemon Sysbots, free genning services, trading, battles, and a community of 10,000+ trainers. Get your perfect Pokemon today!",
  keywords: [
    "Pokemon Legends",
    "Pokemon Discord",
    "Pokemon Discord Server",
    "Pokemon Sysbots",
    "Pokemon Sysbot",
    "Pokemon Genning",
    "Free Pokemon Genning",
    "Pokemon Trading Discord",
    "Pokemon Bot Discord",
    "Pokemon Community",
    "Pokemon Scarlet Violet Discord",
    "Pokemon SV Sysbot",
    "Pokemon BDSP Sysbot",
    "Pokemon Sword Shield Sysbot",
    "Pokemon Legends Arceus",
    "Best Pokemon Discord",
    "Pokemon Server",
    "Free Pokemon",
    "Shiny Pokemon",
    "Legendary Pokemon",
    "Pokemon Raids",
    "Pokemon Tournaments",
    "pokelegends",
    "poke legends"
  ],
  authors: [{ name: "Pokemon Legends", url: "https://pokelegends.org" }],
  creator: "Pokemon Legends Community",
  publisher: "pokelegends.org",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Pokemon Legends | Discord Server & Pokemon Sysbots",
    description: "Join 10,000+ trainers in the ultimate Pokemon Discord! Free Pokemon Sysbots, genning services, trading, battles, tournaments, and more!",
    url: "https://pokelegends.org",
    siteName: "Pokemon Legends",
    images: [
      {
        url: "/logo.jpg",
        width: 512,
        height: 512,
        alt: "Pokemon Legends - Discord Server & Pokemon Sysbots Community",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokemon Legends | Discord Server & Pokemon Sysbots",
    description: "Join 10,000+ trainers! Free Pokemon Sysbots, genning, trading & tournaments!",
    images: ["/logo.jpg"],
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-[#0a0a0f] text-zinc-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
