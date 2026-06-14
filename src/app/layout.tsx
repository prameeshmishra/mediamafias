import type { Metadata } from "next";
import { Bebas_Neue, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mediamafias.com'),
  title: {
    default: "Media Mafias | India's First Decentralized Audio Distribution Platform",
    template: "%s | Media Mafias",
  },
  description: "Monetize your regional podcasts, indie music, and vernacular audio content. We manage and distribute your original creations across global platforms via our powerful Content API, ensuring transparent and fair revenue share.",
  keywords: [
    "Monetize podcast India", "indie music distribution", "vernacular audio creators", "sell regional songs", "AI audio studio India", "start podcast hindi",
    "Vernacular audio API", "decentralized content distribution", "license regional music India", "indie artist API integration", "local audio content platform", "Bhojpuri music distribution", "Tamil indie API"
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mediamafias.com",
    siteName: "Media Mafias",
    title: "Media Mafias | Decentralized Audio Platform",
    description: "Distribute and monetize your indie audio content globally via our powerful API.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Mafias | Decentralized Audio Platform",
    description: "Distribute and monetize your indie audio content globally via our powerful API.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Media Mafias - Decentralized Audio Platform",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web",
    "description": "India's first decentralized audio platform distributing vernacular content through API, empowering indie artists to monetize their work.",
    "provider": {
      "@type": "Organization",
      "name": "Media Mafias",
      "url": "https://mediamafias.com" // Domain must match live site exactly
    }
  };

  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-white antialiased overflow-x-hidden relative">
        <div className="fixed inset-0 z-[-1] flex items-center justify-center opacity-5 pointer-events-none mix-blend-screen">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Logo Main.png" alt="Cartel Watermark" className="w-[80vw] max-w-[800px] h-auto grayscale" />
        </div>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-74Y8LVKFN6"} />
      </body>
    </html>
  );
}
