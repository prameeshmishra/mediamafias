"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function AcademyDashboard() {
  const [activeTab, setActiveTab] = useState<"tutorials" | "projects">("tutorials");
  const [category, setCategory] = useState("");
  const [projectsUploaded, setProjectsUploaded] = useState(0);

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category) {
      alert("Please select your creator category first.");
      return;
    }
    if (projectsUploaded < 3) {
      setProjectsUploaded((prev) => prev + 1);
      alert(`Project ${projectsUploaded + 1} uploaded successfully for review.`);
    }
  };

  const handleClaimCertificate = () => {
    alert(`Generating Official Media Mafias Academy Certificate for: ${category.toUpperCase()}... Download Started.`);
  };

  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-[#E6B981] selection:text-black">
      <Header />
      
      {/* Dashboard Header */}
      <section className="pt-32 pb-12 px-6 border-b border-white/10 bg-neutral-950">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2 py-1 mb-4 border border-[#E6B981]/30 bg-[#E6B981]/5 font-mono text-[10px] text-[#E6B981] tracking-widest uppercase">
              ACADEMY ENROLLMENT ACTIVE
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-display tracking-widest uppercase">
              Creator Dashboard
            </h1>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setActiveTab("tutorials")}
              className={`px-6 py-2 border font-mono text-xs tracking-widest uppercase transition-colors ${activeTab === "tutorials" ? "bg-[#E6B981] text-black border-[#E6B981]" : "border-white/20 text-secondary hover:text-white"}`}
            >
              Tutorials
            </button>
            <button 
              onClick={() => setActiveTab("projects")}
              className={`px-6 py-2 border font-mono text-xs tracking-widest uppercase transition-colors ${activeTab === "projects" ? "bg-[#E6B981] text-black border-[#E6B981]" : "border-white/20 text-secondary hover:text-white relative"}`}
            >
              Projects & Certification
              {projectsUploaded === 3 && <span className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>}
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="flex-1 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          
          {activeTab === "tutorials" && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                <h2 className="text-2xl font-display font-bold uppercase tracking-widest mb-2">Production Masterclass</h2>
                <p className="text-secondary font-mono text-sm">Learn how to use the Media Mafias tools to scale your content.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Using the AI Studio Workspace", duration: "12:45" },
                  { title: "Prompt Engineering for Podcasts", duration: "08:20" },
                  { title: "Generating Beats & Music", duration: "15:30" },
                  { title: "Mastering Vernacular Dialects", duration: "10:15" },
                  { title: "The Distribution Pipeline Explained", duration: "06:50" },
                  { title: "Monetization & Royalties 101", duration: "14:00" },
                ].map((vid, i) => (
                  <div key={i} className="group border border-white/10 bg-neutral-900 overflow-hidden hover:border-[#E6B981]/50 transition-colors">
                    {/* Simulated YouTube Embed */}
                    <div className="w-full aspect-video bg-black relative flex items-center justify-center border-b border-white/10 group-hover:bg-[#E6B981]/5 transition-colors">
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                      <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="w-4 h-4 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                      <span className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-[10px] font-mono">{vid.duration}</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display uppercase tracking-widest text-sm mb-1">{vid.title}</h3>
                      <p className="text-xs font-mono text-secondary">Module {i+1}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Submission Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-display font-bold uppercase tracking-widest mb-2">Submit Your Projects</h2>
                  <p className="text-secondary font-mono text-sm">Upload 3 finalized projects using our tools to qualify for your official certificate.</p>
                </div>

                <form onSubmit={handleUpload} className="bg-neutral-900 border border-white/10 p-8 space-y-6">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] text-[#E6B981] tracking-widest uppercase">Select Your Certification Path</label>
                    <select 
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      disabled={projectsUploaded > 0}
                      className="w-full bg-black border border-white/20 p-4 text-white font-sans focus:outline-none focus:border-[#E6B981] transition-all disabled:opacity-50"
                    >
                      <option value="" disabled>Choose your primary category...</option>
                      <option value="Segment Creator">Segment Creator</option>
                      <option value="Podcast Creator">Podcast Creator</option>
                      <option value="Local Event Reporting">Local Event Reporting</option>
                      <option value="Music Creator">Music Creator</option>
                    </select>
                    {projectsUploaded > 0 && <p className="text-[10px] text-yellow-500 font-mono">Category locked after first submission.</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-[10px] text-[#E6B981] tracking-widest uppercase">Upload Final Audio File (.wav, .mp3)</label>
                    <div className="border-2 border-dashed border-white/20 hover:border-[#E6B981] transition-colors p-8 text-center bg-black cursor-pointer">
                      <svg className="w-8 h-8 text-secondary mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="font-mono text-xs text-secondary">Click or drag file to upload</p>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={projectsUploaded >= 3}
                    className="w-full py-4 bg-white text-black font-display font-bold tracking-widest uppercase hover:bg-[#E6B981] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {projectsUploaded >= 3 ? "ALL PROJECTS SUBMITTED" : "SUBMIT FOR REVIEW"}
                  </button>
                </form>
              </div>

              {/* Status / Certificate Area */}
              <div className="bg-black border border-[#E6B981]/20 p-8 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6B981]/5 rounded-full blur-[80px] pointer-events-none"></div>
                
                <h3 className="font-display text-3xl uppercase tracking-widest text-[#E6B981] mb-8 text-center">Certification Status</h3>
                
                <div className="flex justify-between items-center mb-12 relative px-4">
                  <div className="absolute top-1/2 left-8 right-8 h-1 bg-white/10 -translate-y-1/2 z-0"></div>
                  <div className="absolute top-1/2 left-8 h-1 bg-[#E6B981] -translate-y-1/2 z-0 transition-all duration-1000" style={{ width: `${(projectsUploaded / 3) * 100}%`, maxWidth: 'calc(100% - 4rem)' }}></div>
                  
                  {[1, 2, 3].map((step) => (
                    <div key={step} className={`w-12 h-12 rounded-full flex items-center justify-center font-display text-xl z-10 transition-colors duration-500 ${projectsUploaded >= step ? "bg-[#E6B981] text-black shadow-[0_0_20px_rgba(230,185,129,0.5)]" : "bg-neutral-900 border-2 border-white/20 text-secondary"}`}>
                      {projectsUploaded >= step ? "✓" : step}
                    </div>
                  ))}
                </div>

                {projectsUploaded < 3 ? (
                  <div className="text-center p-6 border border-white/10 bg-neutral-900/50">
                    <svg className="w-12 h-12 text-secondary/50 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <p className="font-mono text-sm text-secondary uppercase tracking-widest">
                      Submit {3 - projectsUploaded} more project{3 - projectsUploaded > 1 ? "s" : ""} to unlock certificate.
                    </p>
                  </div>
                ) : (
                  <div className="text-center p-8 border border-[#E6B981] bg-[#E6B981]/10">
                    <div className="w-16 h-16 rounded-full bg-[#E6B981] flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(230,185,129,0.5)]">
                      <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-display text-xl uppercase tracking-widest text-white mb-2">Requirements Met!</h4>
                    <p className="font-mono text-xs text-[#E6B981] mb-6">Certified {category}</p>
                    
                    <button 
                      onClick={handleClaimCertificate}
                      className="px-8 py-4 bg-gradient-to-r from-[#C49A5A] via-[#E6B981] to-[#C49A5A] text-black font-display tracking-widest uppercase hover:scale-105 transition-transform"
                    >
                      CLAIM DIGITAL CERTIFICATE
                    </button>
                  </div>
                )}

              </div>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}
