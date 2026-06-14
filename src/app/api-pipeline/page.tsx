"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function ApiPipelinePage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-red-accent selection:text-white">
      <Header />
      
      <section className="pt-40 pb-20 px-6 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 border border-red-accent/30 bg-red-accent/5 px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-red-accent rounded-full animate-pulse" />
              <span className="text-red-accent font-mono text-sm tracking-widest uppercase">
                B2B Services
              </span>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl tracking-widest uppercase text-white leading-[0.9]">
              CONTENT <span className="text-red-accent">API</span> PIPELINE
            </h1>
            <p className="mt-8 text-xl text-secondary font-mono max-w-2xl leading-relaxed border-l-4 border-red-accent pl-6">
              Programmatic access to the largest decentralized vernacular audio library in the world. Directly integrate our creator-generated content into your platform.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="font-display text-4xl uppercase tracking-widest">Integrate with 3 Lines of Code</h2>
            <div className="bg-black border border-white/10 p-6 font-mono text-sm text-green-400 overflow-x-auto">
              <pre>
{`import { MediaMafiasClient } from '@mafiaos/sdk';

const client = new MediaMafiasClient({ apiKey: 'YOUR_KEY' });
const tracks = await client.getTracks({ dialect: 'Bhojpuri' });`}
              </pre>
            </div>
            <p className="text-secondary font-mono leading-relaxed">
              We provide robust GraphQL and REST APIs. Access high-fidelity WAVs, metadata, and automated licensing clearance programmatically.
            </p>
            <Button variant="primary">REQUEST API KEY</Button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { title: "Real-time Syndication", desc: "Instantly fetch the latest tracks uploaded by our elite syndicates." },
              { title: "Automated Royalty Splits", desc: "Every time your users stream our content, our backend handles the royalty distribution to creators automatically." },
              { title: "Verified Metadata", desc: "Rich tags including mood, dialect, and AI-verified broadcast quality metrics." }
            ].map((feature, i) => (
              <div key={i} className="border border-white/10 p-6 bg-black hover:border-red-accent/50 transition-colors">
                <h3 className="font-display text-xl uppercase tracking-widest mb-2 text-white">{feature.title}</h3>
                <p className="font-mono text-sm text-secondary">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
