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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl text-red-accent uppercase tracking-widest">Our Mission</h2>
              <p className="text-secondary font-sans leading-relaxed">
                We are an underground collective of audio architects. Our mission is to dismantle the monopolized broadcast industry and distribute the power of voice back to regional creators. We build the tech, we provide the platform, and we amplify the signal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl text-red-accent uppercase tracking-widest">Our Vision</h2>
              <p className="text-secondary font-sans leading-relaxed">
                A world where high-fidelity audio is decentralized. Where local culture is preserved and broadcast globally without corporate dilution. We envision a network of independent nodes creating the new standard for radio.
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
