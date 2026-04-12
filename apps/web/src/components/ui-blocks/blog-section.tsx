"use client";

import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "How To Create Lead Magnets That Actually Convert",
    description: "Access a guide full of actionable steps and tips for growing your online business.",
    image: "/assets/blog/blog-1.png",
    tag: "Marketing",
  },
  {
    id: 2,
    title: "Best Digital Products To Sell Online: Top Picks For 2025",
    description: "Access a guide full of actionable steps and tips for growing your online business.",
    image: "/assets/blog/blog-2.png",
    tag: "Digital Products",
  },
  {
    id: 3,
    title: "How To Create Lead Magnets That Actually Convert",
    description: "Access a guide full of actionable steps and tips for growing your online business.",
    image: "/assets/blog/blog-3.png",
    tag: "Marketing",
  },
];

export function BlogSection() {
  return (
    <section className="relative w-full py-24 bg-[#030014] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center mb-20 gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-white text-sm font-medium">Blog packed with value</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Read Our <span className="text-blue-400">Latest Articles</span>
          </h2>

          {/* Subtitle */}
          <p className="text-white/60 text-lg max-w-2xl font-light">
            Stay updated with the latest trends, tips, and insights in the digital information products industry.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div 
              key={post.id}
              className="group relative flex flex-col bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-4 transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow px-4 pb-4">
                <h3 className="text-2xl font-bold text-white mb-4 line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                <p className="text-white/60 text-base mb-8 line-clamp-2">
                  {post.description}
                </p>

                {/* Footer / CTA */}
                <div className="mt-auto flex items-center gap-4">
                  <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium group-hover:bg-white/10 transition-colors">
                    Read More
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
