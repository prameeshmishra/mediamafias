"use client";

import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Academy } from "@/components/sections/Academy";
import { FixerPortal } from "@/components/sections/FixerPortal";
import { EntryDoor } from "@/components/sections/EntryDoor";

export default function Home() {
  const [isVerified, setIsVerified] = React.useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-red-accent selection:text-white">
      {/* Overlay - Renders on top but doesn't block the actual DOM tree rendering underneath */}
      <AnimatePresence>
        {!isVerified && <EntryDoor onVerified={() => setIsVerified(true)} />}
      </AnimatePresence>

      {/* Main Content - ALWAYS rendered in DOM so crawlers can instantly index it. 
          For humans, it's hidden under the EntryDoor overlay and pointer-events are disabled until verified. */}
      <div className={!isVerified ? "h-screen overflow-hidden opacity-0 pointer-events-none" : "opacity-100 transition-opacity duration-1000"}>
        <Header />
        <Hero />
        <Manifesto />
        <Academy />
        <FixerPortal />
        <Footer />
      </div>
    </main>
  );
}
