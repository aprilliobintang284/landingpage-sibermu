"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Radio, ShieldCheck, ChevronRight } from "lucide-react";

// Islamic Dome / Mihrab Icon matching Phone 2 reference mockup
const MosqueDomeIcon = ({ className = "w-5 h-5 stroke-[1.9]" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2.5v2.5" />
    <path d="M12 5c-3.5 2-6 5.5-6 10.5v4.5h12v-4.5c0-5-2.5-8.5-6-10.5z" />
    <path d="M4 20h16" />
    <path d="M10 20v-4a2 2 0 0 1 4 0v4" />
  </svg>
);

const aikItems = [
  {
    title: "Kegiatan Keagamaan",
    desc: "Shalat berjamaah, tahsin Al-Qur’an, dan pengajian yang membangun kedekatan spiritual mahasiswa.",
    icon: MosqueDomeIcon,
  },
  {
    title: "Kajian Islami",
    desc: "Kajian kitab, diskusi fiqh kontemporer, dan halaqah yang dipandu oleh ustadz atau narasumber yang kompeten.",
    icon: BookOpen,
  },
  {
    title: "Syiar Digital",
    desc: "Konten dakwah kreatif dan literasi digital Islami untuk menyebarkan kebaikan dan nilai positif di era digital.",
    icon: Radio,
  },
  {
    title: "Nilai Kemuhammadiyahan",
    desc: "Internalisasi nilai dan semangat kemuhammadiyahan sebagai bagian dari pembentukan karakter mahasiswa.",
    icon: ShieldCheck,
  },
];

export default function AikSection() {
  return (
    <section
      id="aik"
      className="scroll-mt-20 relative pt-8 sm:pt-12 md:pt-16 pb-14 sm:pb-20 md:pb-24 bg-[#F8FBFB] overflow-hidden"
    >
      {/* Subtle Ambient Background Tint */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#14B8A6]/[0.035] blur-3xl rounded-full" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#14B8A6]/[0.025] blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 relative z-10">
        {/* =================================================================== */}
        {/* EDITORIAL SPLIT LAYOUT (Single-col stacked on Mobile, Split on Desktop) */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 lg:gap-16 lg:items-center">
          {/* --------------------------------------------------------------- */}
          {/* SECTION HEADER: Eyebrow, Heading, Intro & Subtle Motif          */}
          {/* --------------------------------------------------------------- */}
          <div className="lg:col-span-5 relative flex flex-col justify-center">
            {/* Visual Anchor: Subtle Islamic 8-point geometric star (Delicate on mobile) */}
            <div className="absolute -top-6 -right-6 sm:-top-16 sm:-left-16 lg:-top-20 lg:-left-20 w-[220px] h-[220px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] pointer-events-none -z-10 opacity-[0.03] sm:opacity-[0.045] lg:opacity-[0.065] text-[#14B8A6]">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full stroke-current fill-none"
                strokeWidth="1.2"
              >
                {/* Concentric guiding orbital rings */}
                <circle cx="100" cy="100" r="94" strokeDasharray="3 4" />
                <circle cx="100" cy="100" r="84" />
                <circle cx="100" cy="100" r="70" strokeDasharray="2 3" />
                <circle cx="100" cy="100" r="50" />
                <circle cx="100" cy="100" r="28" />

                {/* 8-pointed star / Islamic Khatam */}
                <rect x="42" y="42" width="116" height="116" rx="2" />
                <rect
                  x="42"
                  y="42"
                  width="116"
                  height="116"
                  rx="2"
                  transform="rotate(45 100 100)"
                />

                {/* Inner 8-pointed star */}
                <rect x="58" y="58" width="84" height="84" rx="1.5" />
                <rect
                  x="58"
                  y="58"
                  width="84"
                  height="84"
                  rx="1.5"
                  transform="rotate(45 100 100)"
                />

                {/* Ray lines radiating from center */}
                <line
                  x1="100"
                  y1="6"
                  x2="100"
                  y2="194"
                  strokeDasharray="4 4"
                />
                <line
                  x1="6"
                  y1="100"
                  x2="194"
                  y2="100"
                  strokeDasharray="4 4"
                />
                <line
                  x1="34"
                  y1="34"
                  x2="166"
                  y2="166"
                  strokeDasharray="4 4"
                />
                <line
                  x1="34"
                  y1="166"
                  x2="166"
                  y2="34"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-4"
            >
              <span className="w-7 sm:w-8 h-[1.5px] bg-[#14B8A6]" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-[#0F9F91]">
                AI-Islam & Kemuhammadiyahan
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="font-heading font-extrabold text-[28px] sm:text-4xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.15] mb-2 sm:mb-5"
            >
              Teguhkan{" "}
              <span className="text-[#14B8A6]">Karakter</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="text-slate-600 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-lg mb-2 sm:mb-0"
            >
              Membangun mahasiswa yang berilmu, beriman, berakhlak, dan
              berkemajuan melalui pembinaan AI-Islam dan Kemuhammadiyahan.
            </motion.p>
          </div>

          {/* --------------------------------------------------------------- */}
          {/* ITEMS: 4 AIK Items dalam Vertical Editorial List                */}
          {/* Unified design system matching Phone 2 reference mockup         */}
          {/* --------------------------------------------------------------- */}
          <div className="lg:col-span-7 flex flex-col">
            {aikItems.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === aikItems.length - 1;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`group flex items-center justify-between gap-3.5 sm:gap-5 ${
                    !isLast
                      ? "py-3 sm:py-4 md:py-6 border-b border-slate-200/75 hover:border-[#14B8A6]/30"
                      : "pt-3 sm:pt-4 md:pt-6"
                  } transition-colors duration-200`}
                >
                  <div className="flex items-center sm:items-start gap-3 sm:gap-4 md:gap-5 flex-1 min-w-0">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-12 md:h-12 rounded-full bg-[#E6F8F5] border border-[#14B8A6]/20 flex items-center justify-center text-[#0F9F91] flex-shrink-0 group-hover:scale-105 group-hover:bg-[#14B8A6] group-hover:text-white transition-all duration-200 shadow-sm shadow-[#14B8A6]/10">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.9]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-extrabold text-[15px] sm:text-lg md:text-2xl text-[#0A192F] tracking-tight mb-0.5 sm:mb-1 group-hover:text-[#0F9F91] transition-colors duration-200 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-slate-500 sm:text-slate-600 leading-relaxed line-clamp-2 sm:line-clamp-none">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 text-slate-400 group-hover:text-[#14B8A6] group-hover:translate-x-0.5 transition-all duration-200">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
