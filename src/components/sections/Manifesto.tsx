"use client";

import * as React from "react";
import { motion } from "framer-motion";

export const Manifesto = () => {
  return (
    <section id="manifesto" className="py-32 px-6 bg-neutral-950 relative border-t border-red-accent/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8 relative z-10"
        >
          <div className="flex items-center gap-4">
            <span className="w-8 h-px bg-red-accent" />
            <h2 className="font-mono text-sm tracking-[0.2em] text-red-accent uppercase">
              System Architecture Protocol
            </h2>
          </div>
          
          <h3 className="font-display text-5xl md:text-7xl tracking-widest uppercase leading-[0.9] hover-glitch" data-text="THE INFRASTRUCTURE IS DEAD. LONG LIVE THE ALGORITHM.">
            THE INFRASTRUCTURE IS DEAD. <br /> LONG LIVE THE ALGORITHM.
          </h3>
          
          <p className="text-lg text-secondary font-mono leading-relaxed border-l-2 border-red-accent pl-6">
            Traditional radio is trapped by massive infrastructure costs, broadcast towers, and analog limitations. We killed the infrastructure. Media Mafias operates an advanced MafiaOS that turns smartphones into decentralized broadcast networks. 
          </p>

          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 mt-12">
            {[
              { title: "Algorithmic Precision", desc: "Data-driven content delivery that bypasses traditional FM reach limitations." },
              { title: "High-Fidelity Code", desc: "Uncompromising audio streaming transmitted through an encrypted, decentralized network." },
              { title: "Centralized Control", desc: "We own the OS, the data, and the signal. We dictate the code." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-black p-6 border border-white/5 hover:border-red-accent/50 transition-all brutalist-border group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-red-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <span className="text-red-accent font-display text-3xl block mb-4 opacity-80">0{i + 1}</span>
                  <h4 className="font-display text-2xl tracking-widest text-white uppercase mb-2">{item.title}</h4>
                  <p className="text-secondary text-sm font-mono leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
