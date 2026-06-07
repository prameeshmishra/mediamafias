"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { Crosshair, Lock, Database } from "lucide-react";

// Official-aligned GeoJSON that includes full Jammu & Kashmir (POK)
const geoUrl = "https://raw.githubusercontent.com/HindustanTimesLabs/shapefiles/master/india/state_ut/india_state.json";

// Shared Map Data
const dialectMarkers = [
  // MACRO (Broad State-Level Zones)
  { coordinates: [78.0, 25.0] as [number, number], name: "Hindi (Belt)", speakers: "300M+", engagement: "65", type: "HUB", networkStatus: "CLAIMED", color: "#C0392B", spread: { rx: 120, ry: 80, rotate: -10 } },
  { coordinates: [74.0, 19.0] as [number, number], name: "Marathi (Belt)", speakers: "83M+", engagement: "60", type: "HUB", networkStatus: "CLAIMED", color: "#D35400", spread: { rx: 80, ry: 60, rotate: 10 } },
  { coordinates: [88.3, 22.5] as [number, number], name: "Bengali (Belt)", speakers: "97M+", engagement: "62", type: "HUB", networkStatus: "CLAIMED", color: "#8E44AD", spread: { rx: 50, ry: 60, rotate: -15 } },
  { coordinates: [75.5, 30.5] as [number, number], name: "Punjabi (Belt)", speakers: "33M+", engagement: "75", type: "HUB", networkStatus: "DEPLOYABLE", color: "#3498DB", spread: { rx: 40, ry: 30, rotate: -20 } },
  { coordinates: [71.5, 23.0] as [number, number], name: "Gujarati (Belt)", speakers: "55M+", engagement: "70", type: "HUB", networkStatus: "DEPLOYABLE", color: "#16A085", spread: { rx: 60, ry: 50, rotate: -15 } },
  { coordinates: [84.5, 20.5] as [number, number], name: "Odia (Belt)", speakers: "35M+", engagement: "65", type: "HUB", networkStatus: "DEPLOYABLE", color: "#27AE60", spread: { rx: 50, ry: 40, rotate: 0 } },
  { coordinates: [82.0, 21.0] as [number, number], name: "Chhattisgarhi (Belt)", speakers: "16M+", engagement: "68", type: "HUB", networkStatus: "DEPLOYABLE", color: "#9B59B6", spread: { rx: 40, ry: 50, rotate: 10 } },
  { coordinates: [76.0, 29.0] as [number, number], name: "Haryanvi (Belt)", speakers: "10M+", engagement: "72", type: "HUB", networkStatus: "DEPLOYABLE", color: "#F39C12", spread: { rx: 30, ry: 25, rotate: -10 } },
  
  // MICRO (The Distinct Linguistic Painted Zones > 1M Speakers)
  { coordinates: [81.5, 24.5] as [number, number], name: "Bagheli", speakers: "8M+", engagement: "97", type: "NODE", networkStatus: "CRITICAL", color: "#9B59B6", spread: { rx: 25, ry: 15, rotate: 20 }, secondaryDialects: [{ name: "Rewa Core", speakers: "3M+" }] },
  { coordinates: [83.1, 25.6] as [number, number], name: "Bhojpuri", speakers: "50M+", engagement: "96", type: "NODE", networkStatus: "DEPLOYABLE", color: "#F39C12", spread: { rx: 35, ry: 25, rotate: -10 } },
  { coordinates: [75.5, 26.5] as [number, number], name: "Marwari", speakers: "8M+", engagement: "92", type: "NODE", networkStatus: "DEPLOYABLE", color: "#F1C40F", spread: { rx: 40, ry: 25, rotate: 15 }, secondaryDialects: [{ name: "Mewari Overlap", speakers: "2.1M+" }] },
  { coordinates: [76.0, 23.5] as [number, number], name: "Malwi", speakers: "5M+", engagement: "94", type: "NODE", networkStatus: "CRITICAL", color: "#16A085", spread: { rx: 25, ry: 20, rotate: -5 } },
  { coordinates: [79.5, 24.5] as [number, number], name: "Bundeli", speakers: "6M+", engagement: "95", type: "NODE", networkStatus: "CRITICAL", color: "#E67E22", spread: { rx: 30, ry: 20, rotate: 10 } },
  { coordinates: [81.5, 26.5] as [number, number], name: "Awadhi", speakers: "40M+", engagement: "93", type: "NODE", networkStatus: "DEPLOYABLE", color: "#2ECC71", spread: { rx: 40, ry: 20, rotate: -15 } },
  { coordinates: [86.5, 26.5] as [number, number], name: "Maithili", speakers: "34M+", engagement: "95", type: "NODE", networkStatus: "DEPLOYABLE", color: "#E74C3C", spread: { rx: 25, ry: 15, rotate: -20 } },
  { coordinates: [74.5, 18.5] as [number, number], name: "Pune Marathi (Deshi)", speakers: "15M+", engagement: "88", type: "NODE", networkStatus: "CLAIMED", color: "#2980B9", spread: { rx: 25, ry: 35, rotate: 15 } },
  { coordinates: [79.0, 21.0] as [number, number], name: "Nagpuri Marathi (Varhadi)", speakers: "10M+", engagement: "91", type: "NODE", networkStatus: "CRITICAL", color: "#8E44AD", spread: { rx: 25, ry: 20, rotate: 0 } },
  { coordinates: [71.5, 22.0] as [number, number], name: "Kathiawadi", speakers: "12M+", engagement: "93", type: "NODE", networkStatus: "DEPLOYABLE", color: "#1ABC9C", spread: { rx: 25, ry: 20, rotate: -10 } },
  
  // NEW MASSIVE NODES ADDED
  { coordinates: [85.5, 24.5] as [number, number], name: "Magahi", speakers: "12.7M+", engagement: "95", type: "NODE", networkStatus: "DEPLOYABLE", color: "#E74C3C", spread: { rx: 35, ry: 25, rotate: 10 } },
  { coordinates: [74.0, 24.5] as [number, number], name: "Mewari", speakers: "4.2M+", engagement: "94", type: "NODE", networkStatus: "DEPLOYABLE", color: "#F39C12", spread: { rx: 25, ry: 20, rotate: 0 } },
  { coordinates: [73.5, 23.5] as [number, number], name: "Wagdi", speakers: "3.3M+", engagement: "92", type: "NODE", networkStatus: "DEPLOYABLE", color: "#1ABC9C", spread: { rx: 20, ry: 15, rotate: -15 } },
  { coordinates: [76.0, 25.0] as [number, number], name: "Harauti", speakers: "2.9M+", engagement: "91", type: "NODE", networkStatus: "DEPLOYABLE", color: "#D35400", spread: { rx: 20, ry: 20, rotate: 0 } },
  { coordinates: [78.5, 30.2] as [number, number], name: "Garhwali", speakers: "2.5M+", engagement: "96", type: "NODE", networkStatus: "CRITICAL", color: "#3498DB", spread: { rx: 20, ry: 20, rotate: -10 } },
  { coordinates: [79.8, 29.6] as [number, number], name: "Kumaoni", speakers: "2.0M+", engagement: "95", type: "NODE", networkStatus: "CRITICAL", color: "#2980B9", spread: { rx: 20, ry: 15, rotate: 15 } },
  { coordinates: [83.5, 21.0] as [number, number], name: "Sambalpuri", speakers: "2.6M+", engagement: "97", type: "NODE", networkStatus: "CRITICAL", color: "#27AE60", spread: { rx: 30, ry: 25, rotate: 20 } },
  { coordinates: [75.0, 32.7] as [number, number], name: "Dogri", speakers: "2.6M+", engagement: "93", type: "NODE", networkStatus: "DEPLOYABLE", color: "#8E44AD", spread: { rx: 25, ry: 15, rotate: -20 } },
  { coordinates: [75.0, 21.0] as [number, number], name: "Khandeshi", speakers: "1.8M+", engagement: "90", type: "NODE", networkStatus: "DEPLOYABLE", color: "#E67E22", spread: { rx: 25, ry: 15, rotate: 0 } },
  { coordinates: [83.0, 23.0] as [number, number], name: "Surgujia", speakers: "1.7M+", engagement: "91", type: "NODE", networkStatus: "DEPLOYABLE", color: "#9B59B6", spread: { rx: 20, ry: 15, rotate: 10 } },
];

