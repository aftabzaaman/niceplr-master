     "use client";

import React from "react";
import Image from "next/image";
import { Check, Sparkles, Building2, User, Zap } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Test The Water",
      price: "0",
      desc: "Perfect for secondary projects and side hustles.",
      icon: <User className="w-6 h-6 text-purple-600" />,
      features: [
        "5 Daily Downloads",
        "Personal Use License",
        "Basic Support",
        "Access to Master Library",
        "Monthly Updates"
      ],
      cta: "Start Free",
      featured: false
    },
    {
      name: "Master Library",
      price: "149",
      desc: "Our most popular choice for digital entrepreneurs.",
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      features: [
        "Unlimited Daily Downloads",
        "Master Resell Rights (MRR)",
        "Premium Video Courses",
        "Resell as your own",
        "Priority Email Support",
        "Commercial Use License"
      ],
      cta: "Get Started Now",
      featured: true
    },
    {
      name: "Pro Subscription",
      price: "99",
      desc: "Advanced features for scaling your agency.",
      icon: <Building2 className="w-6 h-6 text-purple-600" />,
      features: [
        "White-label Branding",
        "API Access (Early)",
        "Custom Product Requests",
        "1-on-1 Strategy Call",
        "Unrestricted PLR Rights",
        "24/7 Dedicated Support"
      ],
      cta: "Contact Sales",
      featured: false
    }
  ];

  return (
    <main className="min-h-screen bg-[#030320] relative overflow-hidden">
      {/* Background Architectural Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-auto z-0 rotate-180 pointer-events-none">
        <Image 
          src="/assets/decor/ellipse-13.svg" 
          alt="" 
          width={1200} 
          height={600} 
          className="w-full h-auto"
          priority
        />
      </div>

      {/* 1. Pricing Hero Section */}
      <section className="relative w-full pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-500 text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles className="w-3 h-3" />
            Simple & Transparent
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
            Scale your empire with <br />
            <span className="text-purple-600">professional assets</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed">
            Choose the membership that fits your growth stage. All plans include 
            lifetime access to your downloaded products.
          </p>
        </div>
        
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* 2. Pricing Content (Light Theme) */}
      <section className="relative py-24 md:py-32 bg-white rounded-t-[3rem] md:rounded-t-[4rem] -mt-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className={`relative group p-8 md:p-12 rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 border ${
                  plan.featured 
                    ? "bg-[#f8f7ff] border-purple-200 ring-2 ring-purple-500/20 scale-105 z-20" 
                    : "bg-gray-50/50 border-gray-100 hover:bg-white z-10"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="mb-8 w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                  {plan.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">{plan.desc}</p>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl md:text-5xl font-black text-slate-900">${plan.price}</span>
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">/month</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-purple-100">
                        <Check className="w-3 h-3 text-purple-600" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-5 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${
                    plan.featured 
                      ? "bg-purple-600 text-white shadow-[0_4px_25px_rgba(147,51,234,0.3)] hover:opacity-90" 
                      : "bg-white text-slate-900 border border-slate-200 hover:border-purple-600 hover:text-purple-600 shadow-sm"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Spacing Polish */}
          <div className="mt-32 text-center">
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">
              Safe & Secure Payments
            </p>
            <div className="flex justify-center flex-wrap gap-8 opacity-40 grayscale">
              {/* Payment Mockups */}
              <div className="h-6 w-16 bg-slate-200 rounded animate-pulse" />
              <div className="h-6 w-16 bg-slate-200 rounded animate-pulse" />
              <div className="h-6 w-16 bg-slate-200 rounded animate-pulse" />
              <div className="h-6 w-16 bg-slate-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
