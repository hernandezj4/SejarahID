import { historyTimeline } from '@/app/data/historyTimeline';

export default function HistoryTimeline() {
  return (
    <section id="linimasa" className="relative overflow-hidden px-4 py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(182,145,82,0.12),transparent_44%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="section-kicker">Garis waktu kebangsaan</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#25251f] sm:text-5xl">
              Perjalanan panjang menuju <span className="text-[#9b3432]">republik.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#6c685e] sm:text-base">
            Kemerdekaan tumbuh dari gagasan, pertemuan, dan keberanian banyak orang. Ikuti beberapa simpul penting dalam perjalanan itu.
          </p>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {historyTimeline.map((moment, index) => (
            <li key={moment.date} className="timeline-card group relative min-h-64 overflow-hidden rounded-2xl border border-[#ded2bd] bg-[#fffdf8] p-6 sm:p-7">
              <div className="mb-9 flex items-center justify-between">
                <span className="font-serif text-3xl font-semibold text-[#9b3432]">{String(index + 1).padStart(2, '0')}</span>
                <span className="rounded-full border border-[#ded2bd] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#777064]">{moment.place}</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8c7958]">{moment.date}</p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-[#28261f]">{moment.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#6c685e]">{moment.description}</p>
              <div className="timeline-rule absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-[#a43b36] transition-transform duration-300 group-hover:scale-x-100" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
