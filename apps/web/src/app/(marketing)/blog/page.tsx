import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { getPosts } from "@/lib/api/posts";

const formatDate = (dateString: string) => {
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "Recently";
  }
};

export default function BlogPage() {
  const posts = getPosts();
  const featuredPost = posts[0];
  const gridPosts = posts.slice(1);

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

      <section className="relative w-full pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-500 text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles className="w-3 h-3" />
            Resources & Insights
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
            The Knowledge Hub for <br />
            <span className="text-purple-600">Digital Entrepreneurs</span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed">
            Expert guides, industry insights, and step-by-step strategies to
            help you master the art of digital commerce.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white rounded-t-[3rem] md:rounded-t-[4rem] -mt-10">
        <div className="container mx-auto px-6 max-w-7xl">
          {featuredPost && (
            <div className="relative group flex flex-col lg:flex-row items-center gap-12 mb-24 md:mb-32">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="w-full lg:w-1/2 aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative block"
              >
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Link>
              <div className="w-full lg:w-1/2 text-left">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-orange-100/50 text-orange-600 text-xs font-bold uppercase tracking-widest">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-400 text-xs font-medium ml-2">
                    {formatDate(featuredPost.date)}
                  </span>
                </div>
                <Link href={`/blog/${featuredPost.slug}`} className="block group">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#030014] mb-8 leading-tight tracking-tight hover:text-purple-600 transition-colors">
                    {featuredPost.title}
                  </h2>
                </Link>
                <p className="text-gray-500 text-lg leading-relaxed mb-8 font-medium">
                  {featuredPost.excerpt}
                </p>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 text-[#030014] font-black underline underline-offset-8 hover:text-purple-600 transition-colors uppercase tracking-widest text-xs"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {gridPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {gridPosts.map((post) => (
                <div key={post.slug} className="group flex flex-col">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative overflow-hidden rounded-[2.5rem] aspect-[4/3] mb-8 shadow-lg block"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </Link>
                  <div className="px-4">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-widest">
                        {post.category}
                      </span>
                      <span className="text-gray-300">|</span>
                      <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-2xl font-bold text-[#030014] mb-4 leading-snug hover:text-purple-600 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
