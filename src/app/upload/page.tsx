"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function UploadPage() {
  const [step, setStep] = React.useState(1);
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-red-accent selection:text-white">
      <Header />
      
      <section className="flex-1 pt-32 pb-24 px-6 flex flex-col items-center">
        <div className="max-w-3xl w-full">
          
          {/* Progress Indicator */}
          <div className="flex gap-4 mb-12">
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={`h-2 flex-1 transition-colors duration-500 ${step >= s ? "bg-red-accent" : "bg-white/10"}`} 
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-neutral-950 border border-white/10 p-12 text-center relative overflow-hidden"
              >
                <h2 className="font-display text-4xl uppercase tracking-widest mb-4">Step 1: Upload Raw Audio</h2>
                <p className="text-secondary font-mono mb-8">Drop your uncompressed WAV/FLAC files here.</p>
                
                <div className="border-2 border-dashed border-white/20 hover:border-red-accent/50 transition-colors p-16 flex flex-col items-center cursor-pointer group bg-black/50">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-secondary group-hover:text-red-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <span className="font-mono text-secondary uppercase tracking-widest text-sm">Select Files to Upload</span>
                </div>

                <div className="mt-8 text-right">
                  <Button variant="primary" onClick={() => setStep(2)}>NEXT STEP</Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-neutral-950 border border-white/10 p-12"
              >
                <h2 className="font-display text-4xl uppercase tracking-widest mb-8 text-center">Step 2: Track Metadata</h2>
                
                <div className="space-y-6 max-w-xl mx-auto">
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest uppercase text-secondary mb-2">Track Title</label>
                    <input type="text" className="w-full bg-black border border-white/20 p-4 text-white focus:border-red-accent outline-none font-mono" placeholder="Enter track title..." />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest uppercase text-secondary mb-2">Primary Dialect</label>
                      <select className="w-full bg-black border border-white/20 p-4 text-white focus:border-red-accent outline-none font-mono appearance-none">
                        <option>Bhojpuri</option>
                        <option>Awadhi</option>
                        <option>Bundeli</option>
                        <option>Malwi</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest uppercase text-secondary mb-2">Genre</label>
                      <select className="w-full bg-black border border-white/20 p-4 text-white focus:border-red-accent outline-none font-mono appearance-none">
                        <option>Folk</option>
                        <option>Hip-Hop</option>
                        <option>Spoken Word</option>
                        <option>Electronic</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>BACK</Button>
                  <Button variant="primary" onClick={() => setStep(3)}>CONTINUE TO LICENSING</Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-neutral-950 border border-red-accent/50 p-12 relative"
              >
                <div className="absolute top-0 right-0 p-4 bg-red-accent/10 border-l border-b border-red-accent/50 text-red-accent font-mono text-[10px] tracking-widest uppercase">
                  LEGAL DOCUMENT
                </div>

                <h2 className="font-display text-4xl uppercase tracking-widest mb-4">Step 3: Digital Clickwrap Licensing</h2>
                <p className="text-secondary font-mono mb-8 text-sm">Please review the commercial use and distribution agreement.</p>

                <div className="bg-black border border-white/10 h-64 overflow-y-auto p-6 mb-8 font-sans text-sm text-secondary/80 leading-relaxed custom-scrollbar">
                  <h3 className="text-white font-bold mb-4">Commercial Use & Distribution Rights Agreement</h3>
                  <p className="mb-4">
                    By accepting this agreement, you ("The Creator") grant Media Mafias LLC exclusive commercial distribution rights for the uploaded audio content ("The Work") across its digital pipelines, including but not limited to Future Radio, YouTube syndication, and integrated API clients.
                  </p>
                  <p className="mb-4">
                    <strong>1. Revenue Split:</strong> The Creator is entitled to a fair-share revenue split (currently set at 60% of net profits generated directly from the streams/API calls of The Work).
                  </p>
                  <p className="mb-4">
                    <strong>2. Web3 Transparency:</strong> For Phase 1, revenue splits are simulated on our internal ledger. In future phases, these splits will be automated via deployed Smart Contracts on the blockchain for immutable transparent payouts.
                  </p>
                  <p className="mb-4">
                    <strong>3. Modification Rights:</strong> Media Mafias holds the right to master, EQ, and format The Work strictly to meet high-fidelity broadcast standards, without altering the core creative integrity.
                  </p>
                </div>

                <div className="flex items-start gap-4 mb-8 border border-white/10 p-4 bg-black/50">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="mt-1 w-5 h-5 accent-red-accent"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                  />
                  <label htmlFor="terms" className="font-mono text-sm text-white cursor-pointer select-none">
                    I digitally sign and agree to the Commercial Use & Distribution Rights. I understand this action serves as a legally binding digital clickwrap agreement.
                  </label>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)}>BACK</Button>
                  <Button 
                    variant="primary" 
                    disabled={!acceptedTerms}
                    className={!acceptedTerms ? "opacity-50 cursor-not-allowed" : ""}
                    onClick={() => window.location.href = "/dashboard"}
                  >
                    SIGN & UPLOAD
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      <Footer />
    </main>
  );
}
