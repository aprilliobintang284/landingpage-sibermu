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
} from "lucide-react";

export default function KemahasiswaanSection() {
  return (
    <section
      id="kemahasiswaan"
      className="relative py-20 sm:py-28 md:py-32 bg-[#F6FAF7] border-t border-slate-200/70 overflow-hidden"
    >
      {/* Subtle Ambient Background Tint */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#14B8A6]/[0.03] blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#14B8A6]/[0.025] blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* =================================================================== */}
        {/* SECTION HEADER (Pure, Human-Crafted, No Pills/Badges)               */}
        {/* =================================================================== */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 mb-3"
          >
            <span className="text-xs font-bold tracking-[0.16em] text-[#0F9F91] uppercase">
              01 / Kemahasiswaan
            </span>
            <span className="w-10 h-[1.5px] bg-[#14B8A6]/30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.15]"
          >
            Kembangkan{" "}
            <span className="text-[#14B8A6]">Potensi</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg font-normal mt-3 leading-relaxed"
          >
            Ruang untuk bertumbuh, berkarya, dan berprestasi.
          </motion.p>
        </div>

        {/* =================================================================== */}
        {/* ASYMMETRIC EDITORIAL LAYOUT                                         */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* --------------------------------------------------------------- */}
          {/* 1. ORGANISASI MAHASISWA (Feature Utama — Prominent & Balanced)  */}
          {/* --------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-1 lg:order-1 md:col-span-1 lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 lg:p-11 border border-[#14B8A6]/15 shadow-sm hover:shadow-md hover:border-[#14B8A6]/35 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
          >
            {/* Subtle turquoise corner accent line */}
            <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-[#14B8A6] to-transparent" />

            {/* Faint geometric watermark in background */}
            <div className="absolute -top-6 -right-6 w-36 h-36 opacity-[0.035] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#14B8A6] fill-none" strokeWidth="1.2">
                <circle cx="50" cy="50" r="42" />
                <circle cx="50" cy="50" r="28" />
                <polygon points="50,15 85,50 50,85 15,50" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#DDF7F3] border border-[#14B8A6]/25 flex items-center justify-center text-[#0F9F91] mb-6 sm:mb-8 group-hover:scale-105 transition-transform duration-200">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0A192F] tracking-tight mb-3 sm:mb-4">
                Organisasi Mahasiswa
              </h3>

              <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed max-w-xl">
                Ruang bagi mahasiswa untuk mengembangkan kepemimpinan,
                kolaborasi, tanggung jawab, dan pengalaman berorganisasi.
              </p>
            </div>
          </motion.div>

          {/* --------------------------------------------------------------- */}
          {/* 2. UNIT KEGIATAN MAHASISWA (Mobile order 2, Tablet/Desktop 3)   */}
          {/* --------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 md:order-3 lg:order-3 md:col-span-2 lg:col-span-12 bg-white rounded-3xl p-8 sm:p-9 border border-[#14B8A6]/15 shadow-sm hover:shadow-md hover:border-[#14B8A6]/35 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#DDF7F3] border border-[#14B8A6]/20 flex items-center justify-center text-[#0F9F91] flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <Layers className="w-7 h-7 stroke-[1.8]" />
              </div>

              <div className="flex-1">
                <h3 className="font-heading font-bold text-2xl sm:text-[26px] text-[#0A192F] tracking-tight mb-2">
                  Unit Kegiatan Mahasiswa
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Wadah untuk mengembangkan minat, bakat, kreativitas, dan
                  kebersamaan mahasiswa melalui berbagai kegiatan.
                </p>
              </div>
            </div>
          </motion.div>

          {/* --------------------------------------------------------------- */}
          {/* 3. PRESTASI MAHASISWA (Feature Pendamping — Cohesive White Card) */}
          {/* --------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-3 md:order-2 lg:order-2 md:col-span-1 lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 lg:p-11 border border-[#14B8A6]/15 shadow-sm hover:shadow-md hover:border-[#14B8A6]/35 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
          >
            {/* Subtle turquoise corner accent line */}
            <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-[#14B8A6] to-transparent" />

            <div className="relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#DDF7F3] border border-[#14B8A6]/25 flex items-center justify-center text-[#0F9F91] mb-6 sm:mb-8 group-hover:scale-105 transition-transform duration-200">
                <Trophy className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
              </div>

              <h3 className="font-heading font-bold text-2xl sm:text-[28px] text-[#0A192F] tracking-tight mb-3 sm:mb-4">
                Prestasi Mahasiswa
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Pendampingan kompetisi dan pengembangan mahasiswa untuk meraih
                pencapaian di tingkat nasional hingga internasional.
              </p>
            </div>
          </motion.div>

          {/* --------------------------------------------------------------- */}
          {/* 4. LAYANAN MAHASISWA (Wide Service Block with Action CTA)        */}
          {/* --------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="order-4 md:order-4 lg:order-4 md:col-span-2 lg:col-span-12 bg-gradient-to-r from-white via-[#F0FBF9] to-white rounded-3xl p-8 sm:p-9 border border-[#14B8A6]/20 shadow-sm hover:shadow-md hover:border-[#14B8A6]/35 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 max-w-3xl">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#14B8A6] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-[#14B8A6]/20 group-hover:scale-105 transition-transform duration-200">
                  <HeartHandshake className="w-7 h-7 stroke-[1.8]" />
                </div>

                <div>
                  <h3 className="font-heading font-bold text-2xl sm:text-[26px] text-[#0A192F] tracking-tight mb-2">
                    Layanan Mahasiswa
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Dukungan akademik, kesejahteraan, bimbingan, dan layanan yang
                    membantu mahasiswa menjalani perjalanan perkuliahan.
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto pt-2 md:pt-0">
                <Link
                  href="#cta"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl font-semibold text-sm text-white bg-[#14B8A6] hover:bg-[#0F9F91] shadow-md shadow-[#14B8A6]/20 hover:shadow-lg hover:shadow-[#14B8A6]/30 hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto"
                >
                  <span>Akses Layanan</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
