"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

const FAQ_DATA = [
  {
    question: "What digital products do you offer?",
    answer: "We offer a massive library of over 1000+ business and marketing assets, including video courses, eBooks, templates, and high-converting marketing materials ready to be used or resold."
  },
  {
    question: "How do I access my products after purchase?",
    answer: "Instantly! Once your order is confirmed, you'll receive immediate access to your digital dashboard where you can download all assets directly to your device."
  },
  {
    question: "Are the products customizable?",
    answer: "Yes! Many of our products come with PLR (Private Label Rights) or Master Resell Rights, allowing you to edit, rebrand, and customize them to fit your business needs perfectly."
  },
  {
    question: "What is your refund policy?",
    answer: "Due to the digital nature of our products, we typically do not offer refunds once access is granted. However, user satisfaction is our priority—if you encounter any issues, our support team is here to help."
  },
  {
    question: "Do you offer customer support?",
    answer: "Absolutely! We provide 24/7 priority support for all our members. Whether you have a technical question or need help with a product, we're just one click away."
  }
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-grey-400" />
            <span className="text-grey text-sm font-medium uppercase tracking-widest">Questions</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-grey-200 tracking-tight">
            Frequently Asked <br />
            <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          
          <p className="text-grey-500 text-lg max-w-xl font-light">
            Everything you need to know about our premium digital products and services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <div 
              key={index}
              className="relative group lg:px-4"
            >
              {/* Inset Card Background (Purple/Blue Glow) */}
              <div className={`absolute inset-px rounded-2xl transition-all duration-500 ${
                activeIndex === index 
                ? "bg-gradient-to-br from-purple-500/10 to-purple/40 backdrop-blur-2xl border-2 border-purple-600" 
                : "bg-white/[0.03] border-2 border-purple-600/30 hover:bg-white/[0.06] hover:border-purple-600"
              }`}></div>

              {/* Content */}
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="relative w-full flex flex-col p-6 md:p-8 text-left outline-none"
              >
                <div className="w-full flex items-center justify-between gap-4">
                  <span className={`text-xl font-semibold transition-colors duration-300 ${
                    activeIndex === index ? "text-grey-300" : "text-grey-400"
                  }`}>
                    {item.question}
                  </span>
                  
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    activeIndex === index ? "bg-purple-500/10 rotate-180" : "bg-white/5 border border-white/10"
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-colors ${
                      activeIndex === index ? "text-purple-400" : "text-purple-500"
                    }`} />
                  </div>
                </div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 text-gray-500 text-lg leading-relaxed max-w-3xl">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
