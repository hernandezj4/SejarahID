const heritageTopics = [
  {
    number: '01',
    title: 'Bahasa pemersatu',
    text: 'Sumpah Pemuda pada 1928 mengangkat bahasa Indonesia sebagai bahasa persatuan—jembatan di antara beragam daerah dan latar budaya.',
    note: 'Bahasa & identitas',
  },
  {
    number: '02',
    title: 'Gotong royong',
    text: 'Semangat bekerja bersama hidup dalam keseharian masyarakat Indonesia dan menjadi salah satu nilai penting dalam kehidupan berbangsa.',
    note: 'Nilai kehidupan',
  },
  {
    number: '03',
    title: 'Batik, cerita dalam motif',
    text: 'Tradisi batik memiliki ragam teknik dan makna yang tumbuh di berbagai daerah. UNESCO menetapkannya sebagai Warisan Budaya Takbenda pada 2009.',
    note: 'Warisan budaya',
  },
];

export default function HeritageSection() {
  return (
    <section id="tentang" className="relative overflow-hidden border-y border-[#e1d5c1] bg-[#eee6d7] px-4 py-24 sm:py-28">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#c8b58f]/40" aria-hidden="true" />
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#c8b58f]/40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 md:mb-14 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="section-kicker">Lebih dari tanggal dan nama</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-[#25251f] sm:text-5xl">
              Sejarah juga hidup dalam <span className="text-[#9b3432]">warisan kita.</span>
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-[#6c685e] sm:text-base">
            Bahasa, nilai, dan karya budaya menyimpan jejak perjumpaan antargenerasi. Kenali konteks yang membentuk Indonesia hari ini.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {heritageTopics.map((topic) => (
            <article key={topic.number} className="heritage-card rounded-2xl border border-[#d9cbb4] bg-[#faf7ef] p-7 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl text-[#a33c36]">{topic.number}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8a795e]">{topic.note}</span>
              </div>
              <h3 className="mt-9 font-serif text-2xl font-semibold text-[#28261f]">{topic.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#69655a]">{topic.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 rounded-2xl bg-[#2b3a31] px-6 py-6 text-[#f9f4e8] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="max-w-3xl font-serif text-xl leading-relaxed sm:text-2xl">“Mengenal masa lalu membantu kita membaca masa kini dengan lebih bijak.”</p>
          <a href="#tokoh" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#e7c98e] transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e7c98e]">
            Temui para tokoh <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
