"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

export function CTACard({ transparent = false }: { transparent?: boolean }) {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 py-20 overflow-visible">
      <div className={`relative rounded-[2.5rem] overflow-hidden min-h-[500px] flex flex-col items-center justify-center text-center p-8 pb-0 md:p-16 ${transparent ? "bg-transparent" : "bg-[#1e00ff] shadow-2xl"}`}>
        
        {/* Corner Glows */}
        <div className="absolute top-0 right-[-10%] w-[1000px] h-[800px] opacity-95 pointer-events-none mix-blend-screen">
          <Image 
            src="/assets/cta/top%20right%20glow%20for%20gradient.png" 
            alt="" 
            fill 
            className="object-contain object-right-top"
          />
        </div>
        <div className="absolute bottom-0 left-[-10%] w-[1000px] h-[800px] opacity-95 pointer-events-none mix-blend-screen">
          <Image 
            src="/assets/cta/left%20bottom%20glow%20for%20gradient%20effect.png" 
            alt="" 
            fill 
            className="object-contain object-left-bottom"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">Unlimited Business Library</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
            Discover Done-For-You <br className="hidden md:block" />
            Digital Products You Can Sell <br className="hidden md:block" />
            Or Use In Any Way
          </h2>

          {/* Subheading */}
          <p className="text-white/80 text-lg md:text-xl max-w-2xl font-light">
            Imagine you have more than 1000 business and marketing video courses, books, templates, audios, and more. Your own digital library without limits.
          </p>
        </div>

        {/* Product Images (Overlapping) */}
        <div className="absolute -bottom-10 left-10 w-48 md:w-64 hidden lg:block transform hover:-translate-y-4 transition-transform duration-500">
          <Image 
            src="/assets/cta/image%2058.png" 
            alt="Mindful Mornings" 
            width={300} 
            height={400} 
            className="rounded-xl shadow-2xl rotate-[-5deg]"
          />
        </div>
        <div className="absolute -bottom-10 right-10 w-48 md:w-64 hidden lg:block transform hover:-translate-y-4 transition-transform duration-500">
          <Image 
            src="/assets/cta/image%2059.png" 
            alt="Mindfulness for Creators" 
            width={300} 
            height={400} 
            className="rounded-xl shadow-2xl rotate-[5deg]"
          />
        </div>

        {/* Mobile Product Images (Displayed normally) */}
        <div className="flex lg:hidden gap-4 mt-12 overflow-x-auto pb-0 w-full justify-center -mb-2">
            <Image 
              src="/assets/cta/image%2058.png" 
              alt="Mindful Mornings" 
              width={150} 
              height={200} 
              className="rounded-lg shadow-lg flex-shrink-0"
            />
            <Image 
              src="/assets/cta/image%2059.png" 
              alt="Mindfulness for Creators" 
              width={150} 
              height={200} 
              className="rounded-lg shadow-lg flex-shrink-0"
            />
        </div>
      </div>
    </section>
  );
}
