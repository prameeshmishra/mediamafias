"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function DistributionPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-red-accent selection:text-white">
      <Header />
      
      <section className="pt-40 pb-20 px-6 border-b border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(192,57,43,0.1)_0%,rgba(0,0,0,1)_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 border border-red-accent/30 bg-red-accent/5 px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-red-accent rounded-full animate-pulse" />
              <span className="text-red-accent font-mono text-sm tracking-widest uppercase">
                Global Syndication
              </span>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl tracking-widest uppercase text-white hover-glitch leading-[0.9]">
              DISTRIBUTE <span className="text-red-accent">EVERYWHERE</span>
            </h1>
            <p className="mt-8 text-xl text-secondary font-mono max-w-2xl leading-relaxed border-l-4 border-red-accent pl-6">
              Upload once. Reach millions. We automatically syndicate your audio across Future Radio, YouTube, Instagram Reels, and our B2B network.
            </p>
            <div className="mt-8">
               <Button variant="primary" size="lg" onClick={() => window.location.href = "/upload"}>START DISTRIBUTING</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
