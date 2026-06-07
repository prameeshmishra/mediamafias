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

export const metadata: Metadata = {
  title: "Media Mafias | The Cartel",
  description: "Architecting the code of decentralized audio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-black text-white antialiased overflow-x-hidden relative">
        <div className="fixed inset-0 z-[-1] flex items-center justify-center opacity-5 pointer-events-none mix-blend-screen">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Logo Main.png" alt="Cartel Watermark" className="w-[80vw] max-w-[800px] h-auto grayscale" />
        </div>
        {children}
      </body>
    </html>
  );
}
