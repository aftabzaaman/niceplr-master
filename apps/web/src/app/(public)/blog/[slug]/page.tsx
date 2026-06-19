import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Sparkles } from "lucide-react";
import { getPayload } from "payload";
import config from "@/payload.config";
import { RichText } from "@payloadcms/richtext-lexical/react";

export const dynamic = "force-dynamic";
export const revalidate = 60; // Cache and revalidate every 60 seconds

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate metadata dynamically for SEO
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const payload = await getPayload({ config });
  
  const { docs } = await payload.find({
    collection: "posts",
    where: {
      slug: {
        equals: slug,
      },
      status: {
        equals: "published",
      },
    },
    limit: 1,
  });

  const post = docs[0];
  if (!post) return {};

  return {
    title: post.seo?.title || `${post.title} | NicePLR Blog`,
    description: post.seo?.description || post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const payload = await getPayload({ config });

  // Query the post details
  const { docs } = await payload.find({
    collection: "posts",
    where: {
      slug: {
        equals: slug,
      },
      status: {
        equals: "published",
      },
    },
    depth: 2, // Resolve media upload and category relations
    limit: 1,
  });

  const post = docs[0];

  if (!post) {
    notFound();
  }

  // Safe helpers
  const getMediaUrl = (coverImage: any) => {
    if (coverImage && typeof coverImage === "object" && coverImage.url) {
      return coverImage.url;
    }
    return "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80";
  };

  const getCategoryName = (category: any) => {
    if (category && typeof category === "object" && category.name) {
      return category.name;
    }
    return "Insights";
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return "Recently";
    }
  };

  return (
    <main className="min-h-screen bg-[#030014] pb-32 relative overflow-hidden font-sans">
      {/* Background Architectural Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-auto z-0 rotate-180 pointer-events-none">
        <Image 
          src="/assets/decor/ellipse-13.svg" 
          alt="" 
          width={1200} 
          height={600} 
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Hero Header Section */}
      <section className="relative w-full pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-left">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Knowledge Hub
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-widest">
              {getCategoryName(post.category)}
            </span>
            <span className="text-white/40 text-sm flex items-center gap-1">
              <Calendar className="w-4 h-4" /> {formatDate(post.publishedDate)}
            </span>
          </div>

          <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-8">
            {post.title}
          </h1>

          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-medium">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Main Body Section */}
      <section className="py-20 bg-white rounded-t-[3rem] md:rounded-t-[4rem] -mt-10">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Cover Image */}
          <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 -mt-32 border-4 border-white">
            <Image 
              src={getMediaUrl(post.coverImage)} 
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Author Block */}
          <div className="flex items-center gap-4 pb-8 mb-12 border-b border-gray-100">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-base shadow-sm">
              NP
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-[#030014]">NicePLR Editorial Team</span>
              <span className="text-xs text-gray-400">Expert Insights & Digital Commerce Strategies</span>
            </div>
          </div>

          {/* Lexical Rich Text Content Renderer */}
          <div className="blog-content text-gray-700 text-lg leading-relaxed">
            {post.content && <RichText data={post.content} />}
          </div>

          {/* Inline CSS styling for rich text rendering */}
          <style dangerouslySetInnerHTML={{ __html: `
            .blog-content h2 { 
              font-size: 2rem; 
              font-weight: 800; 
              margin-top: 3rem; 
              margin-bottom: 1.25rem; 
              color: #030014; 
              letter-spacing: -0.025em;
              line-height: 1.25;
            }
            .blog-content h3 { 
              font-size: 1.5rem; 
              font-weight: 700; 
              margin-top: 2rem; 
              margin-bottom: 1rem; 
              color: #030014; 
              letter-spacing: -0.02em;
            }
            .blog-content p { 
              margin-bottom: 1.5rem; 
              color: #374151; 
              line-height: 1.8;
            }
            .blog-content ul { 
              list-style-type: disc; 
              padding-left: 1.75rem; 
              margin-bottom: 1.5rem; 
              color: #374151; 
            }
            .blog-content ol { 
              list-style-type: decimal; 
              padding-left: 1.75rem; 
              margin-bottom: 1.5rem; 
              color: #374151; 
            }
            .blog-content li { 
              margin-bottom: 0.75rem; 
              line-height: 1.7;
            }
            .blog-content a { 
              color: #9333ea; 
              text-decoration: underline; 
              font-weight: 600;
              transition: color 0.2s;
            }
            .blog-content a:hover {
              color: #7e22ce;
            }
            .blog-content blockquote { 
              border-left: 4px solid #9333ea; 
              padding-left: 1.5rem; 
              font-style: italic; 
              color: #4b5563; 
              margin: 2rem 0; 
              font-size: 1.25rem;
              line-height: 1.6;
            }
            .blog-content strong {
              color: #030014;
              font-weight: 700;
            }
          ` }} />
        </div>
      </section>
    </main>
  );
}
