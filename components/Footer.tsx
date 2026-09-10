import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#07152B] text-slate-400 text-sm border-t border-white/[0.08] overflow-hidden">
      {/* Subtle Ambient Mint Light at Bottom */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-[#14B8A6]/[0.035] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 relative z-10">
        {/* ================================================================= */}
        {/* 4-COLUMN RESPONSIVE GRID (Desktop 4-col, Tablet 2-col, Mobile 1-col) */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-10">
          {/* ------------------------------------------------------------- */}
          {/* KOLOM 1: BRAND IDENTITY & DESCRIPTION                         */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link
              href="#hero"
              className="group flex items-center gap-3.5 focus:outline-none"
              aria-label="Kembali ke Beranda SiberMu"
            >
              {/* Official SiberMu Logo */}
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
                <Image
                  src="/icons/sibermu-logo.png"
                  alt="Logo Resmi Universitas Siber Muhammadiyah"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-white tracking-tight leading-tight">
                  SiberMu
                </span>
                <span className="text-xs text-slate-400 font-medium tracking-normal mt-0.5">
                  Biro Kemahasiswaan & AIK
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mt-4 max-w-sm">
              Biro Kemahasiswaan dan AIK Universitas Siber Muhammadiyah hadir
              untuk mendampingi perjalanan mahasiswa dalam mengembangkan potensi
              dan meneguhkan karakter.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 mt-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/universitassibermuhammadiyah/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram SiberMu"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 text-slate-400 hover:text-[#14B8A6] hover:border-[#14B8A6]/40 hover:bg-[#14B8A6]/[0.08] flex items-center justify-center transition-all duration-200"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@universitassibermuhammadiyah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube SiberMu"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 text-slate-400 hover:text-[#14B8A6] hover:border-[#14B8A6]/40 hover:bg-[#14B8A6]/[0.08] flex items-center justify-center transition-all duration-200"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <polygon points="10 15 15 12 10 9 10 15" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/universitassibermuhammadiyah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook SiberMu"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 text-slate-400 hover:text-[#14B8A6] hover:border-[#14B8A6]/40 hover:bg-[#14B8A6]/[0.08] flex items-center justify-center transition-all duration-200"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* KOLOM 2: TAUTAN CEPAT                                         */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-bold text-xs uppercase tracking-[0.16em] text-white mb-4 sm:mb-5">
              Tautan Cepat
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Beranda", href: "#hero" },
                { name: "Kemahasiswaan", href: "#kemahasiswaan" },
                { name: "AIK", href: "#aik" },
                { name: "Layanan", href: "#cta" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-[#14B8A6] transition-colors duration-200 block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* KOLOM 3: LAYANAN                                              */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-bold text-xs uppercase tracking-[0.16em] text-white mb-4 sm:mb-5">
              Layanan
            </h3>
            <ul className="space-y-3">
              {[
                {
                  name: "Sistem Informasi Akademik",
                  href: "https://sibermu.ac.id",
                  external: true,
                },
                {
                  name: "Pendaftaran Beasiswa",
                  href: "#kemahasiswaan",
                  external: false,
                },
                {
                  name: "Layanan Konseling",
                  href: "#cta",
                  external: false,
                },
                {
                  name: "Layanan Mahasiswa",
                  href: "#kemahasiswaan",
                  external: false,
                },
              ].map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-slate-400 hover:text-[#14B8A6] transition-colors duration-200 py-0.5"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-[#14B8A6] transition-colors duration-200 block py-0.5"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* KOLOM 4: HUBUNGI KAMI                                         */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-bold text-xs uppercase tracking-[0.16em] text-white mb-4 sm:mb-5">
              Hubungi Kami
            </h3>

            <div className="space-y-4 text-sm">
              {/* Alamat Kampus */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#14B8A6] flex-shrink-0 mt-1" />
                <div className="text-slate-400 leading-relaxed">
                  <span className="text-slate-200 block font-medium">
                    Universitas Siber Muhammadiyah
                  </span>
                  <span>Yogyakarta, D.I. Yogyakarta, Indonesia</span>
                </div>
              </div>

              {/* Email Resmi */}
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#14B8A6] flex-shrink-0" />
                <a
                  href="mailto:kemahasiswaan@sibermu.ac.id"
                  className="text-slate-400 hover:text-[#14B8A6] transition-colors duration-200"
                >
                  kemahasiswaan@sibermu.ac.id
                </a>
              </div>

              {/* Layanan Terpadu */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#14B8A6] flex-shrink-0" />
                <span className="text-slate-400">
                  Layanan Terpadu Mahasiswa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* FOOTER BOTTOM: DIVIDER & COPYRIGHT                                */}
        {/* ================================================================= */}
        <div className="border-t border-white/[0.08] mt-10 sm:mt-14 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © 2026 SiberMu — Universitas Siber Muhammadiyah. Seluruh hak cipta dilindungi.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#hero"
              className="hover:text-[#14B8A6] transition-colors duration-200"
            >
              Kembali ke Atas ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
