"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const FixerPortal = () => {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="fixer-portal" className="py-32 px-6 bg-neutral-950 relative border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <div className="flex items-center gap-4 mb-8">
            <Image 
              src="/player-logo.png" 
              alt="Future Radio DNA" 
              width={64} 
              height={64} 
              className="drop-shadow-[0_0_15px_rgba(230,0,0,0.5)]"
            />
            <h2 className="text-sm font-bold tracking-[0.2em] text-red-accent uppercase">
              The Fixer Portal
            </h2>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
            We are assembling a collective of architects, not employees.
          </h3>
          
          <p className="text-xl text-neutral-400 font-light leading-relaxed">
            If you are a builder who believes the current broadcast model is obsolete, your seat is at our table.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-[480px] bg-black p-8 border border-white/10 rounded-sm shadow-2xl relative overflow-hidden"
        >
          {/* Subtle red accent line at top */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-hover to-red-accent" />

          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 rounded-full border-2 border-red-accent flex items-center justify-center mb-4">
                <span className="text-red-accent text-2xl">✓</span>
              </div>
              <h4 className="text-2xl font-bold">Signal Received</h4>
              <p className="text-neutral-400">We will be in touch, architect.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Operative Name</label>
                  <Input name="name" required placeholder="Full Name" className="bg-neutral-950 border-neutral-800 focus-visible:ring-red-accent" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Target Territory</label>
                  <Input name="city" required placeholder="City or Region" className="bg-neutral-950 border-neutral-800 focus-visible:ring-red-accent" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Comms Link (Email)</label>
                  <Input name="email" required type="email" placeholder="hello@example.com" className="bg-neutral-950 border-neutral-800 focus-visible:ring-red-accent" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Direct Line (Phone)</label>
                  <Input name="phone" required type="tel" placeholder="+91..." className="bg-neutral-950 border-neutral-800 focus-visible:ring-red-accent" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Broadcast History</label>
                <Input name="experience" required placeholder="Ex: RJ at Red FM (3 Years)" className="bg-neutral-950 border-neutral-800 focus-visible:ring-red-accent" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">LinkedIn Profile</label>
                <Input name="linkedin" required type="url" placeholder="https://linkedin.com/in/..." className="bg-neutral-950 border-neutral-800 focus-visible:ring-red-accent" />
              </div>

              <Button 
                type="submit" 
                className="w-full uppercase font-bold tracking-widest"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Transmitting..." : "Submit Transmission"}
              </Button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};
