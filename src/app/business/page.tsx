"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Building2, Radio, Headphones } from "lucide-react"; 

export default function BusinessPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-red-accent selection:text-white">
      <Header />
      
      <section className="pt-32 pb-24 px-6 min-h-[80vh] flex flex-col items-center relative z-10">
        <div className="w-full max-w-5xl">
          
          <div className="flex items-center gap-4 mb-12">
            <a href="/" className="bg-red-accent text-white p-3 brutalist-border hover:bg-white hover:text-black transition-colors cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </a>
            <h1 className="font-display text-4xl md:text-5xl uppercase tracking-widest bg-white text-black px-6 py-3 brutalist-border">
              BUSINESS
            </h1>
          </div>

          {/* Grid Layout matching screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Box 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white text-black p-8 brutalist-border relative group shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-red-accent text-white p-4 brutalist-border">
                  <Building2 size={32} />
                </div>
                <h2 className="font-display text-2xl md:text-3xl uppercase leading-none pt-2">
                  IN-STORE /<br/>IN-HOUSE RADIOS
                </h2>
              </div>
              <p className="font-mono text-sm leading-relaxed mb-8 font-medium">
                Communicate and engage with your in-store or in-house audience. Promote offers and announcements in real-time just by a simple prompt.
              </p>
              <div className="border-l-4 border-red-accent pl-4">
                <p className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                  PUT YOUR PROMPT, SELECT THE VOICE, DRAG AND DROP. IT'S THAT EASY.
                </p>
              </div>
            </motion.div>

            {/* Box 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white text-black p-8 brutalist-border relative group shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-4 brutalist-border">
                  <Radio size={32} />
                </div>
                <h2 className="font-display text-2xl md:text-3xl uppercase leading-none pt-2">
                  RADIO 3.0<br/>TECHNOLOGY SAAS
                </h2>
              </div>
              <p className="font-mono text-sm leading-relaxed mb-8 font-medium">
                Run multiple radio stations on one common platform. Front-end, backend, programming, and production setup—everything is entirely virtual.
              </p>
              <div className="border-l-4 border-black pl-4">
                <p className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                  FOCUS ON BUSINESS GROWTH AND PR, WE HANDLE THE TECH.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Full Width Box 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white text-black p-8 brutalist-border relative group shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="border-4 border-black p-2">
                <Headphones size={28} strokeWidth={2.5} />
              </div>
              <h2 className="font-display text-2xl md:text-3xl uppercase">
                FUTURE RADIO
              </h2>
            </div>
            <p className="font-mono text-sm leading-relaxed max-w-3xl font-medium">
              Our flagship consumer-facing audio streaming platform. A decentralized global hub empowering independent artists, driven by predictive curation and unfiltered human emotion.
            </p>
          </motion.div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}
