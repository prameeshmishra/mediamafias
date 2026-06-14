import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Platform Updates | Media Mafias",
  description: "Read the latest news, SEO tips, and platform updates for independent audio creators and the vernacular content industry.",
};

import { REAL_POSTS } from "@/lib/data/blogs";

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-red-accent selection:text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative border-b border-white/10">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-block px-3 py-1 mb-6 border border-red-accent/30 bg-red-accent/5 font-mono text-[10px] text-red-accent tracking-widest uppercase">
            [ SYSTEM.LOGS ]
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-display tracking-tighter uppercase mb-6 drop-shadow-[0_0_15px_rgba(255,0,0,0.3)]">
            TRANSMISSIONS
          </h1>
          <p className="text-xl text-secondary max-w-2xl leading-relaxed font-mono">
            Latest intel, SEO strategies, and platform updates from the underground. Stay sharp, stay independent.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REAL_POSTS.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id} className="group flex flex-col h-full bg-neutral-900/30 border border-white/5 hover:border-red-accent/50 transition-all duration-300">
                {/* Simulated Image Header */}
                <div className="w-full h-48 bg-black border-b border-white/5 relative overflow-hidden flex items-center justify-center group-hover:bg-red-accent/5 transition-colors">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                  <span className="font-display font-bold text-3xl opacity-20 tracking-tighter uppercase group-hover:scale-110 group-hover:opacity-40 transition-all duration-500">
                    {post.category}
                  </span>
                </div>
                
                <div className="p-8 flex flex-col flex-grow relative">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20 group-hover:border-red-accent transition-colors" />
                  
                  <div className="flex items-center justify-between text-xs font-mono text-secondary/60 mb-4 uppercase tracking-widest">
                    <span>{post.date}</span>
                    <span className="text-red-accent">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-4 group-hover:text-red-accent transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-secondary text-sm leading-relaxed mb-8 flex-grow font-sans">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center text-xs font-mono uppercase tracking-widest text-white group-hover:text-red-accent transition-colors">
                    <span className="mr-2">DECRYPT FULL FILE</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <button className="bg-transparent border border-white/20 hover:border-red-accent text-white px-8 py-4 font-mono text-xs tracking-widest uppercase transition-all hover:bg-red-accent/10">
               LOAD OLDER TRANSMISSIONS
             </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
