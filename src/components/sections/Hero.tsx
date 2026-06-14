"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  const [matrixText, setMatrixText] = React.useState("");
  React.useEffect(() => {
    const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ01";
    let iterations = 0;
    const interval = setInterval(() => {
      setMatrixText(
        Array(20).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join(" ")
      );
      iterations++;
      if (iterations > 100) clearInterval(interval);
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-20 overflow-hidden bg-black border-b border-red-accent/10">
      {/* Background radial gradient for cinematic effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,57,43,0.1)_0%,rgba(0,0,0,1)_80%)] pointer-events-none" />
      
      {/* Code Stream Overlay */}
      <div className="absolute inset-0 opacity-10 font-mono text-[8px] text-red-accent overflow-hidden whitespace-nowrap pointer-events-none select-none flex flex-col justify-between py-10" aria-hidden="true">
        {Array(30).fill(0).map((_, i) => (
          <motion.div 
            key={i} 
            initial={{ x: i % 2 === 0 ? "100%" : "-100%" }}
            animate={{ x: i % 2 === 0 ? "-100%" : "100%" }}
            transition={{ duration: 40 + Math.random() * 20, repeat: Infinity, ease: "linear" }}
          >
            {Array(10).fill(matrixText).join(" ")}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6 max-w-7xl mx-auto w-full">
        {/* Left Text Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="text-[10px] font-mono text-secondary tracking-widest uppercase mb-12">
              INITIALIZING MAFIAOS <span className="text-red-accent animate-pulse">...</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[7.5rem] font-display tracking-widest uppercase mb-6 leading-[0.85] text-white hover-glitch relative"
            data-text="CONTENT IS KING"
          >
            CONTENT IS <br className="hidden md:block" />
            <span className="text-white block mt-2 mix-blend-screen">
              KING
            </span>
            <span className="inline-block mt-6 text-red-accent font-sans font-black tracking-[0.15em] drop-shadow-[0_0_30px_rgba(192,57,43,0.3)] text-[0.8em] hover:text-white hover:scale-105 hover:drop-shadow-[0_0_60px_rgba(255,255,255,0.9)] transition-all duration-300 cursor-crosshair">
              DISTRIBUTION IS GOD.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-secondary mb-12 max-w-2xl font-mono leading-relaxed border-l-4 border-red-accent pl-6 bg-black/50 p-4"
          >
            <p className="mb-4">The ultimate content production and distribution hub.</p>
            <p className="text-white">Upload once. Distribute everywhere. We empower independent creators with world-class production standards, AI upskilling, and direct pipeline access to vernacular audio platforms globally.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl mt-8"
          >
            {/* Card 1: Upload Content */}
            <Link href="/upload" className="flex-1 group">
              <div className="bg-red-accent h-64 p-8 relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] border border-red-accent flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-black mb-2 font-bold">Distribution</div>
                  <h3 className="font-display text-4xl uppercase tracking-widest text-black leading-[1.1]">
                    Upload<br />Content
                  </h3>
                </div>
                
                {/* Action Button */}
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                  <svg className="w-6 h-6 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,black_1px,transparent_1px)] bg-[length:8px_8px] opacity-20 -mr-16 -mt-16 pointer-events-none" />
              </div>
            </Link>

            {/* Card 2: Join Academy */}
            <Link href="/academy" className="flex-1 group">
              <div className="bg-neutral-950 h-64 p-8 relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] border border-white/10 flex flex-col justify-between hover:border-red-accent/50">
                <div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-red-accent mb-2">Creators</div>
                  <h3 className="font-display text-4xl uppercase tracking-widest text-white leading-[1.1]">
                    Join<br />Academy
                  </h3>
                </div>
                
                {/* Action Button */}
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-red-accent transition-colors">
                  <svg className="w-6 h-6 text-black group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:8px_8px] opacity-10 -mr-16 -mt-16 pointer-events-none" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};
