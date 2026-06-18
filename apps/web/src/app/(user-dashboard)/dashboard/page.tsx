"use client";

import React, { useState } from "react";
import { UserHeader } from "@/components/ui-blocks/user-header";
import Image from "next/image";
import { Play, Download, Lock, CheckCircle, Sparkles, BookOpen, ArrowRight, Bookmark } from "lucide-react";

// Mock Data representing different sections
const MY_LIBRARY = [
  {
    title: "The 6-Day YouTube Accelerator Course",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400",
    hasVideo: true,
    category: "Video Course",
    format: "MP4 Video + PDF",
    id: "lib-1",
  },
  {
    title: "Mastering Digital Product Mockups & Assets",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400",
    hasVideo: false,
    category: "Design Kit",
    format: "Figma + PSD Templates",
    id: "lib-2",
  },
];

const HOT_FREE_PRODUCTS = [
  {
    title: "100+ High-Converting Hook Templates for Creators",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
    category: "Marketing",
    format: "PDF Guide",
    downloads: "4,102",
    id: "free-1",
  },
  {
    title: "AI Content Creation Prompts Toolkit",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=400",
    category: "Artificial Intelligence",
    format: "Notion Template",
    downloads: "2,840",
    id: "free-2",
  },
  {
    title: "No-Code SaaS Landing Page UI Kit",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400",
    category: "SaaS & Web",
    format: "Figma File",
    downloads: "1,920",
    id: "free-3",
  },
];

const PREMIUM_PRODUCTS = [
  {
    title: "Google Performance Max Campaigns Unleashed",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400",
    category: "Paid Traffic",
    price: "$49",
    tier: "Pro / Expert",
    hasVideo: true,
    id: "prem-1",
  },
  {
    title: "The Multi-Bucket Savings & Finance Blueprint",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400",
    category: "Finance & Spreadsheets",
    price: "$29",
    tier: "Pro",
    hasVideo: false,
    id: "prem-2",
  },
  {
    title: "Scaling Your Agency to $10k/Month Systems",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=400",
    category: "Business Strategy",
    price: "$79",
    tier: "Expert Only",
    hasVideo: true,
    id: "prem-3",
  },
];

