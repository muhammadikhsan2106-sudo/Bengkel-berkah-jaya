import { FaqItem, ServiceDetail, ServiceItem, Testimonial } from '../types';

export const WORKSHOP_INFO = {
  name: 'Berkah Jaya',
  legalName: 'Bengkel Motor Berkah Jaya Serpong',
  tagline: 'Perawatan & Perbaikan Motor Terpercaya, Jujur, dan Profesional',
  category: 'Bengkel Perawatan & Perbaikan Kendaraan (Motor)',
  address: {
    street: 'Jl. Kp Buaran RT02/007 Buaran',
    district: 'Kec. Serpong',
    city: 'Kota Tangerang Selatan',
    full: 'Jl. Kp Buaran RT02/007 Buaran, Kec. Serpong, Kota Tangerang Selatan, Banten 15310',
    landmark: 'Dekat perbatasan Buaran - Viktor Serpong, akses mudah & parkir motor luas',
    mapsUrl: 'https://maps.app.goo.gl/izuWfbMh9XWdo3eeA',
  },
  phone: '+6289513901386',
  phoneRaw: '+6289513901386',
  operatingHours: {
    days: 'Buka Setiap Hari (Senin – Minggu)',
    time: '08:00 – 18:00 WIB',
    openHour: 8,
    closeHour: 18,
  },
  pillars: [
    {
      title: 'Terpercaya',
      tagline: 'Reputasi Nyata',
      desc: 'Dipercaya warga Buaran dan komuter Serpong–BSD selama bertahun-tahun dengan ribuan motor telah ditangani.',
    },
    {
      title: 'Jujur & Transparan',
      tagline: 'Tanpa Biaya Siluman',
      desc: 'Pengecekan di depan pemilik, konfirmasi harga sebelum ganti part, dan suku cadang bekas selalu dikembalikan.',
    },
    {
      title: 'Cepat & Tanggap',
      tagline: 'Efisiensi Tinggi',
      desc: 'Pengerjaan sigap menggunakan toolkit mekanik modern tanpa mengurangi ketelitian standar pabrikan.',
    },
    {
      title: 'Profesional',
      tagline: 'Mekanik Ahli',
      desc: 'Mekanik berpengalaman spesialis motor matic (Beat, Vario, NMAX, PCX, Aerox, Scoopy), bebek, hingga motor kopling/sport.',
    },
  ],
};

