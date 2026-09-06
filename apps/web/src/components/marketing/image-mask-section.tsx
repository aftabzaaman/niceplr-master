"use client";

import React from "react";
import Image from "next/image";

interface ImageMaskSectionProps {
  badge: string;
  headlinePrefix: string;
  headlineItalic: string;
  paragraphs: string[];
  images: string[];
  theme?: "light" | "dark";
}

export function ImageMaskSection({ 
  badge, 
  headlinePrefix, 
  headlineItalic, 
  paragraphs, 
  images,
  theme = "light"
}: ImageMaskSectionProps) {
  const isDark = theme === "dark";

  return (
    <section className={`w-full py-16 md:py-24 overflow-hidden font-dm-sans ${isDark ? "bg-[#030014] text-white" : "bg-white text-[#111]"}`}>
      <div className="max-w-[860px] mx-auto px-6 text-center">
        {/* Badge */}
        <span className={`inline-block text-[11px] font-bold tracking-[0.1em] px-4 py-1.5 rounded-full mb-6 font-sans ${isDark ? "bg-white/10 text-white border border-white/20" : "bg-[#111] text-white"}`}>
          {badge}
        </span>

        {/* Headline */}
        <h1 className={`text-[clamp(1.8rem,5vw,2.8rem)] font-extrabold leading-[1.15] mb-6 ${isDark ? "text-white" : "text-[#111]"}`}>
          {headlinePrefix} <br className="md:hidden" />
          <em className="italic text-purple-600 font-extrabold not-italic">{headlineItalic}</em>
        </h1>

        {/* Body Text */}
        <div className="space-y-4 max-w-[560px] mx-auto mb-12">
          {paragraphs.map((p, i) => (
            <p key={i} className={`text-sm md:text-base leading-[1.8] ${isDark ? "text-white/60" : "text-[#444]"}`}>
              {p}
            </p>
          ))}
        </div>

        {/* Frames Container */}
        <div className="relative h-[280px] md:h-[420px] mt-12 flex items-center justify-center scale-[0.7] md:scale-100 origin-center transition-all duration-500">
          {/* Frame 1: Left */}
          <div className="absolute w-[260px] h-[340px] rounded-[18px] overflow-hidden border-[6px] border-white shadow-[0_8px_32px_rgba(0,0,0,0.18)] 
                        left-1/2 -ml-[390px] top-[45px] -rotate-[5deg] z-10 transition-transform hover:scale-105 duration-500">
            <Image 
              src={images[0] || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"} 
              alt="Context image 1" 
              fill
              className="object-cover"
            />
          </div>

          {/* Frame 2: Center */}
          <div className="absolute w-[260px] h-[340px] rounded-[18px] overflow-hidden border-[6px] border-white shadow-[0_8px_32px_rgba(0,0,0,0.18)] 
                        left-1/2 -ml-[130px] top-[45px] rotate-[8deg] z-30 transition-transform hover:scale-105 duration-500">
            <Image 
              src={images[1] || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"} 
              alt="Context image 2" 
              fill
              className="object-cover"
            />
          </div>

          {/* Frame 3: Right */}
          <div className="absolute w-[260px] h-[340px] rounded-[18px] overflow-hidden border-[6px] border-white shadow-[0_8px_32px_rgba(0,0,0,0.18)] 
                        left-1/2 ml-[120px] top-[45px] -rotate-[10deg] z-20 transition-transform hover:scale-105 duration-500">
            <Image 
              src={images[2] || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"} 
              alt="Context image 3" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
