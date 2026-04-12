"use client";

import React from "react";
import { UserHeader } from "@/components/ui-blocks/user-header";
import Image from "next/image";
import { Play, Download } from "lucide-react";

const RESOURCES = [
  {
    title: "The 6-Day YouTube Accelerator",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400",
    hasVideo: false,
  },
  {
    title: "Google Performance Max Campaigns Unleashed",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400",
    hasVideo: true,
  },
  {
    title: "The Multi-Bucket Savings System",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
    hasVideo: false,
  },
  {
    title: "The Advertising Funnel Blueprint Strategies",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400",
    hasVideo: false,
  },
  {
    title: "Mastering Digital Product Mockups",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400",
    hasVideo: false,
  },
  {
    title: "Scaling Your Agency in 2026",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=400",
    hasVideo: true,
  },
];

export default function UserDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <UserHeader />

      {/* Hero Section */}
      <section className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 tracking-tight mb-4">
            Let's Find Your Next Winning Product
          </h1>
          <p className="text-slate-500 font-medium text-lg">
            Browse 1,102 proven digital assets trusted by entrepreneurs worldwide.
          </p>
        </div>

        <div className="flex flex-col gap-4">
           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-left md:text-right">Popular:</span>
           <div className="flex flex-wrap gap-3">
              {["Content Creation", "Artificial Intelligence", "Productivity Guides"].map((tag) => (
                <button key={tag} className="px-5 py-2.5 bg-white border border-slate-100 text-xs font-bold text-slate-500 rounded-full hover:border-blue-500/30 hover:text-blue-600 transition-all shadow-sm">
                  {tag}
                </button>
              ))}
           </div>
        </div>
      </section>

      {/* Grid Section */}
      <section>
        <h2 className="text-2xl font-black text-blue-900 mb-8 tracking-tight">Trending Resources</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {RESOURCES.map((resource, i) => (
            <div key={i} className="group flex flex-col bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1">
              <div className="p-6 pb-2">
                <h3 className="text-sm font-black text-slate-800 line-clamp-2 leading-relaxed h-10 mb-4">
                  {resource.title}
                </h3>
              </div>
              
              <div className="px-6 relative flex flex-col">
                <div className="w-full aspect-[4/5] bg-blue-100 rounded-[1.5rem] relative overflow-hidden flex items-center justify-center group-hover:bg-blue-200/50 transition-colors">
                   <div className="relative w-[70%] h-[80%] shadow-2xl rounded-sm overflow-hidden transform group-hover:rotate-3 transition-transform duration-500">
                     <Image 
                       src={resource.image} 
                       alt={resource.title} 
                       fill 
                       className="object-cover"
                     />
                   </div>

                   {/* Floating Download Icon */}
                   <button className="absolute bottom-4 right-4 w-10 h-10 bg-white border border-blue-100 rounded-full flex items-center justify-center text-blue-600 shadow-xl hover:scale-110 active:scale-95 transition-all z-20">
                     <Download size={18} />
                   </button>

                   {/* Video Play Overlay */}
                   {resource.hasVideo && (
                     <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-600 shadow-2xl border border-white">
                           <Play size={24} fill="currentColor" />
                        </div>
                     </div>
                   )}
                </div>
              </div>

              <div className="p-4 mt-2">
                 <button className="w-full py-3.5 bg-slate-50 text-slate-300 font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-blue-600 hover:text-white transition-all active:scale-[0.98]">
                    Open
                 </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
