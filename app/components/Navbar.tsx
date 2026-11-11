'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <a href="#main" className="skip-link">Lewati ke konten utama</a>
      <nav aria-label="Navigasi utama" className="sticky top-0 z-50 border-b border-[#e2d7c4]/90 bg-[#f8f4eb]/95 text-[#29271f] shadow-[0_8px_24px_rgba(47,39,28,0.06)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#beranda" onClick={closeMenu} className="group flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9b3432]">
            <span className="brand-seal flex h-11 w-11 items-center justify-center rounded-full border border-[#d1b779] bg-[#9b3432] font-serif text-xl font-bold text-[#fff8e9] shadow-md">S</span>
            <span>
              <span className="block font-serif text-xl font-bold leading-none tracking-tight">Sejarah<span className="text-[#9b3432]">ID</span></span>
              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#777064]">Arsip & cerita Nusantara</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#linimasa" className="nav-link">Linimasa</a>
            <a href="#tokoh" className="nav-link">Tokoh</a>
            <a href="#tentang" className="nav-link">Warisan</a>
            <a href="#tokoh" className="rounded-full bg-[#9b3432] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-[#fff8e9] shadow-sm transition hover:bg-[#7e2929] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9b3432]">Jelajahi arsip <span aria-hidden="true">↗</span></a>
          </div>

          <button
            type="button"
            aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ded2bd] text-[#343128] transition hover:bg-[#eee6d7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b3432] md:hidden"
          >
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {isOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="border-t border-[#e2d7c4] bg-[#f8f4eb] px-4 py-3 md:hidden">
            <div className="mx-auto grid max-w-7xl gap-1">
              <a href="#linimasa" onClick={closeMenu} className="mobile-nav-link">Linimasa sejarah <span aria-hidden="true">01</span></a>
              <a href="#tokoh" onClick={closeMenu} className="mobile-nav-link">Arsip tokoh <span aria-hidden="true">02</span></a>
              <a href="#tentang" onClick={closeMenu} className="mobile-nav-link">Warisan budaya <span aria-hidden="true">03</span></a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
