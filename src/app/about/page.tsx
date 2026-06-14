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
              Media Mafias is the ultimate <strong className="text-white">content production and distribution hub</strong>. We are an elite collective dedicated to discovering, producing, and amplifying vernacular audio content across the globe. We aren't just a label; we are an ecosystem that empowers independent creators through rigorous upskilling in modern broadcast AI, and connects their voices to audiences via direct API pipelines to platforms like Future Radio, YouTube, Instagram, and beyond.
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
                To obliterate the monopolized gatekeeping of the content industry. Our mission is to arm local and independent creators with world-class production standards and AI-driven broadcast tools. We upskill raw talent and transform them into digital syndicates, manufacturing airtime and guaranteeing distribution.
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
                A total decentralization of the global content landscape. We envision a world where localized culture and indie creators deploy their art seamlessly across the digital realm, powered by our robust vernacular audio API pipelines. The era of static gatekeepers is dead. The signal belongs to the creators.
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