export default function MarketAnalysisPage() {
  const [mapMode, setMapMode] = useState<"HUB" | "NODE">("HUB");
  const activeData = dialectMarkers.filter(m => m.type === mapMode);
  
  // Default to the first item of the active mode
  const [activeMarker, setActiveMarker] = useState<typeof dialectMarkers[0]>(activeData[0]);

  // Automatically update active marker when switching modes
  React.useEffect(() => {
    setActiveMarker(activeData[0]);
  }, [mapMode]);

  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-red-accent selection:text-white overflow-hidden">
      <Header />
      
      {/* Command Center Container */}
      <section className="pt-24 min-h-screen flex flex-col relative border-b border-white/5 bg-neutral-950">
        
        {/* CRT Scanline overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-10 opacity-30" />
        
        <div className="flex-1 w-full flex flex-col lg:flex-row relative z-20">
          
          {/* Left Panel: Controls */}
          <div className="w-full lg:w-[400px] border-r border-red-accent/20 bg-black/80 backdrop-blur-md p-8 flex flex-col justify-between shrink-0">
            <div className="space-y-8">
              <div>
                <span className="text-red-accent font-mono text-xs tracking-widest uppercase flex items-center gap-2 mb-4">
                  <Lock className="w-4 h-4" /> SECURE_CONNECTION
                </span>
                <h1 className="font-display text-4xl tracking-widest uppercase text-white hover-glitch">
                  COMMAND <br/> <span className="text-red-accent">CENTER</span>
                </h1>
              </div>

              <div className="space-y-4">
                <p className="font-mono text-[10px] text-secondary uppercase tracking-[0.2em] border-b border-white/10 pb-2">
                  Select Targeting Protocol
                </p>
                <div className="flex bg-black border border-white/20 p-1 rounded-sm w-full relative overflow-hidden">
                  <button 
                    onClick={() => setMapMode("HUB")}
                    className={`flex-1 py-3 font-mono text-[10px] uppercase tracking-widest transition-all text-center flex flex-col items-center justify-center gap-1 relative z-10 ${
                      mapMode === "HUB" 
                        ? "text-white font-bold" 
                        : "text-secondary hover:text-white"
                    }`}
                  >
                    <span>Dialects</span>
                    <span className="text-[8px] opacity-50">(Hub)</span>
                  </button>
                  <button 
                    onClick={() => setMapMode("NODE")}
                    className={`flex-1 py-3 font-mono text-[10px] uppercase tracking-widest transition-all text-center flex flex-col items-center justify-center gap-1 relative z-10 ${
                      mapMode === "NODE" 
                        ? "text-red-accent font-bold" 
                        : "text-secondary hover:text-white"
                    }`}
                  >
                    <span>Vernaculars</span>
                    <span className="text-[8px] opacity-50">(Node)</span>
                  </button>
                  
                  {/* Sliding highlight */}
                  <div className={`absolute top-0 bottom-0 w-1/2 transition-transform duration-300 ease-out ${mapMode === "HUB" ? "translate-x-0 bg-white/10" : "translate-x-full bg-red-accent/20 border border-red-accent/30"}`} />
                </div>
              </div>

              {/* Data Card (Active Selection) */}
              <AnimatePresence mode="wait">
                {activeMarker ? (
                  <motion.div 
                    key={activeMarker.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="border border-red-accent/30 bg-red-accent/5 p-6 space-y-4 relative overflow-hidden"
                  >
                    {/* Thematic Accent Line matching the dialect color */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 opacity-50" style={{ backgroundColor: activeMarker.color }} />
                    
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-display text-2xl uppercase text-white leading-tight">{activeMarker.name}</h4>
                        <p className="font-mono text-[10px] text-red-accent uppercase tracking-widest mt-1">Confirmed Target Region</p>
                      </div>
                      <span className={`font-mono text-[9px] px-2 py-1 uppercase tracking-widest border whitespace-nowrap ml-2 ${
                        activeMarker.networkStatus === "CRITICAL" ? "border-red-accent text-red-accent animate-pulse" :
                        activeMarker.networkStatus === "DEPLOYABLE" ? "border-green-500 text-green-500" :
                        "border-white/20 text-white/50"
                      }`}>
                        {activeMarker.networkStatus}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 border-b border-white/10 pb-4">
                      <div>
                        <p className="font-mono text-[9px] text-secondary uppercase tracking-widest">Est. Speakers (TAM)</p>
                        <p className="font-display text-3xl text-white mt-1">{activeMarker.speakers}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[9px] text-secondary uppercase tracking-widest">Cult. Engagement</p>
                        <p className="font-display text-3xl mt-1" style={{ color: activeMarker.color }}>{activeMarker.engagement}<span className="text-lg text-secondary">/100</span></p>
                      </div>
                    </div>

                    {/* Stacked Data Logic for overlapping regions */}
                    {activeMarker.secondaryDialects && (
                      <div className="pt-2">
                        <p className="font-mono text-[9px] text-secondary uppercase tracking-widest mb-2">Stacked Influence Zone</p>
                        {activeMarker.secondaryDialects.map((sd, idx) => (
                          <div key={idx} className="flex justify-between items-center text-sm border-l-2 pl-3" style={{ borderColor: activeMarker.color }}>
                            <span className="font-sans text-neutral-300">{sd.name}</span>
                            <span className="font-mono text-white/70">{sd.speakers}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <button 
                      className="w-full py-3 mt-4 transition-colors font-mono text-xs font-bold uppercase tracking-widest text-black"
                      style={{ backgroundColor: activeMarker.color }}
                    >
                      Deploy Campaign
                    </button>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
            
            <div className="text-[10px] font-mono text-secondary uppercase tracking-widest flex items-center gap-2">
              <Database className="w-3 h-3" /> VERIFIED CENSUS DATA LIVE
            </div>
          </div>

          {/* Right Panel: The Map */}
          <div className="flex-1 relative bg-[#050505] overflow-hidden group cursor-move">
            <ComposableMap 
              projection="geoMercator" 
              projectionConfig={{ scale: 1200, center: [80, 22] }}
              style={{ width: "100%", height: "100%" }}
            >
              <defs>
                {/* Dialect Blend Filter - creates a soft, painted bleed effect */}
                <filter id="dialect-blur" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="15" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <ZoomableGroup center={[80, 22]} zoom={1} minZoom={1} maxZoom={5}>
                {/* State Geographies */}
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#080808"
                        // Fade internal borders heavily in NODE mode to emphasize painted dialects
                        stroke={mapMode === "NODE" ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.08)"}
                        strokeWidth={mapMode === "NODE" ? 0.2 : 0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none", fill: "#0a0a0a" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {/* The Linguistic Painted Zones */}
                {activeData.map((marker, index) => {
                  const isActive = activeMarker?.name === marker.name;
                  const isOpportunity = marker.networkStatus === "CRITICAL" || marker.networkStatus === "DEPLOYABLE";
                  
                  return (
                    <Marker 
                      key={index} 
                      coordinates={marker.coordinates}
                      onClick={() => setActiveMarker(marker)}
                    >
                      <g className="cursor-crosshair transition-transform duration-500" style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}>
                        
                        {/* The massive painted SVG blob overlapping states */}
                        {marker.spread && (
                          <ellipse 
                            rx={marker.spread.rx} 
                            ry={marker.spread.ry} 
                            transform={`rotate(${marker.spread.rotate})`}
                            fill={marker.color}
                            filter="url(#dialect-blur)"
                            // Screen blend mode ensures overlapping languages bleed together beautifully
                            style={{ 
                              mixBlendMode: "screen", 
                              opacity: isActive ? 0.8 : 0.4,
                              transition: "opacity 0.5s ease"
                            }}
                          />
                        )}
                        
                        {/* Central Node Indicator */}
                        <circle r={3} fill="#fff" opacity={isActive ? 1 : 0.5} />
                        
                        {/* Tactical ping only on opportunity zones that are active */}
                        {(isActive && isOpportunity) && (
                          <circle 
                            r={16} 
                            fill="none" 
                            stroke="#fff" 
                            strokeWidth={1.5} 
                            opacity={0.8} 
                            className="animate-ping" 
                          />
                        )}
                      </g>
                    </Marker>
                  );
                })}
              </ZoomableGroup>
            </ComposableMap>
            
            {/* Legend / Overlay Text */}
            <div className="absolute top-6 right-6 font-display text-3xl text-white/10 uppercase tracking-[0.3em] pointer-events-none text-right">
              {mapMode === "HUB" ? "Macro State Level" : "Linguistic Zones"} <br/>
              <span className="text-sm tracking-widest font-mono text-red-accent/30">{mapMode === "NODE" ? "> 1,000,000 SPEAKERS" : "STATE DENSITY"}</span>
            </div>

            {/* Zoom Controls Hint */}
            <div className="absolute bottom-6 right-6 font-mono text-[10px] text-white/50 tracking-widest uppercase pointer-events-none bg-black/50 px-4 py-2 backdrop-blur-sm border border-white/5">
              Scroll to zoom • Drag to pan
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
