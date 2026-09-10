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
  ChevronRight,
} from "lucide-react";

const mobileCards = [
  {
    title: "Organisasi Mahasiswa",
    desc: "Ruang bagi mahasiswa untuk mengembangkan kepemimpinan, kolaborasi, tanggung jawab, dan pengalaman berorganisasi.",
    icon: Users,
    href: "#kemahasiswaan",
  },
  {
    title: "Prestasi Mahasiswa",
    desc: "Pendampingan kompetisi dan pengembangan mahasiswa untuk meraih pencapaian di tingkat nasional hingga internasional.",
    icon: Trophy,
    href: "#kemahasiswaan",
  },
  {
    title: "Unit Kegiatan Mahasiswa",
    desc: "Wadah untuk mengembangkan minat, bakat, kreativitas, dan kebersamaan mahasiswa melalui berbagai kegiatan.",
    icon: Layers,
    href: "#kemahasiswaan",
  },
  {
    title: "Layanan Mahasiswa",
    desc: "Dukungan akademik, kesejahteraan, bimbingan, dan layanan yang membantu mahasiswa menjalani perjalanan perkuliahan.",
    icon: HeartHandshake,
    href: "#cta",
  },
];

export default function KemahasiswaanSection() {
  return (
    <section
      id="kemahasiswaan"
      className="scroll-mt-20 relative pt-14 sm:pt-24 md:pt-32 pb-12 sm:pb-14 md:pb-16 bg-[#F8FBFB] border-t border-slate-200/80 overflow-hidden"
    >
      {/* Subtle Ambient Background Tint */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[480px] h-[480px] bg-[#14B8A6]/[0.035] blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-10 w-[380px] h-[380px] bg-[#14B8A6]/[0.025] blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 relative z-10">
        {/* =================================================================== */}
        {/* SECTION HEADER                                                      */}
        {/* =================================================================== */}
        <div className="max-w-3xl mb-6 sm:mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="font-heading font-extrabold text-[28px] sm:text-4xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.15]"
          >
            Kembangkan{" "}
            <span className="text-[#14B8A6]">Potensi</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-slate-600 text-sm sm:text-lg font-normal mt-2 sm:mt-3.5 leading-relaxed"
          >
            Ruang untuk bertumbuh, berkarya, dan berprestasi.
          </motion.p>
        </div>

        {/* =================================================================== */}
        {/* MOBILE CARD STACK (< md): Single-column cohesive cards              */}
        {/* Exact design system matching Phone 1 mockup                         */}
        {/* =================================================================== */}
        <div className="md:hidden flex flex-col space-y-3">
          {mobileCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
              >
                <Link
                  href={card.href}
                  className="w-full bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-[0_2px_8px_-2px_rgba(10,25,47,0.03)] active:bg-slate-50 transition-all duration-200 flex items-center gap-3.5 group"
                >
                  <div className="w-11 h-11 rounded-full bg-[#E6F8F5] text-[#0F9F91] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-5 h-5 stroke-[1.9]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-extrabold text-[15px] text-[#0A192F] tracking-tight group-hover:text-[#0F9F91] transition-colors leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1 line-clamp-2">
                      {card.desc}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#14B8A6] group-hover:translate-x-0.5 shrink-0 transition-all duration-200" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* =================================================================== */}
        {/* DESKTOP ASYMMETRIC EDITORIAL GRID (>= md)                           */}
        {/* Preserved 100% untouched for desktop experience                     */}
        {/* =================================================================== */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-7 items-stretch">
          {/* --------------------------------------------------------------- */}
          {/* 1. ORGANISASI MAHASISWA (Desktop 7-col)                         */}
          {/* --------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1 lg:col-span-7 bg-white rounded-2xl md:rounded-[22px] p-6 md:p-8 lg:p-10 border border-slate-200/80 shadow-[0_2px_12px_-2px_rgba(10,25,47,0.04)] hover:border-[#14B8A6]/30 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Desktop accent bar */}
            <div className="hidden md:block absolute top-0 left-0 w-20 h-[3px] bg-[#14B8A6] rounded-full" />

            {/* Desktop geometric watermark */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-32 h-32 opacity-[0.035] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#14B8A6] fill-none" strokeWidth="1.5">
                <circle cx="50" cy="50" r="40" />
                <circle cx="50" cy="50" r="24" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-start">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#DDF7F3] border border-[#14B8A6]/20 flex items-center justify-center text-[#0F9F91] mb-4 md:mb-6">
                <Users className="w-6 h-6 md:w-8 md:h-8 stroke-[1.9]" />
              </div>

              <h3 className="font-heading font-extrabold text-xl md:text-2xl lg:text-3xl text-[#0A192F] tracking-tight mb-2 md:mb-3">
                Organisasi Mahasiswa
              </h3>

              <p className="text-slate-600 text-sm md:text-[17px] leading-relaxed max-w-xl">
                Ruang bagi mahasiswa untuk mengembangkan kepemimpinan,
                kolaborasi, tanggung jawab, dan pengalaman berorganisasi.
              </p>
            </div>
          </motion.div>

          {/* --------------------------------------------------------------- */}
          {/* 2. PRESTASI MAHASISWA (Desktop 5-col)                           */}
          {/* --------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1 lg:col-span-5 bg-white rounded-2xl md:rounded-[22px] p-6 md:p-8 lg:p-10 border border-slate-200/80 shadow-[0_2px_12px_-2px_rgba(10,25,47,0.04)] hover:border-[#14B8A6]/30 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Desktop accent bar */}
            <div className="hidden md:block absolute top-0 left-0 w-16 h-[3px] bg-[#14B8A6]/80 rounded-full" />

            <div className="relative z-10 flex flex-col items-start">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#DDF7F3] border border-[#14B8A6]/20 flex items-center justify-center text-[#0F9F91] mb-4 md:mb-6">
                <Trophy className="w-6 h-6 md:w-8 md:h-8 stroke-[1.9]" />
              </div>

              <h3 className="font-heading font-extrabold text-xl md:text-2xl text-[#0A192F] tracking-tight mb-2 md:mb-3">
                Prestasi Mahasiswa
              </h3>

              <p className="text-slate-600 text-sm md:text-[16px] leading-relaxed">
                Pendampingan kompetisi dan pengembangan mahasiswa untuk meraih
                pencapaian di tingkat nasional hingga internasional.
              </p>
            </div>
          </motion.div>

          {/* --------------------------------------------------------------- */}
          {/* 3. UNIT KEGIATAN MAHASISWA (Desktop 12-col)                     */}
          {/* --------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-2 lg:col-span-12 bg-white rounded-2xl md:rounded-[22px] p-6 md:p-8 border border-slate-200/80 shadow-[0_2px_10px_-2px_rgba(10,25,47,0.03)] hover:border-[#14B8A6]/30 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-5 flex-1">
                <div className="w-12 h-12 md:w-13 md:h-13 rounded-xl bg-[#DDF7F3] border border-[#14B8A6]/20 flex items-center justify-center text-[#0F9F91] flex-shrink-0">
                  <Layers className="w-6 h-6 stroke-[1.9]" />
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-xl md:text-2xl text-[#0A192F] tracking-tight mb-1.5">
                    Unit Kegiatan Mahasiswa
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
                    Wadah untuk mengembangkan minat, bakat, kreativitas, dan
                    kebersamaan mahasiswa melalui berbagai kegiatan.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-50 text-slate-400 group-hover:text-[#14B8A6] group-hover:bg-[#DDF7F3] transition-colors duration-200 flex-shrink-0">
                <ArrowUpRight className="w-4 h-4 stroke-[2]" />
              </div>
            </div>
          </motion.div>

          {/* --------------------------------------------------------------- */}
          {/* 4. LAYANAN MAHASISWA (Desktop 12-col)                           */}
          {/* --------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 lg:col-span-12 bg-gradient-to-r from-white via-[#F4FBF9] to-white rounded-2xl md:rounded-[22px] p-6 md:p-8 lg:p-9 border border-[#14B8A6]/20 shadow-[0_2px_12px_-2px_rgba(10,25,47,0.04)] hover:border-[#14B8A6]/35 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-5 max-w-3xl">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#DDF7F3] border border-[#14B8A6]/25 text-[#0F9F91] flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="w-6 h-6 md:w-7 md:h-7 stroke-[1.9]" />
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-xl md:text-2xl text-[#0A192F] tracking-tight mb-1.5">
                    Layanan Mahasiswa
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Dukungan akademik, kesejahteraan, bimbingan, dan layanan yang
                    membantu mahasiswa menjalani perjalanan perkuliahan.
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto pt-1 md:pt-0">
                <Link
                  href="#cta"
                  className="inline-flex items-center justify-center gap-2 h-10 md:h-11 px-5 rounded-xl font-semibold text-sm text-[#0F9F91] bg-white border border-[#14B8A6]/35 hover:bg-[#14B8A6] hover:text-white hover:border-[#14B8A6] shadow-sm hover:shadow-md transition-all duration-200"
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