export default function UserDashboardPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="max-w-7xl mx-auto pb-16">
      <UserHeader />

      {/* Hero Welcome Banner */}
      <section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-xl shadow-blue-950/10">
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/10 to-indigo-500/0 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-xs font-black uppercase tracking-wider mb-6">
            <Sparkles size={12} className="text-yellow-400 fill-yellow-400" />
            <span>Welcome Back, Creator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
            Ready to deploy your next digital asset?
          </h1>
          <p className="text-blue-100/70 font-medium text-base md:text-lg">
            Explore your library, download free items, or unlock advanced products.
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap gap-3">
          {["All Library", "Marketing Guides", "Figma Kits", "AI Templates"].map((tag, idx) => (
            <button 
              key={tag} 
              onClick={() => setActiveTab(idx === 0 ? "all" : tag.toLowerCase())}
              className={`px-5 py-3 rounded-2xl text-xs font-bold transition-all shadow-sm ${
                (idx === 0 && activeTab === "all") || activeTab === tag.toLowerCase()
                  ? "bg-white text-blue-900 scale-[1.03]" 
                  : "bg-white/10 border border-white/5 text-white hover:bg-white/20"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Section 1: My Library */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 shadow-sm">
              <CheckCircle size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">My Library</h2>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Unlocked & Purchased Assets</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-slate-100 text-slate-500 font-black text-xs rounded-full">
            {MY_LIBRARY.length} Items
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MY_LIBRARY.map((item) => (
            <div 
              key={item.id} 
              className="group flex flex-col sm:flex-row bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-full sm:w-[42%] aspect-[4/5] sm:aspect-auto bg-slate-50 relative flex items-center justify-center p-6 border-r border-slate-50">
                <div className="relative w-[75%] h-[85%] shadow-xl rounded-md overflow-hidden transform group-hover:rotate-2 group-hover:scale-[1.02] transition-all duration-500">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  {item.hasVideo && (
                    <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px] flex items-center justify-center">
                      <div className="w-11 h-11 bg-white/90 rounded-full flex items-center justify-center text-blue-600 shadow-md">
                        <Play size={18} fill="currentColor" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 border border-emerald-100/50 px-2.5 py-1 rounded-full inline-block mb-3">
                    Owned
                  </span>
                  <h3 className="text-base font-black text-slate-800 leading-snug line-clamp-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-bold">{item.category} • {item.format}</p>
                </div>

                <div className="flex gap-2.5 mt-6">
                  <button className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-blue-600/10">
                    <BookOpen size={14} />
                    Access Asset
                  </button>
                  <button className="p-3 bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 text-slate-500 hover:text-blue-600 rounded-xl transition-colors">
                    <Download size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Hot Free Products */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
              <Download size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">Hot Free Products</h2>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Explore & download directly</p>
            </div>
          </div>
          <button className="flex items-center gap-1 text-xs font-black text-blue-600 hover:text-blue-700 uppercase tracking-wider transition-colors">
            See All Free
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOT_FREE_PRODUCTS.map((item) => (
            <div 
              key={item.id} 
              className="group flex flex-col bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="p-6 pb-2">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full mb-3 inline-block">
                  {item.category}
                </span>
                <h3 className="text-sm font-black text-slate-800 line-clamp-2 leading-relaxed h-10 mb-4">
                  {item.title}
                </h3>
              </div>

              <div className="px-6 relative flex flex-col">
                <div className="w-full aspect-[4/5] bg-slate-50 rounded-[1.5rem] relative overflow-hidden flex items-center justify-center group-hover:bg-slate-100/50 transition-colors">
                  <div className="relative w-[70%] h-[80%] shadow-2xl rounded-sm overflow-hidden transform group-hover:rotate-2 transition-all duration-500">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <button className="absolute bottom-4 right-4 w-10 h-10 bg-white border border-blue-100 rounded-full flex items-center justify-center text-blue-600 shadow-xl hover:scale-110 active:scale-95 transition-all">
                    <Download size={16} />
                  </button>
                </div>
              </div>

              <div className="p-6 mt-2 flex items-center justify-between border-t border-slate-50 bg-slate-50/20">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{item.format}</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{item.downloads} Downloads</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Premium Products to Explore */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-50 border border-purple-100 rounded-xl flex items-center justify-center text-purple-600 shadow-sm">
              <Lock size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">Explore Premium Products</h2>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Unlock via membership or buy directly</p>
            </div>
          </div>
          <button className="flex items-center gap-1 text-xs font-black text-purple-600 hover:text-purple-700 uppercase tracking-wider transition-colors">
            See Catalog
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PREMIUM_PRODUCTS.map((item) => (
            <div 
              key={item.id} 
              className="group flex flex-col bg-white rounded-[2rem] border border-slate-100 hover:border-purple-100/50 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_50px_rgba(147,51,234,0.04)] transition-all duration-500 hover:-translate-y-1 relative"
            >
              {/* Premium Accent Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-400/10 to-transparent pointer-events-none rounded-bl-full" />

              <div className="p-6 pb-2">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest bg-purple-50 px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-base font-black text-purple-600 bg-purple-50/50 border border-purple-100/30 px-3 py-0.5 rounded-lg">
                    {item.price}
                  </span>
                </div>
                <h3 className="text-sm font-black text-slate-800 line-clamp-2 leading-relaxed h-10 mb-4">
                  {item.title}
                </h3>
              </div>

              <div className="px-6 relative flex flex-col">
                <div className="w-full aspect-[4/5] bg-slate-50 rounded-[1.5rem] relative overflow-hidden flex items-center justify-center p-6 group-hover:bg-purple-50/10 transition-colors">
                  <div className="relative w-[70%] h-[80%] shadow-2xl rounded-sm overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500 filter grayscale group-hover:grayscale-0">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  {/* Lock Overlay */}
                  <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-800 shadow-xl">
                      <Lock size={18} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 mt-4">
                <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all shadow-lg shadow-purple-600/10 active:scale-[0.98] flex items-center justify-center gap-2">
                  <Lock size={12} />
                  Unlock Product ({item.tier})
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
