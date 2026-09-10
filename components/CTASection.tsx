import React from "react";
import Link from "next/link";
import { ArrowUpRight, Headphones } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-24 border-t border-white/5 bg-gradient-to-b from-navy-900 to-navy-950 relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#042321]/60 via-navy-850 to-navy-800 border border-[#14B8A6]/25 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14B8A6]/15 border border-[#14B8A6]/30 text-[#5EEAD4] text-xs font-semibold mb-4">
            <Headphones className="w-3.5 h-3.5" />
            <span>Layanan Terpadu Mahasiswa</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Butuh Bimbingan atau Informasi Lebih Lanjut?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Tim Biro Kemahasiswaan & AIK Universitas Siber Muhammadiyah siap mendampingi perjalanan perkuliahan dan aktivitas Anda.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="https://sibermu.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#042321] bg-[#2DD4BF] hover:bg-[#5EEAD4] shadow-lg shadow-[#14B8A6]/25 transition-all"
            >
              <span>Kunjungi Website Resmi SiberMu</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
