export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#202b25] px-4 pb-8 pt-16 text-[#e9e1d1] sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#9b3432] via-[#d0ad6c] to-[#9b3432]" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.2fr_0.7fr_0.7fr]">
          <div className="max-w-md">
            <a href="#beranda" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d1b779] bg-[#9b3432] font-serif text-xl font-bold text-[#fff8e9]">S</span>
              <span>
                <span className="block font-serif text-xl font-bold text-white">SejarahID</span>
                <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-[#c8b991]">Arsip & cerita Nusantara</span>
              </span>
            </a>
            <p className="mt-5 text-sm leading-7 text-[#c1bdaf]">Ruang belajar digital untuk menelusuri tokoh, peristiwa, dan warisan budaya Indonesia dengan rasa ingin tahu dan penghormatan pada sumber.</p>
          </div>
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7bd85]">Jelajahi</h2>
            <ul className="mt-5 space-y-3 text-sm text-[#d6d1c5]">
              <li><a href="#linimasa" className="transition hover:text-white">Linimasa kebangsaan</a></li>
              <li><a href="#tokoh" className="transition hover:text-white">Arsip tokoh</a></li>
              <li><a href="#tentang" className="transition hover:text-white">Warisan budaya</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7bd85]">Tentang koleksi</h2>
            <p className="mt-5 text-sm leading-7 text-[#c1bdaf]">Koleksi ini terus berkembang. Kredit potret dan lisensi dapat dilihat pada setiap profil tokoh.</p>
            <a href="#tokoh" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#e6ca8e] transition hover:text-white">Lihat kredit arsip <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-[10px] text-[#a9a596] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SejarahID · Dibuat untuk merawat ingatan bersama.</p>
          <p>Sejarah adalah percakapan lintas generasi.</p>
        </div>
      </div>
    </footer>
  );
}
