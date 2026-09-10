import React from "react";
import { BookOpen, ShieldCheck, Radio, Sun } from "lucide-react";

export default function AikSection() {
  return (
    <section
      id="aik"
      className="py-24 border-t border-white/5 bg-navy-900/40 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/20 text-[#2DD4BF] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Pilar Al-Islam & Kemuhammadiyahan</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Teguhkan Karakter & Spiritualitas
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Membangun generasi cerdas berakhlak mulia melalui penguatan pemikiran Islam berkemajuan dan syiar digital.
          </p>
        </div>

        {/* Minimalist Placeholder Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Kegiatan Keagamaan", desc: "Ibadah praktis dan pembinaan ruhiyah", icon: Sun },
            { title: "Kajian Islami", desc: "Dialog keilmuan Islam berkemajuan", icon: BookOpen },
            { title: "Syiar Digital", desc: "Dakwah kreatif berbasis teknologi siber", icon: Radio },
            { title: "Nilai Kemuhammadiyahan", desc: "Integritas, keikhlasan, dan kemaslahatan", icon: ShieldCheck },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-navy-850/60 border border-white/5 p-6 hover:border-[#14B8A6]/30 transition-all text-left space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-navy-800 border border-white/10 flex items-center justify-center text-[#2DD4BF]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-white text-base">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
