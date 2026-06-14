"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function RemasterWorkspace() {
  const [file, setFile] = useState<File | null>(null);
  const [enhancements, setEnhancements] = useState({
    vocalIsolation: false,
    autoMastering: false,
    newBackground: false,
    sfxOverlay: false,
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [audioResult, setAudioResult] = useState<string | null>(null);

  const handleToggle = (key: keyof typeof enhancements) => {
    setEnhancements(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setAudioResult(null);
    }
  };

  const handleProduce = async () => {
    if (!file) return;
    setIsGenerating(true);
    setAudioResult(null);
    
    try {
      // In a real app, we would upload the file to cloud storage here, 
      // get the URL, and send it to our API.
      // For this prototype, we simulate the enhancement process.
      
      const generatedPrompt = `SYSTEM COMMAND: REMASTER EXISTING AUDIO.
[ TARGET FILE ]
File Name: ${file.name}
File Size: ${(file.size / 1024 / 1024).toFixed(2)} MB

[ ENHANCEMENT DIRECTIVES ]
- Vocal Isolation & Cleanup: ${enhancements.vocalIsolation ? "ENABLED" : "DISABLED"}
- Auto-Mastering (Loudness/EQ): ${enhancements.autoMastering ? "ENABLED" : "DISABLED"}
- Apply New Background Score: ${enhancements.newBackground ? "ENABLED" : "DISABLED"}
- SFX / Ambience Overlay: ${enhancements.sfxOverlay ? "ENABLED" : "DISABLED"}
`;

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: generatedPrompt, format: "remaster" })
      });
      
      const data = await response.json();
      
      if (data.success && data.audioUrl) {
        setAudioResult(data.audioUrl);
      } else {
        alert("Generation failed: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error(error);
      alert("Failed to reach API");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-red-accent selection:text-white overflow-hidden">
      <Header />

      <div className="flex-1 flex flex-col lg:flex-row pt-20 border-b border-white/10">
        
        {/* Left Panel: Configuration */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 border-r border-white/10 bg-neutral-950 flex flex-col justify-between">
          
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-blue-500/30 bg-blue-500/5 font-mono text-[10px] text-blue-500 tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                REMASTER MODE ACTIVE
              </div>
              <h1 className="text-4xl lg:text-5xl font-black font-display tracking-widest uppercase leading-tight">
                Enhance. <br /> Reimagine.
              </h1>
              <p className="text-secondary font-mono text-sm mt-4">
                Upload your raw, pre-recorded audio and let our AI engine clean, master, and reimagine the production value instantly.
              </p>
            </div>

            {/* Step 1: Upload */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl uppercase tracking-widest text-white">Step 1: Raw Audio</h3>
                <span className="font-mono text-[10px] text-blue-500 tracking-widest uppercase">WAV/MP3 MAX 50MB</span>
              </div>
              
              <label className="border-2 border-dashed border-white/20 hover:border-blue-500 transition-colors p-8 text-center bg-black cursor-pointer flex flex-col items-center justify-center group relative">
                <input type="file" accept="audio/*" onChange={handleFileChange} className="hidden" />
                <svg className="w-8 h-8 text-secondary group-hover:text-blue-500 transition-colors mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                {file ? (
                  <div className="text-blue-500 font-mono text-sm">{file.name}</div>
                ) : (
                  <p className="font-mono text-xs text-secondary tracking-widest uppercase">Click to select raw track</p>
                )}
              </label>
            </div>

            {/* Step 2: Enhancements */}
            <div className="space-y-4">
              <h3 className="font-display text-xl uppercase tracking-widest text-white">Step 2: AI Directives</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => handleToggle('vocalIsolation')}
                  className={`p-4 border text-left transition-all ${enhancements.vocalIsolation ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 bg-black hover:border-white/30'}`}
                >
                  <div className={`font-display uppercase tracking-widest text-sm mb-1 ${enhancements.vocalIsolation ? 'text-blue-500' : 'text-white'}`}>Vocal Cleanup</div>
                  <div className="font-mono text-[10px] text-secondary uppercase tracking-widest">Remove Noise & Echo</div>
                </button>

                <button 
                  onClick={() => handleToggle('autoMastering')}
                  className={`p-4 border text-left transition-all ${enhancements.autoMastering ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 bg-black hover:border-white/30'}`}
                >
                  <div className={`font-display uppercase tracking-widest text-sm mb-1 ${enhancements.autoMastering ? 'text-blue-500' : 'text-white'}`}>Auto-Master</div>
                  <div className="font-mono text-[10px] text-secondary uppercase tracking-widest">Industry Standard LUFS</div>
                </button>

                <button 
                  onClick={() => handleToggle('newBackground')}
                  className={`p-4 border text-left transition-all ${enhancements.newBackground ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 bg-black hover:border-white/30'}`}
                >
                  <div className={`font-display uppercase tracking-widest text-sm mb-1 ${enhancements.newBackground ? 'text-blue-500' : 'text-white'}`}>New Background Score</div>
                  <div className="font-mono text-[10px] text-secondary uppercase tracking-widest">AI Generated Music Bed</div>
                </button>

                <button 
                  onClick={() => handleToggle('sfxOverlay')}
                  className={`p-4 border text-left transition-all ${enhancements.sfxOverlay ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 bg-black hover:border-white/30'}`}
                >
                  <div className={`font-display uppercase tracking-widest text-sm mb-1 ${enhancements.sfxOverlay ? 'text-blue-500' : 'text-white'}`}>SFX Overlay</div>
                  <div className="font-mono text-[10px] text-secondary uppercase tracking-widest">Add Ambience & Risers</div>
                </button>
              </div>
            </div>

          </div>

          <Link href="/studio" className="font-mono text-xs text-secondary hover:text-white uppercase tracking-widest inline-flex items-center gap-2 mt-12">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Abort & Return
          </Link>
        </div>

        {/* Right Panel: Execution */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 relative flex flex-col justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,rgba(0,0,0,1)_70%)] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-md mx-auto w-full">
            
            <div className="bg-neutral-900 border border-blue-500/20 p-6 shadow-2xl shadow-blue-500/10 mb-8 font-mono text-xs text-blue-500/80 leading-relaxed min-h-[200px]">
              <div className="text-white mb-2">SYSTEM COMMAND: REMASTER_INIT</div>
              {file ? (
                <>
                  <div>[ TARGET FILE ]</div>
                  <div>Name: {file.name}</div>
                  <div>Size: {(file.size / 1024 / 1024).toFixed(2)} MB</div>
                  <br />
                  <div>[ ENHANCEMENT DIRECTIVES ]</div>
                  <div>- Vocal Cleanup: {enhancements.vocalIsolation ? "YES" : "NO"}</div>
                  <div>- Auto-Mastering: {enhancements.autoMastering ? "YES" : "NO"}</div>
                  <div>- New Background: {enhancements.newBackground ? "YES" : "NO"}</div>
                  <div>- SFX Overlay: {enhancements.sfxOverlay ? "YES" : "NO"}</div>
                  <div className="mt-4 animate-pulse">Awaiting Execution Command...</div>
                </>
              ) : (
                <div className="animate-pulse">Awaiting Source File...</div>
              )}
            </div>

            <button 
              onClick={handleProduce}
              disabled={!file || isGenerating}
              className="w-full py-5 bg-blue-600 text-white font-display font-bold text-xl tracking-widest uppercase hover:bg-white hover:text-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)]"
            >
              {isGenerating ? "REMASTERING AUDIO..." : "EXECUTE REMASTER"}
            </button>
            
            {audioResult && (
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 text-center animate-in fade-in zoom-in duration-300">
                <p className="font-mono text-xs text-green-500 uppercase tracking-widest mb-4">REMASTER COMPLETE. LISTEN BELOW:</p>
                <audio controls src={audioResult} className="w-full h-10 outline-none" />
              </div>
            )}
            
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
