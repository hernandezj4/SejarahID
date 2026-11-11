'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { HistoricalFigure } from '@/app/data/historicalFigures';
import { verifyArchiveMessage } from '@/app/lib/encryption';

interface ArchiveCardProps {
  figure: HistoricalFigure;
}

export default function ArchiveCard({ figure }: ArchiveCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const [decryptedMessage, setDecryptedMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const biographyParagraphs = figure.biography.split(/\n\n/);

  const handleRevealSecret = () => {
    if (figure.secretMessage) {
      const decrypted = verifyArchiveMessage(figure.secretMessage);
      setDecryptedMessage(decrypted);
      setShowSecret(true);
    }
  };

  const handleHideSecret = () => {
    setShowSecret(false);
    setDecryptedMessage('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(decryptedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="figure-card overflow-hidden rounded-[1.65rem] border border-[#ded2bd] bg-[#fffdf8] shadow-[0_14px_44px_rgba(54,44,31,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_58px_rgba(54,44,31,0.13)]">
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gradient-to-br from-[#d9d3c7] to-[#b9c3bd] sm:h-80">
        <Image src={figure.image} alt="" aria-hidden="true" fill sizes="(max-width: 1280px) 100vw, 50vw" className="scale-110 object-cover opacity-35 blur-xl" loading="lazy" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#f2eadc]/35 via-white/5 to-[#dce2dc]/35" />
        <Image src={figure.image} alt={figure.name} fill sizes="(max-width: 1280px) 100vw, 50vw" className="z-10 object-contain p-2 drop-shadow-lg" loading="lazy" />
        <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-2 sm:left-5 sm:top-5">
          <span className="rounded-full border border-white/40 bg-[#29271f]/75 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">{figure.eraGroup === 'colonial' ? 'Masa kolonial' : 'Pergerakan & republik'}</span>
          <span className="rounded-full bg-[#f7f0e2]/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#494437]">{figure.period}</span>
        </div>
      </div>

      <div className="px-5 pb-6 pt-5 sm:px-7 sm:pb-8 sm:pt-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#9b3432]">{figure.birthplace}</p>
        <h3 className="mt-2 font-serif text-3xl font-semibold leading-tight tracking-tight text-[#29271f] sm:text-[2.1rem]">{figure.name}</h3>
        <p className="mt-1 text-sm font-semibold text-[#6b655a]">{figure.title}</p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-[#514d43]">{figure.highlight}</p>

        <div className="mt-5 grid grid-cols-2 divide-x divide-[#e7dece] rounded-xl border border-[#e7dece] bg-[#f8f4eb] py-3">
          <div className="px-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8a8172]">Lahir</p>
            <p className="mt-1 text-xs font-semibold text-[#37342c]">{figure.birthYear} · {figure.birthplace.split(',')[0]}</p>
          </div>
          <div className="px-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8a8172]">Dikenang sebagai</p>
            <p className="mt-1 line-clamp-1 text-xs font-semibold text-[#37342c]">{figure.highlight.split(',')[0]}</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h4 className="font-serif text-xl font-semibold text-[#29271f]">Sekilas kisah</h4>
            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#918777]">{biographyParagraphs.length} bagian</span>
          </div>
          <div className="space-y-3 text-sm leading-7 text-[#625d52]">
            {(isExpanded ? biographyParagraphs : biographyParagraphs.slice(0, 1)).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
          <button
            type="button"
            aria-expanded={isExpanded}
            aria-controls={`details-${figure.id}`}
            onClick={() => setIsExpanded((expanded) => !expanded)}
            className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#9b3432] transition hover:text-[#712726] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9b3432]"
          >
            {isExpanded ? 'Ringkas kisah' : 'Baca kisah lengkap'} <span aria-hidden="true">{isExpanded ? '↑' : '↓'}</span>
          </button>
        </div>

        {isExpanded && (
          <div id={`details-${figure.id}`} className="mt-7 grid gap-7 border-t border-[#e7dece] pt-6 md:grid-cols-2">
            <div>
              <h4 className="font-serif text-xl font-semibold text-[#29271f]">Jejak waktu</h4>
              <ol className="mt-4 space-y-4 border-l border-[#d8c8ad] pl-4">
                {figure.milestones.map((milestone) => (
                  <li key={milestone.year} className="relative">
                    <span className="absolute -left-[1.33rem] top-1.5 h-2 w-2 rounded-full border-2 border-[#fffdf8] bg-[#a43b36] ring-1 ring-[#a43b36]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#9b3432]">{milestone.year}</p>
                    <p className="mt-1 text-xs leading-5 text-[#625d52]">{milestone.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h4 className="font-serif text-xl font-semibold text-[#29271f]">Kontribusi utama</h4>
              <ul className="mt-4 space-y-3">
                {figure.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3 text-xs leading-5 text-[#625d52]">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#e8d8bd] text-[9px] font-bold text-[#8f3932]" aria-hidden="true">✓</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {figure.secretMessage && (
          <div className="mt-7 border-t border-[#e7dece] pt-6">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8a795e]">Sisipan interaktif</p>
                <h4 className="mt-1 font-serif text-xl font-semibold text-[#29271f]">Pesan dalam arsip</h4>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eee6d7] text-[#8e3732]" aria-hidden="true">⌑</span>
            </div>
            {!showSecret ? (
              <button type="button" onClick={handleRevealSecret} className="flex min-h-11 w-full items-center justify-between rounded-xl border border-[#d7c6a9] bg-[#f6f0e5] px-4 text-left text-xs font-bold text-[#6e342f] transition hover:border-[#a43b36] hover:bg-[#f1e7d6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b3432]">
                <span>Buka catatan terenkripsi</span><span aria-hidden="true">＋</span>
              </button>
            ) : (
              <div className="rounded-xl border border-[#d7c6a9] bg-[#f8f2e7] p-4">
                <p className="font-serif text-base italic leading-7 text-[#38342b]">“{decryptedMessage}”</p>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#817665]">Catatan arsip · {figure.name}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button type="button" onClick={handleCopy} className="rounded-full bg-[#2b3a31] px-4 py-2 text-[10px] font-bold text-white transition hover:bg-[#1d2b24]">{copied ? 'Tersalin ✓' : 'Salin catatan'}</button>
                  <button type="button" onClick={handleHideSecret} className="rounded-full border border-[#d7c6a9] px-4 py-2 text-[10px] font-bold text-[#554f43] transition hover:bg-white">Tutup</button>
                </div>
              </div>
            )}
          </div>
        )}

        <p className="mt-7 border-t border-[#e7dece] pt-4 text-[10px] leading-5 text-[#8a8172]">
          Sumber potret: <a href={figure.imageCredit.sourceUrl} target="_blank" rel="noreferrer" className="font-semibold text-[#716655] underline decoration-[#b8a98c] underline-offset-2 hover:text-[#9b3432]">{figure.imageCredit.source}</a>
          {' · '}
          {figure.imageCredit.licenseUrl ? <a href={figure.imageCredit.licenseUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-[#9b3432]">{figure.imageCredit.license}</a> : figure.imageCredit.license}
        </p>
      </div>
    </article>
  );
}
