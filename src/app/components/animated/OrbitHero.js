"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function OrbitHero() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[340px] md:max-w-[390px]">
      <motion.div
        className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle_at_center,rgba(205,255,82,0.2),rgba(205,255,82,0.04)_55%,transparent_72%)] blur-2xl"
        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-[16%] overflow-hidden rounded-full border border-[color:color-mix(in_srgb,var(--accent)_36%,var(--surface-border))] bg-[var(--surface)] shadow-[0_0_0_10px_rgba(5,5,5,0.6)]">
        <Image
          src="/dp.png"
          alt="Trishnangshu Goswami (Trish)"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    </div>
  );
}
