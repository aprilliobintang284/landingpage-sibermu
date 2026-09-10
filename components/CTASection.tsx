"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#040914] border-t border-white/10 overflow-hidden"
    >
      {/* Ambient Turquoise & Mint Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 right-10 lg:right-24 w-[500px] h-[500px] bg-[#14B8A6]/[0.07] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-[#14B8A6]/[0.035] blur-[90px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* =================================================================== */}
        {/* LARGE EDITORIAL VISUAL COMPOSITION                                 */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* --------------------------------------------------------------- */}
          {/* LEFT / CENTER: Headline, Description & Action Buttons          */}
          {/* --------------------------------------------------------------- */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white tracking-tight leading-[1.12] mb-5 sm:mb-6 max-w-2xl"
            >
              Siap Memulai Perjalananmu{" "}
              <span className="text-[#14B8A6]">Bersama SiberMu?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-7 sm:mb-9"
            >
              Kembangkan potensimu dalam berbagai bidang dan teguhkan karaktermu
              melalui nilai-nilai AI-Islam dan Kemuhammadiyahan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              <Link
                href="#kemahasiswaan"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-[52px] px-8 rounded-[14px] bg-[#14B8A6] text-[#0A192F] font-heading font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-[#14B8A6]/20 hover:bg-[#0D9488] hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Mulai Eksplorasi</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </Link>

              <Link
                href="https://sibermu.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-[14px] border border-white/20 bg-white/[0.03] text-white font-heading font-semibold text-sm sm:text-base hover:border-[#14B8A6] hover:text-[#14B8A6] hover:bg-[#14B8A6]/[0.05] transition-all duration-200"
              >
                <span>Hubungi Kami</span>
              </Link>
            </motion.div>
          </div>

          {/* --------------------------------------------------------------- */}
          {/* RIGHT / BACKGROUND: Large Abstract Visual Anchor                */}
          {/* --------------------------------------------------------------- */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative w-[210px] h-[210px] sm:w-[280px] sm:h-[280px] lg:w-[440px] lg:h-[440px] pointer-events-none"
            >
              {/* Soft interior glow */}
              <div className="absolute inset-0 m-auto w-40 h-40 bg-[#14B8A6]/15 rounded-full blur-2xl" />

              <svg
                viewBox="0 0 300 300"
                className="w-full h-full stroke-[#14B8A6] fill-none"
                strokeWidth="1.2"
              >
                {/* Outer orbital rings */}
                <circle
                  cx="150"
                  cy="150"
                  r="140"
                  strokeDasharray="4 6"
                  opacity="0.22"
                />
                <circle cx="150" cy="150" r="122" opacity="0.38" />
                <circle
                  cx="150"
                  cy="150"
                  r="104"
                  strokeDasharray="3 4"
                  opacity="0.28"
                />
                <circle cx="150" cy="150" r="76" opacity="0.45" />
                <circle cx="150" cy="150" r="42" opacity="0.3" />

                {/* Islamic 8-pointed star / Rub el Hizb */}
                <rect
                  x="75"
                  y="75"
                  width="150"
                  height="150"
                  rx="3"
                  opacity="0.4"
                />
                <rect
                  x="75"
                  y="75"
                  width="150"
                  height="150"
                  rx="3"
                  transform="rotate(45 150 150)"
                  opacity="0.4"
                />

                {/* Inner geometric accent square */}
                <rect
                  x="98"
                  y="98"
                  width="104"
                  height="104"
                  rx="2"
                  opacity="0.28"
                />
                <rect
                  x="98"
                  y="98"
                  width="104"
                  height="104"
                  rx="2"
                  transform="rotate(45 150 150)"
                  opacity="0.28"
                />

                {/* Dynamic radiating trajectory lines */}
                <line
                  x1="150"
                  y1="10"
                  x2="150"
                  y2="290"
                  strokeDasharray="4 6"
                  opacity="0.25"
                />
                <line
                  x1="10"
                  y1="150"
                  x2="290"
                  y2="150"
                  strokeDasharray="4 6"
                  opacity="0.25"
                />
                <line
                  x1="51"
                  y1="51"
                  x2="249"
                  y2="249"
                  strokeDasharray="4 6"
                  opacity="0.2"
                />
                <line
                  x1="51"
                  y1="249"
                  x2="249"
                  y2="51"
                  strokeDasharray="4 6"
                  opacity="0.2"
                />

                {/* Center subtle node */}
                <circle cx="150" cy="150" r="4" fill="#14B8A6" opacity="0.75" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
