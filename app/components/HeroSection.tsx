import { historicalFigures } from '@/app/data/historicalFigures';
import { historyTimeline } from '@/app/data/historyTimeline';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="beranda" className="hero-panel relative overflow-hidden px-4 pb-20 pt-16 text-[#f9f4e8] sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pt-24">
      <div className="hero-pattern absolute inset-0" aria-hidden="true" />
      <div className="hero-glow absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="max-w-3xl">
          <p className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#d1b779]/35 bg-white/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e7c98e] sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d74b43] shadow-[0_0_12px_#d74b43]" />
            Arsip hidup · Indonesia
          </p>
          <h1 className="max-w-3xl font-serif text-5xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Menelusuri jejak,<br />
            <span className="hero-title-accent italic">merawat ingatan.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#ded8c9] sm:text-lg sm:leading-8">
            Dari gagasan kebangsaan hingga proklamasi kemerdekaan—kenali manusia, peristiwa, dan warisan yang membentuk Indonesia.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#tokoh" className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#a43b36] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(164,59,54,0.28)] transition hover:-translate-y-0.5 hover:bg-[#b44940] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e7c98e]">
              Buka arsip tokoh <span aria-hidden="true">↗</span>
            </a>
            <a href="#linimasa" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#d9c99f]/35 px-5 py-3 text-sm font-semibold text-[#f2ead8] transition hover:border-[#d9c99f] hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e7c98e]">
              Lihat linimasa <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-white/15 pt-5 text-xs text-[#bcb5a5]">
            <span className="font-serif text-lg italic text-[#e7c98e]">01—55</span>
            <span className="h-8 w-px bg-white/20" />
            <span>Jejak dari kebangkitan nasional<br />hingga Konferensi Asia-Afrika</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[470px] lg:mr-5">
          <div className="hero-photo-frame relative aspect-[0.88] overflow-hidden rounded-t-[48%] rounded-b-[1.75rem] border border-[#dec98f]/40 bg-gradient-to-br from-[#ddcfb3] via-[#b9aa8f] to-[#827e6c] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
            <Image src="/images/soekarno.jpg" alt="Potret arsip Presiden Soekarno sekitar 1949" fill loading="eager" sizes="(max-width: 1024px) 90vw, 42vw" className="rounded-t-[48%] rounded-b-[1.25rem] object-contain p-2 grayscale-[18%]" />
            <div className="pointer-events-none absolute inset-2 rounded-t-[48%] rounded-b-[1.25rem] bg-gradient-to-t from-[#171e19]/75 via-transparent to-[#171e19]/10" />
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-4 text-white">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#e7c98e]">Potret arsip · KITLV</p>
                <p className="mt-1 font-serif text-2xl">Soekarno</p>
              </div>
              <span className="rounded-full border border-white/40 bg-black/20 px-3 py-1.5 text-[10px] font-semibold backdrop-blur">± 1949</span>
            </div>
          </div>
          <div className="hero-stamp absolute -right-3 top-8 flex h-20 w-20 rotate-6 flex-col items-center justify-center rounded-full border border-[#dcc58d]/60 bg-[#a43b36] text-center text-[#fff5dd] shadow-xl sm:-right-8 sm:h-24 sm:w-24">
            <span className="font-serif text-xl font-bold leading-none">RI</span>
            <span className="mt-1 text-[7px] font-bold uppercase tracking-[0.16em]">17 · 08 · 45</span>
          </div>
          <div className="absolute -bottom-5 -left-4 max-w-[225px] rounded-xl border border-[#ddcfb3] bg-[#faf5e8] p-4 text-[#332f26] shadow-xl sm:-left-12 sm:p-5">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#9b3432]">Catatan pembuka</p>
            <p className="mt-2 font-serif text-lg leading-snug">Sebuah bangsa, banyak suara, satu ingatan.</p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-20 grid max-w-7xl grid-cols-1 divide-y divide-white/15 border-y border-white/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div className="flex items-center gap-4 py-5 sm:px-6 sm:py-6">
          <span className="font-serif text-4xl text-[#e7c98e]">{String(historicalFigures.length).padStart(2, '0')}</span>
          <span className="text-[10px] font-bold uppercase leading-5 tracking-[0.16em] text-[#d3ccbd]">Profil tokoh<br />dengan kisah pilihan</span>
        </div>
        <div className="flex items-center gap-4 py-5 sm:px-8 sm:py-6">
          <span className="font-serif text-4xl text-[#e7c98e]">{String(historyTimeline.length).padStart(2, '0')}</span>
          <span className="text-[10px] font-bold uppercase leading-5 tracking-[0.16em] text-[#d3ccbd]">Momen penting<br />menuju Indonesia</span>
        </div>
        <div className="flex items-center gap-4 py-5 sm:px-8 sm:py-6">
          <span className="font-serif text-4xl text-[#e7c98e]">1945</span>
          <span className="text-[10px] font-bold uppercase leading-5 tracking-[0.16em] text-[#d3ccbd]">Tahun proklamasi<br />kemerdekaan</span>
        </div>
      </div>
    </section>
  );
}
