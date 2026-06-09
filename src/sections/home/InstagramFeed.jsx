import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaHeart, FaComment, FaExternalLinkAlt } from 'react-icons/fa';
import { useFadeIn } from '../../hooks/useFadeIn';

function InstagramFeed() {
  const { t } = useTranslation();
  const [activeFeedId, setActiveFeedId] = useState(null);
  const [domRef, isVisible] = useFadeIn(150);

  // MOCK DATA: Representasi struktur data asli dari Instagram API / Pihak Ketiga
  const instagramData = [
    {
      id: "ig_1",
      media_url: "https://images.unsplash.com/photo-1779838386666-6d110f33079b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Foto Bromo kabut kaburan
      permalink: "https://instagram.com",
      caption: "Panduan berkendara aman melewati lautan pasir Bromo menggunakan motor matic. Selalu gunakan engine brake alami! 🏍️💨 #BromoSafety #SafetyRiding",
      likes: "1,240",
      comments: "84"
    },
    {
      id: "ig_2",
      media_url: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=600&q=80", // Ilustrasi cek rem kendaraan
      permalink: "https://instagram.com",
      caption: "Edukasi berkala bersama komunitas lokal Sukapura mengenai bahaya fenomena 'Vapor Lock' atau rem blong akibat panas berlebih. 🛠️⚠️ #BromoSafetyInitiative",
      likes: "948",
      comments: "42"
    },
    {
      id: "ig_3",
      media_url: "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&w=600&q=80", // Papan informasi jalur darurat
      permalink: "https://instagram.com",
      caption: "Pemasangan rambu pengingat dan peta titik rawan baru di jalur turunan ekstrem menuju kaldera. Tetap waspada kawan! 🛑🧭 #MitigasiRisiko #Tosari #Cemorolawang",
      likes: "1,532",
      comments: "116"
    },
    {
      id: "ig_4",
      media_url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80", // Pemandangan Bromo cerah gunung gunung
      permalink: "https://instagram.com",
      caption: "Keindahan Bromo yang abadi adalah tanggung jawab kita bersama. Jaga keselamatan diri, jaga kelestarian ekosistem konservasi. 🌋💚 #SustainableTourism #SaveBromo",
      likes: "2,011",
      comments: "198"
    }
  ];

  return (
    <section 
      ref={domRef}
      className={`zoom-in-hidden ${isVisible ? 'zoom-in-visible' : ''} bg-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-pink-600 uppercase bg-pink-50 px-3 py-1 rounded-md border border-pink-100 mb-4">
              <FaInstagram className="text-sm animate-bounce" /> Hubungkan Sosial Media
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
              Kabar Terbaru dari @bromosafety
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed mt-2">
              Ikuti dokumentasi aksi lapangan, infografis tips berkendara, dan laporan kondisi lalu lintas riil langsung dari akun Instagram resmi kami.
            </p>
          </div>
          
          {/* Tombol Follow */}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-pink-500/20 active:scale-95 transition-all cursor-pointer w-fit h-fit"
          >
            <FaInstagram className="text-lg" /> Ikuti di Instagram
          </a>
        </div>

        {/* INSTAGRAM GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {instagramData.map((post) => {
            const isCurrentActive = activeFeedId === post.id;

            return (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                // DUAL DEVICE TRIGGERS: Sempurna untuk Desktop & Mobile-Touch
                onTouchStart={() => setActiveFeedId(post.id)}
                onMouseEnter={() => setActiveStatId(post.id)} // opsional jika mau hover sinkron
                onMouseEnter={() => setActiveFeedId(post.id)}
                onMouseLeave={() => setActiveFeedId(null)}
                className={`flex flex-col rounded-2xl border-2 overflow-hidden bg-slate-50 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer select-none relative group
                  /* Efek Elevasi dan Bayangan Menyala Pink-Pastel */
                  ${isCurrentActive ? '-translate-y-3 scale-[1.03] border-pink-500 shadow-2xl shadow-pink-500/10' : 'border-slate-200/80'}
                `}
              >
                {/* WADAH FOTO/GAMBAR */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-200">
                  <img 
                    src={post.media_url} 
                    alt="Instagram Post Content" 
                    className={`w-full h-full object-cover transition-transform duration-700 ${isCurrentActive ? 'scale-110' : ''}`}
                    loading="lazy"
                  />
                  
                  {/* OVERLAY GELAP (MUNCUL SAAT ACTIVE/HOVER) */}
                  <div className={`absolute inset-0 bg-slate-950/40 flex items-center justify-center gap-6 transition-opacity duration-300 backdrop-blur-xs
                    ${isCurrentActive ? 'opacity-100' : 'opacity-0'}
                  `}>
                    <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
                      <FaHeart className="text-pink-500 animate-pulse" /> {post.likes}
                    </div>
                    <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
                      <FaComment className="text-blue-400" /> {post.comments}
                    </div>
                    {/* Ikon Tautan Pojok Kanan Atas Overlay */}
                    <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-lg text-white text-xs">
                      <FaExternalLinkAlt />
                    </div>
                  </div>
                </div>

                {/* DESKRIPSI TEKS/CAPTION DI BAWAH FOTO */}
                <div className="p-5 flex flex-col flex-grow bg-white">
                  <p className={`text-xs sm:text-sm font-semibold leading-relaxed transition-colors duration-300 line-clamp-3
                    ${isCurrentActive ? 'text-slate-800' : 'text-slate-500'}
                  `}>
                    {post.caption}
                  </p>
                  
                  {/* Tanda akun pembuat di dasar kartu */}
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] font-extrabold text-slate-400 tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> @bromosafety
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default InstagramFeed;