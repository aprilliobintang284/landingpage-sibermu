# 📋 Laporan Audit Sumber Aset & Copyright
**Landing Page Biro Kemahasiswaan & AIK — Universitas Siber Muhammadiyah**  
*Tanggal Audit: 11 September 2026*  
*Tujuan: Dokumentasi dan Verifikasi Kepatuhan Hak Cipta untuk Keperluan Lomba / Publikasi Resmi*

---

## 📊 Tabel Audit Seluruh Aset

| Asset | Path | Jenis | Sumber | URL | Lisensi | Attribution | Status | Catatan |
|---|---|---|---|---|---|---|---|---|
| **Logo SiberMu** | `public/icons/sibermu-logo.png` | Logo / Identitas Kampus | Identitas resmi Universitas Siber Muhammadiyah / SiberMu | [sibermu.ac.id](https://sibermu.ac.id) | Hak Cipta Universitas Siber Muhammadiyah | Tidak Wajib (Aset Kampus) | **SAFE / JELAS** | Logo resmi universitas, digunakan pada header, footer, favicon (`app/icon.png`, `app/apple-icon.png`). |
| **Hero Desktop Artwork** | `public/images/hero/hero-desktop.png` (dan `hero-dekstop.png`) | AI-generated Image / Digital Composite | Dibuat khusus untuk proyek website SiberMu oleh kreator proyek (Aprillio Bintang Perdana) | Aset Internal Project (`commit 064b285`) | User-Created / AI Terms | Dianjurkan dicatat sebagai AI-assisted creation | **PERLU VERIFIKASI** | Visual mahasiswi berhijab dengan VR headset & laptop di atas ornamen navy/tosca. Perlu dicatat model AI yang digunakan jika lomba mewajibkan *AI disclosure*. |
| **Hero Mobile Artwork** | `public/images/hero/hero-mobile.png` | AI-generated Image / Digital Composite | Dibuat khusus untuk proyek website SiberMu oleh kreator proyek (Aprillio Bintang Perdana) | Aset Internal Project (`commit 2e8c35c`) | User-Created / AI Terms | Dianjurkan dicatat sebagai AI-assisted creation | **PERLU VERIFIKASI** | Versi transparent cutout mahasiswi berhijab VR headset untuk tampilan smartphone/tablet. |
| **Hero Image (Legacy)** | `public/images/hero/hero-image.png` | AI-generated Image | Disediakan oleh kreator proyek | Aset Internal Project (`commit 064b285`) | User-Created / AI Terms | Tidak Digunakan | **PERLU VERIFIKASI** | Aset gambar awal (square crop). Saat ini tidak aktif dipanggil dalam kode komponen. |
| **Lucide React Icons** | Library dependency (`lucide-react`) | Icon Library (SVG Components) | Lucide Project Open Source | [lucide.dev](https://lucide.dev) | ISC License | Tidak Wajib (Permissive Open Source) | **SAFE / JELAS** | Mencakup icon: `Menu`, `X`, `ArrowRight`, `ArrowUpRight`, `ChevronRight`, `Play`, `GraduationCap`, `Sparkles`, `Users`, `Layers`, `Trophy`, `HeartHandshake`, `BookOpen`, `Radio`, `ShieldCheck`, `Mail`, `Phone`, `MapPin`. |
| **Mosque Dome Icon** | `components/AikSection.tsx` (L8-23) | Custom SVG Icon | Dibuat langsung dalam kode komponen TSX | Kode Internal Project | Proyek Internal SiberMu | Tidak Wajib | **SAFE / JELAS** | Siluet kubah masjid / mihrab minimalis dibuat mandiri menggunakan path SVG standar 24x24. |
| **Social Media Icons** | `components/Footer.tsx` (L64, L85, L105, L124) | SVG Vector Icons | Mengikuti spesifikasi SVG Lucide Icons | [lucide.dev](https://lucide.dev) | ISC License | Tidak Wajib | **SAFE / JELAS** | Ikon vektor Instagram, YouTube, TikTok, dan Facebook berbasis SVG outline. |
| **Islamic Geometric Khatam** | `components/AikSection.tsx` (L71-100) | Background / Dekorasi Geometris | Rumus matematika geometri bintang 8 sudut (Khatam) | Kode Internal Project | Proyek Internal SiberMu | Tidak Wajib | **SAFE / JELAS** | Ornamen vektor bintang delapan dan lingkaran orbital Islami dibuat langsung dengan elemen `<rect>` dan `<circle>`. |
| **Decorative Flow Curves** | `components/CTASection.tsx` (L28-50) | Background / Dekorasi Vektor | Kode SVG kustom gradient curve | Kode Internal Project | Proyek Internal SiberMu | Tidak Wajib | **SAFE / JELAS** | Kurva gelombang abstrak dengan linear gradient tosca/teal. |
| **Decorative Circle Watermark** | `components/KemahasiswaanSection.tsx` (L139) | Background / Dekorasi Vektor | Kode SVG lingkaran konsentris | Kode Internal Project | Proyek Internal SiberMu | Tidak Wajib | **SAFE / JELAS** | Elemen lingkaran watermark minimalis pada kartu Organisasi Mahasiswa. |
| **Font Plus Jakarta Sans** | Google Fonts (`next/font/google`) | Font Web | Tokotype (Gumpita Rahayu) via Google Fonts | [fonts.google.com](https://fonts.google.com/specimen/Plus+Jakarta+Sans) | SIL Open Font License 1.1 (OFL) | Tidak Wajib untuk web font embedding | **SAFE / JELAS** | Tipografi utama untuk semua heading (`h1` - `h6`, `font-heading`). Bebas untuk komersial & lomba. |
| **Font Inter** | Google Fonts (`next/font/google`) | Font Web | Rasmus Andersson via Google Fonts | [fonts.google.com](https://fonts.google.com/specimen/Inter) | SIL Open Font License 1.1 (OFL) | Tidak Wajib untuk web font embedding | **SAFE / JELAS** | Tipografi body text dan antarmuka umum (`font-sans`). Bebas untuk komersial & lomba. |
| **Font Caveat** | Google Fonts (`next/font/google`) | Font Web | Kimberly Geswein via Google Fonts | [fonts.google.com](https://fonts.google.com/specimen/Caveat) | SIL Open Font License 1.1 (OFL) | Tidak Wajib untuk web font embedding | **SAFE / JELAS** | Font tulisan tangan aksen dekoratif pada `HeroSection.tsx`. Bebas untuk komersial & lomba. |
| **Video Profil (Modal)** | `components/HeroSection.tsx` (L351) | Video Embed | YouTube (`dQw4w9WgXcQ` - Rick Astley) | [youtube.com](https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ) | Standard YouTube License (Placeholder) | Wajib diganti video resmi | **PERLU VERIFIKASI** | **PENTING**: Masih berupa placeholder video demo (Rickroll). Wajib diganti dengan URL video profil resmi SiberMu sebelum penjurian lomba. |
| **Default Next.js SVGs** | `public/*.svg` (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`) | SVG Icons | Vercel Next.js Starter Template | [github.com/vercel/next.js](https://github.com/vercel/next.js) | MIT License | Tidak Wajib | **SAFE / JELAS** | File bawaan scaffold `create-next-app` (tidak aktif dipanggil di komponen aplikasi). |
| **Next.js & React Framework** | `next`, `react`, `react-dom` | Software Dependency | Vercel Inc. & Meta Platforms Inc. | [nextjs.org](https://nextjs.org/) | MIT License | Tidak Wajib | **SAFE / JELAS** | Framework utama aplikasi web. |
| **Tailwind CSS v4** | `tailwindcss`, `@tailwindcss/postcss` | Software Dependency | Tailwind Labs Inc. | [tailwindcss.com](https://tailwindcss.com/) | MIT License | Tidak Wajib | **SAFE / JELAS** | Framework utilitas styling CSS. |
| **Framer Motion** | `framer-motion` | Software Dependency | Motion Software Limited / Matt Perry | [motion.dev](https://motion.dev/) | MIT License | Tidak Wajib | **SAFE / JELAS** | Pustaka animasi interaktif dan micro-interactions. |

---

## 🟢 SAFE / JELAS
Aset-aset berikut memiliki sumber, kepemilikan, dan lisensi yang sah serta aman digunakan untuk proyek lomba maupun publikasi resmi:

1. **Logo Resmi Universitas Siber Muhammadiyah (`sibermu-logo.png`)**:
   - Merupakan identitas resmi kampus SiberMu.
   - Digunakan secara sah untuk merepresentasikan portal resmi Biro Kemahasiswaan & AIK Universitas Siber Muhammadiyah.
2. **Font Web Google Fonts (Plus Jakarta Sans, Inter, Caveat)**:
   - Dilindungi di bawah lisensi resmi **SIL Open Font License 1.1 (OFL)**.
   - Mengizinkan penggunaan, modifikasi, dan distribusi secara gratis untuk kebutuhan non-komersial, komersial, maupun perlombaan.
3. **Pustaka Ikon Lucide React (`lucide-react`)**:
   - Seluruh ikon antarmuka (`ArrowRight`, `Users`, `Trophy`, `GraduationCap`, dll.) berlisensi **ISC License** yang sangat permisif dan bebas royalti.
4. **Custom Code SVG (MosqueDomeIcon, Khatam Star, CTA Waves)**:
   - Dibuat secara mandiri menggunakan kode vektor SVG langsung di dalam komponen TSX. Tidak menggunakan gambar/vektor unduhan dari situs pihak ketiga.
5. **Pustaka Open Source (Next.js, React, Tailwind CSS, Framer Motion)**:
   - Seluruh dependency menggunakan lisensi open-source terpercaya (**MIT License**).

---

## 🟡 PERLU VERIFIKASI
Aset-aset berikut membutuhkan perhatian atau tindakan verifikasi sebelum pengumpulan akhir lomba:

1. **Visual Hero Desktop (`hero-desktop.png` / `hero-dekstop.png`) & Hero Mobile (`hero-mobile.png`)**:
   - **Kondisi**: Merupakan visualisasi mahasiswi berhijab dengan VR headset dan laptop bertema *cyber-Islamic*. Berdasarkan gaya visual, gambar ini dihasilkan menggunakan bantuan generator AI (*AI-generated image*), yang kemudian dikomposisikan dengan tipografi dan grafis branding SiberMu.
   - **Tindakan**: Konfirmasikan nama platform/model AI yang digunakan saat pembuatan (misalnya: Midjourney, Leonardo AI, DALL-E, atau Stable Diffusion) untuk dicantumkan pada form deklarasi orisinalitas aset/AI disclosure lomba.
2. **Video Modal Embed (`components/HeroSection.tsx` baris 351)**:
   - **Kondisi**: URL embed saat ini masih mengarah ke `dQw4w9WgXcQ` (video placeholder/demo Rick Astley).
   - **Tindakan**: Ganti URL embed tersebut dengan tautan video profil resmi Universitas Siber Muhammadiyah dari kanal YouTube resmi SiberMu (`https://www.youtube.com/@universitassibermuhammadiyah`) sebelum karya dinilai oleh dewan juri.
3. **Aset Legacy `hero-image.png`**:
   - **Kondisi**: Berada di folder `public/images/hero/`, namun tidak aktif dipanggil di kode komponen.
   - **Tindakan**: Tidak mengganggu visual website, namun perlu dicatat sebagai aset cadangan/arsip.

---

## ⚪ SUMBER TIDAK DITEMUKAN
**NIL (Tidak Ada)**  
Semua aset yang ada di dalam proyek berhasil dilacak dan diidentifikasi asal-usulnya, baik yang berasal dari identitas resmi kampus, library resmi, kode SVG mandiri, generator AI proyek, maupun dependensi framework.

---

## 🟠 PERLU ATTRIBUTION / IZIN
1. **Identitas & Logo Resmi Universitas Siber Muhammadiyah**:
   - Memerlukan izin kelembagaan jika proyek diperlombakan atas nama pribadi di luar afiliasi resmi kampus. Namun jika proyek dibuat sebagai bagian dari representasi kampus / delegasi resmi SiberMu, penggunaannya adalah sah.
2. **Deklarasi Penggunaan AI (AI Tool Disclosure)**:
   - Kebanyakan lomba web design / software development modern mensyaratkan peserta untuk mendeklarasikan jika terdapat aset yang dibuat dengan bantuan Artificial Intelligence. Siapkan catatan atribusi AI generator (lihat bagian *Recommended Credits* di bawah).

---

## 🤖 AI-GENERATED ASSETS
Daftar aset yang diidentifikasi sebagai karya visual berbasis AI (*AI-generated specifically for this project*):

| File | Resolusi | Karakteristik Visual | Status Penggunaan |
| :--- | :---: | :--- | :--- |
| `public/images/hero/hero-desktop.png` | 1672 × 941 | Mahasiswi berhijab + VR headset + laptop, navy Islamic cyber composite | **Aktif** (Desktop Hero ≥ 1280px) |
| `public/images/hero/hero-mobile.png` | 1131 × 1391 | Mahasiswi berhijab + VR headset + laptop, transparent cutout | **Aktif** (Mobile/Tablet Hero < 1280px) |
| `public/images/hero/hero-image.png` | 1086 × 1086 | Mahasiswi berhijab + VR headset, square early asset | *Arsip / Tidak Aktif* |

*Catatan Legalitas AI*: Aset-aset di atas dibuat khusus untuk memvisualisasikan semangat mahasiswi digital berkemajuan di lingkungan kampus siber. Hak pakai mengikuti *Terms of Service* platform AI pembuatnya.

---

## 📝 RECOMMENDED CREDITS (Draf Dokumentasi Lomba)
Teks kredit berikut dapat langsung disalin ke dalam lembar orisinalitas atau lampiran dokumentasi lomba:

```markdown
### Dokumentasi Sumber Aset & Lisensi
1. Identitas & Logo:
   - Logo Resmi Universitas Siber Muhammadiyah (SiberMu) — Hak Cipta © Universitas Siber Muhammadiyah (https://sibermu.ac.id).
2. Aset Visual & Ilustrasi:
   - Visual Hero (Mahasiswi SiberMu & VR Cyber Concept): Dibuat secara khusus untuk proyek ini menggunakan bantuan AI Image Generation dan komposisi grafis digital mandiri.
   - Elemen Vektor & Ornamen Islami (Kubah Masjid, Bintang Khatam 8 Sudut, Gelombang Abstrak): Dibuat secara orisinal dengan kode SVG inline di dalam komponen web.
3. Tipografi:
   - Plus Jakarta Sans oleh Tokotype (Gumpita Rahayu) — SIL Open Font License 1.1.
   - Inter oleh Rasmus Andersson — SIL Open Font License 1.1.
   - Caveat oleh Kimberly Geswein — SIL Open Font License 1.1.
4. Ikonografi:
   - Lucide Icons (lucide.dev) — ISC License (Open Source Permissive).
5. Framework & Libraries:
   - Next.js 16 (MIT License), React 19 (MIT License), Tailwind CSS 4 (MIT License), Framer Motion 13 (MIT License).
```
