"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, BookOpen, Radio, ShieldCheck } from "lucide-react";

const aikItems = [
  {
    num: "01",
    title: "Kegiatan Keagamaan",
    desc: "Shalat berjamaah, tahsin Al-Qur’an, dan pengajian yang membangun kedekatan spiritual mahasiswa.",
    icon: Sun,
    featured: false,
  },
  {
    num: "02",
    title: "Kajian Islami",
    desc: "Kajian kitab, diskusi fiqh kontemporer, dan halaqah yang dipandu oleh ustadz atau narasumber yang kompeten.",
    icon: BookOpen,
    featured: false,
  },
  {
    num: "03",
    title: "Syiar Digital",
    desc: "Konten dakwah kreatif dan literasi digital Islami untuk menyebarkan kebaikan dan nilai positif di era digital.",
    icon: Radio,
    featured: false,
  },
  {
    num: "04",
    title: "Nilai Kemuhammadiyahan",
    desc: "Internalisasi nilai dan semangat kemuhammadiyahan sebagai bagian dari pembentukan karakter mahasiswa.",
    icon: ShieldCheck,
    featured: true,
  },
];

export default function AikSection() {
  return (
    <section
      id="aik"
      className="relative py-20 sm:py-28 md:py-32 bg-[#F8FBFB] border-t border-slate-200/80 overflow-hidden"
    >
      {/* Subtle Ambient Background Tint */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#14B8A6]/[0.035] blur-3xl rounded-full" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#14B8A6]/[0.025] blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* =================================================================== */}
        {/* EDITORIAL SPLIT LAYOUT                                              */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* --------------------------------------------------------------- */}
          {/* AREA KIRI: Eyebrow, Heading, Intro & Subtle Motif               */}
          {/* --------------------------------------------------------------- */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[1.5px] bg-[#14B8A6]" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-[#0F9F91]">
                AI-Islam & Kemuhammadiyahan
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.15] mb-4 sm:mb-5"
            >
              Teguhkan{" "}
              <span className="text-[#14B8A6]">Karakter</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="text-slate-600 text-base sm:text-[17px] leading-relaxed max-w-lg"
            >
              Membangun mahasiswa yang berilmu, beriman, berakhlak, dan
              berkemajuan melalui pembinaan AI-Islam dan Kemuhammadiyahan.
            </motion.p>

            {/* Subtle Islamic Geometric Atmospheric Motif in Left Column */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="hidden lg:block relative mt-10 pt-8 border-t border-slate-200/70"
            >
              <div className="w-36 h-36 opacity-[0.06] pointer-events-none">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full stroke-[#14B8A6] fill-none"
                  strokeWidth="1.4"
                >
                  <circle cx="50" cy="50" r="44" strokeDasharray="3 4" />
                  <circle cx="50" cy="50" r="34" />
                  <circle cx="50" cy="50" r="24" />
                  <rect x="32" y="32" width="36" height="36" rx="2" />
                  <rect
                    x="32"
                    y="32"
                    width="36"
                    height="36"
                    rx="2"
                    transform="rotate(45 50 50)"
                  />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* --------------------------------------------------------------- */}
          {/* AREA KANAN: 4 AIK Content Items in a Vertical Editorial List     */}
          {/* --------------------------------------------------------------- */}
          <div className="lg:col-span-7 flex flex-col">
            {aikItems.map((item, index) => {
              const Icon = item.icon;

              if (item.featured) {
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group relative bg-[#F0FBF9]/90 border border-[#14B8A6]/30 rounded-2xl p-6 sm:p-7 shadow-[0_2px_12px_-2px_rgba(20,184,166,0.08)] hover:shadow-md hover:border-[#14B8A6]/45 transition-all duration-300 overflow-hidden mt-3 sm:mt-4"
                  >
                    {/* Left subtle accent bar */}
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#14B8A6]" />

                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#14B8A6] text-white flex items-center justify-center flex-shrink-0 shadow-sm shadow-[#14B8A6]/25 group-hover:scale-105 transition-transform duration-200">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.9]" />
                      </div>

                      <div className="flex-1">
                        <span className="text-[11px] font-semibold text-[#0F9F91] tracking-[0.16em] uppercase block mb-1">
                          {item.num}
                        </span>
                        <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0A192F] tracking-tight mb-2 group-hover:text-[#0F9F91] transition-colors duration-200">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group py-6 sm:py-7 border-b border-slate-200/80 hover:border-[#14B8A6]/30 transition-colors duration-200"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#DDF7F3] border border-[#14B8A6]/25 flex items-center justify-center text-[#0F9F91] flex-shrink-0 group-hover:scale-105 group-hover:bg-[#14B8A6] group-hover:text-white transition-all duration-200">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.9]" />
                    </div>

                    <div className="flex-1">
                      <span className="text-[11px] font-semibold text-[#0F9F91]/70 tracking-[0.16em] uppercase block mb-1">
                        {item.num}
                      </span>
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0A192F] tracking-tight mb-1.5 group-hover:text-[#0F9F91] transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
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
