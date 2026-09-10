"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Layers,
  Trophy,
  HeartHandshake,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export default function KemahasiswaanSection() {
  return (
    <section
      id="kemahasiswaan"
      className="scroll-mt-20 relative pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 bg-[#F8FBFB] border-t border-slate-200/80 overflow-hidden"
    >
      {/* Subtle Ambient Background Tint */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[480px] h-[480px] bg-[#14B8A6]/[0.035] blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-10 w-[380px] h-[380px] bg-[#14B8A6]/[0.025] blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* =================================================================== */}
        {/* SECTION HEADER (Pure, Direct, No 01 / Pills / Badges)               */}
        {/* =================================================================== */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.15]"
          >
            Kembangkan{" "}
            <span className="text-[#14B8A6]">Potensi</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-slate-600 text-base sm:text-lg font-normal mt-3.5 leading-relaxed"
          >
            Ruang untuk bertumbuh, berkarya, dan berprestasi.
          </motion.p>
        </div>

        {/* =================================================================== */}
        {/* ASYMMETRIC EDITORIAL GRID                                           */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch">
          {/* --------------------------------------------------------------- */}
          {/* 1. ORGANISASI MAHASISWA (Feature Utama — Prominent & Balanced)  */}
          {/* --------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-1 lg:order-1 md:col-span-1 lg:col-span-7 bg-white rounded-[22px] p-7 sm:p-9 lg:p-10 border border-slate-200/80 shadow-[0_2px_12px_-2px_rgba(10,25,47,0.04)] hover:shadow-md hover:border-[#14B8A6]/30 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Delicate turquoise accent line at top */}
            <div className="absolute top-0 left-0 w-20 h-[3px] bg-[#14B8A6] rounded-full" />

            {/* Subtle editorial geometric watermark */}
            <div className="absolute -top-4 -right-4 w-32 h-32 opacity-[0.035] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#14B8A6] fill-none" strokeWidth="1.5">
                <circle cx="50" cy="50" r="40" />
                <circle cx="50" cy="50" r="24" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#DDF7F3] border border-[#14B8A6]/25 flex items-center justify-center text-[#0F9F91] mb-6 group-hover:scale-105 transition-transform duration-200">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.9]" />
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-[28px] md:text-3xl text-[#0A192F] tracking-tight mb-3">
                Organisasi Mahasiswa
              </h3>

              <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed max-w-xl">
                Ruang bagi mahasiswa untuk mengembangkan kepemimpinan,
                kolaborasi, tanggung jawab, dan pengalaman berorganisasi.
              </p>
            </div>
          </motion.div>

          {/* --------------------------------------------------------------- */}
          {/* 2. PRESTASI MAHASISWA (Feature Pendamping — Cohesive White Card) */}
          {/* --------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-3 md:order-2 lg:order-2 md:col-span-1 lg:col-span-5 bg-white rounded-[22px] p-7 sm:p-9 lg:p-10 border border-slate-200/80 shadow-[0_2px_12px_-2px_rgba(10,25,47,0.04)] hover:shadow-md hover:border-[#14B8A6]/30 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Delicate turquoise accent line at top */}
            <div className="absolute top-0 left-0 w-16 h-[3px] bg-[#14B8A6]/80 rounded-full" />

            <div className="relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#DDF7F3] border border-[#14B8A6]/25 flex items-center justify-center text-[#0F9F91] mb-6 group-hover:scale-105 transition-transform duration-200">
                <Trophy className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.9]" />
              </div>

              <h3 className="font-heading font-bold text-2xl sm:text-[26px] text-[#0A192F] tracking-tight mb-3">
                Prestasi Mahasiswa
              </h3>

              <p className="text-slate-600 text-base sm:text-[16px] leading-relaxed">
                Pendampingan kompetisi dan pengembangan mahasiswa untuk meraih
                pencapaian di tingkat nasional hingga internasional.
              </p>
            </div>
          </motion.div>

          {/* --------------------------------------------------------------- */}
          {/* 3. UNIT KEGIATAN MAHASISWA (Supporting — Lightweight & Clean)   */}
          {/* --------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="order-2 md:order-3 lg:order-3 md:col-span-2 lg:col-span-12 bg-white/95 rounded-[22px] p-6 sm:p-7 md:p-8 border border-slate-200/70 shadow-[0_2px_10px_-2px_rgba(10,25,47,0.03)] hover:shadow-md hover:border-[#14B8A6]/30 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
              <div className="flex items-start sm:items-center gap-4 sm:gap-5 flex-1">
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl bg-[#DDF7F3] border border-[#14B8A6]/20 flex items-center justify-center text-[#0F9F91] flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <Layers className="w-6 h-6 stroke-[1.9]" />
                </div>

                <div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0A192F] tracking-tight mb-1 sm:mb-1.5">
                    Unit Kegiatan Mahasiswa
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                    Wadah untuk mengembangkan minat, bakat, kreativitas, dan
                    kebersamaan mahasiswa melalui berbagai kegiatan.
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-slate-50 text-slate-400 group-hover:text-[#14B8A6] group-hover:bg-[#DDF7F3] transition-colors duration-200 flex-shrink-0">
                <ArrowUpRight className="w-4 h-4 stroke-[2]" />
              </div>
            </div>
          </motion.div>

          {/* --------------------------------------------------------------- */}
          {/* 4. LAYANAN MAHASISWA (Wide Horizontal Service Block with CTA)    */}
          {/* --------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-4 md:order-4 lg:order-4 md:col-span-2 lg:col-span-12 bg-gradient-to-r from-white via-[#F4FBF9] to-white rounded-[22px] p-6 sm:p-8 md:p-9 border border-[#14B8A6]/20 shadow-[0_2px_12px_-2px_rgba(10,25,47,0.04)] hover:shadow-md hover:border-[#14B8A6]/35 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 max-w-3xl">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#DDF7F3] border border-[#14B8A6]/25 text-[#0F9F91] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <HeartHandshake className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.9]" />
                </div>

                <div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0A192F] tracking-tight mb-1 sm:mb-1.5">
                    Layanan Mahasiswa
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Dukungan akademik, kesejahteraan, bimbingan, dan layanan yang
                    membantu mahasiswa menjalani perjalanan perkuliahan.
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto pt-1 md:pt-0">
                <Link
                  href="#cta"
                  className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl font-medium text-sm text-[#0F9F91] bg-white border border-[#14B8A6]/35 hover:bg-[#14B8A6] hover:text-white hover:border-[#14B8A6] shadow-sm hover:shadow-md transition-all duration-200 w-full sm:w-auto"
                >
                  <span>Akses Layanan</span>
                  <ArrowRight className="w-4 h-4 stroke-[2]" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
