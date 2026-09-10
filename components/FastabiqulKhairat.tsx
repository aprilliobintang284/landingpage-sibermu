"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FastabiqulKhairat() {
  return (
    <section
      id="fastabiqul-khairat"
      className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 md:pt-36 md:pb-32 bg-gradient-to-b from-[#09152A] via-[#060E1D] to-[#040914] overflow-hidden flex items-center justify-center text-center"
    >
      {/* 1. Organic Soft Arc Transition from Kemahasiswaan (#F8FBFB) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-7 sm:h-11 md:h-14 block text-[#F8FBFB]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,10 C1080,52 360,52 0,10 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* 2. Flowing Ambient Turquoise Glow originating from top-left (Kemahasiswaan connector) */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 0%, rgba(20, 184, 166, 0.16), transparent 70%), radial-gradient(ellipse 55% 45% at 80% 90%, rgba(15, 159, 145, 0.08), transparent 65%)",
        }}
      />

      {/* 3. Refined Atmospheric Islamic Geometric Watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative w-[500px] h-[500px] sm:w-[680px] sm:h-[680px] md:w-[780px] md:h-[780px] flex items-center justify-center"
        >
          {/* Subtle soft focal glow in center */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#14B8A6]/[0.08] blur-[80px]" />

          <svg
            viewBox="0 0 600 600"
            className="w-full h-full stroke-[#14B8A6] fill-none opacity-[0.045]"
            strokeWidth="1.2"
          >
            {/* Concentric harmonic rings */}
            <circle cx="300" cy="300" r="280" strokeDasharray="3 9" />
            <circle cx="300" cy="300" r="230" strokeWidth="0.8" />
            <circle cx="300" cy="300" r="180" strokeDasharray="5 7" />
            <circle cx="300" cy="300" r="120" strokeWidth="1" />
            <circle cx="300" cy="300" r="60" strokeWidth="0.8" />

            {/* 8-pointed star rosette (Islamic geometric motif) */}
            <rect x="190" y="190" width="220" height="220" rx="3" />
            <rect
              x="190"
              y="190"
              width="220"
              height="220"
              rx="3"
              transform="rotate(45 300 300)"
            />
            <polygon
              points="300,90 320,280 510,300 320,320 300,510 280,320 90,300 280,280"
              strokeWidth="0.8"
            />
            <polygon
              points="300,90 320,280 510,300 320,320 300,510 280,320 90,300 280,280"
              transform="rotate(45 300 300)"
              strokeWidth="0.8"
            />
          </svg>
        </motion.div>
      </div>

      {/* 4. Focal Content Container */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Eyebrow: FASTABIQUL KHAIRAT */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-7"
        >
          <span className="w-8 sm:w-14 h-[1.5px] bg-gradient-to-r from-transparent to-[#14B8A6]" />
          <span className="font-heading text-xs sm:text-[13px] md:text-sm font-bold uppercase tracking-[0.24em] text-[#14B8A6]">
            Fastabiqul Khairat
          </span>
          <span className="w-8 sm:w-14 h-[1.5px] bg-gradient-to-l from-transparent to-[#14B8A6]" />
        </motion.div>

        {/* Quote: Primary Focal Point */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-heading font-extrabold text-3xl sm:text-5xl md:text-[54px] lg:text-[60px] text-white tracking-tight leading-[1.2] sm:leading-[1.14] max-w-4xl mx-auto mb-6 sm:mb-7"
        >
          “Berlomba-lombalah dalam kebaikan.”
        </motion.h2>

        {/* Citation: Pure & Refined */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium tracking-wider text-slate-400"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]/70" />
          <span className="text-[#14B8A6]/90 font-medium">QS. Al-Baqarah: 148</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]/70" />
        </motion.div>
      </div>
    </section>
  );
}
