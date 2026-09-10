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
  ChevronRight,
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
      className="relative w-full bg-[#F6FAF8] pt-20 pb-8 sm:pt-24 sm:pb-12 lg:py-0 lg:h-screen lg:min-h-[760px] lg:max-h-[950px] flex items-center overflow-hidden"
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
      {/* 2. MAIN CONTAINER (Mobile & Tablet Stacked, 2-Column on Desktop)           */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-1 sm:py-3 lg:py-0">
        <div className="grid grid-cols-12 items-center gap-y-4 sm:gap-y-6 lg:gap-8 w-full">
          {/* ===================================================================== */}
          {/* ===================================================================== */}
          {/* TEXT & CTAs: Top on Mobile/Tablet, Left on Desktop (50%)              */}
          {/* ===================================================================== */}
          <div className="col-span-12 lg:col-span-6 flex flex-col items-start text-left max-w-2xl lg:max-w-lg z-20">
            {/* Eyebrow - Unified single element with tight leading */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-1.5 sm:mb-2.5"
            >
              <span className="block font-heading font-bold text-[11px] min-[360px]:text-[12px] sm:text-xs lg:text-sm tracking-[0.16em] sm:tracking-[0.18em] text-[#0F9F91] uppercase leading-tight">
                UNIVERSITAS SIBER<br className="min-[480px]:hidden" /> MUHAMMADIYAH
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
              className="font-heading font-extrabold text-[30px] min-[360px]:text-[34px] min-[400px]:text-[38px] sm:text-[44px] md:text-[48px] lg:text-[48px] xl:text-[56px] leading-[1.12] tracking-tight"
            >
              <span className="block text-[#0A192F]">
                Kembangkan Potensi,
              </span>
              <span className="block text-[#14B8A6] mt-0.5 sm:mt-1">
                Teguhkan Karakter.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
              className="text-slate-600 text-[13.5px] min-[360px]:text-[14.5px] sm:text-base leading-relaxed mt-2 sm:mt-3 max-w-[340px] sm:max-w-md lg:max-w-[460px] font-normal"
            >
              Biro Kemahasiswaan dan AIK Universitas Siber Muhammadiyah hadir
              untuk mendampingi perjalanan prestasimu yang berlandaskan
              nilai-nilai Islam.
            </motion.p>

            {/* CTA Buttons - Matching reference mockup */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
              className="flex flex-col items-start gap-2.5 min-[360px]:gap-3 mt-3.5 sm:mt-5 lg:mt-6 sm:flex-row sm:items-center sm:gap-4 relative z-30"
            >
              {/* Primary CTA (Rounded-full pill button) */}
              <Link
                href="#kemahasiswaan"
                className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 lg:h-[56px] px-6 sm:px-7 rounded-full font-semibold text-xs sm:text-sm lg:text-base text-white bg-[#0F9F91] hover:bg-[#0D8A7D] shadow-md shadow-[#0F9F91]/25 hover:shadow-lg hover:shadow-[#0F9F91]/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Jelajahi Sekarang</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </Link>

              {/* Secondary CTA: Video Button */}
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-2.5 sm:gap-3 text-left group cursor-pointer focus:outline-none"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white shadow-md shadow-slate-900/10 border border-slate-200/80 flex items-center justify-center text-[#0A192F] group-hover:scale-105 transition-all duration-200">
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
          {/* MOBILE/TABLET VISUAL HERO AREA (< 1024px)                             */}
          {/* Asymmetric composition matching screenshot reference                  */}
          {/* Uses transparent /hero/hero-mobile.png directly on light canvas       */}
          {/* ===================================================================== */}
          <div className="col-span-12 lg:hidden relative w-full flex flex-col items-end -mt-10 min-[360px]:-mt-16 sm:-mt-10 z-10 select-none">
            {/* Visual Wrapper: Aligned right, slightly bleeding right asymmetrically */}
            <div className="relative w-[98%] min-[360px]:w-[95%] sm:w-[86%] max-w-[440px] mr-[-12px] min-[360px]:mr-[-16px] sm:mr-0">
              {/* Transparent PNG Hero Mobile Asset */}
              <Image
                src="/hero/hero-mobile.png"
                alt="Mahasiswi Universitas Siber Muhammadiyah dengan VR Headset dan Laptop"
                width={1131}
                height={1391}
                priority
                className="w-full h-auto object-contain pointer-events-none drop-shadow-sm"
                sizes="(max-width: 640px) 95vw, 440px"
              />

              {/* Supporting Calligraphy Script on top-right navy curve: "Ilmu • Teknologi • Akhlak • Berkemajuan" */}
              <div
                className={`absolute top-[17%] right-[7%] min-[360px]:right-[9%] text-right leading-[1.18] pointer-events-none select-none ${caveat.className}`}
              >
                <span className="block text-sm min-[360px]:text-base sm:text-lg text-white/95 font-bold tracking-wide -rotate-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                  Ilmu
                </span>
                <span className="block text-sm min-[360px]:text-base sm:text-lg text-white/95 font-bold tracking-wide -rotate-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                  Teknologi
                </span>
                <span className="block text-sm min-[360px]:text-base sm:text-lg text-[#2DD4BF] font-bold tracking-wide -rotate-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                  Akhlak
                </span>
                <span className="block text-sm min-[360px]:text-base sm:text-lg text-[#2DD4BF] font-bold tracking-wide -rotate-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                  Berkemajuan
                </span>
              </div>

              {/* Floating Card: "Mahasiswa Berkemajuan" (Anchored at base, overlapping teal curve) */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute bottom-2 left-2 right-4 min-[360px]:bottom-3 min-[360px]:left-3 min-[360px]:right-5 z-20 pointer-events-auto"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 min-[360px]:p-3 sm:p-3.5 shadow-[0_12px_32px_-6px_rgba(10,25,47,0.16)] border border-slate-100/90 flex items-center gap-2.5 sm:gap-3">
                  <div className="flex-shrink-0 w-9 h-9 min-[360px]:w-10 min-[360px]:h-10 rounded-xl bg-[#E6F8F5] border border-[#14B8A6]/25 flex items-center justify-center text-[#0F9F91]">
                    <GraduationCap className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-extrabold text-xs min-[360px]:text-[13.5px] text-[#0A192F] tracking-tight leading-tight truncate">
                      Mahasiswa Berkemajuan
                    </h4>
                    <p className="text-[9.5px] min-[360px]:text-[10.5px] text-slate-500 font-medium leading-tight truncate mt-0.5">
                      Berilmu, Berakhlak, Berdampak untuk Umat.
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-slate-400 pr-0.5">
                    <ChevronRight className="w-4 h-4 stroke-[2]" />
                  </div>
                </div>
              </motion.div>
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
