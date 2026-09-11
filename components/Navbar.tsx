"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { scrollToId } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Beranda", href: "#hero" },
  { name: "Kemahasiswaan", href: "#kemahasiswaan" },
  { name: "AIK", href: "#aik" },
  { name: "Layanan", href: "#cta" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#070f1e]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 py-2.5 sm:py-3"
          : "bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-2.5 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Official Brand Identity */}
          <Link
            href="#hero"
            onClick={(e) => scrollToId("hero", e)}
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none rounded-xl"
          >
            {/* Official SiberMu Emblem Logo */}
            <div className="relative flex items-center justify-center w-8 h-8 min-[360px]:w-9 min-[360px]:h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/icons/sibermu-logo.png"
                alt="Logo Resmi Universitas Siber Muhammadiyah"
                width={40}
                height={40}
                priority
                className="object-contain w-full h-full"
              />
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col">
              <span
                className={`font-heading font-extrabold text-[17px] sm:text-[19px] tracking-tight transition-colors duration-300 ${
                  isScrolled ? "text-white" : "text-[#0A192F]"
                }`}
              >
                SiberMu
              </span>
              <span
                className={`text-[10.5px] sm:text-xs font-medium transition-colors duration-300 ${
                  isScrolled ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Biro Kemahasiswaan & AIK
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden md:flex items-center gap-1 lg:gap-1.5 px-3.5 py-1.5 rounded-full transition-all duration-300 ${
              isScrolled
                ? "bg-navy-850/80 border border-white/10 backdrop-blur-md shadow-sm shadow-black/20"
                : "bg-white/80 border border-slate-200/90 backdrop-blur-md shadow-sm shadow-slate-900/5"
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToId(item.href, e)}
                className={`px-3.5 lg:px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isScrolled
                    ? "text-slate-300 hover:text-white hover:bg-white/10"
                    : "text-[#1E293B] hover:text-[#14B8A6] hover:bg-black/[0.04]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action CTA Button: Portal Layanan */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#cta"
              onClick={(e) => scrollToId("cta", e)}
              className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-[13px] text-sm font-semibold text-white bg-[#14B8A6] hover:bg-[#0F9F91] shadow-md shadow-[#14B8A6]/20 hover:shadow-lg hover:shadow-[#14B8A6]/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Portal Layanan</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`p-1.5 sm:p-2 rounded-xl transition-all duration-200 focus:outline-none ${
                isScrolled
                  ? "text-slate-200 hover:text-white"
                  : "text-[#0A192F] hover:text-[#14B8A6]"
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6 stroke-[2.2]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 px-4 pt-2 pb-5">
          <div className="rounded-2xl bg-[#070f1e]/98 border border-white/10 backdrop-blur-2xl p-4 shadow-2xl space-y-3">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    scrollToId(item.href, e);
                  }}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-[#2DD4BF] hover:bg-white/5 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10">
              <Link
                href="#cta"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  scrollToId("cta", e);
                }}
                className="flex items-center justify-center gap-2 w-full h-11 px-4 text-sm font-semibold text-white bg-[#14B8A6] hover:bg-[#0F9F91] rounded-[13px] transition-colors shadow-md shadow-[#14B8A6]/20"
              >
                <span>Portal Layanan Mahasiswa</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
