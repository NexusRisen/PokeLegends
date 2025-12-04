import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://pokelegends.org'),
  title: {
    default: "Pokemon Legends | The Ultimate Discord Community - pokelegends.org",
    template: "%s | Pokemon Legends - pokelegends.org",
  },
  description: "Join Pokemon Legends at pokelegends.org - The most epic Pokemon community on Discord! Connect with trainers, share your journey, participate in events, and become a Legend. Visit pokelegends.org today!",
  keywords: [
    "Pokemon Legends",
    "Pokemon Discord",
    "Pokemon Community",
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
  authors: [{ name: "Pokemon Legends", url: "https://pokelegends.org" }],
  creator: "Pokemon Legends Community",
  publisher: "pokelegends.org",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Pokemon Legends | The Ultimate Discord Community - pokelegends.org",
    description: "Join the most epic Pokemon community on Discord. Connect with trainers, participate in events, and become a Legend!",
    url: "https://pokelegends.org",
    siteName: "Pokemon Legends - pokelegends.org",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pokemon Legends - The Ultimate Discord Community - pokelegends.org",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokemon Legends | pokelegends.org",
    description: "Join the most epic Pokemon Discord community. Connect with trainers, participate in events & become a Legend!",
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
      <body className="font-sans antialiased bg-slate-950 text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
