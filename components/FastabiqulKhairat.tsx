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
      className="scroll-mt-20 relative pt-16 pb-16 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 bg-gradient-to-b from-[#0E2445] via-[#0B1E3B] to-[#091A33] overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* =================================================================== */}
      {/* 1. TOP CURVED TRANSITION (From Kemahasiswaan Light Mint)            */}
      {/* Shallow, organic, elegant curve with subtle turquoise hairline      */}
      {/* =================================================================== */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 32"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-5 sm:h-7 md:h-8 block"
        >
          {/* Shallow curve filled with #F8FBFB to create seamless upward flow */}
          <path
            d="M0 0 L1440 0 L1440 28 Q720 0 0 28 Z"
            fill="#F8FBFB"
          />
          {/* Subtle turquoise accent hairline along the curve */}
          <path
            d="M0 28 Q720 0 1440 28"
            stroke="#14B8A6"
            strokeWidth="1"
            strokeOpacity="0.25"
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
            "radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.13) 0%, rgba(14, 36, 69, 0.04) 55%, transparent 72%)",
        }}
      />

      {/* =================================================================== */}
      {/* 3. CENTERED CONTENT HIERARCHY                                       */}
      {/* =================================================================== */}
      <div className="max-w-2xl mx-auto px-5 sm:px-8 relative z-10 my-1 sm:my-2">
        {/* Eyebrow kecil di atas bahasa Arab */}
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[11px] sm:text-xs font-heading font-bold uppercase tracking-[0.26em] text-[#2DD4BF] block mb-2 sm:mb-2.5"
        >
          Fastabiqul Khairat
        </motion.span>

        {/* 1. Bahasa Arab (Focal Point Utama) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="mb-2.5 sm:mb-3"
        >
          <p
            dir="rtl"
            lang="ar"
            className={`${amiri.className} text-3xl sm:text-4xl md:text-[46px] text-white font-normal tracking-wide leading-[1.6] select-none`}
          >
            فَاسْتَبِقُوا الْخَيْرَاتِ
          </p>
        </motion.div>

        {/* 2. Terjemahan Quote Utama */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="font-heading font-bold text-xl sm:text-2xl md:text-[26px] text-white tracking-tight leading-snug max-w-xl mx-auto mb-2 sm:mb-2.5"
        >
          “Berlomba-lombalah dalam kebaikan.”
        </motion.h2>

        {/* 3. Sitasi Muted & Readable */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.18 }}
          className="text-xs sm:text-[13px] text-slate-300 font-medium tracking-wide"
        >
          QS. Al-Baqarah: 148
        </motion.p>
      </div>

      {/* =================================================================== */}
      {/* 4. BOTTOM CURVED TRANSITION (Into AIK Light Mint)                   */}
      {/* Shallow, organic, elegant curve echoing the top transition          */}
      {/* =================================================================== */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 32"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-5 sm:h-7 md:h-8 block"
        >
          {/* Shallow curve filled with #F8FBFB to create seamless downward flow */}
          <path
            d="M0 32 L1440 32 L1440 4 Q720 32 0 4 Z"
            fill="#F8FBFB"
          />
          {/* Subtle turquoise accent hairline along the curve */}
          <path
            d="M0 4 Q720 32 1440 4"
            stroke="#14B8A6"
            strokeWidth="1"
            strokeOpacity="0.25"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}