export const SERVICE_ITEMS_ESTIMATOR: ServiceItem[] = [
  {
    id: 'tune-up',
    name: 'Servis Ringan & Tune Up',
    category: 'Rutin',
    description: 'Pembersihan throttle body / karbu, cek busi, filter udara, setel rem & semprot cleaner',
    price: 45000,
    durationMinutes: 30,
    isPopular: true,
  },
  {
    id: 'oli-mesin',
    name: 'Ganti Oli Mesin (Original)',
    category: 'Pelumas',
    description: 'Pilihan oli original terjamin (AHM Oil, Yamalube, Shell Advance, Motul, Federal)',
    price: 55000,
    durationMinutes: 15,
    isPopular: true,
  },
  {
    id: 'oli-gardan',
    name: 'Ganti Oli Gardan / Gear (Matic)',
    category: 'Pelumas',
    description: 'Pelumas transmisi khusus matic untuk mencegah keausan gigi reduksi',
    price: 18000,
    durationMinutes: 10,
  },
  {
    id: 'servis-cvt',
    name: 'Servis CVT Lengkap & Anti-Gredeg',
    category: 'Transmisi',
    description: 'Bongkar bak CVT, bersihkan puli, ampelas mangkok ganda, ganti grease khusus CVT high-temp',
    price: 55000,
    durationMinutes: 40,
    isPopular: true,
  },
  {
    id: 'kampas-rem',
    name: 'Ganti Kampas Rem (Depan / Belakang)',
    category: 'Pengereman',
    description: 'Pemasangan kampas rem baru original/aftermarket presisi + pembersihan kaliper',
    price: 35000,
    durationMinutes: 20,
  },
  {
    id: 'kuras-rem',
    name: 'Kuras & Ganti Minyak Rem DOT 4',
    category: 'Pengereman',
    description: 'Bleeding hidrolik rem bebas angin palsu untuk pengereman pakem dan aman',
    price: 30000,
    durationMinutes: 25,
  },
  {
    id: 'cek-kelistrikan-aki',
    name: 'Cek Kelistrikan & Pasang Aki Baru',
    category: 'Kelistrikan',
    description: 'Pemeriksaan voltase pengisian kiprok, spool, soket, dan pemasangan aki',
    price: 25000,
    durationMinutes: 20,
  },
  {
    id: 'kuras-radiator',
    name: 'Kuras & Isi Air Radiator (Coolant)',
    category: 'Pendingin',
    description: 'Penggantian cairan pendingin radiator khusus matic 150cc/sport agar mesin tidak overheat',
    price: 40000,
    durationMinutes: 25,
  },
  {
    id: 'shock-depan',
    name: 'Servis Shockbreaker Depan & Oli Shock',
    category: 'Kaki-kaki',
    description: 'Ganti seal shock bocor, kuras tabung, dan isi oli shock presisi agar empuk kembali',
    price: 75000,
    durationMinutes: 45,
  },
];

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: 'tune-up-injeksi',
    title: 'Servis Rutin & Tune Up Injeksi / Karburator',
    subtitle: 'Kembalikan Performa Tarikan & Efisiensi Bahan Bakar',
    description:
      'Perawatan komprehensif 15 titik motor Anda: pembersihan injektor atau throttle body, pembersihan saringan udara, setel kerenggangan klep, cek busi, hingga kalibrasi putaran stasioner mesin agar kembali responsif.',
    image: '/src/assets/images/service_engine_tuneup_1790958606078.jpg',
    points: [
      'Pembersihan Throttle Body / Karburator dengan injector cleaner khusus',
      'Pengecekan dan penyetelan celah busi serta kompresi',
      'Pemeriksaan dan pelumasan kabel gas, handle rem, dan standar',
      'Pengecekan tegangan aki & sistem pengisian motor',
    ],
    recommendedInterval: 'Setiap 2.000 – 3.000 km',
    estimatedTime: '30 – 45 Menit',
    startingPrice: 'Mulai Rp 45.000',
  },
  {
    id: 'servis-cvt-matic',
    title: 'Spesialis Servis CVT Matic (Solusi Anti-Gredeg)',
    subtitle: 'Akselerasi Mulus, Tenaga Padat Tanpa Getar',
    description:
      'Layanan favorit pengguna motor matic di Serpong. Kami membongkar bak CVT, membersihkan debu kampas ganda, mengecek keausan v-belt dan roller, serta melumasi pulley dengan gemuk (grease) high-temperature orisinal.',
    image: '/src/assets/images/service_cvt_maintenance_1790958622079.jpg',
    points: [
      'Pembersihan mangkok kopling, kampas ganda & slide piece',
      'Pengecekan kelayakan v-belt dari keretakan mikro',
      'Inspeksi keausan berat roller dan pulley primer-sekunder',
      'Pemberian grease khusus CVT tahan temperatur tinggi (anti lumer)',
    ],
    recommendedInterval: 'Setiap 4.000 – 6.000 km',
    estimatedTime: '35 – 50 Menit',
    startingPrice: 'Mulai Rp 55.000',
  },
  {
    id: 'ganti-oli-sparepart',
    title: 'Ganti Oli & Suku Cadang 100% Original',
    subtitle: 'Garansi Keaslian Produk Tanpa Kompromi',
    description:
      'Kami hanya menyediakan pelumas dan sparepart resmi bergaransi keaslian dari distributor terpercaya. Setiap kemasan oli dibuka langsung di depan Anda untuk memastikan segel dan barcode asli.',
    image: '/src/assets/images/spareparts_original_storage_1790958637099.jpg',
    points: [
      'Stok lengkap: AHM Oil, Yamalube, Shell, Motul, Federal, Castrol',
      'Sparepart fast-moving lengkap: kampas rem, v-belt, roller, busi, aki, filter',
      'Bekas sparepart lama selalu kami serahkan kembali kepada Anda',
      'Stempel garansi pengerjaan bengkel resmi',
    ],
    recommendedInterval: 'Ganti oli rutin tiap 1.500 – 2.000 km',
    estimatedTime: '10 – 20 Menit',
    startingPrice: 'Mulai Rp 50.000',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Bambang Prasetyo',
    location: 'Warga Buaran, Serpong',
    motorcycle: 'Honda Vario 150',
    rating: 5,
    date: 'Maret 2026',
    comment:
      'Bengkel paling jujur di Buaran! Biasanya di tempat lain langsung disuruh ganti ini itu, di Berkah Jaya mekaniknya cek dulu di depan mata saya dan kasih penjelasan logis. CVT Vario saya yang tadinya gredeg parah sekarang halus lagi. Tarifnya juga sangat wajar.',
  },
  {
    id: 'testi-2',
    name: 'Rian Kurniawan',
    location: 'Komuter BSD – Serpong',
    motorcycle: 'Yamaha NMAX 155',
    rating: 5,
    date: 'Februari 2026',
    comment:
      'Sering servis berkala sebelum berangkat kerja. Pengerjaannya sigap dan cepat tapi teliti banget. Ruang tunggu adem, oli dijamin original, dan part lama selalu dimasukkan kardus dikembalikan ke saya. Mantap Berkah Jaya!',
  },
  {
    id: 'testi-3',
    name: 'Dedi Saputra',
    location: 'Driver Ojol Tangerang Selatan',
    motorcycle: 'Honda Beat FI',
    rating: 5,
    date: 'Januari 2026',
    comment:
      'Sebagai ojol, motor itu senjata cari nafkah. Kalau servis di sini ga pernah was-was ditembak harga mahal. Mekaniknya profesional dan ramah. Motor Beat saya tarikannya langsung enteng lagi.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Apakah oli dan suku cadang yang dijual 100% asli?',
    answer:
      'Ya, 100% asli. Bengkel Berkah Jaya hanya mengambil oli dan sparepart langsung dari distributor resmi (AHM, Yamaha Genuine Parts, Shell, Motul, Federal). Segel dan barcode dibuka langsung di hadapan Anda.',
  },
  {
    id: 'faq-2',
    question: 'Bagaimana transparansi biaya di Bengkel Berkah Jaya?',
    answer:
      'Kami memegang prinsip "Jujur & Transparan". Mekanik akan mengecek kondisi motor terlebih dahulu, lalu memberikan estimasi rincian biaya sparepart dan jasa. Kami HANYA mengganti komponen setelah mendapat persetujuan jelas dari pemilik motor. Komponen bekas juga selalu kami serahkan kembali.',
  },
  {
    id: 'faq-3',
    question: 'Apakah ada garansi setelah servis?',
    answer:
      'Tentu! Kami memberikan garansi servis hingga 7 – 14 hari tergantung jenis pengerjaan. Jika motor Anda masih terasa kurang nyaman atau keluhan yang sama berulang, silakan bawa kembali ke bengkel tanpa dikenakan biaya jasa pengecekan ulang.',
  },
  {
    id: 'faq-4',
    question: 'Apakah perlu booking terlebih dahulu untuk servis biasa?',
    answer:
      'Untuk servis ringan atau ganti oli Anda bisa langsung datang (walk-in). Namun untuk servis besar, kelistrikan rumit, atau agar tidak perlu antre lama saat akhir pekan, kami sarankan mengirim pesan formulir / WhatsApp terlebih dahulu.',
  },
  {
    id: 'faq-5',
    question: 'Metode pembayaran apa saja yang diterima?',
    answer:
      'Kami menerima pembayaran tunai (cash), QRIS (GoPay, OVO, Dana, ShopeePay, BCA, Mandiri, BRI, dll), serta transfer bank.',
  },
];
