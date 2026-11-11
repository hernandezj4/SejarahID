'use client';

import { useState, useMemo } from 'react';
import { historicalFigures } from '@/app/data/historicalFigures';
import ArchiveCard from './ArchiveCard';

export default function ArchiveSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPeriod, setFilterPeriod] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredFigures = useMemo(() => {
    const query = searchQuery.trim().toLocaleLowerCase('id');
    const results = historicalFigures.filter((figure) => {
      const searchableText = [figure.name, figure.title, figure.birthplace, figure.highlight, figure.biography].join(' ').toLocaleLowerCase('id');
      const matchesSearch = !query || searchableText.includes(query);
      const matchesPeriod = filterPeriod === 'all' || figure.eraGroup === filterPeriod;
      return matchesSearch && matchesPeriod;
    });

    if (sortBy === 'name') {
      results.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'year') {
      results.sort((a, b) => a.birthYear - b.birthYear);
    }

    return results;
  }, [searchQuery, filterPeriod, sortBy]);

  return (
    <section id="tokoh" className="archive-section px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-kicker">Ruang tokoh · koleksi pilihan</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#25251f] sm:text-5xl">Wajah-wajah di balik <span className="text-[#9b3432]">perjalanan bangsa.</span></h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#6c685e] sm:text-base">Kenali latar, gagasan, dan langkah nyata para tokoh. Setiap profil memuat potret arsip serta sumber gambar.</p>
          </div>
          <div className="rounded-xl border border-[#dfd3bf] bg-[#eee6d7] px-4 py-3 text-xs leading-5 text-[#6e675a]">
            <span className="font-bold text-[#9b3432]">Catatan kuratorial</span><br />Koleksi awal · diperluas bertahap
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-[#ded2bd] bg-[#fffdf8] p-4 shadow-[0_12px_36px_rgba(54,44,31,0.05)] sm:p-5">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <label className="relative block">
              <span className="sr-only">Cari tokoh, asal, atau gagasan</span>
              <svg aria-hidden="true" className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#898174]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" strokeWidth="1.7" />
                <path d="m16.2 16.2 4 4" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                placeholder="Cari nama, daerah, atau gagasan..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="h-12 w-full rounded-xl border border-[#e4dac9] bg-[#faf7f0] pl-12 pr-4 text-sm text-[#29271f] outline-none transition placeholder:text-[#999184] focus:border-[#a43b36] focus:ring-4 focus:ring-[#a43b36]/10"
              />
            </label>
            <label className="flex items-center gap-3 text-xs font-semibold text-[#6c685e]">
              <span className="shrink-0 uppercase tracking-[0.12em]">Urutkan</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="h-12 min-w-40 rounded-xl border border-[#e4dac9] bg-[#faf7f0] px-3 text-sm text-[#29271f] outline-none focus:border-[#a43b36] focus:ring-4 focus:ring-[#a43b36]/10"
              >
                <option value="name">Nama A–Z</option>
                <option value="year">Tahun lahir</option>
              </select>
            </label>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2" aria-label="Filter era tokoh">
            {[
              { value: 'all', label: 'Semua tokoh' },
              { value: 'colonial', label: 'Masa kolonial' },
              { value: 'independence', label: 'Pergerakan & kemerdekaan' },
            ].map((filter) => (
              <button
                key={filter.value}
                type="button"
                aria-pressed={filterPeriod === filter.value}
                onClick={() => setFilterPeriod(filter.value)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b3432] ${filterPeriod === filter.value ? 'border-[#9b3432] bg-[#9b3432] text-white shadow-sm' : 'border-[#e2d7c4] bg-white text-[#625d52] hover:border-[#b9a98c] hover:bg-[#f5efe5]'}`}
              >
                {filter.label}
              </button>
            ))}
            {(searchQuery || filterPeriod !== 'all') && (
              <button type="button" onClick={() => { setSearchQuery(''); setFilterPeriod('all'); }} className="ml-auto px-2 py-2 text-xs font-semibold text-[#9b3432] underline decoration-[#9b3432]/30 underline-offset-4 hover:decoration-[#9b3432]">
                Bersihkan filter
              </button>
            )}
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between gap-4 text-xs text-[#777064]">
          <p aria-live="polite">Menampilkan <strong className="text-[#29271f]">{filteredFigures.length}</strong> dari {historicalFigures.length} profil</p>
          <span className="hidden uppercase tracking-[0.16em] sm:inline">Dokumentasi & potret beratribusi</span>
        </div>

        {filteredFigures.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-8">
            {filteredFigures.map((figure) => <ArchiveCard key={figure.id} figure={figure} />)}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-[#cfc1a8] bg-[#fffdf8] px-6 py-16 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eee6d7] font-serif text-2xl text-[#9b3432]" aria-hidden="true">?</span>
            <h3 className="mt-5 font-serif text-2xl font-semibold text-[#29271f]">Belum ada kisah yang cocok</h3>
            <p className="mt-2 text-sm text-[#777064]">Coba kata kunci atau filter era yang berbeda.</p>
            <button type="button" onClick={() => { setSearchQuery(''); setFilterPeriod('all'); }} className="mt-5 rounded-full bg-[#9b3432] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#7e2929]">Tampilkan semua tokoh</button>
          </div>
        )}
      </div>
    </section>
  );
}
