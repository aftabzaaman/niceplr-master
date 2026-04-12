"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const footerLinks = {
    pages: [
      { name: "Home", href: "#" },
      { name: "Resource", href: "#" },
      { name: "Free Resource", href: "#" },
      { name: "Digital Tool Repository", href: "#" },
      { name: "Digital Product Idea", href: "#" },
      { name: "Partner Program,", href: "#" },
      { name: "Contact", href: "#" },
    ],
    products: [
      { name: "Master Library", href: "#" },
      { name: "Custom Book Service", href: "#" },
      { name: "Custom Digital product", href: "#" },
      { name: "PRL Digital product", href: "#" },
    ],
    legal: [
      { name: "Terms & Condition", href: "#" },
      { name: "Privacy & Cookie Policy", href: "#" },
      { name: "Cookie Settings", href: "#" },
      { name: "Private Label Rights", href: "#" },
      { name: "Partner Terms", href: "#" },
    ],
  };

  return (
    <footer className="relative w-full bg-[#030320] text-white pt-20 pb-10 overflow-hidden font-sans">
      {/* Background Effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[300px] pointer-events-none opacity-80">
        <Image
          src="/assets/footer/bottom_grid_over_gradient.png"
          alt=""
          fill
          className="object-contain object-bottom"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[450px] pointer-events-none">
        <Image
          src="/assets/footer/bottom_glow_gradient.svg"
          alt=""
          fill
          className="object-contain object-bottom opacity-90"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-16 pb-16 border-t border-b border-white/10">
          {/* Brand & Info */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="text-4xl font-extrabold tracking-tight">
              Nice<span className="bg-linear-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">PLR</span>
            </Link>
            
            <div className="space-y-6 text-sm text-gray-400 font-light leading-relaxed">
              <div className="space-y-1">
                <p>Amsterdam-oost</p>
                <p>Batjanstraat 13</p>
                <p>1094RC Amsterdam</p>
              </div>
              
              <div className="space-y-1">
                <p>IBAN: NL30INGB0000002002</p>
                <p>BIC: INGBNL2A</p>
                <p>KvK: 41211754</p>
              </div>
            </div>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h3 className="text-xl font-bold mb-8">Pages</h3>
            <ul className="space-y-4">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-xl font-bold mb-8">Products</h3>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-xl font-bold mb-8">Legal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500">
            © 2025. NicePLR – All rights reserved
          </p>
          
          <div className="flex items-center gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <Twitter className="w-4 h-4" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <Instagram className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
