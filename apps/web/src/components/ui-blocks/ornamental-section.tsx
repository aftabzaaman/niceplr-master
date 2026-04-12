"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export function OrnamentalSection() {
  return (
    <section className="relative w-full py-24 bg-[#030014] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Header Section (Coded for High Fidelity) */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-0">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">You have complete freedom</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-4xl">
            Get Custom Product Tailored <br />
            To Your Brand In Just <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">7 Days</span>
          </h2>
          
          <p className="text-white/40 text-lg max-w-2xl font-light mb-12 lg:mb-20">
            We transform your idea into signature book without you writing a single word. 
            Completely custom-made asset.
          </p>
        </div>

        {/* The Map Section (Image-based as requested) */}
        <div className="relative w-full flex justify-center items-center">
           {/* Background Glow Layer */}
           <div className="absolute inset-0 flex items-center justify-center opacity-90 pointer-events-none scale-[0.75] md:scale-[0.6]">
              <Image 
                src="/assets/ornamental/ornamental-glow.svg" 
                alt="" 
                width={1200}
                height={1200}
                className="object-contain"
              />
           </div>

           {/* The Main Map (img 12.png) */}
           <div className="relative z-10 w-full max-w-6xl lg:max-w-4xl mx-auto px-4 lg:px-0">
              <Image 
                src="/assets/ornamental/full-map.png" 
                alt="Process Showcase" 
                width={1400} 
                height={1000}
                className="w-full h-auto object-contain drop-shadow-[0_20px_80px_rgba(0,0,0,0.5)] transition-transform duration-1000 hover:scale-[1.02]"
                priority
              />
           </div>
        </div>
      </div>
    </section>
  );
}
