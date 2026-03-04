"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  const handleClick = () => {
    const target = document.getElementById("stats");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      aria-label="Scroll down"
      className="flex cursor-pointer flex-col items-center gap-2 pt-4 border-none bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-light)]">
        Scroll
      </span>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown size={18} className="text-[var(--accent)]/60" />
      </motion.div>

      {/* Animated line */}
      <div className="relative h-8 w-px overflow-hidden">
        <motion.div
          className="absolute inset-x-0 top-0 h-full w-px bg-gradient-to-b from-[var(--accent)]/50 to-transparent"
          animate={{ y: ["-100%", "100%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.button>
  );
}
