import React from "react";
import { Sparkles, Compass } from "lucide-react";

export default function FastabiqulKhairat() {
  return (
    <section
      id="fastabiqul-khairat"
      className="py-20 bg-navy-950 relative border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/20 text-[#2DD4BF] text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Nilai Utama Gerakan</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
          “Fastabiqul Khairat”
          <span className="block text-gradient-turquoise text-lg sm:text-xl font-medium mt-2">
            Berlomba-lomba dalam Kebaikan & Keunggulan
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
          Fondasi filosofis yang menghubungkan eksplorasi bakat mahasiswa dengan keteguhan moral dan spiritual islami.
        </p>
      </div>
    </section>
  );
}
