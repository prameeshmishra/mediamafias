"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

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
    return () => clearInterval(interval);
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

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-6xl mx-auto w-full">
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
          className="text-6xl md:text-8xl lg:text-[10rem] font-display tracking-widest uppercase mb-6 leading-[0.85] text-white hover-glitch relative"
          data-text="RADIO RUNS ON CODE"
        >
          RADIO RUNS ON <br className="hidden md:block" />
          <span className="text-red-accent block mt-4 mix-blend-screen drop-shadow-[0_0_25px_rgba(192,57,43,0.6)]">
            CODE
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-secondary mb-12 max-w-4xl font-mono leading-relaxed border-l-2 border-red-accent/50 pl-6 text-left"
        >
          <p>The era of broadcast towers and static frequencies is dead. We have re-engineered the audio landscape into a high-fidelity, algorithmic stream.</p>
          <p className="mt-4 text-white">Welcome to the centralized technology network powering the decentralized creator economy.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <Link href="/partner" className="w-full sm:w-auto">
            <Button size="lg" className="w-full font-display text-2xl tracking-widest pt-1 px-10 shadow-[0_0_30px_rgba(192,57,43,0.3)] border border-red-accent/50 group relative overflow-hidden bg-black text-white hover:bg-red-accent">
              <span className="relative z-10">BECOME A PARTNER</span>
            </Button>
          </Link>
          <Link href="/technology" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full font-display text-2xl tracking-widest pt-1 px-10 border-white/20 text-white hover:bg-white/5">
              THE TECHNOLOGY
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};
