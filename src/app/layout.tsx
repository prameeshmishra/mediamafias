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
  title: "Media Mafias | Radio Streaming Software Technology Provider",
  description: "The future of radio is here. Media Mafias provides Radio as SaaS, digital audio solutions, and streaming software technology for the Indian radio business.",
  keywords: ["radio business", "streaming software technology provider", "future radio", "digital audio", "radio service in india", "radio as saas", "vernacular radio", "dialect radio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Media Mafias",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Media Mafias provides Radio as SaaS, digital audio solutions, and streaming software technology for the Indian radio business.",
    "provider": {
      "@type": "Organization",
      "name": "Media Mafias",
      "url": "https://media-mafias.com" // Placeholder, Vercel will host
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
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
      </body>
    </html>
  );
}
