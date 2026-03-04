"use client";

import { motion } from "motion/react";

const waveOne = [
  "M0,92 C180,40 360,150 540,96 C720,45 900,142 1080,98 L1080,260 L0,260 Z",
  "M0,102 C180,138 360,36 540,98 C720,154 900,52 1080,104 L1080,260 L0,260 Z",
  "M0,92 C180,40 360,150 540,96 C720,45 900,142 1080,98 L1080,260 L0,260 Z",
];

const waveTwo = [
  "M0,126 C220,66 420,170 640,120 C820,80 960,160 1080,128 L1080,260 L0,260 Z",
  "M0,130 C220,164 420,74 640,128 C820,170 960,92 1080,132 L1080,260 L0,260 Z",
  "M0,126 C220,66 420,170 640,120 C820,80 960,160 1080,128 L1080,260 L0,260 Z",
];

export default function WaveBackground({ className = "" }) {
  const containerClass = className || "inset-0";

  return (
    <div className={`pointer-events-none absolute overflow-hidden ${containerClass}`}
      style={{
        maskImage: "linear-gradient(to bottom, black 30%, rgba(0,0,0,0.3) 55%, transparent 72%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 30%, rgba(0,0,0,0.3) 55%, transparent 72%)",
      }}
    >
      {/* Ambient glow — covers full hero area */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_15%,rgba(158,180,210,0.20),transparent_60%)]"
        animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.02, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Waves — full width, spanning upper-mid hero behind content */}
      <motion.svg
        viewBox="0 0 1080 260"
        className="absolute w-[160%] min-w-[980px] -translate-x-[18%]"
        preserveAspectRatio="none"
        style={{ top: "18%", height: "50%", opacity: 0.35 }}
        animate={{ x: [0, -20, 0], y: [0, -4, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.path
          d={waveOne[0]}
          fill="rgba(158,180,210,0.14)"
          animate={{ d: waveOne }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d={waveTwo[0]}
          fill="rgba(46,58,76,0.22)"
          animate={{ d: waveTwo }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}
