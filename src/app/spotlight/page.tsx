"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

// Dummy data for Artist Cards
const ARTISTS = [
  {
    id: "art_01",
    name: "Raja Bundeli",
    dialect: "Bundeli",
    status: "Elite Syndicate",
    streams: "1.2M",
    engagement: "98%",
    topTrack: "Desi Frequency",
  },
  {
    id: "art_02",
    name: "Kavita Awadh",
    dialect: "Awadhi",
    status: "Rising Star",
    streams: "850K",
    engagement: "92%",
    topTrack: "Gaon Ki Awaaz",
  },
  {
    id: "art_03",
    name: "Bhojpuri Bass",
    dialect: "Bhojpuri",
    status: "Top Tier",
    streams: "3.4M",
    engagement: "99%",
    topTrack: "Patna Drop",
  },
  {
    id: "art_04",
    name: "Malwi Mics",
    dialect: "Malwi",
    status: "Syndicate",
    streams: "420K",
    engagement: "88%",
    topTrack: "Indore Nights",
  }
];

export default function SpotlightPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-red-accent selection:text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 border-b border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(192,57,43,0.1)_0%,rgba(0,0,0,1)_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 border border-red-accent/30 bg-red-accent/5 px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-red-accent rounded-full animate-pulse" />
              <span className="text-red-accent font-mono text-sm tracking-widest uppercase">
                Creator Directory
              </span>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl tracking-widest uppercase text-white hover-glitch leading-[0.9]">
              THE <span className="text-red-accent">SPOTLIGHT</span>
            </h1>
            <p className="mt-8 text-xl text-secondary font-mono max-w-2xl leading-relaxed border-l-4 border-red-accent pl-6">
              Discover the independent artists powering the vernacular audio revolution. Verified on-chain engagement and streaming metrics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Artist Chart List */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
            <h2 className="font-display text-3xl uppercase tracking-widest text-white">Top 50 Syndicate Chart</h2>
            <div className="text-secondary font-mono text-sm">Updated Real-time</div>
          </div>

          <div className="flex flex-col gap-4">
            {ARTISTS.map((artist, idx) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex items-center justify-between bg-black border border-white/5 p-4 hover:border-red-accent/50 hover:bg-red-accent/5 transition-all"
              >
                {/* Left Side: Rank & Info */}
                <div className="flex items-center gap-6">
                  <div className="text-4xl font-display text-white/20 group-hover:text-red-accent transition-colors w-12 text-center">
                    {idx + 1}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display text-2xl uppercase tracking-widest text-white group-hover:text-red-accent transition-colors">{artist.name}</h3>
                      <span className="text-[10px] font-mono tracking-widest uppercase border border-white/20 px-2 py-0.5 text-secondary">
                        {artist.dialect}
                      </span>
                    </div>
                    <div className="text-sm font-mono text-secondary">
                      <span className="text-white">Top Track:</span> {artist.topTrack}
                    </div>
                  </div>
                </div>

                {/* Right Side: Metrics & Actions */}
                <div className="flex items-center gap-8">
                  <div className="hidden md:flex flex-col items-end">
                    <div className="text-sm font-bold font-mono text-white">{artist.streams} Streams</div>
                    <div className="text-[10px] font-mono text-green-400 uppercase tracking-widest">{artist.engagement} Engagement</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="p-3 border border-white/10 hover:bg-red-accent hover:border-red-accent text-secondary hover:text-white transition-all group/btn rounded-sm">
                      <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="p-3 border border-white/10 hover:bg-white/10 text-secondary hover:text-white transition-all group/btn rounded-sm">
                      <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
             <Button variant="outline">LOAD MORE ARTISTS</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
