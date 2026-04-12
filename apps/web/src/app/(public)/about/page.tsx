import React from "react";
import Image from "next/image";
import { ImageMaskSection } from "@/components/ui-blocks/image-mask-section";
import { Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030320] pb-32 relative overflow-hidden">
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

      {/* 1. About Hero Section */}
      <section className="relative w-full pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-500 text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles className="w-3 h-3" />
            Our Vision & Mission
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
            Your home for digital <br />
            and publishing-grade <br />
            <span className="text-purple-600">product creation</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed">
            We provide creators and businesses with the tools, templates, and 
            expertise needed to launch premium digital assets instantly.
          </p>
        </div>
        
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* 2. Story Section 1 */}
      <ImageMaskSection 
        badge="THE PROBLEM"
        headlinePrefix="There has to be"
        headlineItalic="a better way."
        paragraphs={[
          "For years, creating high-quality digital products meant choosing between expensive agencies or months of amateur trial and error.",
          "We saw creators struggling to maintain consistency while trying to scale their output and reach.",
          "NicePLR was born out of the necessity to bridge that gap—providing institutional quality at industrial speed."
        ]}
        images={[
          "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
        ]}
      />

      {/* 3. Story Section 2 */}
      <ImageMaskSection 
        badge="OUR APPROACH"
        headlinePrefix="Let's redefine the"
        headlineItalic="whole industry."
        paragraphs={[
          "We don't just provide files; we provide complete systems for success. Every asset in our library is vetted for conversion and utility.",
          "By combining professional design with strategic marketing insights, we enable you to launch products that actually sell.",
          "Our mission is to empower the next generation of digital entrepreneurs with publishing-grade materials."
        ]}
        images={[
          "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
          "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
        ]}
      />

      {/* 4. Story Section 3 */}
      <ImageMaskSection 
        badge="2025 — THE DISRUPTION"
        headlinePrefix="Creation reinvented for"
        headlineItalic="speed and scale."
        paragraphs={[
          "Once our systems were perfected, we launched our Custom Product Service, creating tailored, publishing-grade products.",
          "But we didn't stop there. We took our workflows and systemized them into AI Product Generator, our most powerful tool — yet to come.",
          "Soon, anyone will be able to create signature products in a fraction of the time without the cost, complexity, or overwhelm."
        ]}
        images={[
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
        ]}
      />

      {/* 5. Team & Vision Section */}
      <section className="py-24 md:py-32 bg-[#030320] text-white">
        <div className="container mx-auto px-6 text-center mb-24">
          <span className="inline-block bg-white/5 border border-white/10 text-white text-[11px] font-bold tracking-[0.1em] px-4 py-1.5 rounded-full mb-8 font-sans">
            THE DREAM TEAM
          </span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-8">
            The new era of <br />
            <span className="text-purple-600">infoproduct creation</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto mb-12 font-medium">
            Meet the visionaries behind NicePLR who are dedicated to helping
            you scale your digital empire.
          </p>
        </div>

        {/* Team Grid */}
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: "John Doe", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
            { name: "Jane Smith", role: "Head of Design", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80" },
            { name: "Mike Ross", role: "Lead Developer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80" }
          ].map((member, i) => (
            <div key={i} className="group flex flex-col items-center">
              <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image 
                  src={member.img} 
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-sm font-bold tracking-widest text-purple-600 uppercase">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
