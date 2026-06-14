import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { REAL_POSTS } from "@/lib/data/blogs";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return REAL_POSTS.map((post) => ({
    id: post.id.toString(),
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const post = REAL_POSTS.find((p) => p.id.toString() === params.id);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Media Mafias Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = REAL_POSTS.find((p) => p.id.toString() === params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-red-accent selection:text-white">
      <Header />
      
      <article className="flex-1 pt-40 pb-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          
          <Link href="/blog" className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-secondary hover:text-red-accent mb-12 transition-colors">
            <span className="mr-2">←</span>
            BACK TO TRANSMISSIONS
          </Link>

          <div className="mb-12">
            <div className="flex items-center gap-4 text-xs font-mono text-secondary/60 mb-6 uppercase tracking-widest">
              <span className="px-3 py-1 border border-white/10 bg-white/5 text-white">{post.category}</span>
              <span>{post.date}</span>
              <span className="text-red-accent">{post.readTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight uppercase leading-[1.1] mb-8">
              {post.title}
            </h1>
            
            <p className="text-xl text-secondary font-sans leading-relaxed border-l-4 border-red-accent pl-6 py-2 bg-neutral-900/50">
              {post.excerpt}
            </p>
          </div>

          <div className="prose prose-invert prose-red max-w-none font-sans prose-headings:font-display prose-headings:uppercase prose-headings:tracking-widest prose-h2:text-3xl prose-h3:text-xl prose-a:text-red-accent prose-p:leading-relaxed prose-p:text-neutral-300">
            {/* Simple markdown to HTML conversion for the prototype */}
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.trim().startsWith('### ')) {
                return <h3 key={index} className="mt-12 mb-4">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.trim().startsWith('## ')) {
                return <h2 key={index} className="mt-16 mb-6 pb-4 border-b border-white/10">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.trim().startsWith('- ')) {
                const listItems = paragraph.split('\n').map(item => item.replace('- ', ''));
                return (
                  <ul key={index} className="list-disc pl-6 mb-6 text-neutral-300 space-y-2">
                    {listItems.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                );
              }
              if (paragraph.trim() !== '') {
                return <p key={index} className="mb-6">{paragraph}</p>;
              }
              return null;
            })}
          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
