"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";

export default function CreatorProgramPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-red-accent selection:text-white">
      <Header />
      
      {/* Grand Hero Section */}
      <section className="pt-40 pb-24 px-6 relative border-b border-white/5 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(192,57,43,0.1)_0%,rgba(0,0,0,1)_60%)] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-5xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-3 border border-red-accent/30 bg-red-accent/5 px-6 py-2">
            <div className="w-2 h-2 bg-red-accent rounded-full animate-pulse" />
            <span className="text-red-accent font-mono text-sm tracking-widest uppercase">
              The Creator Program
            </span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl tracking-widest uppercase text-white leading-[0.9] hover-glitch pt-4">
            THE NEW <br/> <span className="text-red-accent">CREATOR ECONOMY</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary font-mono max-w-3xl mx-auto leading-relaxed pt-6 border-t border-white/10">
            Empowering the next generation of digital voices. We train raw talent to wield world-class technology, digitizing local culture for the global stage.
          </p>
        </motion.div>
      </section>

      {/* The Vision Section (PM Modi) */}
      <section className="py-24 px-6 relative bg-neutral-950 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative p-2 border border-white/10 bg-black brutalist-border shadow-[0_0_50px_rgba(192,57,43,0.1)] group">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-accent z-20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-accent z-20" />
              
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900 grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image 
                  src="/Modi-Ji-Photo-02-e1647325936821.jpg"
                  alt="Honorable Prime Minister of India, Narendra Modi"
                  fill
                  className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-red-accent text-white font-mono text-[10px] px-3 py-1 tracking-widest uppercase">
                NATIONAL VISION
              </div>
            </div>
          </motion.div>

          {/* Quote & Alignment Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4 relative">
              <span className="absolute -top-16 -left-8 text-[120px] font-display text-white/5 leading-none select-none">"</span>
              <blockquote className="font-display text-3xl md:text-5xl uppercase leading-snug text-white relative z-10">
                Creators are the new storytellers of India. You are shaping the future of our digital identity.
              </blockquote>
              <div className="flex items-center gap-4 pt-4 border-t border-red-accent/30 w-full">
                <div className="w-12 h-px bg-red-accent shrink-0" />
                <div className="font-mono text-sm tracking-widest text-red-accent uppercase space-y-1">
                  <p className="font-bold text-white text-base">Shri Narendra Damodardas Modi</p>
                  <p>Hon&apos;ble Prime Minister of India</p>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-6 text-secondary font-sans text-lg leading-relaxed border-l-2 border-white/10 pl-6">
              <p>
                As envisioned by the Honorable Prime Minister, the Creator Economy is not just a trend—it is the digital backbone of a modern India. At Media Mafias, we are directly executing this mandate.
              </p>
              <p>
                We believe that true cultural impact happens when local talent is given access to world-class tools. Our Creator Program doesn&apos;t just host audio; it actively trains, equips, and transforms grassroots artists into professional digital broadcasters.
              </p>
              
              <div className="flex items-center gap-8 pt-8 mt-8 border-t border-white/5">
                <div className="flex items-center justify-center h-16 px-6 bg-white/5 border border-white/10 rounded group hover:bg-white/10 transition-colors">
                  <div className="font-sans text-center">
                    <span className="font-bold text-white text-lg tracking-tight block leading-none">Digital India</span>
                    <span className="text-[8px] uppercase tracking-widest text-red-accent mt-1 block">Power To Empower</span>
                  </div>
                </div>
                <div className="flex items-center justify-center h-16 px-6 bg-white/5 border border-white/10 rounded group hover:bg-white/10 transition-colors">
                  <div className="font-display text-center">
                    <span className="font-bold text-white text-lg tracking-widest uppercase block leading-none">Make In India</span>
                    <span className="text-[8px] uppercase tracking-widest text-secondary mt-1 block">Government of India</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Impact Grid */}
      <section className="py-24 px-6 relative bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl tracking-widest uppercase text-white mb-4">THE IMPACT PROTOCOL</h2>
            <p className="text-secondary font-mono text-sm uppercase tracking-widest">How We Build the Next Generation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Optimization */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-white/10 hover:border-red-accent/50 bg-neutral-950 transition-all group"
            >
              <div className="text-red-accent font-display text-6xl mb-6 opacity-50 group-hover:opacity-100 transition-opacity">01</div>
              <h3 className="font-display text-2xl uppercase tracking-widest text-white mb-4">Tool Mastery & Optimization</h3>
              <p className="text-secondary font-mono text-sm leading-relaxed">
                Raw talent is no longer enough. We train our creators to utilize cutting-edge AI production tools, dynamic audio mastering, and automated schedule generation to drastically optimize their content creation process.
              </p>
            </motion.div>

            {/* Cultural Digitization */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 border border-white/10 hover:border-red-accent/50 bg-neutral-950 transition-all group"
            >
              <div className="text-red-accent font-display text-6xl mb-6 opacity-50 group-hover:opacity-100 transition-opacity">02</div>
              <h3 className="font-display text-2xl uppercase tracking-widest text-white mb-4">Cultural Digitization</h3>
              <p className="text-secondary font-mono text-sm leading-relaxed">
                We are on a mission to digitally preserve India&apos;s rich heritage. We actively promote local artists, ensuring that hyper-local dialects, folk music, and regional stories are digitized and protected on our algorithmic network.
              </p>
            </motion.div>

            {/* Global Distribution */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-8 border border-white/10 hover:border-red-accent/50 bg-neutral-950 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-accent/5 blur-[50px] pointer-events-none group-hover:bg-red-accent/20 transition-colors" />
              <div className="text-red-accent font-display text-6xl mb-6 opacity-50 group-hover:opacity-100 transition-opacity">03</div>
              <h3 className="font-display text-2xl uppercase tracking-widest text-white mb-4">Global Distribution</h3>
              <p className="text-secondary font-mono text-sm leading-relaxed">
                Local roots, global reach. By integrating our creators into the Media Mafias MafiaOS, we instantly bridge the gap, projecting localized, world-class production directly onto the global digital stage.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
