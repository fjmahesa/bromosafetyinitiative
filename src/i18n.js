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

      // Konten Riil dari Berkas - Sinkron dengan Bahasa Indonesia
      heroBadge: "National Priority Campaign",
      heroTitle: "Safety Campaign for Safe, Orderly, and Sustainable Tourism in Mount Bromo Area",
      heroSubtitle: "Safety on Bromo pathways is the result of precise education, measured intervention, and tourism ecosystem readiness. Together, we realize the mandate for safe and sustainable tourism.",
      btnGuide: "Safety Guidelines",
      btnStatus: "Volcanic Status",
      statsTitle: "Bromo in Numbers: Scale & Urgency",
      statsSubtitle: "The sharp surge in global tourist arrivals drives the urgent need for systemic, on-ground safety monitoring.",
      statsLabel1: "Annual Global Tourists",
      statsDesc1: "Total tourists recorded in the latest annual surge, combining local and international visitors.",
      statsLabel2: "Matic Bikes Intercepted/Day",
      statsDesc2: "Average number of automatic motorcycles stopped and checked by local residents daily to prevent brake failure accidents.",
      statsLabel3: "Lebaran Peak Surge",
      statsDesc3: "Significant volume growth compared to the previous holiday season.",
      statsLabel4: "Target Protected Tourists",
      statsDesc4: "Target number of visitors directly educated and protected through physical interventions on hazardous routes.",
      pathTitle: "Anatomy of Extreme Topography",
      pathSubtitle: "This infrastructure consists of limited nature conservation access paths, not high-capacity mass transportation routes.",
      pathWarning: "WARNING: High accident risks stem from systemic structural road hazards.",

      // Titik 1
      pointTitle1: "Steep Inclines & Long Declines",
      pointDesc1: "Drains engine power on the way up, and drastically overburdens the braking system during prolonged descents.",

      // Titik 2
      pointTitle2: "Sharp Hairpin Turns",
      pointDesc2: "Extremely limited visibility (blind spots) along the mountain ridges that demands full driver focus.",

      // Titik 3
      pointTitle3: "Narrow Passing Roads",
      pointDesc3: "Flanked tightly by steep vertical cliffs prone to landslides and deep ravines without adequate safety barriers.",
      brakeTitle: "Matic Brake Failure Prevention",
      brakeSubtitle: "An average of 400+ automatic motorbikes are stopped by locals daily on the Sukapura-Cemoro Lawang route to check brake components and prevent fatalities.",

      cardTitle1: "Absence of Engine Brake",
      cardDesc1: "Automatic scooters lose engine braking deceleration on steep downhills when the throttle is released. Engine RPM must be maintained to keep the drive wheel locked.",

      cardTitle2: "Brake Overheating Crisis",
      cardDesc2: "Continuous brake application without intervals burns the brake disc, boils the brake fluid, and triggers sudden total brake failure.",

      cardTitle3: "Rest Area & Cooling Point",
      cardDesc3: "Free physical posts are provided by volunteers and residents to spray the brakes, rest the vehicle, and provide emergency medical teams.",

      btnMap: "View Cooling Points Map",
      supportTitle: "Official Endorsement & Validation",
      supportSubtitle: "This movement operates under the official coordination, appreciation, and support from regional authorities and national park management.",

      // SEKSI KAMPANYE O2O (Online to Offline)
      o2oBadge: "O2O Intervention Strategy",
      o2oTitleMain: "Online to Offline (O2O) Safety Campaign",
      o2oSubtitle: "Connecting digital mitigation awareness prior to departure with real physical rescue actions on Bromo's extreme terrain.",
      o2oTabOnlineTitle: "1. Online Movement",
      o2oTabOnlineSub: "Digital Pre-Visit Education",
      o2oTabOfflineTitle: "2. Offline Action",
      o2oTabOfflineSub: "On-Ground Physical Intervention",

      o2oOnlineHeader: "Focus of Online Educational Activities",
      o2oOnlineSubheader: "Building risk awareness for tourists before stepping foot onto the Bromo caldera.",
      o2oOnlinePointTitle1: "Interactive Risk Map",
      o2oOnlinePointDesc1: "Digital mapping of hazard routes (Tosari & Cemorolawang) accessible via mobile browsers throughout the journey.",
      o2oOnlinePointTitle2: "Anti Vapor Lock Campaign",
      o2oOnlinePointDesc2: "Infographics & short educational video distribution on how to prevent automatic scooter brake failure due to overheating on downhills.",
      o2oOnlinePointTitle3: "Real-Time Route Status",
      o2oOnlinePointDesc3: "A centralized monitoring portal for weather conditions, fog visibility, and tourist route traffic density.",

      o2oOfflineHeader: "On-Ground Physical Interventions",
      o2oOfflineSubheader: "Implementation of direct physical protection in the field to minimize accident fatalities.",
      o2oOfflinePointTitle1: "Intercept & Cooling Stations",
      o2oOfflinePointDesc1: "Voluntary action by locals stopping 400+ automatic scooters per day to cool down overheated brake discs.",
      o2oOfflinePointTitle2: "Emergency Runaway Ramps",
      o2oOfflinePointDesc2: "Recommendations for structuring emergency runaway pockets made of loose sand & gravel at the bottom of steep slopes.",
      o2oOfflinePointTitle3: "10,000+ High-Contrast Signs",
      o2oOfflinePointDesc3: "Installation of highly visible neon warning signs at every critical blind spot prone to incidents.",
      o2oFootnote: "Connected System: Digital Website Emergency Button Links Directly to Sukapura Ambulance Outpost.",

      // TNBTS
      tnbtsQuote: "Expressing our highest appreciation for this initiative aimed at supporting visitor safety improvements and strengthening the positive image of tourism in the Mount Bromo Tengger Semeru National Park area.",
      tnbtsSign: "Bambang Suriyono, S.Hut., M.Si.",
      tnbtsRole: "Acting Head of BB-TNBTS",

      // Sukapura
      sukapuraQuote: "The Sukapura District Government fully supports the implementation of the Bromo Safety Initiative (BSI) program as an effort to educate and raise awareness among tourists regarding the importance of safety.",
      sukapuraSign: "Nur Rachmad Sholeh",
      sukapuraRole: "Head of Sukapura District, Probolinggo",
      sponsorTitle: "Strategic Partnership & Executive Sponsorship Opportunities",
      sponsorSubtitle: "Join forces as a strategic partner to build a permanent digital platform and slash traffic accident rates down to zero.",
      btnDownload: "Download Full Proposal (PDF)",
      tierExclusive: "Exclusive Rights",
      tierPopular: "High Visibility",
      tierEssential: "Community Support",

      // Deskripsi Singkat Paket
      descBronze: "Logo participation on the campaign's digital poster and collective mention on social media channels.",
      descSilver: "Small logo placement on banners along hazardous routes and specific printed leaflets.",
      descGold: "Medium logo exposure on on-ground banners, digital content, and direct brochure distribution rights.",
      descPlatinum: "Dominant co-branding on physical posts, volunteer vests, activation booths, and visual documentation assets.",
      descTitle: "Absolute industry exclusivity, program naming rights integration, along with dominant digital and PR exposure.",
      pillarsTitle: "The Four Pillars of Conservation",
      pillarsSubtitle: "Every safety measure you comply with helps preserve invaluable world-class national strategic assets.",

      pillarLabel1: "Ecological Value",
      pillarDesc1: "Protecting vulnerable biodiversity and fragile endemic flora-fauna throughout the conservation zone.",

      pillarLabel2: "Geological Value",
      pillarDesc2: "Respecting and preserving ancient majestic volcanic landscapes and giant caldera formations.",

      pillarLabel3: "Cultural Value",
      pillarDesc3: "Honoring the sacred ancestral heritage, traditions, and local wisdom of the Tengger community.",

      pillarLabel4: "Tourism Value",
      pillarDesc4: "Sustaining a world-class economic engine driven by a safe, orderly, and responsible travel ecosystem.",
      footerDesc: "A digital ecosystem dedicated to education, real-time monitoring, and accident mitigation across the Mount Bromo Tengger Semeru strategic tourism zone.",
      footerNavTitle: "Quick Links",
      footerContactTitle: "Emergency Contacts",
      footerEmergencyCall: "Call Command Center",
      footerRights: "All Rights Reserved.",
      errorTitle: "Oops! You Are Lost in Bromo's Fog",
      errorDesc: "The page you are looking for could not be found or has been moved to a different path.",
      btnHome: "Back to Home",
      btnEmergency: "Emergency Call",
      aboutBadge: "About Us",
      aboutHeroTitle: "Guarding Every Step, Securing Every Adventure in Bromo",
      aboutHeroDesc: "Bromo Safety Initiative is a collective dedication platform focusing on safety standardization, medical risk mitigation, and strengthening integrated emergency services within the Bromo Tengger Semeru National Park area.",
      aboutBgTitle: "Why Does Bromo Safety Initiative Exist?",
      aboutBgP1: "The enchanting beauty of Mount Bromo attracts millions of domestic and international tourists every year. However, behind the exoticism of the sea of sand and the cold caldera, lie real geographical challenges and medical risks—ranging from hypothermia, jeep driving incidents, to the need for efficient rapid emergency response.",
      aboutBgP2: "We are here to bridge the safety information gap for tourists and build a friendly, secure, and alert tourism ecosystem in collaboration with medical authorities, local guides, and the Sukapura Ambulance Command Center.",
      aboutVisionTitle: "Our Vision",
      aboutVisionDesc: "To become the primary hub of an international-standard tourism safety ecosystem in Mount Bromo that guarantees the safety of tourists' lives and the well-being of the local community.",
      aboutMissionTitle: "Strategic Mission",
      aboutMissionItem1: "Providing a trusted center for safety mitigation guidance information for tourists.",
      aboutMissionItem2: "Integrating rapid emergency communication access directly to Sukapura 112 ambulance services.",
      aboutMissionItem3: "Encouraging standardizing jeep transport fleet eligibility and readiness of local tour guides.",
      aboutPillarTitle: "Focus Pillars of the Bromo Safety Movement",
      aboutPillarSub: "How we strive for comprehensive protection across the TNBTS region",
      aboutPillarHead1: "Integrated Medical Response",
      aboutPillarDesc1: "Helping to facilitate visualization and access to the nearest physical emergency routes for injured victims or critical conditions to connect preventatively with the Sukapura Ambulance response network.",
      aboutPillarHead2: "Education & Agency Guidance",
      aboutPillarDesc2: "Equipping tourists with comprehensive knowledge, from distinguishing illegal travel/jeep agencies, physical preparation for Bromo's extreme weather, to standard first aid kit checklist completion.",
      aboutPillarHead3: "Local Community Synergy",
      aboutPillarDesc3: "Encouraging regular first aid skills training for local business operators, jeep drivers, and the indigenous Tenggerese guide community at the frontline of assistance.",
      aboutCtaTitle: "Your Safety Is Our Top Commitment",
      aboutCtaDesc: "Don't let your dream vacation be disrupted by a lack of safety preparation. Always monitor the latest weather information and save emergency numbers before starting your journey.",
      aboutCtaBtn: "Contact Emergency 112",
      contactBadge: "Contact Us",
      contactTitle: "We Are Ready to Hear and Help You",
      contactDesc: "Have questions about safety standardization, partnerships, or need coordination assistance? Feel free to send a message or reach out through our official channels.",
      contactFormTitle: "Send a Direct Message",
      formName: "Full Name",
      formEmail: "Email Address",
      formSubject: "Subject / Topic",
      formMessage: "Your Message",
      formBtn: "Send Message",
      contactInfoTitle: "Contact Information",
      contactEmergencyTitle: "Physical Emergency Line",
      contactEmergencyDesc: "For medical emergencies or accidents within the Bromo area, immediately contact the Command Center.",
      contactEmergencyBtn: "Call Sukapura 112",
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
      heroTitle: "Kampanye Keselamatan untuk Pariwisata di Kawasan Gunung Bromo yang Aman, Tertib dan Berkelanjutan",
      heroSubtitle: "Keselamatan di jalur Bromo adalah hasil dari edukasi yang presisi, intervensi yang terukur, dan kesiapan ekosistem wisata. Bersama, kita wujudkan mandat pariwisata yang aman dan berkelanjutan.",
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

      // SEKSI KAMPANYE O2O (Online to Offline)
      o2oBadge: "Strategi Intervensi O2O",
      o2oTitleMain: "Kampanye Keselamatan Online to Offline (O2O)",
      o2oSubtitle: "Menghubungkan kesadaran mitigasi digital sebelum keberangkatan dengan aksi penyelamatan fisik nyata di medan ekstrem kawasan Bromo.",
      o2oTabOnlineTitle: "1. Gerakan Online",
      o2oTabOnlineSub: "Edukasi & Pra-Kunjungan Digital",
      o2oTabOfflineTitle: "2. Aksi Offline",
      o2oTabOfflineSub: "Intervensi & Mitigasi Fisik Lapangan",

      o2oOnlineHeader: "Fokus Kegiatan Edukasi Online",
      o2oOnlineSubheader: "Membentuk pemahaman risiko bagi wisatawan sebelum menginjakkan kaki di kaldera Bromo.",
      o2oOnlinePointTitle1: "Peta Risiko Interaktif",
      o2oOnlinePointDesc1: "Pemetaan digital rute *hazard* (Tosari & Cemorolawang) yang dapat dibuka via mobile browser sepanjang perjalanan.",
      o2oOnlinePointTitle2: "Kampanye Anti Vapor Lock",
      o2oOnlinePointDesc2: "Infografis & penyebaran video pendek edukasi cara mencegah rem matic blong akibat panas berlebih di turunan.",
      o2oOnlinePointTitle3: "Status Jalur Real-Time",
      o2oOnlinePointDesc3: "Portal pantauan cuaca, visibilitas kabut asap, dan tingkat kepadatan lalu lintas jalur wisata secara terpusat.",

      o2oOfflineHeader: "Aksi & Intervensi Fisik Offline",
      o2oOfflineSubheader: "Implementasi perlindungan fisik langsung di lapangan demi meminimalisir fatalitas kecelakaan.",
      o2oOfflinePointTitle1: "Pos Penghentian & Pendinginan",
      o2oOfflinePointDesc1: "Aksi warga lokal menghentikan 400+ motor matic per hari secara sukarela untuk mendinginkan rem cakram yang panas.",
      o2oOfflinePointTitle2: "Jalur Pasir Penyelamat",
      o2oOfflinePointDesc2: "Rekomendasi penataan dinding/kantong penyelamat darurat berbahan pasir & kerikil lepas di dasar turunan curam.",
      o2oOfflinePointTitle3: "10.000+ Rambu High-Contrast",
      o2oOfflinePointDesc3: "Pemasangan papan peringatan neon mencolok mata di setiap tikungan buta (*blind spot*) rawan insiden.",
      o2oFootnote: "Sistem Terkoneksi: Tombol Darurat Digital Website Terhubung Langsung ke Posko Ambulans Sukapura.",

      // TNBTS
      tnbtsQuote: "Menyampaikan apresiasi atas inisiatif yang bertujuan mendukung peningkatan keselamatan pengunjung serta penguatan citra positif pariwisata di kawasan Taman Nasional Bromo Tengger Semeru.",
      tnbtsSign: "Bambang Suriyono, S.Hut., M.Si.",
      tnbtsRole: "Plh. Kepala Balai Besar TNBTS",

      // Sukapura
      sukapuraQuote: "Pemerintah Kecamatan Sukapura mendukung penuh pelaksanaan Program Bromo Safety Initiative (BSI) sebagai upaya edukasi dan peningkatan kesadaran wisatawan terhadap pentingnya keselamatan.",
      sukapuraSign: "Nur Rachmad Sholeh",
      sukapuraRole: "Camat Sukapura, Probolinggo",
      sponsorTitle: "Peluang Kemitraan & Sponsorship Eksekutif",
      sponsorSubtitle: "Bergabung bersama sebagai mitra strategis untuk membangun platform digital permanen dan menekan angka kecelakaan hingga titik nol.",
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
      footerRights: "Hak Cipta Dilindungi Undang-Undang.",
      errorTitle: "Opps! Anda Tersesat di Kabut Bromo",
      errorDesc: "Halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan ke jalur yang berbeda.",
      btnHome: "Kembali ke Beranda",
      btnEmergency: "Panggilan Darurat",
      aboutBadge: "Tentang Kami",
      aboutHeroTitle: "Menjaga Setiap Langkah, Mengamankan Setiap Petualangan di Bromo",
      aboutHeroDesc: "Bromo Safety Initiative adalah platform dedikasi kolektif yang berfokus pada standarisasi keselamatan, mitigasi risiko medis, dan penguatan layanan darurat terpadu di kawasan Taman Nasional Bromo Tengger Semeru.",
      aboutBgTitle: "Mengapa Bromo Safety Initiative Hadir?",
      aboutBgP1: "Pesona keindahan Gunung Bromo menarik jutaan wisatawan domestik maupun mancanegara setiap tahunnya. Namun, di balik eksotisme lautan pasir dan dinginnya kaldera, terdapat tantangan geografis serta risiko medis nyata—mulai dari hipotermia, insiden berkendara jip, hingga kebutuhan respons cepat tanggap darurat yang efisien.",
      aboutBgP2: "Kami hadir untuk menjembatani kesenjangan informasi keselamatan bagi para wisatawan serta membangun ekosistem wisata yang ramah, aman, dan siaga berkolaborasi dengan otoritas medis, pemandu lokal, dan Command Center Ambulans Sukapura.",
      aboutVisionTitle: "Visi Kami",
      aboutVisionDesc: "Menjadi poros utama ekosistem keselamatan pariwisata bertaraf internasional di Gunung Bromo yang menjamin keamanan jiwa wisatawan dan kesejahteraan komunitas lokal.",
      aboutMissionTitle: "Misi Strategis",
      aboutMissionItem1: "Menyediakan pusat informasi panduan mitigasi keselamatan terpercaya bagi wisatawan.",
      aboutMissionItem2: "Mengintegrasikan akses komunikasi cepat tanggap darurat langsung ke layanan ambulans Sukapura 112.",
      aboutMissionItem3: "Mendorong standarisasi kelayakan armada transportasi jip dan kesiapsiagaan pemandu wisata lokal.",
      aboutPillarTitle: "Pilar Fokus Gerakan Bromo Safety",
      aboutPillarSub: "Bagaimana kami mengupayakan perlindungan menyeluruh di kawasan TNBTS",
      aboutPillarHead1: "Respons Medis Terpadu",
      aboutPillarDesc1: "Membantu mempermudah visualisasi dan akses jalur darurat fisik terdekat bagi korban cidera atau kondisi kritis agar langsung tersambung secara preventif ke jaringan penanganan Ambulans Sukapura.",
      aboutPillarHead2: "Edukasi & Panduan Agensi",
      aboutPillarDesc2: "Membekali turis dengan pengetahuan komprehensif mulai dari cara membedakan agen travel/jip ilegal, persiapan fisik menghadapi cuaca ekstrem Bromo, hingga kelengkapan kotak P3K standar.",
      aboutPillarHead3: "Sinergi Komunitas Lokal",
      aboutPillarDesc3: "Mendorong pelatihan berkala keterampilan pertolongan pertama (First Aid) bagi para pelaku niaga, driver jip, dan komunitas pemandu adat Suku Tengger di garis depan pertolongan.",
      aboutCtaTitle: "Keselamatan Anda Adalah Komitmen Utama Kami",
      aboutCtaDesc: "Jangan biarkan liburan impian terganggu oleh minimnya persiapan keselamatan. Selalu pantau informasi cuaca terkini dan simpan nomor darurat sebelum memulai perjalanan Anda.",
      aboutCtaBtn: "Hubungi Emergency 112",
      contactBadge: "Hubungi Kami",
      contactTitle: "Kami Siap Mendengar dan Membantu Anda",
      contactDesc: "Punya pertanyaan seputar standarisasi keselamatan, kemitraan, atau butuh bantuan koordinasi? Jangan ragu untuk mengirimkan pesan atau menghubungi jaringan resmi kami.",
      contactFormTitle: "Kirim Pesan Langsung",
      formName: "Nama Lengkap",
      formEmail: "Alamat Email",
      formSubject: "Subjek / Topik",
      formMessage: "Isi Pesan Anda",
      formBtn: "Kirim Pesan",
      contactInfoTitle: "Informasi Kontak",
      contactEmergencyTitle: "Saluran Darurat Fisik",
      contactEmergencyDesc: "Untuk insiden medis darurat atau kecelakaan di kawasan Bromo, segera hubungi Command Center.",
      contactEmergencyBtn: "Hubungi Sukapura 112",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'id',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;