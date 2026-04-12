"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function MainHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-start pt-40 md:pt-64 pb-32 overflow-hidden bg-[#030014]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/assets/hero/hero_bg.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-left-top opacity-80"
        />
        {/* Bottom Glow Overlay to transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#030014] to-transparent z-10" />
      </div>

      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8 md:gap-10 max-w-2xl"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 w-fit">
            <span className="text-[10px] md:text-xs">☀️</span>
            <span className="text-xs md:text-[14px] font-medium text-gray-300 tracking-wide">
              20,000+ customers who are getting more clients
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-[54px] font-bold leading-[1.1] tracking-tight text-white font-dm-sans">
            Done-For-You <br />
            Digital Products <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              to Grow Your Business
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm md:text-m text-gray-300 font-normal leading-relaxed max-w-lg">
            You can instantly have your own digital products. Rebrand, sell, or
            use in any way. Without high investments or months of creation.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center gap-5">
            <Link 
              href="#master-library" 
              className="flex items-center justify-center h-14 px-10 rounded-full font-bold text-white uppercase text-sm tracking-widest bg-gradient-to-r from-purple-600 to-blue-600 shadow-[0_10px_40px_rgba(59,130,246,0.3)] hover:scale-105 transition-all duration-300"
            >
              Master Library
            </Link>
            <Link 
              href="#master-library" 
              className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              >
                <path 
                  d="M7 17L17 7M17 7H7M17 7V17" 
                  stroke="white" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Right Image Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative z-20 flex justify-center lg:justify-end items-center"
        >
          <div className="relative w-full aspect-square max-w-[450px] lg:max-w-none transition-transform duration-700 hover:scale-[1.03]">
            <Image
              src="/assets/hero/book_stack.png"
              alt="Digital Products Stack"
              width={800}
              height={800}
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
