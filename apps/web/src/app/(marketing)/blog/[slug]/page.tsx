import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { getPost, getPosts } from "@/lib/api/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | NicePLR Blog`,
    description: post.excerpt,
  };
}

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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#030014] pb-32 relative overflow-hidden font-sans">
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
              {post.category}
            </span>
            <span className="text-white/40 text-sm flex items-center gap-1">
              <Calendar className="w-4 h-4" /> {formatDate(post.date)}
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

      <section className="py-20 bg-white rounded-t-[3rem] md:rounded-t-[4rem] -mt-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 -mt-32 border-4 border-white">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex items-center gap-4 pb-8 mb-12 border-b border-gray-100">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-base shadow-sm">
              NP
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-[#030014]">NicePLR Editorial Team</span>
              <span className="text-xs text-gray-400">Expert Insights & Digital Commerce Strategies</span>
            </div>
          </div>

          <div className="text-gray-700 text-lg leading-relaxed space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
