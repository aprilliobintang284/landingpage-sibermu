import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import KemahasiswaanSection from "@/components/KemahasiswaanSection";
import AikSection from "@/components/AikSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FBFB] text-slate-800 selection:bg-[#14B8A6] selection:text-white relative">
      <Navbar />
      <main className="flex-1 flex flex-col w-full">
        <HeroSection />
        <KemahasiswaanSection />
        <AikSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
