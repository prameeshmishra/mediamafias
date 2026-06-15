"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

type ContentFormat = "podcast" | "song" | "interview" | "spoken_word" | "";

export default function WorkspacePage() {
  const [format, setFormat] = useState<ContentFormat>("");
  
  // Dynamic parameters
  const [speed, setSpeed] = useState("Medium (1.0x)");
  const [tone, setTone] = useState("Conversational");
  const [emotion, setEmotion] = useState("Neutral");
  const [bgMusic, setBgMusic] = useState("Lo-Fi / Chill");
  
  // Music specific parameters
  const [genre, setGenre] = useState("Trap / Hip Hop");
  const [energy, setEnergy] = useState("High Energy");
  const [tempo, setTempo] = useState("120 BPM");

  const [script, setScript] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [audioResult, setAudioResult] = useState<string | null>(null);

  // Auto-generate the master prompt whenever parameters change
  useEffect(() => {
    if (!format) {
      setGeneratedPrompt("");
      return;
    }

    let prompt = `SYSTEM COMMAND: INITIALIZE MEDIA MAFIAS AI PRODUCTION ENGINE.\n\n`;
    prompt += `[ CONTENT FORMAT ]\n`;
    prompt += `Type: ${format.toUpperCase().replace("_", " ")}\n\n`;

    prompt += `[ PRODUCTION STYLING & PARAMETERS ]\n`;
    if (format === "song") {
      prompt += `- Genre: ${genre}\n`;
      prompt += `- Energy Level: ${energy}\n`;
      prompt += `- Tempo/Pace: ${tempo}\n`;
    } else {
      prompt += `- Delivery Speed: ${speed}\n`;
      prompt += `- Vocal Tone: ${tone}\n`;
      prompt += `- Emotion/Vibe: ${emotion}\n`;
      prompt += `- Background Track: ${bgMusic}\n`;
    }

    prompt += `\n[ RAW INPUT SCRIPT / LYRICS ]\n`;
    prompt += `"""\n${script || "(Awaiting content from user or AI generator...)"}\n"""\n\n`;

    prompt += `[ EXECUTION DIRECTIVE ]\n`;
    if (format === "song") {
      prompt += `Generate a fully mastered track matching the parameters above. Apply appropriate vocal tuning, mix the beat alongside the lyrics, and output a high-fidelity WAV file ready for API distribution.`;
    } else {
      prompt += `Synthesize human-like spoken audio using the specified tone and emotion. Mix in the background track '${bgMusic}' with dynamic ducking during speech. Apply broadcast-standard compression and EQ.`;
    }

    setGeneratedPrompt(prompt);
  }, [format, speed, tone, emotion, bgMusic, genre, energy, tempo, script]);

  const handleProduce = async () => {
    setIsGenerating(true);
    setAudioResult(null);
    
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: generatedPrompt, format, script })
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
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-red-accent selection:text-white">
      <Header />
      
      {/* Workspace Header */}
      <section className="pt-32 pb-8 px-6 border-b border-white/10 bg-neutral-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-2 py-1 mb-4 border border-green-500/30 bg-green-500/5 font-mono text-[10px] text-green-500 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              SESSION ACTIVE: USER_0x9A
            </div>
            <h1 className="text-3xl md:text-4xl font-black font-display tracking-tighter uppercase">
              Plan Your Content
            </h1>
            <p className="text-secondary font-mono text-sm tracking-widest uppercase mt-2">
              Configure parameters before initializing production.
            </p>
          </div>
          
          <Link href="/studio" className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-secondary hover:text-white transition-colors">
            ← EXIT LAB
          </Link>
        </div>
      </section>

      {/* Workspace Area */}
      <section className="flex-1 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Configuration */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Step 1: Format */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <span className="w-8 h-8 rounded-full bg-white text-black font-bold font-display flex items-center justify-center">1</span>
                <h2 className="text-xl font-display font-bold tracking-widest uppercase">Select Format</h2>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { id: "podcast", label: "Podcast" },
                  { id: "song", label: "Music Track" },
                  { id: "interview", label: "Interview" },
                  { id: "spoken_word", label: "Spoken Word" }
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFormat(f.id as ContentFormat)}
                    className={`p-4 border font-mono text-xs tracking-widest uppercase transition-all flex flex-col items-center justify-center text-center gap-2 h-24 ${
                      format === f.id 
                        ? "bg-red-accent/10 border-red-accent text-white" 
                        : "border-white/10 text-secondary hover:border-white/30"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Parameters (Dynamic) */}
            <div className={`space-y-6 transition-opacity duration-500 ${!format ? "opacity-30 pointer-events-none" : "opacity-100"}`}>
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <span className="w-8 h-8 rounded-full bg-white text-black font-bold font-display flex items-center justify-center">2</span>
                <h2 className="text-xl font-display font-bold tracking-widest uppercase">Styling & Vibe</h2>
              </div>

              {format === "song" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs tracking-widest uppercase text-secondary">Genre / Beat</label>
                    <select value={genre} onChange={(e) => setGenre(e.target.value)} className="w-full bg-neutral-900 border border-white/10 p-3 font-sans text-white focus:border-red-accent outline-none">
                      <option>Trap / Hip Hop</option>
                      <option>Bundeli Folk</option>
                      <option>Bhojpuri Bass</option>
                      <option>Lofi Chill</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs tracking-widest uppercase text-secondary">Energy Level</label>
                    <select value={energy} onChange={(e) => setEnergy(e.target.value)} className="w-full bg-neutral-900 border border-white/10 p-3 font-sans text-white focus:border-red-accent outline-none">
                      <option>Aggressive / High</option>
                      <option>Upbeat</option>
                      <option>Mellow / Smooth</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs tracking-widest uppercase text-secondary">Tempo (BPM)</label>
                    <select value={tempo} onChange={(e) => setTempo(e.target.value)} className="w-full bg-neutral-900 border border-white/10 p-3 font-sans text-white focus:border-red-accent outline-none">
                      <option>90 BPM (Slow)</option>
                      <option>120 BPM (Standard)</option>
                      <option>140+ BPM (Fast)</option>
                    </select>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs tracking-widest uppercase text-secondary">Pace / Speed</label>
                    <select value={speed} onChange={(e) => setSpeed(e.target.value)} className="w-full bg-neutral-900 border border-white/10 p-3 font-sans text-white focus:border-red-accent outline-none">
                      <option>Slow (0.8x)</option>
                      <option>Medium (1.0x)</option>
                      <option>Fast (1.25x)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs tracking-widest uppercase text-secondary">Vocal Tone</label>
                    <select value={tone} onChange={(e) => setTone(e.target.value)} className="w-full bg-neutral-900 border border-white/10 p-3 font-sans text-white focus:border-red-accent outline-none">
                      <option>Conversational</option>
                      <option>Professional / News</option>
                      <option>Storyteller</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs tracking-widest uppercase text-secondary">Emotion</label>
                    <select value={emotion} onChange={(e) => setEmotion(e.target.value)} className="w-full bg-neutral-900 border border-white/10 p-3 font-sans text-white focus:border-red-accent outline-none">
                      <option>Neutral</option>
                      <option>Excited</option>
                      <option>Serious / Somber</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs tracking-widest uppercase text-secondary">Background Music</label>
                    <select value={bgMusic} onChange={(e) => setBgMusic(e.target.value)} className="w-full bg-neutral-900 border border-white/10 p-3 font-sans text-white focus:border-red-accent outline-none">
                      <option>None</option>
                      <option>Lo-Fi / Chill</option>
                      <option>Tense Ambient</option>
                      <option>Upbeat Corporate</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* Step 3: Script Writing */}
            <div className={`space-y-6 transition-opacity duration-500 ${!format ? "opacity-30 pointer-events-none" : "opacity-100"}`}>
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <span className="w-8 h-8 rounded-full bg-white text-black font-bold font-display flex items-center justify-center">3</span>
                <h2 className="text-xl font-display font-bold tracking-widest uppercase">Content Script</h2>
              </div>
              
              <div className="bg-neutral-900 border border-white/10 focus-within:border-red-accent transition-colors">
                <div className="flex items-center justify-between border-b border-white/10 p-2 bg-black/50">
                  <div className="flex gap-2">
                    <button className="px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-secondary hover:text-white hover:bg-white/5 transition-colors">
                      + GENERATE SCRIPT VIA AI
                    </button>
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-secondary uppercase">
                    {script.length} CHARS
                  </span>
                </div>
                <textarea 
                  value={script}
                  onChange={(e) => setScript(e.target.value)}
                  placeholder={`Write your ${format === 'song' ? 'lyrics' : 'script'} here... or use the AI generator above.`}
                  className="w-full h-48 bg-transparent p-4 font-sans text-white resize-none outline-none"
                />
              </div>
            </div>

          </div>

          {/* Right Column: AI Production Output */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 space-y-6 bg-neutral-900/50 p-6 border border-red-accent/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-red-accent animate-pulse"></span>
                <h3 className="font-mono text-xs tracking-widest uppercase text-red-accent">Final Production Prompt</h3>
              </div>

              <div className="bg-black border border-white/10 p-4 relative font-mono text-[10px] sm:text-xs leading-relaxed text-green-400 overflow-hidden h-96 overflow-y-auto custom-scrollbar">
                {!format ? (
                  <span className="text-secondary opacity-50">Please select a format to begin compiling the master prompt...</span>
                ) : (
                  <pre className="whitespace-pre-wrap font-mono">{generatedPrompt}</pre>
                )}
                
                {/* Glitch Overlay Effect during generation */}
                {isGenerating && (
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center border border-red-accent">
                    <div className="w-12 h-12 border-4 border-t-red-accent border-r-red-accent border-b-transparent border-l-transparent rounded-full animate-spin mb-4"></div>
                    <span className="font-mono text-red-accent tracking-widest animate-pulse">EXECUTING AI ENGINE...</span>
                  </div>
                )}
              </div>

              <button 
                onClick={handleProduce}
                disabled={!format || isGenerating}
                className="w-full py-4 bg-red-accent text-white font-display font-bold tracking-widest uppercase hover:bg-white hover:text-red-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  {isGenerating ? "INITIALIZING AI ENGINE..." : "PRODUCE CONTENT"}
                </span>
              </button>
              
              {audioResult && (
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 text-center animate-in fade-in zoom-in duration-300">
                  <p className="font-mono text-xs text-green-500 uppercase tracking-widest mb-4">PRODUCTION COMPLETE. LISTEN BELOW:</p>
                  
                  {/* Main Voice Audio */}
                  <audio 
                    controls 
                    src={audioResult} 
                    className="w-full h-10 outline-none" 
                    onPlay={() => {
                      const bgPlayer = document.getElementById("bg-audio-player") as HTMLAudioElement;
                      if (bgPlayer && bgMusic !== "None") {
                        bgPlayer.volume = 0.15; // Set background volume low (ducking effect)
                        bgPlayer.play().catch(e => console.error("BG Auto-play prevented", e));
                      }
                    }}
                    onPause={() => {
                      const bgPlayer = document.getElementById("bg-audio-player") as HTMLAudioElement;
                      if (bgPlayer) bgPlayer.pause();
                    }}
                    onEnded={() => {
                      const bgPlayer = document.getElementById("bg-audio-player") as HTMLAudioElement;
                      if (bgPlayer) {
                        bgPlayer.pause();
                        bgPlayer.currentTime = 0;
                      }
                    }}
                  />

                  {/* Hidden Background Music Player */}
                  {bgMusic !== "None" && format !== "song" && (
                    <audio 
                      id="bg-audio-player"
                      loop
                      src={
                        bgMusic === "Lo-Fi / Chill" ? "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" :
                        bgMusic === "Tense Ambient" ? "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" :
                        bgMusic === "Upbeat Corporate" ? "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" : ""
                      } 
                    />
                  )}

                  {bgMusic !== "None" && format !== "song" && (
                    <p className="text-[9px] font-mono text-green-500/70 mt-2 uppercase tracking-widest">
                      [ + MIXED WITH {bgMusic.toUpperCase()} BG TRACK ]
                    </p>
                  )}
                </div>
              )}
              
              <p className="text-center font-mono text-[10px] tracking-widest uppercase text-secondary mt-4">
                By producing, you agree to our Content License Agreement.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
