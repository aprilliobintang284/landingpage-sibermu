"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative py-18 sm:py-20 md:py-24 lg:py-28 bg-[#040914] border-t border-white/10 overflow-hidden"
    >
      {/* =================================================================== */}
      {/* 1. AMBIENT TURQUOISE & MINT GLOW                                    */}
      {/* =================================================================== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-[#14B8A6]/[0.08] blur-[130px] rounded-full" />
        <div className="absolute -bottom-1/4 left-1/4 w-[450px] h-[450px] bg-[#14B8A6]/[0.04] blur-[100px] rounded-full" />
      </div>

      {/* =================================================================== */}
      {/* 2. ABSTRACT & ORGANIC FLOWING CURVES (Inspired by Hero visual)     */}
      {/* Integrated into canvas — NOT an isolated object                      */}
      {/* =================================================================== */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] h-full pointer-events-none overflow-hidden select-none">
        <svg
          viewBox="0 0 800 550"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full opacity-60 lg:opacity-75"
        >
          <defs>
            <linearGradient id="cta-curve-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0" />
              <stop offset="45%" stopColor="#14B8A6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="cta-curve-2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0" />
              <stop offset="40%" stopColor="#14B8A6" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="cta-ambient-glow" cx="70%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#040914" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Soft ambient gradient light wash */}
          <rect width="800" height="550" fill="url(#cta-ambient-glow)" />

          {/* Flowing Organic Turquoise Curve 1 */}
          <path
            d="M 220 -40 C 380 110, 640 160, 830 420"
            stroke="url(#cta-curve-1)"
            strokeWidth="1.8"
          />

          {/* Harmonic Secondary Flowing Curve 2 */}
          <path
            d="M 160 -10 C 320 140, 560 220, 750 510"
            stroke="url(#cta-curve-2)"
            strokeWidth="1.2"
          />

          {/* Thin Orbit Path Line */}
          <path
            d="M 90 90 C 320 200, 480 340, 780 440"
            stroke="#14B8A6"
            strokeWidth="1"
            strokeDasharray="5 7"
            opacity="0.32"
          />

          {/* Sweeping Dynamic Trajectory Curve */}
          <path
            d="M 290 -80 C 440 80, 680 270, 720 620"
            stroke="#2DD4BF"
            strokeWidth="1"
            opacity="0.2"
          />

          {/* Gentle Floating Wave Curve */}
          <path
            d="M 380 420 Q 520 350, 700 450 T 880 390"
            stroke="#14B8A6"
            strokeWidth="1.2"
            strokeDasharray="3 5"
            opacity="0.22"
          />
        </svg>
      </div>

      {/* =================================================================== */}
      {/* 3. EDITORIAL CONTENT (Left / Left-Center Balanced)                  */}
      {/* =================================================================== */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start text-left">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[50px] text-white tracking-tight leading-[1.14] mb-5 sm:mb-6"
          >
            Siap Memulai Perjalananmu{" "}
            <span className="text-[#14B8A6]">Bersama SiberMu?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 sm:mb-9"
          >
            Kembangkan potensimu dalam berbagai bidang dan teguhkan karaktermu
            melalui nilai-nilai AI-Islam dan Kemuhammadiyahan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
          >
            <Link
              href="#kemahasiswaan"
              className="inline-flex items-center justify-center gap-2.5 h-[52px] px-8 rounded-[14px] bg-[#14B8A6] text-[#0A192F] font-heading font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-[#14B8A6]/20 hover:bg-[#0D9488] hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Mulai Eksplorasi</span>
              <ArrowRight className="w-4 h-4 stroke-[2.2]" />
            </Link>

            <Link
              href="https://sibermu.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-[14px] border border-white/20 bg-white/[0.03] text-white font-heading font-semibold text-sm sm:text-base hover:border-[#14B8A6] hover:text-[#14B8A6] hover:bg-[#14B8A6]/[0.05] transition-all duration-200"
            >
              <span>Hubungi Kami</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
