"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Academy } from "@/components/sections/Academy";
import { FixerPortal } from "@/components/sections/FixerPortal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-red-accent selection:text-white">
      <Header />
      <Hero />
      <Manifesto />
      <Academy />
      <FixerPortal />
      <Footer />
    </main>
  );
}
