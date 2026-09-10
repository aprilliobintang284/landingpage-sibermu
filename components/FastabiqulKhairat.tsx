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
      className="relative py-8 sm:py-10 md:py-12 bg-gradient-to-b from-[#F8FBFB] via-[#0A1D39] to-[#F8FBFB] overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* Subtle ambient light glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(20, 184, 166, 0.12) 0%, rgba(10, 29, 57, 0.05) 60%, transparent 80%)",
        }}
      />

      {/* Content - Soft Reflective Pause */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="max-w-xl mx-auto px-5 sm:px-8 relative z-10 my-0.5"
      >
        {/* Arabic Calligraphy */}
        <p
          dir="rtl"
          lang="ar"
          className={`${amiri.className} text-2xl sm:text-3xl text-white font-normal tracking-wide leading-[1.35] select-none mb-1`}
        >
          فَاسْتَبِقُوا الْخَيْرَاتِ
        </p>

        {/* Identifier */}
        <span className="text-[9.5px] sm:text-[10.5px] font-heading font-bold uppercase tracking-[0.22em] text-[#2DD4BF] block mb-1">
          Fastabiqul Khairat
        </span>

        {/* Translation */}
        <h2 className="font-heading font-medium text-sm sm:text-base md:text-lg text-slate-100 tracking-tight leading-snug max-w-lg mx-auto mb-0.5">
          “Berlomba-lombalah dalam kebaikan.”
        </h2>

        {/* Citation */}
        <p className="text-[10px] sm:text-[11px] text-teal-200/75 font-mono tracking-wide">
          (QS. Al-Baqarah: 148)
        </p>
      </motion.div>
    </section>
  );
}
