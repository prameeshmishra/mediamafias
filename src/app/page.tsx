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
      <AnimatePresence>
        {!isVerified && <EntryDoor onVerified={() => setIsVerified(true)} />}
      </AnimatePresence>

      {isVerified && (
        <>
          <Header />
          <Hero />
          <Manifesto />
          <Academy />
          <FixerPortal />
          <Footer />
        </>
      )}
    </main>
  );
}
