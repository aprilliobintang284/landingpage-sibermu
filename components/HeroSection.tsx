"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Caveat } from "next/font/google";
import {
  ArrowRight,
  Play,
  GraduationCap,
  Sparkles,
  X,
} from "lucide-react";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("kemahasiswaan");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full bg-[#F6FAF8] pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-0 lg:h-screen lg:min-h-[760px] lg:max-h-[950px] flex items-center overflow-hidden"
    >
      {/* ========================================================================= */}
      {/* 1. DESKTOP ARTWORK LAYER (Screen width >= 1024px)                          */}
      {/* Uses hero-dekstop.png exactly matching reference artwork composition     */}
      {/* ========================================================================= */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 h-full w-[63%] xl:w-[61%] 2xl:w-[59%] pointer-events-none select-none z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero/hero-dekstop.png"
            alt="SiberMu Hero Visual - Mahasiswi dengan VR Headset dan Laptop"
            fill
            priority
            className="object-cover object-right"
            sizes="(min-width: 1024px) 65vw, 100vw"
          />

          {/* Supporting Calligraphy: "Ilmu Teknologi Akhlak Berkemajuan" */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`absolute top-[20%] right-[11%] xl:right-[12%] text-white text-right leading-[1.2] pointer-events-auto ${caveat.className} select-none`}
          >
            <span className="block text-2xl xl:text-[28px] text-white/95 font-bold tracking-wide -rotate-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
              Ilmu
            </span>
            <span className="block text-2xl xl:text-[28px] text-white/95 font-bold tracking-wide -rotate-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
              Teknologi
            </span>
            <span className="block text-2xl xl:text-[28px] text-white/95 font-bold tracking-wide -rotate-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
              Akhlak
            </span>
            <span className="block text-2xl xl:text-[28px] text-white/95 font-bold tracking-wide -rotate-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
              Berkemajuan
            </span>
          </motion.div>

          {/* Floating Card: "Mahasiswa Berkemajuan" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="absolute bottom-[22%] right-[4%] xl:right-[6%] z-20 pointer-events-auto"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 xl:p-4 shadow-[0_16px_36px_-10px_rgba(10,25,47,0.18)] border border-slate-100 flex items-center gap-3.5 max-w-[305px] xl:max-w-[325px]"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#DDF7F3] border border-[#14B8A6]/20 flex items-center justify-center text-[#0F9F91]">
                <GraduationCap className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-heading font-extrabold text-[13.5px] text-[#0A192F] tracking-tight leading-tight">
                  Mahasiswa Berkemajuan
                </h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-0.5">
                  Berilmu, Berakhlak,
                  <br />
                  Berdampak untuk Umat.
                </p>
              </div>
              <Link
                href="#kemahasiswaan"
                aria-label="Pelajari Mahasiswa Berkemajuan"
                className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 hover:bg-[#14B8A6] hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Fastabiqul Khairat Element at Bottom-Right */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-[8%] right-[7%] xl:right-[9%] text-center z-10 pointer-events-auto flex flex-col items-center select-none"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="h-[1px] w-8 xl:w-12 bg-[#14B8A6]/40 inline-block" />
              <Sparkles className="w-2.5 h-2.5 text-[#2DD4BF]" />
              <span className="text-[10px] xl:text-[11px] tracking-[0.22em] font-bold text-[#2DD4BF] uppercase">
                FASTABIQUL KHAIRAT
              </span>
              <Sparkles className="w-2.5 h-2.5 text-[#2DD4BF]" />
              <span className="h-[1px] w-8 xl:w-12 bg-[#14B8A6]/40 inline-block" />
            </div>
            <p className="text-[11px] xl:text-xs text-slate-200/90 font-medium italic">
              “Berlomba-lombalah dalam kebaikan.”
            </p>
            <p className="text-[9.5px] xl:text-[10px] text-[#2DD4BF]/80 font-mono tracking-wider mt-0.5">
              (QS. Al-Baqarah: 148)
            </p>
          </motion.div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN CONTAINER (Single-column stacked on Mobile/Tablet, 2-col on Desktop) */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-2 sm:py-4 lg:py-0">
        <div className="grid grid-cols-12 items-center gap-y-6 sm:gap-y-8 lg:gap-8 w-full">
          {/* ===================================================================== */}
          {/* TEXT & CTAs COLUMN (Full-width on mobile/tablet, 50% on desktop)     */}
          {/* ===================================================================== */}
          <div className="col-span-12 lg:col-span-6 flex flex-col items-start text-left max-w-xl lg:max-w-lg z-20">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-2 sm:mb-3"
            >
              <span className="text-[11px] sm:text-xs lg:text-sm font-bold tracking-[0.16em] sm:tracking-[0.18em] text-[#0F9F91] uppercase">
                UNIVERSITAS SIBER MUHAMMADIYAH
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-heading font-extrabold text-[30px] min-[380px]:text-[34px] sm:text-[42px] md:text-[46px] lg:text-[48px] xl:text-[56px] leading-[1.12] tracking-tight"
            >
              <span className="text-[#0A192F]">
                Kembangkan Potensi,
              </span>
              <br />
              <span className="text-[#14B8A6]">
                Teguhkan Karakter.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3 sm:mt-4 max-w-lg lg:max-w-[460px] font-normal"
            >
              Biro Kemahasiswaan dan AIK Universitas Siber Muhammadiyah hadir
              untuk mendampingi perjalanan prestasimu yang berlandaskan
              nilai-nilai Islam.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-row items-center gap-3 sm:gap-4 mt-5 sm:mt-6 w-full"
            >
              {/* Primary CTA */}
              <Link
                href="#kemahasiswaan"
                className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 lg:h-[56px] px-5 sm:px-6 rounded-xl sm:rounded-2xl font-semibold text-xs sm:text-sm lg:text-base text-white bg-[#14B8A6] hover:bg-[#0F9F91] shadow-md shadow-[#14B8A6]/25 hover:shadow-lg hover:shadow-[#14B8A6]/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Jelajahi Sekarang</span>
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 stroke-[2]" />
              </Link>

              {/* Secondary CTA: Video Button */}
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-2.5 sm:gap-3 text-left group cursor-pointer focus:outline-none"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white shadow-md shadow-slate-900/10 border border-slate-150 flex items-center justify-center text-[#0A192F] group-hover:scale-105 transition-all duration-200">
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#0A192F] text-[#0A192F] ml-0.5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-xs sm:text-sm text-[#0A192F] group-hover:text-[#14B8A6] transition-colors leading-tight">
                    Tonton Video
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-medium">
                    Mengenal SiberMu
                  </span>
                </div>
              </button>
            </motion.div>

            {/* Desktop Scroll Indicator (Hidden on mobile) */}
            <motion.button
              type="button"
              onClick={scrollToNextSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="hidden lg:flex items-center gap-3.5 mt-12 xl:mt-16 text-left group cursor-pointer focus:outline-none"
            >
              <div className="flex flex-col items-center">
                <div className="w-5 h-8 rounded-full border-2 border-slate-400 flex items-start justify-center p-1">
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.6,
                      ease: "easeInOut",
                    }}
                    className="w-1 h-2 rounded-full bg-slate-500"
                  />
                </div>
                <div className="w-[1.5px] h-5 bg-slate-300 mt-1 group-hover:h-7 transition-all duration-200" />
              </div>
              <span className="text-xs text-slate-500 font-medium tracking-wide group-hover:text-[#14B8A6] transition-colors">
                Scroll untuk jelajahi lebih lanjut
              </span>
            </motion.button>
          </div>

          {/* ===================================================================== */}
          {/* VISUAL HERO COLUMN ON TABLET & MOBILE (< 1024px)                       */}
          {/* Natural single-column layout positioned below text                    */}
          {/* ===================================================================== */}
          <div className="col-span-12 lg:hidden relative flex items-center justify-center z-10 mt-4 sm:mt-6 w-full">
            <div className="relative w-full max-w-[440px] h-[250px] min-[380px]:h-[280px] sm:h-[340px] flex items-center justify-center">
              {/* Navy Backdrop Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#0D213F] to-[#07152B] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-slate-900/10">
                {/* Subtle turquoise radial glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#14B8A6]/20 blur-xl rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#0F9F91]/15 blur-lg rounded-full pointer-events-none" />

                {/* Subtle Geometric Mandala Watermark */}
                <div className="absolute top-2 right-2 w-24 h-24 sm:w-32 sm:h-32 opacity-15 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#5EEAD4] fill-none" strokeWidth="0.8">
                    <circle cx="50" cy="50" r="40" />
                    <circle cx="50" cy="50" r="28" />
                    <polygon points="50,15 85,50 50,85 15,50" />
                    <polygon points="50,25 75,50 50,75 25,50" />
                  </svg>
                </div>
              </div>

              {/* Supporting Calligraphy (Top-right of navy card) */}
              <div
                className={`absolute top-2.5 sm:top-4 right-3 sm:right-4 z-20 text-right leading-[1.15] select-none ${caveat.className}`}
              >
                <span className="block text-[11px] sm:text-sm text-white/95 font-bold tracking-wide -rotate-3 drop-shadow">
                  Ilmu • Teknologi
                </span>
                <span className="block text-[11px] sm:text-sm text-white/95 font-bold tracking-wide -rotate-3 drop-shadow">
                  Akhlak Berkemajuan
                </span>
              </div>

              {/* Main Visual Cutout: hero-image.png */}
              <div className="relative w-full h-[90%] sm:h-[92%] z-10 flex items-end justify-center">
                <Image
                  src="/images/hero/hero-image.png"
                  alt="Mahasiswi SiberMu dengan VR dan Laptop"
                  fill
                  priority
                  className="object-contain object-bottom"
                  sizes="(max-width: 1023px) 92vw, 440px"
                />
              </div>

              {/* Compact Floating Card: "Mahasiswa Berkemajuan" */}
              <div className="absolute bottom-2.5 left-2.5 z-20 max-w-[190px] sm:max-w-[220px]">
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-2 sm:p-2.5 shadow-lg shadow-slate-900/15 border border-slate-100 flex items-center gap-2">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#DDF7F3] border border-[#14B8A6]/20 flex items-center justify-center text-[#0F9F91]">
                    <GraduationCap className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-extrabold text-[10px] sm:text-xs text-[#0A192F] tracking-tight leading-tight truncate">
                      Mahasiswa Berkemajuan
                    </h4>
                    <p className="text-[8.5px] sm:text-[9.5px] text-slate-500 font-medium leading-tight truncate">
                      Berilmu, Berakhlak
                    </p>
                  </div>
                  <Link
                    href="#kemahasiswaan"
                    aria-label="Pelajari Mahasiswa Berkemajuan"
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 hover:bg-[#14B8A6] hover:text-white text-slate-600 flex items-center justify-center transition-colors"
                  >
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Compact Fastabiqul Khairat at Bottom-right */}
              <div className="absolute bottom-2 right-3 z-20 text-right select-none">
                <span className="block text-[8.5px] sm:text-[10px] tracking-[0.16em] font-bold text-[#2DD4BF] uppercase">
                  FASTABIQUL KHAIRAT
                </span>
                <span className="block text-[7.5px] sm:text-[9px] text-slate-300 italic">
                  “Berlomba dalam kebaikan”
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* VIDEO MODAL (Interactive SiberMu Introduction Video)                      */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-navy-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-navy-950">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF] animate-pulse" />
                  <span className="font-heading font-bold text-sm text-white">
                    Mengenal Universitas Siber Muhammadiyah
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(false)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Tutup video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Video Profil SiberMu"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
