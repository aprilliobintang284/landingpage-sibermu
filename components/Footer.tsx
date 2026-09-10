import React from "react";
import Link from "next/link";
import { Compass } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-navy-950 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#14B8A6]/20 text-[#2DD4BF] border border-[#14B8A6]/30">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <span className="font-heading font-bold text-white tracking-tight">
                SiberMu
              </span>
              <span className="text-xs text-slate-500 ml-2">
                Biro Kemahasiswaan & AIK
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <Link href="#hero" className="hover:text-[#2DD4BF] transition-colors">
              Beranda
            </Link>
            <Link href="#kemahasiswaan" className="hover:text-[#2DD4BF] transition-colors">
              Kemahasiswaan
            </Link>
            <Link href="#fastabiqul-khairat" className="hover:text-[#2DD4BF] transition-colors">
              Fastabiqul Khairat
            </Link>
            <Link href="#aik" className="hover:text-[#2DD4BF] transition-colors">
              AIK
            </Link>
            <Link href="#cta" className="hover:text-[#2DD4BF] transition-colors">
              Layanan
            </Link>
          </div>

          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Universitas Siber Muhammadiyah. Seluruh hak cipta dilindungi.
          </div>
        </div>
      </div>
    </footer>
  );
}
