"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

const STUDIO_FEATURES = [
  {
    title: "AI Script & Lyrics Generator",
    description: "Hit a block? Let our AI generate scripts, interview questions, or song lyrics tailored to your specific dialect and genre.",
    icon: (
      <svg className="w-8 h-8 text-red-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Podcast & Spoken Content",
    description: "Record high-fidelity audio, remove background noise with one click, and arrange segments seamlessly. Perfect for any interview format.",
    icon: (
      <svg className="w-8 h-8 text-red-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "Music & Song Production",
    description: "A full cloud-based DAW. Import stems, generate beats, apply vocal chains, and auto-master your tracks to industry standards.",
    icon: (
      <svg className="w-8 h-8 text-red-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    title: "Instant API Distribution",
    description: "Once your project is mixed, instantly push it to Spotify, JioSaavn, YouTube, and 40+ platforms via our Content API.",
    icon: (
      <svg className="w-8 h-8 text-red-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  }
];

export default function StudioPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-red-accent selection:text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative border-b border-white/5 overflow-hidden">
        {/* Abstract Studio Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-accent rounded-full blur-[150px] mix-blend-screen"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900 rounded-full blur-[150px] mix-blend-screen"></div>
          {/* Grid lines */}
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-red-accent/30 bg-red-accent/5 font-mono text-[10px] text-red-accent tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-red-accent animate-pulse"></span>
              [ THE UNDERGROUND LAB ]
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black font-display tracking-tighter uppercase leading-[1.1] mb-6 drop-shadow-2xl">
              Produce. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-red-500 to-red-900 drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]">
                Without Limits.
              </span>
            </h1>
            
            <p className="text-xl text-secondary max-w-xl leading-relaxed font-sans mb-8">
              Your entire production studio, running right in your browser. Whether it&apos;s a podcast interview, spoken word poetry, or a full-blown music track. Write, record, produce, and distribute from one dashboard.
            </p>
            
            <div className="flex flex-col gap-4 max-w-xl w-full">
              <Link href="/studio/remaster" className="w-full flex items-center justify-between px-8 py-5 bg-black border border-white/20 hover:border-red-accent/50 group transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-red-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="relative z-10 flex flex-col">
                  <span className="font-display font-bold text-xl tracking-widest text-white uppercase group-hover:text-red-accent transition-colors">Remaster Existing Audio</span>
                  <span className="font-mono text-xs text-secondary tracking-widest uppercase">Upload & Enhance Vocal/Music Quality</span>
                </div>
                <svg className="w-6 h-6 text-secondary group-hover:text-red-accent relative z-10 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
              </Link>

              <Link href="/studio/workspace" className="w-full flex items-center justify-between px-8 py-5 bg-red-accent border border-red-accent hover:bg-white group transition-all duration-300 relative overflow-hidden">
                <div className="relative z-10 flex flex-col">
                  <span className="font-display font-bold text-xl tracking-widest text-white uppercase group-hover:text-red-accent transition-colors">Produce From Scratch</span>
                  <span className="font-mono text-xs text-white/70 group-hover:text-red-accent/70 tracking-widest uppercase">Use AI Content Planner & Generation</span>
                </div>
                <svg className="w-6 h-6 text-white group-hover:text-red-accent relative z-10 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </Link>
            </div>
          </div>
          
          {/* Simulated DAW Interface Graphic */}
          <div className="flex-1 w-full max-w-lg hidden lg:block">
            <div className="w-full aspect-square bg-neutral-900 border border-white/10 rounded-xl p-4 shadow-2xl shadow-red-accent/10 relative flex flex-col">
              {/* Toolbar */}
              <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-auto font-mono text-[10px] tracking-widest text-secondary">MEDIA_MAFIAS_DAW_v1.0</div>
              </div>
              
              {/* Tracks */}
              <div className="flex-1 space-y-4">
                {[1, 2, 3].map((track) => (
                  <div key={track} className="w-full h-16 bg-black border border-white/5 rounded flex items-center px-4 gap-4">
                    <div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center font-mono text-xs text-secondary">T{track}</div>
                    {/* Waveform simulation */}
                    <div className="flex-1 h-8 flex items-center gap-1 opacity-50">
                      {[...Array(20)].map((_, i) => (
                        <div key={i} className="flex-1 bg-red-accent" style={{ height: `${Math.max(10, Math.random() * 100)}%` }}></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto pt-4 border-t border-white/5 flex justify-center">
                <button className="w-12 h-12 rounded-full bg-red-accent flex items-center justify-center shadow-lg shadow-red-accent/20">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-24 px-6 relative bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black font-display tracking-tighter uppercase mb-4">
              Everything You Need to Create
            </h2>
            <p className="text-secondary font-mono text-sm tracking-widest uppercase">
              No expensive software. No third-party plugins.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STUDIO_FEATURES.map((feature, i) => (
              <div key={i} className="p-8 bg-black border border-white/5 hover:border-red-accent/30 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-accent/5 rounded-bl-full translate-x-16 -translate-y-16 group-hover:bg-red-accent/10 transition-colors"></div>
                <div className="mb-6 bg-neutral-900 w-16 h-16 flex items-center justify-center border border-white/5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-bold uppercase tracking-widest mb-4">
                  {feature.title}
                </h3>
                <p className="text-secondary leading-relaxed font-sans text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing / Access */}
      <section className="py-24 px-6 relative border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-accent/10 text-red-accent mb-8">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter uppercase mb-6">
            Unlock The Studio
          </h2>
          
          <div className="bg-neutral-900/50 border border-red-accent/20 p-8 md:p-12 mt-12 max-w-2xl mx-auto backdrop-blur-sm relative overflow-hidden">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-accent"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-accent"></div>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`font-mono text-xs tracking-widest uppercase transition-colors ${!isYearly ? "text-white" : "text-secondary"}`}>Monthly</span>
              <button 
                onClick={() => setIsYearly(!isYearly)}
                className="w-14 h-6 rounded-full bg-black border border-white/20 relative flex items-center p-1 transition-colors hover:border-red-accent/50"
              >
                <div className={`w-4 h-4 rounded-full bg-red-accent transition-transform duration-300 ${isYearly ? "translate-x-8" : ""}`}></div>
              </button>
              <span className={`font-mono text-xs tracking-widest uppercase transition-colors ${isYearly ? "text-white" : "text-secondary"}`}>Yearly</span>
            </div>

            {isYearly && (
              <div className="absolute top-6 right-6 bg-green-500/10 text-green-500 border border-green-500/20 px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                Save ₹1,989 / Yr
              </div>
            )}
            
            <h3 className="text-3xl font-display font-bold uppercase tracking-widest mb-2">Media Mafias PRO</h3>
            <div className="flex items-end justify-center gap-2 mb-8 mt-6">
              <span className="text-5xl font-black">₹{isYearly ? "9,999" : "999"}</span>
              <span className="text-secondary font-mono uppercase tracking-widest">/ {isYearly ? "year" : "month"}</span>
            </div>
            
            <ul className="space-y-4 text-left max-w-sm mx-auto mb-10 font-sans text-secondary">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-red-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Unlimited Studio Projects
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-red-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                AI Script & Lyric Generation
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-red-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                50GB Cloud Stem Storage
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-red-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Direct Content API Distribution
              </li>
            </ul>
            
            <button className="w-full px-8 py-4 bg-white text-black font-mono font-bold tracking-widest uppercase hover:bg-red-accent hover:text-white transition-colors">
              Start 15-Day Free Trial
            </button>
            <p className="text-xs text-secondary/50 font-mono mt-4 uppercase tracking-widest">
              Cancel anytime. No credit card required.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
