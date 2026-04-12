"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const IMAGES = [
  "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1510172951991-856a654063f9?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=400",
];

interface ColumnProps {
  images: string[];
  direction?: "up" | "down";
  speed?: number;
}

const Column = ({ images, direction = "up", speed = 20 }: ColumnProps) => {
  const scrollValue = direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className="flex flex-col gap-4 overflow-hidden h-full py-4">
      <motion.div
        animate={{ y: scrollValue }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-4"
      >
        {[...images, ...images].map((src, i) => (
          <div 
            key={i} 
            className="w-full aspect-[3/4] relative rounded-lg overflow-hidden border border-white/10 shadow-lg"
          >
            <Image 
              src={src} 
              alt={`Book Cover ${i}`} 
              fill 
              className="object-cover"
              sizes="300px"
              unoptimized
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export function InfiniteScrollGallery() {
  const col1 = IMAGES.slice(0, 5);
  const col2 = IMAGES.slice(5, 10);
  const col3 = IMAGES.slice(2, 7);

  return (
    <div className="relative w-full h-full bg-slate-50/20 backdrop-blur-sm grid grid-cols-3 gap-4 px-4 overflow-hidden">
      {/* Visual Directions: Up, Down, Up */}
      <Column images={col1} direction="up" speed={25} />
      <Column images={col2} direction="down" speed={30} />
      <Column images={col3} direction="up" speed={20} />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10" />
    </div>
  );
}
