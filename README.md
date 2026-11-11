# SejarahID - Arsip Digital Sejarah Indonesia

Website arsip digital yang menampilkan cerita-cerita inspiratif dari tokoh-tokoh penting dalam sejarah Indonesia, dilengkapi dengan fitur enkripsi pesan untuk arsip terenkripsi.

## Fitur Utama

- **Arsip Digital Tokoh Sejarah**: Koleksi lengkap profil tokoh-tokoh penting Indonesia (Soekarno, Hatta, Kartini, Diponegoro, Sudirman, dan lainnya)
- **Pencarian & Filter**: Cari tokoh berdasarkan nama, gelar, atau topik, serta filter berdasarkan era (Kolonial/Kemerdekaan)
- **Arsip Terenkripsi**: Setiap tokoh memiliki pesan pribadi terenkripsi yang dapat dibuka dengan tombol khusus
- **Design Clean & Profesional**: Interface yang intuitif dan responsif di semua perangkat
- **Informasi Komprehensif**: Biografi lengkap, pencapaian, dan periode hidup setiap tokoh

## Tech Stack

- **Framework**: Next.js 16.4.6
- **Styling**: Tailwind CSS 4.3.3
- **Language**: TypeScript
- **Deployment**: Vercel (gratis)

## Instalasi & Setup Lokal

### Prerequisites
- Node.js 18+ dan npm

### Step 1: Clone Repository
```bash
git clone <repository-url>
cd sejarahid
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Jalankan Dev Server
```bash
npm run dev
```
Aplikasi akan berjalan di `http://localhost:3000`

### Step 4: Build untuk Production
```bash
npm run build
npm start
```

## Struktur Folder

```
sejarahid/
├── app/
│   ├── components/          # React components
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ArchiveCard.tsx
│   │   ├── ArchiveSection.tsx
│   │   └── Footer.tsx
│   ├── data/                # Data files
│   │   └── historicalFigures.ts
│   ├── lib/                 # Utility functions
│   │   └── encryption.ts
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── public/                  # Static files
├── package.json
└── tsconfig.json
```

## Deployment ke Vercel

### Option 1: Menggunakan Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: Menggunakan Git Integration

1. Push repository ke GitHub/GitLab
2. Login ke [vercel.com](https://vercel.com)
3. Klik "Add New Project"
4. Pilih repository Anda
5. Klik "Deploy"

Vercel akan secara otomatis mendeteksi Next.js dan mengkonfigurasi build settings.

## Fitur Enkripsi

Setiap tokoh memiliki pesan terenkripsi yang disimpan di `secretMessage` field. Sistem enkripsi menggunakan:
- **Algoritma**: Caesar Cipher + Base64 encoding
- **Key**: "sejarah-indonesia-2026"

Untuk production, disarankan menggunakan library enkripsi yang lebih robust seperti:
- `tweetnacl-js`
- `libsodium.js`
- `crypto-js`

## Menambah Tokoh Baru

Edit file `app/data/historicalFigures.ts` dan tambahkan objek baru ke array `historicalFigures`:

```typescript
{
  id: "tokoh-id",
  name: "Nama Tokoh",
  title: "Gelar/Jabatan",
  period: "Tahun Lahir - Tahun Meninggal",
  birthYear: 1900,
  deathYear: 1950,
  biography: "Biografi lengkap...",
  achievements: ["Pencapaian 1", "Pencapaian 2"],
  image: "/images/tokoh.jpg",
  secretMessage: "Pesan terenkripsi dari tokoh"
}
```

## Customization

### Mengubah Warna Tema
Edit `app/globals.css` untuk mengubah CSS variables:
```css
:root {
  --primary: #2563eb;
  --slate-700: #374151;
  --slate-900: #111827;
}
```

### Menambah Gambar Tokoh
1. Letakkan gambar di folder `public/images/`
2. Update field `image` di `historicalFigures.ts`

## Performance

- Optimized untuk Core Web Vitals
- Image optimization (Next.js Image component siap digunakan)
- Automatic code splitting
- Server-side rendering untuk SEO

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Lisensi

MIT License - Bebas digunakan dan dimodifikasi untuk keperluan apapun.

## Kontribusi

Contributions welcome! Silahkan buat pull request untuk:
- Menambah tokoh sejarah baru
- Memperbaiki biografi
- Meningkatkan UI/UX
- Bug fixes

## Support

Untuk pertanyaan atau masalah, silahkan buat issue di repository ini.

---

Dibuat dengan ❤️ untuk melestarikan sejarah Indonesia
