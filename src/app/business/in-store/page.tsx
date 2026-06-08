"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const TIERS = [
  {
    name: "BASIC PROTOCOL",
    price: "5,000",
    description: "Essential broadcasting tools for small retail spaces.",
    color: "bg-white text-black",
    features: [
      "Future Radio Branding (Co-branded)",
      "Basic AI Voice Announcements",
      "Standard Royalty-Free Music Library",
      "Web-only Player Access",
      "Standard Tech Support"
    ]
  },
  {
    name: "BRANDED HUB",
    price: "10,000",
    description: "Fully white-labeled radio for serious brand presence.",
    color: "bg-red-accent text-white",
    features: [
      "100% Personalized Branded Station",
      "Custom Station IDs & Sweepers",
      "Advanced AI Voice Prompts",
      "Custom Music Scheduling & Rules",
      "Priority Email Support"
    ],
    popular: true
  },
  {
    name: "INDIE DOMINANCE",
    price: "15,000",
    description: "Premium indie music and human-crafted production.",
    color: "bg-neutral-800 text-white border border-white/20",
    features: [
      "Everything in Branded Hub",
      "Exclusive Indie Music Catalog",
      "Professional Human Promo Production",
      "Monthly Voiceover Credits",
      "Priority Cloud Server Routing"
    ]
  },
  {
    name: "ENTERPRISE CARTEL",
    price: "21,999",
    description: "Multi-location synchronization and ultimate control.",
    color: "bg-black text-red-accent border-2 border-red-accent shadow-[8px_8px_0px_0px_rgba(192,57,43,1)]",
    features: [
      "Everything in Indie Dominance",
      "Multi-Location Sync (Up to 5 Branches)",
      "Custom Dialect AI Voices",
      "Full API & Hardware Setup Support",
      "Dedicated Account Manager"
    ]
  }
];

export default function InStorePage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-red-accent selection:text-white">
      <Header />
      
      <section className="pt-32 pb-24 px-6 min-h-[80vh] relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex items-center gap-4 mb-8">
            <a href="/business" className="bg-red-accent text-white p-3 brutalist-border hover:bg-white hover:text-black transition-colors cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </a>
            <h1 className="font-display text-4xl md:text-6xl uppercase tracking-widest text-white hover-glitch" data-text="IN-STORE RADIO">
              IN-STORE RADIO
            </h1>
          </div>

          <div className="mb-16 border-l-4 border-red-accent pl-6 max-w-3xl">
            <p className="font-mono text-xl md:text-2xl font-bold uppercase tracking-widest text-white">
              CONTROL THE VIBE OF YOUR RETAIL EMPIRE.
            </p>
            <p className="font-sans text-secondary mt-4 leading-relaxed">
              Communicate and engage with your in-store or in-house audience. Promote offers, run real-time AI announcements, and broadcast professional promos directly to your customers. Choose your deployment tier below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIERS.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`brutalist-border p-8 flex flex-col relative ${tier.color} ${!tier.color.includes('border') ? 'border border-transparent' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-black text-white px-3 py-1 font-mono text-[10px] uppercase tracking-widest border-b border-l border-white/20">
                    Most Selected
                  </div>
                )}
                <h3 className="font-display text-2xl uppercase tracking-widest mb-2">{tier.name}</h3>
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-80 mb-6 min-h-[30px]">
                  {tier.description}
                </p>
                <div className="mb-8 flex items-baseline">
                  <span className="font-sans text-3xl font-bold mr-1">₹</span>
                  <span className="font-display text-5xl">{tier.price}</span>
                  <span className="font-mono text-xs opacity-80 uppercase tracking-widest ml-2">/ month</span>
                </div>
                
                <div className="flex-grow">
                  <div className="font-mono text-[10px] uppercase tracking-widest mb-4 opacity-80 border-b border-current pb-2">
                    Included Protocol:
                  </div>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={16} className="mt-0.5 shrink-0" />
                        <span className="font-sans text-sm font-medium leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className={`w-full mt-auto border-2 rounded-none font-mono tracking-widest transition-all ${
                    tier.name === 'BRANDED HUB' 
                      ? 'bg-black text-white hover:bg-white hover:text-black border-black' 
                      : tier.name === 'BASIC PROTOCOL'
                        ? 'bg-transparent text-black border-black hover:bg-black hover:text-white'
                        : tier.name === 'INDIE DOMINANCE'
                          ? 'bg-transparent text-white border-white hover:bg-white hover:text-black'
                          : 'bg-transparent text-red-accent border-red-accent hover:bg-red-accent hover:text-black'
                  }`}
                  onClick={() => window.location.href = '/contact'}
                >
                  INITIALIZE {tier.name}
                </Button>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
