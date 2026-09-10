"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FastabiqulKhairat() {
  return (
    <section
      id="fastabiqul-khairat"
      className="relative pt-16 pb-14 sm:pt-20 sm:pb-18 md:pt-22 md:pb-20 bg-gradient-to-b from-[#09152A] via-[#060E1D] to-[#040914] overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* 1. Compact Organic Soft Arc Transition from Kemahasiswaan (#F8FBFB) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg
          viewBox="0 0 1440 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-4 sm:h-6 md:h-7 block text-[#F8FBFB]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,4 C1080,30 360,30 0,4 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* 2. Flowing Ambient Turquoise Glow originating from top-left */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 20% 0%, rgba(20, 184, 166, 0.14), transparent 70%), radial-gradient(ellipse 50% 40% at 80% 90%, rgba(15, 159, 145, 0.06), transparent 65%)",
        }}
      />

      {/* 3. Single Atmospheric Geometric Motif & Circular Orbit (Very Low Opacity) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="relative w-[420px] h-[420px] sm:w-[580px] sm:h-[580px] md:w-[680px] md:h-[680px] flex items-center justify-center"
        >
          {/* Subtle soft focal glow in center */}
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-[#14B8A6]/[0.06] blur-[70px]" />

          {/* Thin circular visual anchor orbit */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-[#14B8A6]/[0.07]" />

          <svg
            viewBox="0 0 600 600"
            className="w-full h-full stroke-[#14B8A6] fill-none opacity-[0.028]"
            strokeWidth="1"
          >
            {/* Harmonic rings */}
            <circle cx="300" cy="300" r="260" strokeDasharray="3 9" />
            <circle cx="300" cy="300" r="200" />
            <circle cx="300" cy="300" r="140" strokeDasharray="4 6" />

            {/* Single 8-pointed star motif */}
            <rect x="200" y="200" width="200" height="200" rx="3" />
            <rect
              x="200"
              y="200"
              width="200"
              height="200"
              rx="3"
              transform="rotate(45 300 300)"
            />
          </svg>
        </motion.div>
      </div>

      {/* 4. Focal Content Container */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Eyebrow: FASTABIQUL KHAIRAT */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
        >
          <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#14B8A6]/70" />
          <span className="font-heading text-xs sm:text-[13px] font-bold uppercase tracking-[0.24em] text-[#14B8A6]">
            Fastabiqul Khairat
          </span>
          <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#14B8A6]/70" />
        </motion.div>

        {/* Quote: Primary Focal Point */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white tracking-tight leading-[1.2] sm:leading-[1.15] max-w-3xl mx-auto mb-5 sm:mb-6"
        >
          “Berlomba-lombalah dalam kebaikan.”
        </motion.h2>

        {/* Citation: Pure & Refined */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="flex items-center justify-center gap-2 text-xs sm:text-[13px] font-medium tracking-wider text-slate-400"
        >
          <span className="w-1 h-1 rounded-full bg-[#14B8A6]/70" />
          <span className="text-[#14B8A6]/85 font-medium">QS. Al-Baqarah: 148</span>
          <span className="w-1 h-1 rounded-full bg-[#14B8A6]/70" />
        </motion.div>

        {/* 5. Delicate Bridge Line leading toward AIK Section */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col items-center mt-7 sm:mt-9 pointer-events-none"
        >
          <div className="w-[1.5px] h-8 sm:h-10 bg-gradient-to-b from-[#14B8A6]/40 via-[#14B8A6]/15 to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
