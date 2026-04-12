"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Master Library", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function MainHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-center p-6 md:p-8">
      <nav 
        className={`relative w-full max-w-7xl h-16 rounded-full flex items-center justify-between px-6 transition-all duration-300 border border-purple-500/50 
                   ${isScrolled 
                     ? "bg-white/5 backdrop-blur-2xl shadow-2xl shadow-purple-500/10" 
                     : "bg-white/3 backdrop-blur-xl"}`}
      >
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tighter text-white hover:opacity-80 transition-opacity">
          Nice<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">PLR</span>
        </Link>
        
        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.label} 
              href={item.href} 
              className="text-[13px] lg:text-sm font-semibold text-gray-400 hover:text-white transition-colors tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Global Actions */}
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-sm font-bold text-white px-7 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-all shadow-[0_4px_20px_rgba(147,51,234,0.3)]"
          >
            Login
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white hover:bg-white/5 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 right-0 p-4 md:hidden"
            >
              <div className="bg-[#030014]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex flex-col gap-6 shadow-3xl">
                {NAV_ITEMS.map((item) => (
                  <Link 
                    key={item.label} 
                    href={item.href} 
                    className="text-lg font-semibold text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
