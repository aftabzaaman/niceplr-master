"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type BookCover = {
  src: string;
  alt: string;
};

const COVERS: BookCover[] = [
  { src: "/assets/hero/books/ai-content-cash.png", alt: "The AI Content Cash System" },
  { src: "/assets/hero/books/ad-profit-machine.png", alt: "The Ad Profit Machine" },
  { src: "/assets/hero/books/mini-offers.png", alt: "Fast-Selling Mini Offers Collection" },
  { src: "/assets/hero/books/sale-engine-10k.png", alt: "The $10K Sale Engine" },
  { src: "/assets/hero/books/profit-system.png", alt: "Digital Product Profit System" },
  { src: "/assets/hero/books/youtube-traffic.png", alt: "The YouTube Free Traffic System" },
  { src: "/assets/hero/books/digital-vault.png", alt: "The Ultimate Digital Product Vault" },
];

const INTERVAL_MS = 2800;
const VISIBLE_COUNT = 5;

type Slot = {
  x: number;
  y: number;
  rotate: number;
  scale: number;
  opacity: number;
  zIndex: number;
};

// 5 visible slots arranged left → right in an arc.
// Slot 2 is the focal center (top of stack).
const SLOTS: Slot[] = [
  { x: -150, y: 32, rotate: -30, scale: 0.78, opacity: 0.78, zIndex: 2 },
  { x: -78,  y: 12, rotate: -15, scale: 0.9,  opacity: 0.95, zIndex: 4 },
  { x: 0,    y: 0,  rotate: 0,   scale: 1.0,  opacity: 1.0,  zIndex: 6 },
  { x: 78,   y: 12, rotate: 15,  scale: 0.9,  opacity: 0.95, zIndex: 5 },
  { x: 150,  y: 32, rotate: 30,  scale: 0.78, opacity: 0.78, zIndex: 3 },
];

export function BookShuffler() {
  const [order, setOrder] = useState<number[]>(() => COVERS.map((_, i) => i));
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setOrder((prev) => [...prev.slice(1), prev[0]]);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const visible = order.slice(0, VISIBLE_COUNT);

  return (
    <div
      className="relative w-full aspect-[5/4] max-w-[380px] sm:max-w-[430px] md:max-w-[480px] mx-auto select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      aria-label="Featured digital products"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {visible.map((coverIdx, slotIdx) => {
          const slot = SLOTS[slotIdx];
          const cover = COVERS[coverIdx];

          return (
            <motion.div
              key={coverIdx}
              className="absolute top-1/2 left-1/2"
              style={{
                width: "44%",
                aspectRatio: "5 / 8",
                marginLeft: "-22%",
                marginTop: "-35.2%",
                zIndex: slot.zIndex,
              }}
              initial={{ x: 230, y: 50, rotate: 42, scale: 0.7, opacity: 0 }}
              animate={{
                x: slot.x,
                y: slot.y,
                rotate: slot.rotate,
                scale: slot.scale,
                opacity: slot.opacity,
              }}
              exit={{
                x: -230,
                y: 50,
                rotate: -42,
                scale: 0.7,
                opacity: 0,
                transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 22,
                mass: 1,
              }}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65)] ring-1 ring-white/10">
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  fill
                  priority={slotIdx < 2}
                  sizes="(max-width: 768px) 180px, 220px"
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
