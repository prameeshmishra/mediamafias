import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black py-16 px-6 border-t border-red-accent/20 relative overflow-hidden">
      {/* Decorative scanline accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-accent to-transparent opacity-50" />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="md:col-span-2 space-y-6">
          <Link href="/" className="inline-block hover-glitch" data-text="MEDIA MAFIAS">
            <Image 
              src="/Logo horizontal.png" 
              alt="Media Mafias" 
              width={200} 
              height={44} 
              className="object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          </Link>
          <p className="text-secondary font-sans text-sm max-w-sm leading-relaxed border-l-2 border-red-accent/50 pl-4">
            The decentralized audio network built on code. Broadcasting from the underground to the world.
          </p>
          <div className="text-[10px] font-mono text-secondary/40 tracking-widest uppercase">
            SYS.NODE.01 :: ENCRYPTED SIGNAL :: CARTEL ACTIVE
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-display text-xl tracking-widest text-red-accent uppercase">Access Points</h4>
          <ul className="space-y-4 font-mono text-sm uppercase tracking-widest text-secondary">
            <li><Link href="/" className="hover:text-white transition-all">Home</Link></li>
            <li><Link href="/academy" className="hover:text-red-accent transition-colors">Creator Academy</Link></li>
            <li><Link href="/spotlight" className="hover:text-white transition-all">Spotlight</Link></li>
            <li><Link href="/distribution" className="hover:text-red-accent transition-colors">Distribution</Link></li>
            <li><Link href="/api-pipeline" className="hover:text-red-accent transition-colors">Content API</Link></li>
            <li><Link href="/about" className="hover:text-white transition-all">About</Link></li>
            <li><Link href="/contact" className="hover:text-red-accent transition-all">Contact / Legal</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-display text-xl tracking-widest text-red-accent uppercase">Communications</h4>
          <div className="flex flex-col space-y-2 text-sm font-mono text-secondary">
            <a href="mailto:cartel@mediamafias.com" className="hover:text-white transition-colors flex items-center gap-2">
              <span className="text-red-accent">{">"}</span> cartel@mediamafias.com
            </a>
            <a href="https://wa.me/919209290699" className="hover:text-white transition-colors flex items-center gap-2">
              <span className="text-red-accent">{">"}</span> +91 9209290699
            </a>
            <a href="https://thefutureradio.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors mt-4 block border border-white/10 p-2 text-center bg-neutral-900/50">
              thefutureradio.com
            </a>
          </div>
        </div>
      </div>

      {/* Distribution Partners */}
      <div className="max-w-6xl mx-auto mt-16 pt-12 border-t border-white/10 relative z-10">
        <h4 className="font-display text-lg tracking-widest text-white uppercase text-center mb-8">Our Distribution Partner Platforms</h4>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
          
          <div className="flex items-center gap-2 hover:opacity-100 hover:text-red-accent transition-all cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-red-accent flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            </div>
            <span className="font-display tracking-widest uppercase text-sm">The Future Radio</span>
          </div>
          
          <div className="flex items-center gap-2 hover:opacity-100 hover:text-[#FF0000] transition-all cursor-pointer group">
            <svg className="w-8 h-8 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            <span className="font-display tracking-widest uppercase text-sm">YouTube</span>
          </div>
          
          <div className="flex items-center gap-2 hover:opacity-100 hover:text-[#1877F2] transition-all cursor-pointer group">
            <svg className="w-8 h-8 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            <span className="font-display tracking-widest uppercase text-sm">Facebook</span>
          </div>

          <div className="flex items-center gap-2 hover:opacity-100 hover:text-[#1DB954] transition-all cursor-pointer group">
            <svg className="w-8 h-8 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.3 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
            <span className="font-display tracking-widest uppercase text-sm">Spotify</span>
          </div>

          <div className="flex items-center gap-2 hover:opacity-100 hover:text-[#2ECA7F] transition-all cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-current flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 14.5c-2.485 0-4.5-2.015-4.5-4.5S9.515 7.5 12 7.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5zm0-7c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5-1.119-2.5-2.5-2.5z"/></svg>
            </div>
            <span className="font-display tracking-widest uppercase text-sm">JioSaavn</span>
          </div>

          <div className="flex items-center gap-2 hover:opacity-100 hover:text-[#E1306C] transition-all cursor-pointer group">
            <svg className="w-8 h-8 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            <span className="font-display tracking-widest uppercase text-sm">Instagram</span>
          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-secondary text-xs font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} Media Mafias. All signals reserved.
        </p>
        <p className="text-secondary/30 text-[10px] font-mono tracking-widest">
          v1.0.0-DECENTRALIZED
        </p>
      </div>
    </footer>
  );
};
