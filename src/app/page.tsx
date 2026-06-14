import * as React from "react";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Produce & Monetize Audio Content | Find Vernacular Creators via API",
  description: "India's first decentralized audio platform distributing content through API. We empower indie creators and provide B2B platforms with localized vernacular audio.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-red-accent selection:text-white">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
