"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-red-accent selection:text-white">
      <Header />
      
      <section className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-6xl md:text-8xl tracking-widest uppercase text-white mb-12 border-b border-red-accent pb-4 inline-block"
          >
            About Us
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 border-l-4 border-red-accent pl-6"
          >
            <h2 className="font-display text-4xl text-white uppercase tracking-widest mb-6">Who We Are</h2>
            <p className="text-xl text-secondary font-sans leading-relaxed">
              Media Mafias is not a traditional network—we are an elite audio technology company engineering the future of broadcast. We build proprietary <strong className="text-white">Radio 3.0</strong> technology from the ground up, bypassing outdated gatekeepers to deliver high-fidelity, algorithmic streams. We don't just provide software; we deploy a consumer-facing product ecosystem that arms creators, brands, and retail spaces with the most robust audio streaming solution on the market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl text-red-accent uppercase tracking-widest">Our Mission</h2>
              <p className="text-secondary font-sans leading-relaxed text-lg">
                To obliterate the monopolized, outdated radio industry. We are arming creators and brands with our proprietary Radio 3.0 technology, straight out of the pocket. We don't ask for airtime; we manufacture it. Our mission is to put absolute broadcast dominance back into the hands of the people who truly understand the power of audio.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl text-red-accent uppercase tracking-widest">Our Vision</h2>
              <p className="text-secondary font-sans leading-relaxed text-lg">
                A total decentralization of the global audio landscape. We envision a world where localized culture and indie creators deploy their own 24/7 high-fidelity stations, completely immune to corporate dilution. The era of static frequencies is dead. We are writing the new algorithms for global radio.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 bg-neutral-950 border border-white/10 p-8 text-center"
          >
            <h3 className="font-display text-4xl uppercase tracking-widest mb-4">Static is Dead. The Signal is Ours.</h3>
            <p className="text-secondary font-sans uppercase tracking-widest text-sm">Join the Collective.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
