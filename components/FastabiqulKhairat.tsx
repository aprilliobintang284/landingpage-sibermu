"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FastabiqulKhairat() {
  return (
    <section
      id="fastabiqul-khairat"
      className="relative py-28 sm:py-36 md:py-40 bg-[#070F1E] border-t border-b border-white/[0.06] overflow-hidden flex items-center justify-center text-center"
    >
      {/* Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[300px] sm:w-[750px] sm:h-[400px] bg-[#14B8A6]/[0.065] blur-[130px] rounded-full" />
      </div>

      {/* Very Subtle Geometric Islamic Watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <svg
          viewBox="0 0 800 800"
          className="w-[580px] h-[580px] sm:w-[780px] sm:h-[780px] stroke-[#14B8A6] fill-none opacity-[0.035]"
          strokeWidth="1"
        >
          <circle cx="400" cy="400" r="360" strokeDasharray="3 8" />
          <circle cx="400" cy="400" r="270" />
          <circle cx="400" cy="400" r="180" strokeDasharray="4 6" />
          <circle cx="400" cy="400" r="90" />
          <rect x="260" y="260" width="280" height="280" />
          <rect
            x="260"
            y="260"
            width="280"
            height="280"
            transform="rotate(45 400 400)"
          />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        {/* 1. Heading Kategori: FASTABIQUL KHAIRAT */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6 sm:mb-8"
        >
          <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#14B8A6]/50" />
          <span className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#14B8A6]">
            Fastabiqul Khairat
          </span>
          <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#14B8A6]/50" />
        </motion.div>

        {/* 2. Quote: Focal Point */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-white tracking-tight leading-[1.2] sm:leading-[1.18] mb-5 sm:mb-6"
        >
          “Berlomba-lombalah dalam kebaikan.”
        </motion.h2>

        {/* 3. Citation */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-8 sm:mb-10 text-slate-400"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]/60" />
          <span className="text-xs sm:text-sm font-medium tracking-wide">
            QS. Al-Baqarah: 148
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]/60" />
        </motion.div>

        {/* 4. Short Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-slate-300/85 text-base sm:text-lg font-normal leading-relaxed max-w-xl mx-auto"
        >
          Nilai yang mendorong mahasiswa untuk mengembangkan potensi, berkarya,
          dan memberikan manfaat bagi sesama.
        </motion.p>
      </div>
    </section>
  );
}
