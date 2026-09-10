import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SiberMu — Biro Kemahasiswaan & AIK | Universitas Siber Muhammadiyah",
  description:
    "Portal resmi Biro Kemahasiswaan dan Al-Islam & Kemuhammadiyahan (AIK) Universitas Siber Muhammadiyah. Kembangkan Potensi. Teguhkan Karakter.",
  keywords: [
    "SiberMu",
    "Universitas Siber Muhammadiyah",
    "Biro Kemahasiswaan",
    "AIK",
    "Al-Islam Kemuhammadiyahan",
    "Fastabiqul Khairat",
    "Prestasi Mahasiswa SiberMu",
  ],
  icons: {
    icon: "/icons/sibermu-logo.png",
    shortcut: "/icons/sibermu-logo.png",
    apple: "/icons/sibermu-logo.png",
  },
  authors: [{ name: "Biro Kemahasiswaan & AIK Universitas Siber Muhammadiyah" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#070F1E] text-slate-100 font-sans selection:bg-[#14B8A6] selection:text-white overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
