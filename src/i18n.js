import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Kamus Terjemahan
// src/i18n.js
const resources = {
  en: {
    translation: {
      navHome: "Home",
      navArticles: "Articles",
      navAbout: "About Us",
      navSafety: "Safety Hub",
      navContact: "Contact",
      btnEmergency: "Emergency Call",

      // Konten Riil dari Berkas
      heroBadge: "National Priority Campaign",
      heroTitle: "Towards Zero Accident Tourism",
      heroSubtitle: "Strategic campaign for safe, orderly, and sustainable tourism in Mount Bromo volcanic ecosystem.",
      btnGuide: "Safety Guidelines",
      btnStatus: "Volcanic Status",
      statsTitle: "Bromo in Numbers: Scale & Urgency",
      statsSubtitle: "The rapid surge in global tourist arrivals drives the urgent need for systemic, on-ground safety monitoring.",
      statsLabel1: "Annual Global Tourists",
      statsDesc1: "Total tourists recorded in the latest annual surge, combining local and international visitors.",
      statsLabel2: "Matic Bikes Intercepted/Day",
      statsDesc2: "Average number of automatic motorcycles safely stopped and checked by local residents daily to prevent brake failure.",
      statsLabel3: "Lebaran Peak Surge",
      statsDesc3: "Significant volume increase compared to the previous holiday season, creating immense traffic load.",
      statsLabel4: "Target Protected Tourists",
      statsDesc4: "Target number of visitors directly educated and protected through on-ground safety interventions.",
      pathTitle: "Anatomy of Extreme Topography",
      pathSubtitle: "The infrastructure leading to Bromo consists of limited nature conservation access paths, not high-capacity mass transportation routes.",
      pathWarning: "WARNING: High accident risks stem from systemic structural road hazards.",

      // Titik 1
      pointTitle1: "Steep Inclines & Long Declines",
      pointDesc1: "Drains engine power on the way up, and drastically overburdens the vehicle's braking system during prolonged descents.",

      // Titik 2
      pointTitle2: "Sharp Hairpin Turns",
      pointDesc2: "Extremely limited visibility creates critical blind spots along the mountain ridges and steep slopes.",

      // Titik 3
      pointTitle3: "Narrow Passing Roads",
      pointDesc3: "Flanked tightly by sheer vertical cliffs on one side and deep ravines on the other, leaving zero room for error.",
      brakeTitle: "Matic Brake Failure Prevention",
      brakeSubtitle: "An average of 400+ automatic motorbikes are intercepted daily by locals to check brake conditions and prevent fatal accidents.",

      cardTitle1: "Absence of Engine Brake",
      cardDesc1: "Automatic scooters naturally lose engine braking deceleration when coasting downhill with the engine idling. Acceleration must be locked actively.",

      cardTitle2: "Brake Overheating Crisis",
      cardDesc2: "Continuous friction without intervals boils brake fluid and burns pads, causing sudden total brake loss (fading).",

      cardTitle3: "Relief Cooling Points",
      cardDesc3: "Locals provide free mandatory rest areas equipped with water sprays, mechanics, and rescue teams to cool down your vehicle's braking system safely.",

      btnMap: "View Cooling Points Map",
      supportTitle: "Institutional Endorsements",
      supportSubtitle: "This initiative operates with official acknowledgments and alignment from local authorities and national park management.",

      // TNBTS
      tnbtsQuote: "We highly appreciate this initiative aimed at improving visitor safety and strengthening the positive image of tourism in the Mount Bromo Tengger Semeru National Park area.",
      tnbtsSign: "Bambang Suriyono, S.Hut., M.Si.",
      tnbtsRole: "Plh. Head of BB-TNBTS",

      // Sukapura
      sukapuraQuote: "The Sukapura District Government fully supports the implementation of the Bromo Safety Initiative as an effort to educate and raise awareness among tourists regarding the importance of travel safety.",
      sukapuraSign: "Ino Rachmad Sholeh, S.STP., M.Si.",
      sukapuraRole: "Head of Sukapura District",
      sponsorTitle: "Executive Partnership & CSR Opportunities",
      sponsorSubtitle: "Join forces as a strategic partner to build a permanent digital platform and slash traffic accident rates down to zero.",
      btnDownload: "Download Full Proposal (PDF)",
      tierExclusive: "Exclusive Rights",
      tierPopular: "High Visibility",
      tierEssential: "Community Support",

      // Deskripsi Singkat Paket
      descBronze: "Digital poster placement and collective mention on campaign social media channels.",
      descSilver: "Targeted small logo placement on physical banners and specific printed guidelines.",
      descGold: "Medium logo exposure on on-ground banners, digital content, and direct distribution rights.",
      descPlatinum: "Dominant co-branding on physical posts, volunteer vests, activation booths, and professional visual assets.",
      descTitle: "Absolute industry exclusivity, naming rights integration, maximum digital PR, and prime on-ground branding.",
      pillarsTitle: "The Four Pillars of Conservation",
      pillarsSubtitle: "Every step of safety you take helps preserve the invaluable world-class strategic assets of Bromo Tengger Semeru.",

      pillarLabel1: "Ecological Value",
      pillarDesc1: "Protecting the rich, pristine biodiversity and fragile flora-fauna throughout the conservation zone.",

      pillarLabel2: "Geological Value",
      pillarDesc2: "Respecting and preserving the ancient, majestic volcanic landscapes and giant caldera formations.",

      pillarLabel3: "Cultural Value",
      pillarDesc3: "Honoring the sacred ancestral heritage, traditions, and spiritual wisdom of the Tengger community.",

      pillarLabel4: "Tourism Value",
      pillarDesc4: "Sustaining a world-class economic engine driven by safe, safe, and responsible travel ecosystems.",
      footerDesc: "A digital ecosystem dedicated to education, real-time monitoring, and accident mitigation across the Mount Bromo Tengger Semeru strategic tourism zone.",
      footerNavTitle: "Quick Links",
      footerContactTitle: "Emergency Contacts",
      footerEmergencyCall: "Call Command Center",
      footerRights: "All Rights Reserved.",
    }
  },
  id: {
    translation: {
      navHome: "Beranda",
      navArticles: "Artikel",
      navAbout: "Tentang BSI",
      navSafety: "Pusat Keselamatan",
      navContact: "Kontak",
      btnEmergency: "Panggilan Darurat",

      // Konten Riil dari Berkas
      heroBadge: "Kampanye Prioritas Nasional",
      heroTitle: "Mewujudkan Perjalanan Zero Accident",
      heroSubtitle: "Strategi taktis pariwisata kawasan Gunung Bromo yang aman, tertib, dan berkelanjutan.",
      btnGuide: "Panduan Keselamatan",
      btnStatus: "Status Vulkanik",
      statsTitle: "Bromo dalam Angka: Skala & Urgensi",
      statsSubtitle: "Lonjakan tajam kunjungan wisatawan global mendorong kebutuhan mendesak akan pengawasan keselamatan sistemik di lapangan.",
      statsLabel1: "Wisatawan Global Tahunan",
      statsDesc1: "Total wisatawan yang tercatat dalam lonjakan tahunan terbaru, menggabungkan pengunjung lokal dan mancanegara.",
      statsLabel2: "Motor Matic Dihentikan/Hari",
      statsDesc2: "Rata-rata sepeda motor matic yang dihentikan dan diperiksa warga setiap hari untuk mencegah kecelakaan rem blong.",
      statsLabel3: "Lonjakan Puncak Lebaran",
      statsDesc3: "Pertumbuhan jumlah kunjungan yang sangat signifikan dibandingkan dengan musim libur tahun sebelumnya.",
      statsLabel4: "Target Wisatawan Terlindungi",
      statsDesc4: "Target jumlah pengunjung yang langsung diedukasi dan dilindungi melalui intervensi fisik di jalur rawan.",
      pathTitle: "Anatomy Topografi Ekstrem",
      pathSubtitle: "Infrastruktur ini adalah jalur akses kawasan konservasi alam terbatas, bukan jalur transportasi massal berkapasitas tinggi.",
      pathWarning: "PERINGATAN: Risiko kecelakaan tinggi berakar dari bahaya struktural medan jalan.",

      // Titik 1
      pointTitle1: "Tanjakan Curam & Turunan Panjang",
      pointDesc1: "Menguras tenaga mesin saat menanjak, dan secara drastis membebani sistem rem secara ekstrem saat turun panjang.",

      // Titik 2
      pointTitle2: "Tikungan Tajam",
      pointDesc2: "Jarak pandang sangat terbatas (blind spot) di lereng gunung yang menuntut fokus penuh pengendara.",

      // Titik 3
      pointTitle3: "Jalan Sempit",
      pointDesc3: "Diapit oleh dinding tebing tegak yang rawan longsor dan jurang dalam tanpa pengaman yang memadai.",
      brakeTitle: "Pencegahan Rem Blong Motor Matic",
      brakeSubtitle: "Rata-rata 400+ motor matic dihentikan warga setiap hari di jalur Sukapura-Cemoro Lawang demi memeriksa kelayakan rem dan mencegah fatalitas.",

      cardTitle1: "Absennya Engine Brake",
      cardDesc1: "Motor matic kehilangan daya hambat mesin secara alami di turunan curam saat gas dilepas. Putaran mesin harus dijaga agar roda penggerak mengunci.",

      cardTitle2: "Krisis Panas Berlebih (Overheating)",
      cardDesc2: "Menekan tuas rem terus-menerus tanpa jeda membuat piringan cakram membara, minyak rem mendidih, dan memicu rem blong seketika.",

      cardTitle3: "Rest Area & Cooling Point",
      cardDesc3: "Tersedia posko fisik gratis garapan relawan dan warga untuk menyiram rem, mengistirahatkan kendaraan, serta menyediakan tim medis darurat.",

      btnMap: "Lihat Peta Posko Cooling Point",
      supportTitle: "Dukungan & Validasi Otoritas Resmi",
      supportSubtitle: "Gerakan ini berjalan atas koordinasi, apresiasi, dan dukungan resmi dari otoritas pengelola kawasan dan pemerintah daerah setempat.",

      // TNBTS
      tnbtsQuote: "Menyampaikan apresiasi atas inisiatif yang bertujuan mendukung peningkatan keselamatan pengunjung serta penguatan citra positif pariwisata di kawasan Taman Nasional Bromo Tengger Semeru.",
      tnbtsSign: "Bambang Suriyono, S.Hut., M.Si.",
      tnbtsRole: "Plh. Kepala Balai Besar TNBTS",

      // Sukapura
      sukapuraQuote: "Pemerintah Kecamatan Sukapura mendukung penuh pelaksanaan Program Bromo Safety Initiative (BSI) sebagai upaya edukasi dan peningkatan kesadaran wisatawan terhadap pentingnya keselamatan.",
      sukapuraSign: "Ino Rachmad Sholeh, S.STP., M.Si.",
      sukapuraRole: "Camat Sukapura, Probolinggo",
      sponsorTitle: "Peluang Kemitraan & Sponsorship Eksekutif",
      supportSubtitle: "Bergabung bersama sebagai mitra strategis untuk membangun platform digital permanen dan menekan angka kecelakaan hingga titik nol.",
      btnDownload: "Unduh Proposal Lengkap (PDF)",
      tierExclusive: "Hak Eksklusif",
      tierPopular: "Visibilitas Tinggi",
      tierEssential: "Dukungan Esensial",

      // Deskripsi Singkat Paket
      descBronze: "Partisipasi logo pada poster digital kampanye dan mention kolektif di media sosial.",
      descSilver: "Penempatan logo ukuran kecil di spanduk jalur rawan dan materi cetak leaflet tertentu.",
      descGold: "Jejak logo ukuran menengah di banner lapangan, konten digital, serta hak distribusi brosur promosi.",
      descPlatinum: "Co-branding dominan di tenda posko, rompi relawan, activation booth, dan aset dokumentasi visual.",
      descTitle: "Dominasi penuh panggung tanpa kompetitor sejenis, hak penamaan program, serta penguasaan digital & PR utama.",
      pillarsTitle: "Empat Pilar Nilai Konservasi",
      pillarsSubtitle: "Setiap tindakan keselamatan yang Anda patuhi turut melestarikan aset strategis nasional dengan nilai kelas dunia.",

      pillarLabel1: "Nilai Ekologi",
      pillarDesc1: "Menjaga keanekaragaman hayati rawan dan flora-fauna endemik di seluruh zona konservasi.",

      pillarLabel2: "Nilai Geologi",
      pillarDesc2: "Menghormati dan menjaga bentang alam vulkanik purba serta formasi kaldera raksasa.",

      pillarLabel3: "Nilai Budaya",
      pillarDesc3: "Menjunjung tinggi warisan leluhur Tengger, tradisi sakral, dan kearifan lokal masyarakat.",

      pillarLabel4: "Nilai Pariwisata",
      pillarDesc4: "Menjaga daya tarik ekonomi kelas dunia melalui ekosistem perjalanan yang aman dan tertib.",
      footerDesc: "Ekosistem digital yang didedikasikan untuk edukasi, pemantauan riil, dan mitigasi kecelakaan di seluruh kawasan strategis pariwisata Taman Nasional Bromo Tengger Semeru.",
      footerNavTitle: "Navigasi Ringkas",
      footerContactTitle: "Kontak Darurat",
      footerEmergencyCall: "Hubungi Posko Fisik",
      footerRights: "Hak Cipta Dilindungi Undang-Undang."
    }
  }
};

i18n
  .use(LanguageDetector) // Deteksi bahasa otomatis
  .use(initReactI18next) // Hubungkan dengan react-i18next
  .init({
    resources,
    fallbackLng: 'id', // Bahasa utama jika deteksi gagal
    interpolation: {
      escapeValue: false // React sudah aman dari XSS
    }
  });

export default i18n;