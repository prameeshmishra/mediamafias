"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "Contact Page", ...data }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-red-accent selection:text-white">
      <Header />
      
      <section className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="font-display text-6xl md:text-8xl tracking-widest uppercase text-white leading-none">
              Initiate <br /> <span className="text-red-accent">Contact</span>
            </h1>
            
            <div className="space-y-6 pt-8">
              <div>
                <h4 className="font-display text-xl tracking-widest text-red-accent uppercase mb-2">Direct Line</h4>
                <a href="https://wa.me/919209290699" className="text-xl font-sans hover:text-red-accent transition-colors">+91 9209290699</a>
              </div>
              
              <div>
                <h4 className="font-display text-xl tracking-widest text-red-accent uppercase mb-2">Electronic Mail</h4>
                <a href="mailto:cartel@mediamafias.com" className="text-xl font-sans hover:text-red-accent transition-colors">cartel@mediamafias.com</a>
              </div>

              <div>
                <h4 className="font-display text-xl tracking-widest text-red-accent uppercase mb-2">Platform</h4>
                <a href="https://thefutureradio.com" className="text-xl font-sans hover:text-red-accent transition-colors" target="_blank" rel="noopener noreferrer">thefutureradio.com</a>
              </div>
            </div>

            <div className="bg-neutral-950 border border-white/10 p-8 mt-12">
              <h2 className="font-display text-2xl tracking-widest uppercase mb-4 text-white border-b border-white/10 pb-4">Legal Disclaimer</h2>
              <div className="space-y-4 text-sm text-secondary font-sans leading-relaxed">
                <p>
                  Media Mafias is an independent collective. All content, broadcasts, and proprietary technologies are intellectual property of Media Mafias.
                </p>
                <p>
                  By accessing this platform, you agree to our terms of transmission. Privacy is paramount. We do not sell data to third-party brokers.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-neutral-950 border border-white/10 p-8 shadow-2xl relative min-h-[500px] flex flex-col justify-center"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-red-accent" />
            
            {status === "success" ? (
              <div className="text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full border-2 border-red-accent flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-accent text-2xl font-bold">✓</span>
                </div>
                <h4 className="font-display text-3xl tracking-widest uppercase text-white">Transmission Sent</h4>
                <p className="text-secondary font-sans text-sm">We have received your message.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-secondary uppercase tracking-widest">Name / Alias</label>
                  <Input name="name" required placeholder="Enter name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-secondary uppercase tracking-widest">Contact Email</label>
                  <Input name="email" required type="email" placeholder="hello@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-secondary uppercase tracking-widest">Subject</label>
                  <Input name="subject" required placeholder="Nature of inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-secondary uppercase tracking-widest">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    className="flex w-full rounded-sm border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-accent resize-none"
                    placeholder="Enter transmission..."
                  />
                </div>
                
                {status === "error" && (
                  <p className="text-red-accent text-xs tracking-widest uppercase">Transmission failed. Try again.</p>
                )}

                <Button type="submit" disabled={status === "submitting"} className="w-full font-display text-xl tracking-widest pt-1">
                  {status === "submitting" ? "Transmitting..." : "Send Transmission"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
