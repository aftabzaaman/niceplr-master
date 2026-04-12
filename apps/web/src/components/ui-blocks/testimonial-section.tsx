"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "“NicePLR completely changed the way I launch digital products. The Master Library gave me instant access to thousands of assets — from book templates to branding tools — and I didn't have to spend hours designing from scratch. Highly recommended for any solopreneur or small business owner!”",
    author: "DR. MAGDALENA S.",
    role: "FOUNDER OF EDUSPARK BD",
    image: "/assets/testimonials/magdalena.png"
  },
  {
    id: 2,
    quote: "“The scale of tools available here is unprecedented. I was able to automate my entire content workflow in under a week. The ROI was immediate. If you are serious about digital products, this is your home.”",
    author: "MARCUS CHEN",
    role: "CTO AT NEXUS MEDIA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800"
  },
  {
    id: 3,
    quote: "“Beautifully designed and extremely functional. It's rare to find a platform that balances deep technical power with such an intuitive interface. My team loves it.”",
    author: "SARAH JENKINS",
    role: "CREATIVE DIRECTOR",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800"
  }
];

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="w-full py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50/50 text-blue-700 text-xs font-medium mb-6">
              <Sparkles className="w-3 h-3" />
              Rated 4.8/5 overall by our users
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-grey mb-4">
              <span className="text-blue-400">Endless Ways</span> To Use Every <br />
              Product — <span className="text-blue-400">Just Ask Our Users</span>
            </h2>
            
            <p className="mt-6 text-lg text-grey/60 font-medium">
              Your next big idea might already be in our Master Library.
            </p>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white/5 backdrop-blur-3xl rounded-[3rem] p-6 md:p-12 shadow-2xl border border-white/10 flex flex-col md:flex-row gap-12 items-center"
            >
              {/* Left Side: Portrait */}
              <div className="relative w-full md:w-[400px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl flex-shrink-0">
                <Image
                  src={TESTIMONIALS[activeIndex].image}
                  alt={TESTIMONIALS[activeIndex].author}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Side: Quote Content */}
              <div className="flex-1 flex flex-col justify-center py-4">
                <blockquote className="text-xl md:text-xl leading-relaxed text-grey/90 font-medium mb-12">
                  {TESTIMONIALS[activeIndex].quote}
                </blockquote>

                <div className="mt-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-blue-400 mb-1">
                    {TESTIMONIALS[activeIndex].author}
                  </h3>
                  <p className="text-sm font-bold tracking-widest text-grey/40 uppercase">
                    {TESTIMONIALS[activeIndex].role}
                  </p>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-end gap-3 mt-8 md:mt-4">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2 transition-all duration-300 rounded-full ${
                        idx === activeIndex 
                          ? "w-8 bg-blue-600" 
                          : "w-2 bg-blue-200 hover:bg-blue-300"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Background Decorative Accents */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full -z-10" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-purple-400/10 blur-[100px] rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
}
