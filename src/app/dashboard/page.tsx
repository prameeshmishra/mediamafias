"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-red-accent selection:text-white">
      <Header />
      
      <section className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-3 border border-red-accent/30 bg-red-accent/5 px-4 py-1 mb-4">
                <div className="w-2 h-2 bg-red-accent rounded-full animate-pulse" />
                <span className="text-red-accent font-mono text-xs tracking-widest uppercase">
                  Creator Hub
                </span>
              </div>
              <h1 className="font-display text-5xl uppercase tracking-widest text-white">Dashboard</h1>
              <p className="text-secondary font-mono mt-2">Welcome back. Your syndicated content is performing well.</p>
            </div>
            
            <Button variant="primary" onClick={() => window.location.href = "/upload"}>
              + UPLOAD NEW CONTENT
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Split UI */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2 bg-neutral-950 border border-white/10 p-8"
            >
              <h2 className="font-display text-2xl uppercase tracking-widest mb-6">Revenue Split & Earnings</h2>
              
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="relative w-48 h-48 rounded-full border-4 border-white/5 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-red-accent/20" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 60%)" }} />
                  <div className="absolute inset-0 bg-white/10" style={{ clipPath: "polygon(0 60%, 100% 100%, 0 100%)" }} />
                  <div className="relative z-10 text-center">
                    <div className="text-3xl font-display text-white">60%</div>
                    <div className="text-[10px] font-mono text-secondary uppercase tracking-widest">Creator Share</div>
                  </div>
                </div>

                <div className="flex-1 space-y-4 w-full">
                  <div className="bg-black border border-white/5 p-4 flex justify-between items-center">
                    <span className="font-mono text-secondary text-sm uppercase tracking-wider">Total Streams</span>
                    <span className="font-mono font-bold text-xl">842,019</span>
                  </div>
                  <div className="bg-black border border-white/5 p-4 flex justify-between items-center">
                    <span className="font-mono text-secondary text-sm uppercase tracking-wider">Gross Revenue</span>
                    <span className="font-mono font-bold text-xl text-green-400">$4,210.09</span>
                  </div>
                  <div className="bg-black border border-red-accent/30 p-4 flex justify-between items-center">
                    <span className="font-mono text-red-accent text-sm uppercase tracking-wider">Your Share (60%)</span>
                    <span className="font-mono font-bold text-2xl text-white">$2,526.05</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-red-accent/10 border-l-4 border-red-accent font-mono text-xs text-secondary leading-relaxed">
                <strong className="text-white block mb-1">Web3 Integration Pending (V2)</strong>
                Currently, revenue is distributed via traditional fiat pipelines. In V2, your 60% split will be automatically routed via Smart Contracts directly to your connected wallet.
              </div>
            </motion.div>

            {/* Content List */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-neutral-950 border border-white/10 p-8 flex flex-col"
            >
              <h2 className="font-display text-2xl uppercase tracking-widest mb-6">Active Licenses</h2>
              
              <div className="flex-1 space-y-4">
                {[
                  { title: "Desi Frequency", streams: "450K", status: "Active" },
                  { title: "Gaon Ki Awaaz", streams: "210K", status: "Active" },
                  { title: "Patna Drop", streams: "182K", status: "Active" }
                ].map((track, i) => (
                  <div key={i} className="border-b border-white/5 pb-4 last:border-0">
                    <div className="flex justify-between items-start mb-1">
                      <div className="font-mono text-white text-sm">{track.title}</div>
                      <div className="text-[10px] font-mono uppercase bg-green-500/20 text-green-400 px-2 py-0.5">{track.status}</div>
                    </div>
                    <div className="text-[10px] font-mono text-secondary tracking-widest uppercase">Streams: {track.streams}</div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-6">VIEW ALL</Button>
            </motion.div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
