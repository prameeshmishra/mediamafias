"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";

export default function CreatorProgramPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-[#E6B981] selection:text-black">
      <Header />
      
      {/* Grand VIP Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden flex flex-col items-center text-center border-b border-[#E6B981]/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(230,185,129,0.1)_0%,rgba(0,0,0,1)_60%)] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-5xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-3 border border-[#E6B981]/30 bg-[#E6B981]/5 px-6 py-2 shadow-[0_0_20px_rgba(230,185,129,0.1)]">
            <div className="w-2 h-2 bg-[#E6B981] rounded-full animate-pulse shadow-[0_0_10px_#E6B981]" />
            <span className="text-[#E6B981] font-mono text-sm tracking-widest uppercase">
              Exclusive Access Activated
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-[1.1] pt-4">
            YOUR CONTENT IS A <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFF1D0] via-[#E6B981] to-[#A37B45] drop-shadow-[0_0_30px_rgba(230,185,129,0.3)]">GOLDMINE</span>
          </h1>
          
          <p className="text-lg md:text-xl text-secondary font-mono max-w-3xl mx-auto leading-relaxed pt-6 border-t border-[#E6B981]/10">
            Welcome to the ultimate creator onboarding gateway. We transform raw vernacular talent into global sensations. Zero production costs. Instant worldwide distribution. 100% transparent royalties.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6">
            <a href="#apply" className="inline-block bg-gradient-to-b from-[#E6B981] to-[#C49A5A] text-black font-display text-xl md:text-2xl tracking-widest uppercase px-10 py-5 hover:scale-105 hover:shadow-[0_0_40px_rgba(230,185,129,0.4)] transition-all duration-300">
              CLAIM YOUR SPOT
            </a>
            <div className="flex items-center justify-center gap-3 text-secondary font-mono text-sm uppercase tracking-widest border border-white/10 px-8 py-5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Applications Open
            </div>
          </div>
        </motion.div>
      </section>

      {/* The VIP Perks Grid */}
      <section className="py-24 px-6 relative bg-neutral-950 border-b border-[#E6B981]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl tracking-widest uppercase text-[#E6B981] mb-4">THE MEDIA MAFIAS ADVANTAGE</h2>
            <p className="text-secondary font-mono text-sm uppercase tracking-widest">Why Our Creators Dominate The Charts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-white/5 hover:border-[#E6B981]/50 bg-black transition-all group relative overflow-hidden"
            >
              <div className="text-[#E6B981] font-display text-5xl mb-6 opacity-40 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(230,185,129,0.5)]">01</div>
              <h3 className="font-display text-xl uppercase tracking-widest text-white mb-4">Zero Cost Production</h3>
              <p className="text-secondary font-mono text-sm leading-relaxed">
                Access world-class recording equipment and elite sound engineers without spending a single rupee. Your talent is the only currency we need.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 border border-white/5 hover:border-[#E6B981]/50 bg-black transition-all group relative overflow-hidden"
            >
              <div className="text-[#E6B981] font-display text-5xl mb-6 opacity-40 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(230,185,129,0.5)]">02</div>
              <h3 className="font-display text-xl uppercase tracking-widest text-white mb-4">AI Upskilling</h3>
              <p className="text-secondary font-mono text-sm leading-relaxed">
                Master the future of music. We train you to use advanced AI tools for beat production, dynamic mastering, and rapid content scaling.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 border border-white/5 hover:border-[#E6B981]/50 bg-black transition-all group relative overflow-hidden"
            >
              <div className="text-[#E6B981] font-display text-5xl mb-6 opacity-40 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(230,185,129,0.5)]">03</div>
              <h3 className="font-display text-xl uppercase tracking-widest text-white mb-4">Global Distribution</h3>
              <p className="text-secondary font-mono text-sm leading-relaxed">
                Upload once via our pipeline and get instantly published on YouTube, Spotify, JioSaavn, Instagram, and The Future Radio network.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 border border-white/5 hover:border-[#E6B981]/50 bg-black transition-all group relative overflow-hidden"
            >
              <div className="text-[#E6B981] font-display text-5xl mb-6 opacity-40 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(230,185,129,0.5)]">04</div>
              <h3 className="font-display text-xl uppercase tracking-widest text-white mb-4">100% Transparent Royalties</h3>
              <p className="text-secondary font-mono text-sm leading-relaxed">
                No hidden fees. Every stream translates to revenue tracked transparently. You keep a fair, industry-leading share of your commercial success.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-24 px-6 relative bg-black border-b border-[#E6B981]/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-display text-4xl tracking-widest uppercase text-white mb-2">SUCCESS SIGNALS</h2>
              <p className="text-secondary font-mono text-sm uppercase tracking-widest">Real Creators. Global Reach.</p>
            </div>
            <div className="text-right text-[#E6B981] font-mono text-sm">
              OVER 50M+ MONTHLY STREAMS GENERATED
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 border border-white/10 bg-neutral-950 relative group">
              <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-100 transition-opacity">
                <svg className="w-8 h-8 text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.3 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
              </div>
              <p className="text-secondary font-sans text-lg italic mb-8">
                "I was singing Bundeli folk songs in my village. Media Mafias gave me studio access, distributed my tracks, and within months I hit 2 million streams on Spotify. My life changed completely."
              </p>
              <div>
                <h4 className="font-display text-xl uppercase tracking-widest text-white">Ramesh T.</h4>
                <p className="text-[#E6B981] font-mono text-xs uppercase tracking-widest mt-1">Bundeli Folk • Madhya Pradesh</p>
              </div>
            </div>

            <div className="p-8 border border-white/10 bg-neutral-950 relative group">
              <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-100 transition-opacity">
                <svg className="w-8 h-8 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </div>
              <p className="text-secondary font-sans text-lg italic mb-8">
                "Media Mafias API put my music directly into thousands of YouTube Shorts. The AI upskilling taught me how to master my own Bhojpuri beats. Now I'm earning royalties every month."
              </p>
              <div>
                <h4 className="font-display text-xl uppercase tracking-widest text-white">Neha K.</h4>
                <p className="text-[#E6B981] font-mono text-xs uppercase tracking-widest mt-1">Bhojpuri Bass • Bihar</p>
              </div>
            </div>

            <div className="p-8 border border-white/10 bg-neutral-950 relative group">
              <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-[#E6B981] flex items-center justify-center overflow-hidden">
                  <Image src="/player-logo.png" alt="Future Radio" width={24} height={24} className="object-contain" />
                </div>
              </div>
              <p className="text-secondary font-sans text-lg italic mb-8">
                "Getting featured on The Future Radio gave my Malwi rap the boost it needed. Media Mafias handles all the licensing and distribution so I can just focus on the bars."
              </p>
              <div>
                <h4 className="font-display text-xl uppercase tracking-widest text-white">MC Indore</h4>
                <p className="text-[#E6B981] font-mono text-xs uppercase tracking-widest mt-1">Malwi Rap • MP</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VIP Application Form Section */}
      <section className="py-24 px-6 relative bg-neutral-950" id="apply">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1D0] via-[#E6B981] to-[#A37B45] mb-4">
              VIP BACKSTAGE PASS
            </h2>
            <p className="text-secondary font-mono text-sm max-w-2xl mx-auto leading-relaxed">
              We select only the most dedicated talent. Apply below to enter the Media Mafias Creator Academy and claim your stake in the global creator economy.
            </p>
          </div>

          <form 
            className="bg-black p-8 md:p-12 border-2 border-[#E6B981]/30 shadow-[0_0_50px_rgba(230,185,129,0.05)] relative"
            onSubmit={(e) => {
              e.preventDefault();
              alert("VIP APPLICATION RECEIVED. Welcome to the Goldmine.");
            }}
          >
            {/* VIP Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#E6B981]" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#E6B981]" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#E6B981]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#E6B981]" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-[#E6B981] tracking-widest uppercase">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-neutral-900/50 border-b border-white/20 px-4 py-3 text-white font-sans focus:outline-none focus:border-[#E6B981] focus:bg-neutral-900 transition-all"
                  placeholder="Enter your legal name"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-[#E6B981] tracking-widest uppercase">Artist Alias</label>
                <input 
                  type="text" 
                  className="w-full bg-neutral-900/50 border-b border-white/20 px-4 py-3 text-white font-sans focus:outline-none focus:border-[#E6B981] focus:bg-neutral-900 transition-all"
                  placeholder="Your stage name"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[10px] text-[#E6B981] tracking-widest uppercase">Email / Transmission Comms</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-neutral-900/50 border-b border-white/20 px-4 py-3 text-white font-sans focus:outline-none focus:border-[#E6B981] focus:bg-neutral-900 transition-all"
                  placeholder="transmission@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-[#E6B981] tracking-widest uppercase">Direct Line (Phone)</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-neutral-900/50 border-b border-white/20 px-4 py-3 text-white font-sans focus:outline-none focus:border-[#E6B981] focus:bg-neutral-900 transition-all"
                  placeholder="+91"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[10px] text-[#E6B981] tracking-widest uppercase">Region & Dialect Focus</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-neutral-900/50 border-b border-white/20 px-4 py-3 text-white font-sans focus:outline-none focus:border-[#E6B981] focus:bg-neutral-900 transition-all"
                  placeholder="e.g. Bundeli, Bhojpuri, Awadhi..."
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-[#E6B981] tracking-widest uppercase">Primary Talent</label>
                <select 
                  required
                  className="w-full bg-neutral-900/50 border-b border-white/20 px-4 py-3 text-white font-sans focus:outline-none focus:border-[#E6B981] focus:bg-neutral-900 transition-all appearance-none"
                >
                  <option value="" disabled selected>Select an option</option>
                  <option value="singer">Singer / Musician</option>
                  <option value="rj">Radio Jockey / Voice Over</option>
                  <option value="producer">Music Producer / Beatmaker</option>
                  <option value="writer">Lyricist / Writer</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <label className="font-mono text-[10px] text-[#E6B981] tracking-widest uppercase">Portfolio Link (Instagram, YouTube, etc.)</label>
              <input 
                type="url" 
                className="w-full bg-neutral-900/50 border-b border-white/20 px-4 py-3 text-white font-sans focus:outline-none focus:border-[#E6B981] focus:bg-neutral-900 transition-all"
                placeholder="Paste your link here"
              />
            </div>

            <div className="space-y-2 mb-12">
              <label className="font-mono text-[10px] text-[#E6B981] tracking-widest uppercase">Your Vision</label>
              <textarea 
                required
                rows={3}
                className="w-full bg-neutral-900/50 border-b border-white/20 px-4 py-3 text-white font-sans focus:outline-none focus:border-[#E6B981] focus:bg-neutral-900 transition-all resize-none"
                placeholder="Why are you ready for the global stage?"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-[#C49A5A] via-[#E6B981] to-[#C49A5A] text-black hover:scale-[1.02] font-display text-2xl tracking-widest uppercase py-5 transition-all duration-300 shadow-[0_0_20px_rgba(230,185,129,0.3)] hover:shadow-[0_0_40px_rgba(230,185,129,0.6)]"
            >
              SUBMIT VIP APPLICATION
            </button>
            
            <p className="text-center text-[#E6B981]/50 font-mono text-[10px] uppercase tracking-widest mt-6">
              SECURE ENCRYPTED SUBMISSION
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
