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
      className="scroll-mt-20 relative py-14 sm:py-16 md:py-20 bg-gradient-to-b from-[#0D2242] via-[#0B1C38] to-[#091830] border-t border-[#14B8A6]/20 border-b border-slate-200/40 overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* Subtle central ambient turquoise glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.12) 0%, rgba(13, 34, 66, 0.04) 50%, transparent 70%)",
        }}
      />

      <div className="max-w-2xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Eyebrow kecil di atas bahasa Arab */}
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[11px] sm:text-xs font-heading font-bold uppercase tracking-[0.26em] text-[#14B8A6] block mb-2 sm:mb-2.5"
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
          className="text-xs sm:text-[13px] text-slate-400 font-medium tracking-wide"
        >
          QS. Al-Baqarah: 148
        </motion.p>
      </div>
    </section>
  );
}
