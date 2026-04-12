"use client";

import React from "react";
import Image from "next/image";
import { 
  Search, 
  Rocket, 
  Download, 
  ShoppingCart, 
  ShieldCheck, 
  Pencil, 
  Wand2, 
  Wallet, 
  Users,
  ChevronRight,
  Mail
} from "lucide-react";

export default function ContactPage() {
  const categories = [
    {
      icon: <Rocket className="w-6 h-6 text-purple-600" />,
      title: "Getting Started",
      desc: "Everything you need to begin your NicePLR journey.",
      link: "#"
    },
    {
      icon: <Download className="w-6 h-6 text-purple-600" />,
      title: "Downloading",
      desc: "Setting up your files from the Master Library to your device.",
      link: "#"
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-purple-600" />,
      title: "Selling Your Products",
      desc: "Where and how to sell your rebranded digital products.",
      link: "#"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-600" />,
      title: "Licensing & Rights",
      desc: "Understanding what you can (and can't) do with PLR products.",
      link: "#"
    },
    {
      icon: <Pencil className="w-6 h-6 text-purple-600" />,
      title: "Editing & Rebranding",
      desc: "How to customize products and make them your own.",
      link: "#"
    },
    {
      icon: <Wand2 className="w-6 h-6 text-purple-600" />,
      title: "Custom Product Service",
      desc: "Get exclusive, branded products created just for you.",
      link: "#"
    },
    {
      icon: <Wallet className="w-6 h-6 text-purple-600" />,
      title: "Account & Billing",
      desc: "Payment, refunds, and support information.",
      link: "#"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Affiliate Program",
      desc: "Learn how to earn by referring others to NicePLR.",
      link: "#"
    }
  ];

  const resources = [
    "Master Library", "Pricing Plans", "PLR License Terms",
    "Free Resources", "Affiliate Program", "Custom Products"
  ];

  return (
    <main className="min-h-screen bg-[#030014] pb-32 relative overflow-hidden">
      {/* Background Architectural Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-auto z-0 opacity-100 rotate-180 pointer-events-none">
        <Image 
          src="/assets/decor/ellipse-13.svg" 
          alt="" 
          width={1200} 
          height={600} 
          className="w-full h-auto"
          priority
        />
      </div>

      {/* 1. Help Hero Section */}
      <section className="relative w-full pt-40 pb-24 md:pt-56 md:pb-32 overflow-hidden bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest mb-8">
            🛠️ Support Center
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
            How can we help <br />
            <span className="text-purple-500">you?</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 font-medium">
            Find answers to common questions and get help with your account.
          </p>

          {/* Search Mockup */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search for help articles..."
              className="w-full h-16 bg-white/5 border border-white/10 rounded-full pl-16 pr-6 text-white placeholder-gray-500 focus:border-purple-500 focus:bg-white/10 outline-none transition-all backdrop-blur-xl"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="text-sm text-gray-400 mr-2 self-center">Popular:</span>
            {["Getting started", "Download products", "Billing", "Account settings"].map(tag => (
              <button key={tag} className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 transition-all">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Browse by Category */}
      <section className="py-24 bg-white rounded-t-[3rem] md:rounded-t-[4rem] -mt-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#030014] mb-16 tracking-tight">
            Browse by category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {categories.map((cat, i) => (
              <a 
                key={i} 
                href={cat.link}
                className="group p-8 bg-gray-50/50 hover:bg-white border border-gray-100 rounded-3xl text-left transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 hover:-translate-y-1 block"
              >
                <div className="mb-6 bg-white w-12 h-12 flex items-center justify-center rounded-2xl shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-[#030014] mb-2">{cat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{cat.desc}</p>
                <div className="flex items-center gap-2 text-purple-600 text-xs font-bold uppercase tracking-widest">
                  Browse Articles
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 3. Helpful Resources */}
        <div className="container mx-auto px-6 mt-32 max-w-7xl border-t border-gray-100 pt-24 text-left">
          <div className="flex flex-col md:flex-row gap-16 md:items-end mb-16 px-4">
             <div className="flex-1">
               <h2 className="text-3xl font-bold text-[#030014] mb-4">Helpful Resources</h2>
               <p className="text-gray-500 font-medium">Quick access to important links and resources.</p>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((res, i) => (
              <a 
                key={i} 
                href="#" 
                className="flex items-center justify-between p-6 bg-gray-50/50 hover:bg-gray-50 rounded-2xl border border-gray-100 transition-all group"
              >
                <span className="font-bold text-[#030014]">{res}</span>
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-purple-600 transition-colors" />
              </a>
            ))}
          </div>

          <div className="mt-32 text-center py-20 bg-gradient-to-br from-blue-600 to-purple-500 rounded-[3rem] text-white shadow-2xl shadow-purple-500/20">
             <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
             <p className="text-white/80 mb-8 max-w-md mx-auto font-medium">
               Can't find the answer you're looking for? Our support team is here to help.
             </p>
             <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-all">
               <Mail className="w-5 h-5" />
               Email Support
             </button>
             <p className="mt-6 text-sm text-white/60">
               support@niceplr.com — Typically reply within 24 hours
             </p>
          </div>
        </div>
      </section>
    </main>
  );
}
