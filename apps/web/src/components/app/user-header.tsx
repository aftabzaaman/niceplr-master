"use client";

import React from "react";
import { Search, Bell, ChevronDown, Globe } from "lucide-react";
import Image from "next/image";

export function UserHeader() {
  return (
    <header className="flex items-center justify-between mb-10">
      {/* Search Bar */}
      <div className="relative w-full max-w-lg group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
        <input 
          type="text" 
          placeholder="Search something..." 
          className="w-full bg-white border border-slate-100 rounded-2xl py-3.5 pl-12 pr-6 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500/30 outline-none transition-all focus:ring-4 focus:ring-blue-500/5 shadow-sm"
        />
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-6">
        {/* Language Selector */}
        <button className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100 rounded-xl transition-colors group">
          <div className="w-5 h-5 rounded-full overflow-hidden border border-slate-100">
             <Image 
               src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" 
               alt="UK Flag" 
               width={20} 
               height={20} 
               className="object-cover h-full"
             />
          </div>
          <span className="text-xs font-black text-slate-500 uppercase tracking-widest group-hover:text-slate-900">EN</span>
          <ChevronDown size={14} className="text-slate-400 group-hover:text-slate-600" />
        </button>

        {/* Notifications */}
        <button className="relative p-2.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all group">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 border-2 border-white rounded-full" />
        </button>

        {/* User Profile */}
        <button className="flex items-center gap-2 p-1 hover:bg-slate-100 rounded-2xl transition-all">
          <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-slate-100 bg-slate-200 relative">
             <Image 
               src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" 
               alt="User Avatar" 
               fill 
               className="object-cover"
             />
          </div>
        </button>
      </div>
    </header>
  );
}
