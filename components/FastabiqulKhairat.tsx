"use client";

import React from "react";
import { motion } from "framer-motion";
import { Amiri } from "next/font/google";

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

export default function FastabiqulKhairat() {
  return (
    <section
      id="fastabiqul-khairat"
      className="scroll-mt-20 relative pt-10 pb-10 sm:pt-12 sm:pb-12 md:pt-14 md:pb-14 bg-gradient-to-b from-[#0E2445] via-[#0B1E3B] to-[#091A33] overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* =================================================================== */}
      {/* 1. TOP SHALLOW CURVED TRANSITION (From Kemahasiswaan Light Mint)     */}
      {/* Ultra-shallow, organic curve with subtle turquoise hairline         */}
      {/* =================================================================== */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 24"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-4 sm:h-5 md:h-6 block"
        >
          {/* Shallow curve filled with #F8FBFB for seamless upward blending */}
          <path
            d="M0 0 L1440 0 L1440 20 Q720 0 0 20 Z"
            fill="#F8FBFB"
          />
          {/* Subtle turquoise hairline along the curve */}
          <path
            d="M0 20 Q720 0 1440 20"
            stroke="#14B8A6"
            strokeWidth="1"
            strokeOpacity="0.2"
            fill="none"
          />
        </svg>
      </div>

      {/* =================================================================== */}
      {/* 2. SUBTLE TURQUOISE AMBIENT GLOW                                    */}
      {/* =================================================================== */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(20, 184, 166, 0.12) 0%, rgba(14, 36, 69, 0.02) 65%, transparent 80%)",
        }}
      />

      {/* =================================================================== */}
      {/* 3. COMPACT CONTENT — SHORT REFLECTIVE PAUSE                         */}
      {/* =================================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto px-5 sm:px-8 relative z-10 my-0.5"
      >
        {/* Arabic Calligraphy (Primary Focal Point) */}
        <p
          dir="rtl"
          lang="ar"
          className={`${amiri.className} text-2xl sm:text-3xl md:text-[38px] text-white font-normal tracking-wide leading-[1.4] select-none mb-1 sm:mb-1.5`}
        >
          فَاسْتَبِقُوا الْخَيْرَاتِ
        </p>

        {/* Small Uppercase Turquoise Identifier */}
        <span className="text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-[0.24em] text-[#2DD4BF] block mb-1.5 sm:mb-2">
          Fastabiqul Khairat
        </span>

        {/* Translation (Medium Weight, Clean & Readable) */}
        <h2 className="font-heading font-medium text-base sm:text-lg md:text-xl text-slate-100 tracking-tight leading-snug max-w-lg mx-auto mb-1">
          “Berlomba-lombalah dalam kebaikan.”
        </h2>

        {/* Citation (Muted Turquoise / Neutral) */}
        <p className="text-[11px] sm:text-xs text-teal-200/75 font-medium tracking-wide">
          QS. Al-Baqarah: 148
        </p>
      </motion.div>

      {/* =================================================================== */}
      {/* 4. BOTTOM SHALLOW CURVED TRANSITION (Into AIK Light Mint)           */}
      {/* Ultra-shallow, organic curve mirroring the top transition           */}
      {/* =================================================================== */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 24"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-4 sm:h-5 md:h-6 block"
        >
          {/* Shallow curve filled with #F8FBFB for seamless downward blending */}
          <path
            d="M0 24 L1440 24 L1440 4 Q720 24 0 4 Z"
            fill="#F8FBFB"
          />
          {/* Subtle turquoise hairline along the curve */}
          <path
            d="M0 4 Q720 24 1440 4"
            stroke="#14B8A6"
            strokeWidth="1"
            strokeOpacity="0.2"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}

