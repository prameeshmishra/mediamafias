"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  const [matrixText, setMatrixText] = React.useState("");
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  
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

    // Initialize audio object
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("/Latency Buffering.mp3");
      audioRef.current.onended = () => setIsPlaying(false);
    }

    return () => {
      clearInterval(interval);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handlePlayAudio = () => {
    if (isPlaying || !audioRef.current) return;
    
    setIsPlaying(true);
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(err => {
      console.error("Audio playback blocked by browser:", err);
      setIsPlaying(false);
    });
  };

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

        {/* Right Graphic/Logo Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center items-center relative cursor-pointer group mt-12 lg:mt-0"
          onClick={handlePlayAudio}
        >
          {/* Rotating radar/scanning effect behind logo */}
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: isPlaying ? [1, 1.1, 1] : 1
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 0.3, repeat: isPlaying ? Infinity : 0 }
            }}
            className="absolute inset-0 border border-red-accent/10 rounded-full w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] m-auto border-t-red-accent/40"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-white/5 rounded-full w-[240px] h-[240px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] m-auto border-b-white/20"
          />
          
          <div className="relative z-10 flex items-center justify-center w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]">
            {/* Naked Hi-Fi Speaker Transformation */}
            <motion.div
               initial={false}
               animate={{ 
                 opacity: isPlaying ? 1 : 0, 
                 scale: isPlaying ? 1 : 0.2 
               }}
               transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
               className="absolute inset-0 rounded-full bg-neutral-900 border-[8px] lg:border-[16px] border-[#050505] shadow-[inset_0_20px_50px_rgba(0,0,0,0.9),_0_0_60px_rgba(192,57,43,0.4)] flex items-center justify-center overflow-hidden"
            >
               {/* Pumping Speaker Cone */}
               <motion.div 
                 animate={isPlaying ? { scale: [1, 1.05, 1, 1.08, 1] } : { scale: 1 }}
                 transition={{ duration: 0.4, repeat: isPlaying ? Infinity : 0, ease: "easeInOut" }}
                 className="w-[90%] h-[90%] rounded-full bg-[radial-gradient(circle_at_center,#333_0%,#0a0a0a_80%)] shadow-[inset_0_0_40px_rgba(0,0,0,1)] flex items-center justify-center border-[3px] lg:border-[6px] border-[#111]"
               >
                 {/* Inner Rubber Surround */}
                 <div className="w-[85%] h-[85%] rounded-full shadow-[inset_0_10px_20px_rgba(0,0,0,0.8)] border border-white/5 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000_100%)] flex items-center justify-center" />
               </motion.div>
            </motion.div>

            {/* The Actual Logo (Acts as Dust Cap when playing) */}
            <motion.div
              animate={{ 
                scale: isPlaying ? 0.35 : 1, 
              }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
              className={`relative z-20 flex flex-col items-center justify-center transition-all w-full h-full ${
                isPlaying 
                  ? 'mix-blend-normal drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]' 
                  : 'mix-blend-screen drop-shadow-[0_0_30px_rgba(192,57,43,0.4)] group-hover:scale-110'
              }`}
            >
              <Image 
                src="/player-logo.png" 
                alt="Media Mafias Cartel Player" 
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />

              {!isPlaying && (
                <div className="absolute -bottom-8 whitespace-nowrap text-[9px] lg:text-[10px] font-mono text-red-accent/80 tracking-[0.3em] uppercase opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                  [ Click to Ignite ]
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};
