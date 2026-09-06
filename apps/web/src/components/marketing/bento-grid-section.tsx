"use client";

import React from "react";
import Image from "next/image";
import { ArrowDownRight, Sparkles } from "lucide-react";

interface BentoItem {
  title: string;
  description?: string;
  image?: string;
  className?: string;
  imageClassName?: string;
  hasImage?: boolean;
  isSatisfaction?: boolean;
  isFocal?: boolean;
}

const BENTO_ITEMS: BentoItem[] = [
  {
    title: "Ready For Print",
    description: "Your book is formatted and polished to be print-ready, designed to look and feel like a true best-seller.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    className: "lg:row-span-2",
    imageClassName: "object-contain p-8 rotate-[-10deg]",
    hasImage: true,
  },
  {
    title: "Produced By Experts",
    description: "Each part of the resource is created by our experienced team.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop",
    className: "lg:col-start-3",
    imageClassName: "object-contain p-6 scale-90",
    hasImage: true,
  },
  {
    title: "Satisfaction Guarantee",
    description: "",
    className: "lg:col-start-2 lg:row-start-1 h-32 lg:h-auto",
    hasImage: false,
    isSatisfaction: true,
  },
  {
    title: "EPUB & Kindle",
    description: "Optimized for every digital device.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    className: "lg:col-start-3 lg:row-start-2",
    imageClassName: "object-contain p-6 rotate-90",
    hasImage: true,
  },
  {
    title: "YOUR BOOK",
    description: "The ultimate focal point of your digital success story.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
    className: "lg:col-start-2 lg:row-start-2 lg:row-span-2",
    imageClassName: "object-cover",
    isFocal: true,
    hasImage: true,
  },
  {
    title: "Industry Standard",
    description: "Trusted by the world's most successful creators.",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop",
    className: "lg:col-start-1 lg:row-start-3",
    imageClassName: "object-cover scale-110",
    hasImage: true,
  },
  {
    title: "Global Reach",
    description: "Your masterpiece available worldwide.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    className: "lg:col-start-3 lg:row-start-3",
    imageClassName: "object-contain p-6",
    hasImage: true,
  }
];

export function BentoGridSection() {
  return (
    <section className="relative w-full py-24 bg-transparent">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-4 mt-10 lg:grid-cols-3 lg:grid-rows-3 lg:auto-rows-[16rem]">
          {/* Card Wrapper Function-like Component */}
          {BENTO_ITEMS.map((item, index) => (
            <div key={index} className={`relative group ${item.className}`}>
              {/* Background Layer (Pink/Velvet Glassmorphism) */}
              <div className="absolute inset-px rounded-3xl bg-gradient-to-br from-pink-500/10 via-violet-900/40 to-black/40 backdrop-blur-xl transition-all duration-500 group-hover:from-pink-500/15 group-hover:to-violet-800/60 shadow-xl shadow-black/20"></div>
              
              {/* Content Layer */}
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10 flex flex-col h-full">
                  <p className="text-xl font-bold tracking-tight text-white line-clamp-1">{item.title}</p>
                  {item.description && (
                    <p className="mt-2 text-sm/6 text-white/50 line-clamp-2">{item.description}</p>
                  )}
                  
                  {item.isSatisfaction && (
                    <div className="flex-1 flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-pink-400 opacity-50" />
                    </div>
                  )}

                  {item.hasImage && item.image && (
                    <div className="relative mt-6 flex-1 w-full min-h-[120px] rounded-2xl overflow-hidden bg-white/5 border border-white/5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className={`${item.imageClassName} transition-transform duration-700 group-hover:scale-105`}
                      />
                      {item.isFocal && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-6">
                           <span className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Digital Showcase</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Inset Border Pop */}
              <div className="pointer-events-none absolute inset-px rounded-3xl shadow-sm outline outline-1 outline-white/10 group-hover:outline-white/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-20">
          <button className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-pink-500 via-violet-600 to-blue-600 text-white font-bold text-sm tracking-widest flex items-center gap-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] hover:scale-105 active:scale-95">
             <span className="relative z-10 uppercase">Get Custom Digital Product</span>
             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          
          <button className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white backdrop-blur-md transition-all duration-500 hover:bg-pink-500 hover:border-pink-500 hover:rotate-45 group hov:shadow-[0_0_30px_rgba(236,72,153,0.4)]">
            <ArrowDownRight className="w-7 h-7 transition-transform group-hover:scale-110" />
          </button>
        </div>
      </div>
    </section>
  );
}
