export interface HistoricalFigure {
  id: string;
  name: string;
  title: string;
  period: string;
  birthplace: string;
  eraGroup: 'colonial' | 'independence';
  highlight: string;
  milestones: { year: string; detail: string }[];
  birthYear: number;
  deathYear: number;
  biography: string;
  achievements: string[];
  image: string;
  imageCredit: {
    source: string;
    sourceUrl: string;
    license: string;
    licenseUrl?: string;
  };
  secretMessage?: string; // Encrypted message for archive
}

export const historicalFigures: HistoricalFigure[] = [
  {
    id: "soekarno",
    name: "Soekarno",
    title: "Presiden Pertama Indonesia",
    period: "1901 - 1970",
    birthplace: "Surabaya, Jawa Timur",
    eraGroup: "independence",
    highlight: "Proklamator, pemimpin pergerakan, dan Presiden pertama RI",
    milestones: [
      { year: "1927", detail: "Mendirikan Partai Nasional Indonesia dan menyerukan Indonesia merdeka." },
      { year: "1 Juni 1945", detail: "Menyampaikan gagasan Pancasila dalam sidang BPUPKI." },
      { year: "17 Agustus 1945", detail: "Membacakan Proklamasi Kemerdekaan bersama Mohammad Hatta." },
      { year: "1955", detail: "Menjadi tuan rumah Konferensi Asia-Afrika di Bandung." },
    ],
    birthYear: 1901,
    deathYear: 1970,
    biography: `Soekarno lahir di Surabaya pada 6 Juni 1901. Setelah menempuh pendidikan teknik sipil di Technische Hoogeschool te Bandoeng (kini Institut Teknologi Bandung), ia memilih terjun ke pergerakan nasional. Pada 1927 ia mendirikan Partai Nasional Indonesia (PNI), yang menyerukan kemerdekaan dan persatuan bangsa.

  Pidato-pidatonya menjadikan gagasan kebangsaan mudah menjangkau banyak kalangan. Dalam sidang BPUPKI pada 1 Juni 1945, Soekarno menyampaikan rumusan dasar negara yang kemudian dikenal sebagai Pancasila.

  Pada 17 Agustus 1945, ia dan Mohammad Hatta membacakan Proklamasi Kemerdekaan. Soekarno kemudian menjabat sebagai Presiden pertama Republik Indonesia. Di panggung internasional, ia turut mendorong solidaritas negara-negara Asia dan Afrika melalui Konferensi Asia-Afrika di Bandung pada 1955.`,
    achievements: [
      "Mendirikan Partai Nasional Indonesia (1927)",
      "Memimpin Proklamasi Kemerdekaan Indonesia (1945)",
      "Menjadi Presiden Pertama Indonesia",
      "Menyampaikan gagasan Pancasila dalam sidang BPUPKI (1945)",
      "Memimpin Konferensi Asia-Afrika (1955)",
      "Mendorong solidaritas dan kerja sama negara-negara Asia-Afrika"
    ],
    image: "/images/soekarno.jpg",
    imageCredit: {
      source: "KITLV, potret resmi sekitar 1949",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Presiden_Sukarno.jpg",
      license: "Domain publik",
    },
    secretMessage: "tNDfgdPFyZnK1oTC3creytOboVxSqdTey4HTzMmbidvJ3NfS49LPTXuelqXhyt3K04HVktfjzuSO0tTcwk2WlaKX4YXjwuDIiJDO4MXX"
  },
  {
    id: "hatta",
    name: "Mohammad Hatta",
    title: "Wakil Presiden dan Proklamator",
    period: "1902 - 1980",
    birthplace: "Bukittinggi, Sumatera Barat",
    eraGroup: "independence",
    highlight: "Proklamator, negarawan, dan Bapak Koperasi Indonesia",
    milestones: [
      { year: "1921", detail: "Melanjutkan studi di Rotterdam dan aktif dalam Perhimpunan Indonesia." },
      { year: "1927", detail: "Memimpin Perhimpunan Indonesia dan memperjuangkan kemerdekaan melalui diplomasi." },
      { year: "17 Agustus 1945", detail: "Memproklamasikan kemerdekaan bersama Soekarno." },
      { year: "1956", detail: "Mengundurkan diri dari jabatan Wakil Presiden setelah mengabdi sejak 1945." },
    ],
    birthYear: 1902,
    deathYear: 1980,
    biography: `Mohammad Hatta lahir di Bukittinggi pada 12 Agustus 1902. Saat belajar di Rotterdam, Belanda, ia aktif dalam organisasi Perhimpunan Indonesia dan memperjuangkan kemerdekaan melalui tulisan serta diplomasi. Pengalaman itu membentuk pandangannya tentang kedaulatan dan ekonomi rakyat.

  Hatta kembali ke Indonesia pada 1932 dan terus bergerak dalam politik. Ia mengalami pembuangan oleh pemerintah kolonial, antara lain ke Boven Digoel dan Banda Neira. Menjelang kemerdekaan, ia terlibat dalam proses perumusan dan persiapan Proklamasi.

  Bersama Soekarno, Hatta membacakan Proklamasi pada 17 Agustus 1945 dan kemudian menjadi Wakil Presiden pertama. Ia berperan dalam diplomasi mempertahankan kedaulatan Indonesia, serta dikenal luas karena gagasannya tentang koperasi dan ekonomi yang berpihak pada rakyat.`,
    achievements: [
      "Memproklamasikan Kemerdekaan Indonesia bersama Soekarno",
      "Menjadi Wakil Presiden Pertama Indonesia",
      "Memimpin delegasi Indonesia dalam Konferensi Meja Bundar (1949)",
      "Mendorong gerakan koperasi sebagai sokoguru ekonomi rakyat",
      "Memperjuangkan pengakuan kedaulatan melalui diplomasi internasional",
    ],
    image: "/images/hatta.jpg",
    imageCredit: {
      source: "Pekan Buku Indonesia, sekitar 1954",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Mohammad_Hatta,_Pekan_Buku_Indonesia_1954,_p242.jpg",
      license: "Domain publik",
    },
    secretMessage: "tcrc1NPOyU283cnaz9fh2I1NpZGrl5PV3NDdzcmayuHN2s/Tk9TGmpeilpvexsvPkqrWkdjcyeLXxpPNxpuZkaBW3c7hwpLayZvQjtHU28fU28I="
  },
  {
    id: "kartini",
    name: "Raden Ajeng Kartini",
    title: "Perintis Emansipasi Wanita Indonesia",
    period: "1879 - 1904",
    birthplace: "Jepara, Jawa Tengah",
    eraGroup: "colonial",
    highlight: "Pelopor pendidikan dan emansipasi perempuan",
    milestones: [
      { year: "1879", detail: "Lahir di Jepara dalam keluarga bangsawan Jawa." },
      { year: "1890-an", detail: "Bertukar surat tentang pendidikan dan kedudukan perempuan." },
      { year: "1903", detail: "Membuka kelas kecil untuk anak perempuan di Jepara." },
      { year: "1911", detail: "Surat-suratnya diterbitkan dalam kumpulan Door Duisternis tot Licht." },
    ],
    birthYear: 1879,
    deathYear: 1904,
    biography: `Raden Ajeng Kartini lahir di Jepara pada 21 April 1879. Sebagai putri Bupati Jepara, ia sempat mengenyam pendidikan dasar di sekolah berbahasa Belanda. Setelah memasuki usia remaja, ia menjalani masa pingitan sesuai adat bangsawan pada zamannya.

  Kartini tetap belajar melalui buku dan surat-menyurat dengan sahabat-sahabatnya di Belanda. Dalam surat-surat itu ia membicarakan akses pendidikan, kebebasan berpikir, dan kesempatan yang setara bagi perempuan. Gagasan tersebut tumbuh dari pengalaman hidupnya sendiri, bukan sekadar pemikiran yang jauh dari masyarakat.

  Pada 1903, Kartini membuka kelas kecil untuk anak perempuan di Jepara. Ia wafat pada 1904, tetapi surat-suratnya kemudian diterbitkan di Belanda sebagai Door Duisternis tot Licht (1911) dan dikenal di Indonesia melalui terjemahan Habis Gelap Terbitlah Terang. Pemikirannya terus menginspirasi gerakan pendidikan perempuan.`,
    achievements: [
      "Pelopor emansipasi wanita Indonesia",
      "Membuka kelas untuk anak perempuan di Jepara",
      "Surat-suratnya diterbitkan sebagai Door Duisternis tot Licht (1911)",
      "Advokasi pendidikan untuk perempuan",
      "Menginspirasi gerakan pemberdayaan wanita",
      "Memperjuangkan kesetaraan gender pada era kolonial"
    ],
    image: "/images/kartini.jpg",
    imageCredit: {
      source: "Koleksi Wereldmuseum / Tropenmuseum, 1890–1904",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:COLLECTIE_TROPENMUSEUM_Portret_van_Raden_Ajeng_Kartini_TMnr_10018776.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    },
    secretMessage: "tcbYyOfP047XjtfU28bh0MKhUqCXqNjS2tbTz4h219LT3dPY3MqBoqCkp6GT0svL54HMjteOxtTg0OLX1Z+bkqep3IXawtbCiJrK4cWP0srjys9NlJGgnebG"
  },
  {
    id: "diponegoro",
    name: "Pangeran Diponegoro",
    title: "Pemimpin Perang Jawa",
    period: "1785 - 1855",
    birthplace: "Yogyakarta",
    eraGroup: "colonial",
    highlight: "Pemimpin perlawanan besar terhadap pemerintahan kolonial Belanda",
    milestones: [
      { year: "1785", detail: "Lahir di Yogyakarta sebagai putra Sultan Hamengkubuwono III." },
      { year: "1825", detail: "Perang Jawa dimulai setelah meningkatnya campur tangan kolonial." },
      { year: "1830", detail: "Ditangkap di Magelang saat perundingan, lalu diasingkan." },
      { year: "1855", detail: "Wafat dalam pengasingan di Makassar." },
    ],
    birthYear: 1785,
    deathYear: 1855,
    biography: `Pangeran Diponegoro lahir di Yogyakarta pada 11 November 1785. Ia adalah putra Sultan Hamengkubuwono III. Tumbuh di lingkungan keraton, Diponegoro juga dekat dengan kehidupan keagamaan dan masyarakat di luar istana.

  Perang Jawa pecah pada 1825 setelah ketegangan panjang, termasuk campur tangan Belanda dalam urusan keraton dan pembangunan jalan yang melewati tanah leluhurnya. Perlawanan meluas ke berbagai wilayah Jawa dan berlangsung selama lima tahun, menimbulkan dampak besar bagi masyarakat maupun pemerintahan kolonial.

  Pada 1830, Diponegoro ditangkap di Magelang ketika menghadiri perundingan dengan pihak Belanda. Ia diasingkan ke Manado, lalu dipindahkan ke Makassar. Diponegoro wafat di Fort Rotterdam pada 8 Januari 1855. Perang Jawa menjadi salah satu perlawanan antikolonial terbesar pada abad ke-19.`,
    achievements: [
      "Memimpin Perang Jawa selama lima tahun (1825–1830)",
      "Menggalang perlawanan lintas wilayah di Jawa",
      "Menjadi salah satu tokoh penting perlawanan antikolonial abad ke-19",
      "Menginspirasi perlawanan anti-kolonial berikutnya",
      "Dijadikan Pahlawan Nasional Indonesia"
    ],
    image: "/images/diponegoro.jpg",
    imageCredit: {
      source: "C. C. A. Last, litografi 1835; Wereldmuseum",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Collectie_NMvWereldculturen,_TM-1574-32,_Litho-_Portret_van_Diponegoro,_Carel_Christiaan_Anthony_Last,_1835.jpg",
      license: "Domain publik",
    },
    secretMessage: "xsbjwpLDzZ/T48Xd1YXo19WinVB8l+rGisXTz4h219LT3dPY3MqNTZ+VnpfqxtiB4sbWl8rYxdfP05PNxpuZkaBW3c7hwpLayZvQjtjQ2YXjztObk5hSqujTztbd"
  },
  {
    id: "sudirman",
    name: "Jenderal Sudirman",
    title: "Panglima Besar Tentara Nasional Indonesia",
    period: "1916 - 1950",
    birthplace: "Purbalingga, Jawa Tengah",
    eraGroup: "independence",
    highlight: "Panglima Besar yang memimpin perang gerilya mempertahankan kemerdekaan",
    milestones: [
      { year: "1916", detail: "Lahir di Purbalingga dan kemudian aktif sebagai guru." },
      { year: "1945", detail: "Dipilih sebagai Panglima Besar TKR pada usia 29 tahun." },
      { year: "1948–1949", detail: "Memimpin perang gerilya saat Agresi Militer Belanda II." },
      { year: "1950", detail: "Wafat di Magelang setelah perjuangan panjang melawan penyakit." },
    ],
    birthYear: 1916,
    deathYear: 1950,
    biography: `Jenderal Sudirman—juga ditulis Soedirman—lahir di Purbalingga, Jawa Tengah, pada 24 Januari 1916. Sebelum meniti karier militer, ia bekerja sebagai guru dan aktif dalam organisasi kepanduan. Pada masa pendudukan Jepang, ia mengikuti pendidikan perwira PETA.

  Setelah Proklamasi, Sudirman terlibat dalam pembentukan tentara nasional. Ia dipilih sebagai Panglima Besar Tentara Keamanan Rakyat pada November 1945 dan dilantik pada Desember, saat usianya masih 29 tahun.

  Ketika Belanda melancarkan Agresi Militer II pada Desember 1948, Sudirman memimpin perang gerilya meskipun sedang menderita tuberkulosis. Ia kembali ke Yogyakarta pada Juli 1949. Sudirman wafat di Magelang pada 29 Januari 1950 dan dikenang atas keteguhan serta pengabdiannya kepada Republik.`,
    achievements: [
      "Menjadi Panglima Tertinggi TNI pada usia 29 tahun",
      "Memimpin perjuangan bersenjata mempertahankan kemerdekaan",
      "Memimpin gerilya saat Agresi Militer Belanda II",
      "Mempertahankan komando perjuangan meski sakit berat",
      "Mempertahankan semangat perjuangan hingga akhir hayat",
      "Ditetapkan sebagai Pahlawan Nasional Indonesia"
    ],
    image: "/images/sudirman.jpg",
    imageCredit: {
      source: "IPPHOS / Kementerian Pertahanan, 1950",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Sudirman.jpg",
      license: "Domain publik",
    },
    secretMessage: "xsbjwpLOzZrS2s3XjtDY1saflpWdl9TTisLmwt1N1s/Y2JqF59LFjp1Qk5rUhdTC3sLWTdXPzd2O2uHd1phSnqep1IXOwuCByo7X1dfQ"
  }
];
