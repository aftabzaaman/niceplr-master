"use client";

import React from "react";
import { Search } from "lucide-react";

export function UserHeader() {
  return (
    <header className="flex items-center justify-between mb-6">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search your library..."
          className="w-full bg-white border border-slate-200 rounded-lg py-2 pl-9 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400"
        />
      </div>
    </header>
  );
}
