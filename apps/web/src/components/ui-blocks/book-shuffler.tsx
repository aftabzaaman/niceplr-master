"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type BookCover = {
  src: string;
  alt: string;
};

const COVERS: BookCover[] = [
  { src: "/assets/hero/books/1.png", alt: "Transform Big Dreams Into Bold Daily Actions" },
  { src: "/assets/hero/books/2.png", alt: "Master Your Finances" },
  { src: "/assets/hero/books/3.png", alt: "Magnet Marketing" },
  { src: "/assets/hero/books/4.png", alt: "Strategies for Financial Success" },
  { src: "/assets/hero/books/5.png", alt: "Monetization of Social Media" },
  { src: "/assets/hero/books/6.png", alt: "How to Start a Blog" },
];

const INTERVAL_MS = 2600;
const VISIBLE_DEPTH = 4;

export function BookShuffler() {
  const [order, setOrder] = useState<number[]>(() => COVERS.map((_, i) => i));
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setOrder((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative w-full aspect-[5/8] max-w-[256px] sm:max-w-[285px] md:max-w-[315px] mx-auto select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      aria-label="Featured digital products"
    >
      <AnimatePresence initial={false}>
        {order.map((coverIdx, stackPos) => {
          const cover = COVERS[coverIdx];
          const isTop = stackPos === 0;
          const depth = Math.min(stackPos, VISIBLE_DEPTH);
          const hidden = stackPos > VISIBLE_DEPTH;

          const scale = 1 - depth * 0.06;
          const y = depth * 18;
          const x = depth * 10;
          const rotate = depth * -2;
          const opacity = hidden ? 0 : 1 - depth * 0.12;
          const blur = depth === 0 ? 0 : Math.min(depth * 0.6, 2);
          const zIndex = COVERS.length - stackPos;

          return (
            <motion.div
              key={coverIdx}
              className="absolute inset-0"
              style={{ zIndex }}
              initial={{
                opacity: 0,
                scale: scale - 0.04,
                x: x + 40,
                y: y + 20,
                rotate: rotate - 4,
              }}
              animate={{
                opacity,
                scale,
                x,
                y,
                rotate,
                filter: `blur(${blur}px)`,
              }}
              exit={{
                opacity: 0,
                x: -180,
                y: -40,
                rotate: -18,
                scale: scale * 0.9,
                transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
              }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 22,
                mass: 0.9,
              }}
            >
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65)] ring-1 ring-white/10"
                style={{
                  boxShadow: isTop
                    ? "0 35px 80px -20px rgba(59,130,246,0.35), 0 25px 60px -15px rgba(0,0,0,0.6)"
                    : undefined,
                }}
              >
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  fill
                  priority={stackPos < 2}
                  sizes="(max-width: 768px) 340px, 420px"
                  className="object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
