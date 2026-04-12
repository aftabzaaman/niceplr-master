"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Calendar, User, Clock, Sparkles } from "lucide-react";

export default function BlogPage() {
  const posts = Array.from({ length: 18 }).map((_, i) => ({
    id: i + 1,
    title: [
      "How to Scale Your Digital Product Business in 2024",
      "The Ultimate Guide to Rebranding PLR Content",
      "Maximizing Profit with Master Resell Rights",
      "Top 10 High-Converting Lead Magnet Ideas",
      "The Future of Digital Publishing & AI",
      "How to Build a Loyal Audience from Scratch"
    ][i % 6],
    excerpt: "Learn the essential strategies and insider tips to transform your digital portfolio into a high-revenue empire with proven systems.",
    category: ["Marketing", "Business", "Design", "Strategy"][i % 4],
    date: "22 Dec 2023",
    author: ["Cody Fisher", "Guy Hawkins", "Floyd Miles", "Savannah Nguyen"][i % 4],
    authorImage: `https://i.pravatar.cc/150?u=${i}`,
    image: `https://images.unsplash.com/photo-${[
      "1460925895917-afdab827c52f",
      "1551288049-bebda4e38f71",
      "1517694712202-14dd9538aa97",
      "1551434678-e076c223a692",
      "1542744173-8e7e53415bb0",
      "1552664730-d307ca884978"
    ][i % 6]}?w=800&q=80`
  }));

  const featuredPost = {
    title: "MyCase, Transforming Legal Practice with Digital Systems",
    excerpt: "Our commitment to providing value extends beyond the features of our products or services. We believe in fostering long-term partnerships by ensuring that our pricing plans align with your growth. Many professionals find it difficult to accurately keep track of all operations, which often results in time slipping through the tracks.",
    category: ["News", "Inspiration"],
    date: "22 Dec 2023",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80"
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

      {/* 1. Hero Section (Duplicated from About) */}
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
            Expert guides, industry insights, and step-by-step strategies 
            to help you master the art of digital commerce.
          </p>
        </div>
      </section>

      {/* 2. Blog Main Section (White Background) */}
      <section className="py-24 md:py-32 bg-white rounded-t-[3rem] md:rounded-t-[4rem] -mt-10">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Featured Post */}
          <div className="relative group flex flex-col lg:flex-row items-center gap-12 mb-24 md:mb-32">
            <div className="w-full lg:w-1/2 aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
              <Image 
                src={featuredPost.image} 
                alt={featuredPost.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-full lg:w-1/2 text-left">
              <div className="flex items-center gap-3 mb-6">
                {featuredPost.category.map(cat => (
                  <span key={cat} className="px-4 py-1.5 rounded-full bg-orange-100/50 text-orange-600 text-xs font-bold uppercase tracking-widest">
                    {cat}
                  </span>
                ))}
                <span className="text-gray-400 text-xs font-medium ml-2">{featuredPost.date}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#030014] mb-8 leading-tight tracking-tight">
                {featuredPost.title}
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8 font-medium">
                {featuredPost.excerpt}
              </p>
              <button className="inline-flex items-center gap-2 text-[#030014] font-black underline underline-offset-8 hover:text-purple-600 transition-colors uppercase tracking-widest text-xs">
                Read Article <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Post Grid (6 Rows of 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {posts.map((post) => (
              <div key={post.id} className="group flex flex-col">
                <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/3] mb-8 shadow-lg">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="px-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-widest">
                      {post.category}
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                      Inspiration
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#030014] mb-4 leading-snug group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <Image 
                        src={post.authorImage} 
                        alt={post.author} 
                        width={32} 
                        height={32} 
                        className="rounded-full grayscale"
                      />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-[#030014]">{post.author}</span>
                        <span className="text-[10px] text-gray-400">Updated on: {post.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
