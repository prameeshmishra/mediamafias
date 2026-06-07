"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Turnstile } from "@marsidev/react-turnstile";
import Image from "next/image";

interface EntryDoorProps {
  onVerified: () => void;
}

export const EntryDoor: React.FC<EntryDoorProps> = ({ onVerified }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,57,43,0.1)_0%,rgba(0,0,0,1)_70%)] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center space-y-12 max-w-md mx-auto px-6 text-center">
        <div className="relative">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src="/Logo Main.png"
              alt="Media Mafias Logo"
              width={100}
              height={100}
              className="drop-shadow-[0_0_15px_rgba(192,57,43,0.8)]"
            />
          </motion.div>
          {/* Scanning line effect */}
          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[2px] bg-red-accent shadow-[0_0_10px_rgba(192,57,43,1)] z-20"
          />
        </div>
        
        <div className="space-y-4">
          <h1 className="font-display text-4xl tracking-widest uppercase text-red-accent hover-glitch" data-text="Restricted Access">Restricted Access</h1>
          <p className="text-secondary font-mono text-xs uppercase tracking-widest">Establish secure connection to enter the Cartel</p>
        </div>

        <div className="p-4 border border-white/10 bg-neutral-950/50 backdrop-blur-sm rounded-sm">
          <Turnstile 
            siteKey="1x00000000000000000000AA"
            onSuccess={onVerified}
            options={{ theme: "dark" }}
          />
        </div>
        
        <div className="text-xs text-secondary/50 font-sans tracking-widest uppercase animate-pulse">
          Awaiting Human Signature...
        </div>
      </div>
    </motion.div>
  );
};
