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
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                  Alias / Name
                </label>
                <Input required placeholder="Enter your name" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                  Location / Base
                </label>
                <Input required placeholder="City, Country" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                  Why is broadcast obsolete?
                </label>
                <textarea 
                  required
                  rows={4}
                  className="flex w-full rounded-sm border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-accent resize-none"
                  placeholder="Share your perspective..."
                />
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
