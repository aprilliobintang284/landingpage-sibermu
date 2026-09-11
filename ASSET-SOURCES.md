# 📋 Laporan Audit Sumber Aset & Copyright
**Landing Page Biro Kemahasiswaan & AIK — Universitas Siber Muhammadiyah**  
*Tanggal Audit: 11 September 2026*  
*Tujuan: Dokumentasi dan Verifikasi Kepatuhan Hak Cipta untuk Keperluan Lomba / Publikasi Resmi*

---

## 📊 Tabel Audit Seluruh Aset

| Asset | Path | Jenis | Sumber | URL | Lisensi | Attribution | Status | Catatan |
|---|---|---|---|---|---|---|---|---|
| **Logo SiberMu** | `public/icons/sibermu-logo.png` | Logo / Identitas Kampus | Identitas resmi Universitas Siber Muhammadiyah / SiberMu | [sibermu.ac.id](https://sibermu.ac.id) | Hak Cipta Universitas Siber Muhammadiyah | Tidak Wajib (Identitas Resmi) | **SAFE / JELAS** | Logo Universitas Siber Muhammadiyah digunakan sebagai identitas resmi institusi dalam landing page Biro Kemahasiswaan & AIK. Digunakan pada header, footer, dan favicon (`app/icon.png`, `app/apple-icon.png`). |
| **Hero Desktop Artwork** | `public/images/hero/hero-desktop.png` (dan `hero-dekstop.png`) | AI-generated Image / Digital Composite | AI-generated menggunakan Freepik / Magnific | [freepik.com](https://www.freepik.com) / [magnific.ai](https://magnific.ai) | Freepik / Magnific Terms of Use (Free Plan) | Perlu mengikuti ketentuan platform untuk akun Free | **PERLU VERIFIKASI** | Sumber: AI-generated menggunakan Freepik / Magnific. Ketentuan penggunaan perlu diverifikasi berdasarkan paket/akun Free yang digunakan dan Terms of Use yang berlaku saat aset dibuat. Penggunaan untuk keperluan lomba perlu disesuaikan dengan ketentuan platform dan ketentuan lomba yang berlaku. |
| **Hero Mobile Artwork** | `public/images/hero/hero-mobile.png` | AI-generated Image / Digital Composite | AI-generated menggunakan Freepik / Magnific | [freepik.com](https://www.freepik.com) / [magnific.ai](https://magnific.ai) | Freepik / Magnific Terms of Use (Free Plan) | Perlu mengikuti ketentuan platform untuk akun Free | **PERLU VERIFIKASI** | Sumber: AI-generated menggunakan Freepik / Magnific. Ketentuan penggunaan perlu diverifikasi berdasarkan paket/akun Free yang digunakan dan Terms of Use yang berlaku saat aset dibuat. Penggunaan untuk keperluan lomba perlu disesuaikan dengan ketentuan platform dan ketentuan lomba yang berlaku. |
| **Hero Image (Legacy)** | `public/images/hero/hero-image.png` | AI-generated Image | AI-generated menggunakan Freepik / Magnific | [freepik.com](https://www.freepik.com) / [magnific.ai](https://magnific.ai) | Freepik / Magnific Terms of Use (Free Plan) | Tidak Digunakan di UI | **PERLU VERIFIKASI** | Sumber: AI-generated menggunakan Freepik / Magnific. Ketentuan penggunaan perlu diverifikasi berdasarkan paket/akun Free yang digunakan dan Terms of Use yang berlaku saat aset dibuat. Aset cadangan yang tidak aktif dipanggil di komponen. |
| **Lucide React Icons** | Library dependency (`lucide-react`) | Icon Library (SVG Components) | Lucide Project Open Source | [lucide.dev](https://lucide.dev) | ISC License | Tidak Wajib (Permissive Open Source) | **SAFE / JELAS** | Mencakup icon: `Menu`, `X`, `ArrowRight`, `ArrowUpRight`, `ChevronRight`, `Play`, `GraduationCap`, `Sparkles`, `Users`, `Layers`, `Trophy`, `HeartHandshake`, `BookOpen`, `Radio`, `ShieldCheck`, `Mail`, `Phone`, `MapPin`. |
| **Mosque Dome Icon** | `components/AikSection.tsx` (L8-23) | Custom SVG Icon | Dibuat langsung dalam kode komponen TSX | Kode Internal Project | Proyek Internal SiberMu | Tidak Wajib | **SAFE / JELAS** | Siluet kubah masjid / mihrab minimalis dibuat mandiri menggunakan path SVG standar 24x24. |
| **Social Media Icons** | `components/Footer.tsx` (L64, L85, L105, L124) | SVG Vector Icons | Mengikuti spesifikasi SVG Lucide Icons | [lucide.dev](https://lucide.dev) | ISC License | Tidak Wajib | **SAFE / JELAS** | Ikon vektor Instagram, YouTube, TikTok, dan Facebook berbasis SVG outline. |
| **Islamic Geometric Khatam** | `components/AikSection.tsx` (L71-100) | Background / Dekorasi Geometris | Rumus matematika geometri bintang 8 sudut (Khatam) | Kode Internal Project | Proyek Internal SiberMu | Tidak Wajib | **SAFE / JELAS** | Ornamen vektor bintang delapan dan lingkaran orbital Islami dibuat langsung dengan elemen `<rect>` dan `<circle>`. |
| **Decorative Flow Curves** | `components/CTASection.tsx` (L28-50) | Background / Dekorasi Vektor | Kode SVG kustom gradient curve | Kode Internal Project | Proyek Internal SiberMu | Tidak Wajib | **SAFE / JELAS** | Kurva gelombang abstrak dengan linear gradient tosca/teal. |
| **Decorative Circle Watermark** | `components/KemahasiswaanSection.tsx` (L139) | Background / Dekorasi Vektor | Kode SVG lingkaran konsentris | Kode Internal Project | Proyek Internal SiberMu | Tidak Wajib | **SAFE / JELAS** | Elemen lingkaran watermark minimalis pada kartu Organisasi Mahasiswa. |
| **Font Plus Jakarta Sans** | Google Fonts (`next/font/google`) | Font Web | Tokotype (Gumpita Rahayu) via Google Fonts | [fonts.google.com](https://fonts.google.com/specimen/Plus+Jakarta+Sans) | SIL Open Font License 1.1 (OFL) | Tidak Wajib untuk web font embedding | **SAFE / JELAS** | Tipografi utama untuk semua heading (`h1` - `h6`, `font-heading`). Menggunakan SIL Open Font License 1.1 (OFL). |
| **Font Inter** | Google Fonts (`next/font/google`) | Font Web | Rasmus Andersson via Google Fonts | [fonts.google.com](https://fonts.google.com/specimen/Inter) | SIL Open Font License 1.1 (OFL) | Tidak Wajib untuk web font embedding | **SAFE / JELAS** | Tipografi body text dan antarmuka umum (`font-sans`). Menggunakan SIL Open Font License 1.1 (OFL). |
| **Font Caveat** | Google Fonts (`next/font/google`) | Font Web | Kimberly Geswein via Google Fonts | [fonts.google.com](https://fonts.google.com/specimen/Caveat) | SIL Open Font License 1.1 (OFL) | Tidak Wajib untuk web font embedding | **SAFE / JELAS** | Font tulisan tangan aksen dekoratif pada `HeroSection.tsx`. Menggunakan SIL Open Font License 1.1 (OFL). |
| **Video Profil / Perkenalan SiberMu** | `components/HeroSection.tsx` (L351) | Video Embed | YouTube — video perkenalan SiberMu | [youtube.com](https://www.youtube.com/watch?v=rkb0SToPreg) | YouTube Embed / sesuai ketentuan penggunaan YouTube | Tidak ada attribution khusus yang ditetapkan dalam dokumentasi proyek; sumber video dicantumkan sebagai video perkenalan resmi SiberMu. | **SAFE / JELAS** | Digunakan sebagai embed pada fitur modal "Tonton Video" di HeroSection. Video yang digunakan merupakan video perkenalan Universitas Siber Muhammadiyah dari YouTube. |
| **Default Next.js SVGs** | `public/*.svg` (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`) | SVG Icons | Vercel Next.js Starter Template | [github.com/vercel/next.js](https://github.com/vercel/next.js) | MIT License | Tidak Wajib | **SAFE / JELAS** | File bawaan scaffold `create-next-app` (tidak aktif dipanggil di komponen aplikasi). |
| **Next.js & React Framework** | `next`, `react`, `react-dom` | Software Dependency | Vercel Inc. & Meta Platforms Inc. | [nextjs.org](https://nextjs.org/) | MIT License | Tidak Wajib | **SAFE / JELAS** | Framework utama aplikasi web. |
| **Tailwind CSS v4** | `tailwindcss`, `@tailwindcss/postcss` | Software Dependency | Tailwind Labs Inc. | [tailwindcss.com](https://tailwindcss.com/) | MIT License | Tidak Wajib | **SAFE / JELAS** | Framework utilitas styling CSS. |
| **Framer Motion** | `framer-motion` | Software Dependency | Motion Software Limited / Matt Perry | [motion.dev](https://motion.dev/) | MIT License | Tidak Wajib | **SAFE / JELAS** | Pustaka animasi interaktif dan micro-interactions. |

---

## 🟢 SAFE / JELAS
Aset-aset berikut memiliki sumber, kepemilikan, dan lisensi yang jelas:

1. **Logo Resmi Universitas Siber Muhammadiyah (`sibermu-logo.png`)**:
   - Logo Universitas Siber Muhammadiyah digunakan sebagai identitas resmi institusi dalam landing page Biro Kemahasiswaan & AIK.
2. **Font Web Google Fonts (Plus Jakarta Sans, Inter, Caveat)**:
   - Font web menggunakan lisensi **SIL Open Font License 1.1 (OFL)**.
3. **Pustaka Ikon Lucide React (`lucide-react`)**:
   - Seluruh ikon antarmuka (`ArrowRight`, `Users`, `Trophy`, `GraduationCap`, dll.) berlisensi **ISC License** yang permisif dan bebas royalti.
4. **Custom Code SVG (MosqueDomeIcon, Khatam Star, CTA Waves)**:
   - Dibuat secara mandiri menggunakan kode vektor SVG langsung di dalam komponen TSX. Tidak menggunakan gambar/vektor unduhan pihak ketiga.
5. **Video Perkenalan SiberMu (Modal Embed)**:
   - Digunakan sebagai embed pada fitur modal "Tonton Video" di HeroSection. Video yang digunakan merupakan video perkenalan Universitas Siber Muhammadiyah dari YouTube (`rkb0SToPreg`).
6. **Pustaka Open Source (Next.js, React, Tailwind CSS, Framer Motion)**:
   - Seluruh dependency menggunakan lisensi open-source terpercaya (**MIT License**).

---

## 🟡 PERLU VERIFIKASI
Aset-aset berikut membutuhkan verifikasi atau tindakan penyesuaian sebelum penyelesaian proyek:

1. **Visual Hero Desktop & Mobile (`hero-desktop.png`, `hero-dekstop.png`, `hero-mobile.png`)**:
   - **Sumber**: AI-generated menggunakan Freepik / Magnific.
   - **Status**: **PERLU VERIFIKASI**.
   - **Catatan**: Ketentuan penggunaan perlu diverifikasi berdasarkan paket/akun Free yang digunakan dan *Terms of Use* yang berlaku saat aset dibuat. Penggunaan untuk keperluan lomba perlu disesuaikan dengan ketentuan platform dan ketentuan lomba yang berlaku.
2. **Aset Legacy `hero-image.png`**:
   - **Kondisi**: Berada di folder `public/images/hero/`, merupakan aset cadangan yang tidak aktif dipanggil di kode komponen.
   - **Catatan**: Bersumber dari proses generasi yang sama (Freepik / Magnific Free Plan).

---

## 🟠 PERTIMBANGAN LISENSI & ATRIBUSI
1. **Ketentuan Attribution Freepik / Magnific (Akun Free)**:
   - Karena aset hero dibuat menggunakan akun Free, periksa dan ikuti ketentuan attribution yang berlaku pada platform saat aset dibuat/digunakan.
2. **Kesesuaian dengan Aturan Lomba**:
   - Aturan lomba yang tersedia tidak memberikan ketentuan khusus mengenai penggunaan AI, copyright aset, atau attribution. Karena itu, aspek tersebut dicatat sebagai pertimbangan lisensi aset dan bukan sebagai persyaratan lomba yang telah dikonfirmasi.

---

## 🤖 AI-GENERATED ASSETS
Daftar aset yang dihasilkan menggunakan generator AI:

| File | Resolusi | Karakteristik Visual | Sumber AI | Status Penggunaan |
| :--- | :---: | :--- | :--- | :--- |
| `public/images/hero/hero-desktop.png` (dan `hero-dekstop.png`) | 1672 × 941 | Mahasiswi berhijab + VR headset + laptop, navy Islamic cyber composite | Freepik / Magnific AI image generation (Free Plan) | **Aktif** (Desktop Hero ≥ 1280px) |
| `public/images/hero/hero-mobile.png` | 1131 × 1391 | Mahasiswi berhijab + VR headset + laptop, transparent cutout | Freepik / Magnific AI image generation (Free Plan) | **Aktif** (Mobile/Tablet Hero < 1280px) |
| `public/images/hero/hero-image.png` | 1086 × 1086 | Mahasiswi berhijab + VR headset, square early asset | Freepik / Magnific AI image generation (Free Plan) | *Arsip / Tidak Aktif* |

*Catatan*: Visual hero dibuat menggunakan bantuan generator AI Freepik / Magnific berdasarkan konsep dan prompt yang disusun khusus untuk project, kemudian disesuaikan untuk kebutuhan landing page. Penggunaan untuk keperluan lomba perlu disesuaikan dengan ketentuan platform dan ketentuan lomba yang berlaku.

---

## 📝 RECOMMENDED CREDITS (Draf Dokumentasi Lomba)
Teks kredit berikut dapat langsung disalin ke dalam lembar orisinalitas atau lampiran dokumentasi lomba:

```markdown
### Dokumentasi Sumber Aset & Lisensi

1. Identitas & Logo:
   - Logo Resmi Universitas Siber Muhammadiyah (SiberMu) — digunakan sebagai identitas resmi institusi.

2. Aset Visual & Ilustrasi:
   - Visual Hero Desktop & Mobile — AI-generated menggunakan Freepik / Magnific berdasarkan konsep dan prompt yang disusun khusus untuk project, kemudian disesuaikan untuk kebutuhan landing page.

3. Multimedia:
   - Video profil/perkenalan SiberMu — embedded from official SiberMu YouTube video.

4. Elemen Vektor & Ornamen:
   - Kubah Masjid, Bintang Khatam 8 Sudut, dan Gelombang Abstrak — dibuat secara mandiri menggunakan kode SVG inline.

5. Tipografi:
   - Plus Jakarta Sans — SIL Open Font License 1.1.
   - Inter — SIL Open Font License 1.1.
   - Caveat — SIL Open Font License 1.1.

6. Ikonografi:
   - Lucide Icons / Lucide React — ISC License.

7. Framework & Libraries:
   - Next.js
   - React
   - Tailwind CSS
   - Framer Motion
```
