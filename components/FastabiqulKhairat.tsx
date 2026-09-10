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
      className="scroll-mt-24 relative -mt-12 sm:-mt-16 md:-mt-20 z-20 pt-12 pb-12 sm:pt-14 sm:pb-14 md:pt-16 md:pb-16 bg-gradient-to-b from-[#09162C] via-[#060E1D] to-[#040914] rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[60px] border-t border-[#14B8A6]/25 shadow-[0_-12px_35px_rgba(4,9,20,0.16)] overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* Subtle turquoise glow near the top transition boundary */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 30% 0%, rgba(20, 184, 166, 0.15), transparent 70%), radial-gradient(ellipse 45% 35% at 75% 100%, rgba(15, 159, 145, 0.06), transparent 65%)",
        }}
      />

      {/* Atmospheric subtle Islamic geometric motif & circular orbit */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden">
        <div className="relative w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] flex items-center justify-center">
          {/* Soft central ambient glow */}
          <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-[#14B8A6]/[0.06] blur-[60px]" />

          {/* Thin circular visual anchor orbit */}
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-88 md:h-88 rounded-full border border-[#14B8A6]/[0.06]" />

          <svg
            viewBox="0 0 600 600"
            className="w-full h-full stroke-[#14B8A6] fill-none opacity-[0.025]"
            strokeWidth="1"
          >
            <circle cx="300" cy="300" r="250" strokeDasharray="3 8" />
            <circle cx="300" cy="300" r="180" />
            <rect x="210" y="210" width="180" height="180" rx="3" />
            <rect
              x="210"
              y="210"
              width="180"
              height="180"
              rx="3"
              transform="rotate(45 300 300)"
            />
          </svg>
        </div>
      </div>

      {/* Content Hierarchy Container */}
      <div className="max-w-3xl mx-auto px-5 sm:px-8 relative z-10">
        {/* 1. Arabic Phrase (Focal Visual - Crisp Pure White with subtle glow) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-3.5 sm:mb-4.5"
        >
          <p
            dir="rtl"
            lang="ar"
            className={`${amiri.className} text-3xl sm:text-4xl md:text-[44px] text-white font-normal tracking-wide leading-[1.6] select-none drop-shadow-[0_2px_14px_rgba(255,255,255,0.2)]`}
          >
            فَاسْتَبِقُوا الْخَيْرَاتِ
          </p>
        </motion.div>

        {/* 2. Secondary Heading: ──── FASTABIQUL KHAIRAT ──── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="flex items-center justify-center gap-2.5 sm:gap-3.5 mb-3 sm:mb-4"
        >
          <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#2DD4BF]/70" />
          <h3 className="font-heading text-xs sm:text-[13px] md:text-sm font-bold uppercase tracking-[0.24em] text-[#2DD4BF]">
            Fastabiqul Khairat
          </h3>
          <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-[#2DD4BF]/70" />
        </motion.div>

        {/* 3. Supporting Translation Quote (High Contrast Pure White) */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-heading font-extrabold text-xl sm:text-2xl md:text-[28px] lg:text-[30px] text-white tracking-tight leading-[1.25] sm:leading-[1.2] max-w-2xl mx-auto mb-3.5 sm:mb-4 drop-shadow-sm"
        >
          “Berlomba-lombalah dalam kebaikan.”
        </motion.h2>

        {/* 4. Citation Detail (Readable light neutral & turquoise) */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-xs sm:text-[13px] font-medium tracking-wider text-slate-300"
        >
          <span className="w-1 h-1 rounded-full bg-[#2DD4BF]" />
          <span className="text-[#2DD4BF] font-semibold">QS. Al-Baqarah: 148</span>
          <span className="w-1 h-1 rounded-full bg-[#2DD4BF]" />
        </motion.div>
      </div>
    </section>
  );
}
