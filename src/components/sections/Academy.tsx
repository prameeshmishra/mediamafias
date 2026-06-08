"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mic2, Cpu, Globe2, ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

export const Academy = () => {
  return (
    <section id="academy" className="py-32 px-6 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(230,0,0,0.1)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] text-red-accent uppercase mb-4">
            Creator Development
          </h2>
          <h3 className="text-4xl md:text-5xl font-display uppercase tracking-widest hover-glitch" data-text="THE MEDIA MAFIAS ACADEMY">
            THE MEDIA MAFIAS <span className="text-red-accent">ACADEMY</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Vision Statement Graphic Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between border border-white/10 bg-neutral-950 p-8 brutalist-border relative group overflow-hidden"
          >
            {/* Background Graphic Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+Cjwvc3ZnPg==')] pointer-events-none opacity-50 mix-blend-screen transition-opacity group-hover:opacity-100" />
            <div className="absolute top-4 right-4 text-white/5">
              <Quote className="w-24 h-24" />
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-3 border border-red-accent/30 bg-red-accent/5 px-4 py-1.5 mb-2">
                <span className="text-red-accent font-mono text-[10px] tracking-widest uppercase">
                  National Vision Alignment
                </span>
              </div>
              <h3 className="font-display text-4xl md:text-5xl uppercase leading-none text-white pt-2">
                THE NEW<br/><span className="text-red-accent">STORYTELLERS</span>
              </h3>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-secondary border-l-2 border-white/10 pl-4 mt-6">
                Aligned with the National Vision for India's Creator Economy to preserve and digitize hyper-local vernacular talent and folk music.
              </p>
            </div>
            
            <div className="mt-12 pt-6 border-t border-white/10">
              <p className="font-mono text-sm text-secondary leading-relaxed">
                Media Mafias is building the infrastructure to empower local creators at scale, equipping them with world-class tools to shape the future of our digital identity.
              </p>
            </div>
          </motion.div>

          {/* Program Details & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <p className="text-2xl font-light text-white leading-relaxed">
                We don't just broadcast; <span className="font-bold text-red-accent">we empower.</span>
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed font-sans">
                Our AI-driven bootcamps transform local voices into professional audio creators. Preservation of culture meets the cutting edge of tech. We are equipping the next generation with the tools to dominate the airwaves.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-black border border-white/5 p-6 hover:border-red-accent/30 transition-colors">
                <Cpu className="w-6 h-6 text-red-accent mb-4" />
                <h4 className="font-display tracking-widest uppercase mb-2">AI Bootcamps</h4>
                <p className="text-sm text-neutral-400 font-sans">Master production, distribution, and monetization.</p>
              </div>
              <div className="bg-black border border-white/5 p-6 hover:border-red-accent/30 transition-colors">
                <Mic2 className="w-6 h-6 text-red-accent mb-4" />
                <h4 className="font-display tracking-widest uppercase mb-2">Pro Equipment</h4>
                <p className="text-sm text-neutral-400 font-sans">Access to industry-standard recording gear.</p>
              </div>
            </div>

            <Link href="/create" className="group block">
              <div className="border-l-4 border-red-accent bg-red-accent/5 p-6 flex justify-between items-center hover:bg-red-accent/10 transition-colors">
                <div>
                  <h4 className="font-display text-xl tracking-widest uppercase text-white mb-1">Enter The Creator Program</h4>
                  <p className="font-mono text-xs text-red-accent uppercase tracking-widest">Apply for the Academy</p>
                </div>
                <ArrowRight className="w-6 h-6 text-red-accent group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
