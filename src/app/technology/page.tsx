"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function TechnologyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-red-accent selection:text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative border-b border-white/5 overflow-hidden">
        {/* Advanced Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(192,57,43,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(192,57,43,0.05)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,1)_80%)] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto space-y-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-3 border border-red-accent/30 bg-red-accent/5 px-4 py-1.5 backdrop-blur-sm">
              <div className="w-2 h-2 bg-red-accent rounded-full animate-pulse" />
              <span className="text-red-accent font-mono text-xs tracking-widest uppercase">
                System Documentation :: Public Release
              </span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-widest uppercase text-white leading-[0.85] hover-glitch" data-text="MAFIAOS">
              MAFIA<span className="text-red-accent">OS</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary font-mono max-w-4xl mx-auto leading-relaxed border-t border-white/10 pt-8"
          >
            We have engineered a highly scalable, centralized intelligence network that powers decentralized creator nodes. This is the underlying architecture driving the conversion of frequency to algorithmic code.
          </motion.p>
        </div>
      </section>

      {/* Technical Modules Grid */}
      <section className="py-24 px-6 bg-neutral-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Module 01 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-white/10 bg-black relative group hover:border-red-accent/50 transition-colors brutalist-border"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-accent/5 blur-[50px] pointer-events-none group-hover:bg-red-accent/10 transition-colors" />
              <span className="text-[10px] font-mono text-red-accent uppercase tracking-widest block mb-4 border-b border-red-accent/20 pb-2">Module_01 // Algorithmic Curation</span>
              <h3 className="font-display text-4xl uppercase text-white mb-6">System Intelligence & <br/>Auto-Schedule Engine</h3>
              <p className="text-secondary font-mono text-sm leading-relaxed mb-6">
                Our proprietary scheduling algorithm utilizes predictive listener data to autonomously curate and slot content. The MafiaOS dynamically builds high-retention playlists, optimizing for peak engagement windows, regional metadata, and historical drop-off metrics without manual intervention.
              </p>
              <ul className="space-y-2 font-mono text-xs text-white/50 uppercase tracking-widest">
                <li><span className="text-red-accent mr-2">{">"}</span> Predictive Drop-off Mitigation</li>
                <li><span className="text-red-accent mr-2">{">"}</span> Dynamic Slotting Algorithms</li>
                <li><span className="text-red-accent mr-2">{">"}</span> Automated Dayparting</li>
              </ul>
            </motion.div>

            {/* Module 02 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-white/10 bg-black relative group hover:border-red-accent/50 transition-colors brutalist-border"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-accent/5 blur-[50px] pointer-events-none group-hover:bg-red-accent/10 transition-colors" />
              <span className="text-[10px] font-mono text-red-accent uppercase tracking-widest block mb-4 border-b border-red-accent/20 pb-2">Module_02 // Content Integrity</span>
              <h3 className="font-display text-4xl uppercase text-white mb-6">HITL Architecture & <br/>Quality Control</h3>
              <p className="text-secondary font-mono text-sm leading-relaxed mb-6">
                While the system auto-curates at scale, our Human-In-The-Loop (HITL) gateway guarantees cultural authenticity. This advanced moderation protocol ensures that machine efficiency is strictly gated by localized human oversight, preventing broadcast degradation and maintaining regional dialect purity.
              </p>
              <ul className="space-y-2 font-mono text-xs text-white/50 uppercase tracking-widest">
                <li><span className="text-red-accent mr-2">{">"}</span> Multi-tier Verification Gateway</li>
                <li><span className="text-red-accent mr-2">{">"}</span> Dialect Integrity Checking</li>
                <li><span className="text-red-accent mr-2">{">"}</span> Machine-Assisted Auditing</li>
              </ul>
            </motion.div>

            {/* Module 03 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-white/10 bg-black relative group hover:border-red-accent/50 transition-colors brutalist-border"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-accent/5 blur-[50px] pointer-events-none group-hover:bg-red-accent/10 transition-colors" />
              <span className="text-[10px] font-mono text-red-accent uppercase tracking-widest block mb-4 border-b border-red-accent/20 pb-2">Module_03 // Asset Infrastructure</span>
              <h3 className="font-display text-4xl uppercase text-white mb-6">High-Fidelity Production <br/>& Accessibility</h3>
              <p className="text-secondary font-mono text-sm leading-relaxed mb-6">
                Integrated studio-grade mastering tools hosted entirely within the cloud. The platform supports real-time playlist ingestion, automated metadata tagging, and dynamic asset delivery. Our centralized database ensures lightning-fast accessibility to localized audio assets across all geographic zones.
              </p>
              <ul className="space-y-2 font-mono text-xs text-white/50 uppercase tracking-widest">
                <li><span className="text-red-accent mr-2">{">"}</span> Cloud-Native Mastering</li>
                <li><span className="text-red-accent mr-2">{">"}</span> Real-time Asset Ingestion</li>
                <li><span className="text-red-accent mr-2">{">"}</span> Distributed Content Delivery Network</li>
              </ul>
            </motion.div>

            {/* Module 04 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-red-accent/30 bg-black relative group hover:border-red-accent transition-colors brutalist-border overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-red-accent shadow-[0_0_20px_rgba(192,57,43,0.8)]" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-accent/10 blur-[60px] pointer-events-none group-hover:bg-red-accent/20 transition-colors" />
              <span className="text-[10px] font-mono text-white uppercase tracking-widest block mb-4 border-b border-red-accent/50 pb-2 bg-red-accent px-2 py-1 inline-block">CRITICAL PROTOCOL // OVERRIDE</span>
              <h3 className="font-display text-4xl uppercase text-red-accent mb-6 mt-4 hover-glitch" data-text="Emergency Broadcast Mode">Emergency Broadcast Mode</h3>
              <p className="text-secondary font-mono text-sm leading-relaxed mb-6">
                Direct integration with the physical world. In the event of a crisis, the system features an absolute override protocol. Authorized local authorities and partner nodes can instantly trigger unified emergency transmissions, overriding scheduled content across all active mobile nodes in a targeted geofence.
              </p>
              <ul className="space-y-2 font-mono text-xs text-white uppercase tracking-widest border border-red-accent/20 p-4 bg-red-accent/5">
                <li><span className="text-red-accent mr-2">[!]</span> Absolute Override Capability</li>
                <li><span className="text-red-accent mr-2">[!]</span> Geofenced Transmission Targeting</li>
                <li><span className="text-red-accent mr-2">[!]</span> Authority API Integration</li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* OS Schematic / Technical Graph Visual */}
      <section className="py-24 px-6 border-t border-white/5 relative bg-[url('/noise.png')] bg-repeat overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(192,57,43,0.05)_0%,rgba(0,0,0,1)_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-3xl uppercase tracking-widest text-white mb-12">Network Topology</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-between border border-white/10 bg-black/80 backdrop-blur-md p-8 brutalist-border gap-8">
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-red-accent/50 rounded-full flex items-center justify-center mx-auto mb-4 animate-[spin_10s_linear_infinite]">
                <div className="w-8 h-8 bg-red-accent/20 rounded-full" />
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-secondary">Creator Nodes<br/>(Ingestion)</p>
            </div>
            
            <div className="flex-1 flex items-center justify-center relative w-full h-px bg-white/10 hidden md:flex">
              <div className="absolute w-2 h-2 bg-red-accent rotate-45 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
              <div className="absolute top-[-20px] font-mono text-[8px] text-red-accent uppercase">Encrypted Transfer</div>
            </div>

            <div className="text-center p-6 border border-red-accent/30 bg-red-accent/5">
              <h3 className="font-display text-2xl uppercase text-white mb-2">MAFIAOS</h3>
              <p className="font-mono text-[10px] uppercase tracking-widest text-red-accent">Central Processing Intelligence</p>
            </div>

            <div className="flex-1 flex items-center justify-center relative w-full h-px bg-white/10 hidden md:flex">
               <div className="absolute w-2 h-2 bg-white rotate-45 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
               <div className="absolute top-[-20px] font-mono text-[8px] text-white/50 uppercase">Algorithmic Distribution</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 border border-white/20 flex items-center justify-center mx-auto mb-4 bg-white/5">
                <span className="font-mono text-xs text-white uppercase">APP</span>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-secondary">Listener Nodes<br/>(Output)</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
