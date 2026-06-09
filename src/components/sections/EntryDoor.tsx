"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface EntryDoorProps {
  onVerified: () => void;
}

export const EntryDoor: React.FC<EntryDoorProps> = ({ onVerified }) => {
  const [status, setStatus] = React.useState("Awaiting Human Signature...");

  React.useEffect(() => {
    const timer1 = setTimeout(() => setStatus("Decrypting Protocols..."), 800);
    const timer2 = setTimeout(() => setStatus("Secure Connection Established."), 1600);
    const timer3 = setTimeout(() => onVerified(), 2200);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onVerified]);

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
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[2px] bg-red-accent shadow-[0_0_10px_rgba(192,57,43,1)] z-20"
          />
        </div>
        
        <div className="space-y-4">
          <h1 className="font-display text-4xl tracking-widest uppercase text-red-accent hover-glitch" data-text="Restricted Access">Restricted Access</h1>
          <p className="text-secondary font-mono text-xs uppercase tracking-widest">Entering the Cartel Network</p>
        </div>

        <div className="p-4 border border-white/10 bg-neutral-950/50 backdrop-blur-sm rounded-sm min-w-[250px]">
          <div className="w-full h-1 bg-neutral-900 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className="h-full bg-red-accent shadow-[0_0_10px_rgba(192,57,43,1)]"
            />
          </div>
        </div>
        
        <div className="text-xs text-red-accent font-mono tracking-widest uppercase animate-pulse h-4">
          {status}
        </div>
      </div>
    </motion.div>
  );
};
