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

      {/* Artist Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {ARTISTS.map((artist, idx) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-neutral-950 border border-white/10 p-8 relative group hover:border-red-accent/50 transition-colors"
              >
                {/* Status Badge */}
                <div className="absolute top-6 right-6 border border-white/20 px-3 py-1 text-[10px] font-mono tracking-widest uppercase bg-black text-secondary">
                  {artist.status}
                </div>

                <div className="mb-6">
                  <h2 className="font-display text-4xl uppercase tracking-wider mb-2">{artist.name}</h2>
                  <p className="text-red-accent font-mono text-sm uppercase tracking-widest">Dialect: {artist.dialect}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-black border border-white/5 p-4">
                    <div className="text-[10px] text-secondary font-mono tracking-widest uppercase mb-1">Total Streams</div>
                    <div className="text-2xl font-bold font-mono">{artist.streams}</div>
                  </div>
                  <div className="bg-black border border-white/5 p-4">
                    <div className="text-[10px] text-secondary font-mono tracking-widest uppercase mb-1">Engagement Rate</div>
                    <div className="text-2xl font-bold font-mono text-green-400">{artist.engagement}</div>
                  </div>
                </div>

                <div className="mb-8 border-l-2 border-red-accent pl-4">
                  <div className="text-[10px] text-secondary font-mono tracking-widest uppercase mb-1">Top Performing Track</div>
                  <div className="text-lg text-white font-mono">{artist.topTrack}</div>
                </div>

                {/* Engagement Actions */}
                <div className="flex gap-4 border-t border-white/10 pt-6">
                  <Button variant="primary" className="flex-1">
                    BOOST ARTIST
                  </Button>
                  <Button variant="outline" className="flex-1">
                    VIEW ANALYTICS
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
