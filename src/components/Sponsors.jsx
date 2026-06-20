import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFadeIn } from '../hooks/useFadeIn';

function Sponsors() {
  const { t } = useTranslation();
  const [domRef, isVisible] = useFadeIn(150);

  // Kelompok 1: Otoritas Resmi Kawasan (Supported By)
  const supportedLogos = [
    { id: 1, name: "TNBTS", src: "/images/logo-tnbts.png" },
    { id: 2, name: "Kolatmar", src: "/images/logo-kolatmar.png" },
    { id: 3, name: "Pemerintah Daerah Probolinggo", src: "/images/logo-pemda.png" },
  ];

  // Kelompok 2: Lembaga Pendukung/Mitra (Sponsored By)
  const sponsoredLogos = [
    { id: 4, name: "KitaBisa", src: "/images/sponsors/logo-kitabisa.png" },
    { id: 5, name: "Salam Setara", src: "/images/sponsors/logo-salamsetara.png" },
    { id: 6, name: "APPI", src: "/images/sponsors/logo-appi.png" },
    { id: 7, name: "HIPPI", src: "/images/sponsors/logo-hippi.png" },
    { id: 8, name: "Rumah Zakat", src: "/images/sponsors/logo-rumahzakat.png" },
  ];

  // Standarisasi ukuran gambar dengan kecerahan penuh (opacity-100)
  const imgClassName = "max-h-20 md:max-h-24 max-w-[140px] md:max-w-[160px] w-auto h-auto object-contain opacity-100 md:hover:scale-105 transition-all duration-500 select-none pointer-events-none flex-shrink-0";
  const imgClassNameSponsors = "max-h-28 md:max-h-35 max-w-[140px] md:max-w-[160px] w-auto h-auto object-contain opacity-100 md:hover:scale-105 transition-all duration-500 select-none pointer-events-none flex-shrink-0";

  return (
    <section 
      ref={domRef}
      className={`fade-in-hidden ${isVisible ? 'fade-in-visible' : ''} bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100 relative overflow-hidden`}
    >
      {/* STYLE TAG UTK ANIMASI INFINITE MARQUEE & GRADIENT MASK FADE EFFECT */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
        .mobile-fade-mask {
          mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
        }
        @media (min-width: 768px) {
          .marquee-track {
            animation: none !important;
            transform: none !important;
            width: 100% !important;
            display: grid !important;
          }
          .mobile-fade-mask {
            mask-image: none !important;
            -webkit-mask-image: none !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-20">
        
        {/* ========================================== */}
        {/* BARIS 1: SUPPORTED BY */}
        {/* ========================================== */}
        <div className="w-full">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xs sm:text-sm font-extrabold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-3 before:h-[1px] before:w-8 before:bg-slate-200 after:h-[1px] after:w-8 after:bg-slate-200">
              Supported By
            </h3>
          </div>
          
          {/* PERBAIKAN: bg-slate-50/40 diubah menjadi bg-white penuh agar menyatu dengan logo berlatar putih */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-8 sm:p-10 shadow-sm overflow-hidden max-w-3xl mx-auto">
            <div className="w-full overflow-hidden md:overflow-visible mobile-fade-mask">
              <div className="marquee-track md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center">
                
                {/* [TRACK 1]: Elemen Asli */}
                {supportedLogos.map((logo) => (
                  <div key={`sup-${logo.id}`} className="w-[160px] md:w-full flex items-center justify-center p-2 group transition-all duration-300 relative">
                    <img src={logo.src} alt={`${logo.name} Logo`} className={imgClassName} loading="lazy" />
                  </div>
                ))}
                
                {/* [TRACK 2]: Elemen Duplikat Sejajar */}
                {supportedLogos.map((logo) => (
                  <div key={`sup-dup-${logo.id}`} className="w-[160px] md:hidden flex items-center justify-center p-2 group relative">
                    <img src={logo.src} alt={`${logo.name} Logo`} className={imgClassName} loading="lazy" />
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* BARIS 2: SPONSORED BY */}
        {/* ========================================== */}
        <div className="w-full">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xs sm:text-sm font-extrabold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-3 before:h-[1px] before:w-8 before:bg-slate-200 after:h-[1px] after:w-8 after:bg-slate-200">
              Sponsored By
            </h3>
          </div>
          
          {/* PERBAIKAN: bg-slate-50/40 diubah menjadi bg-white penuh agar menyatu dengan logo berlatar putih */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-8 sm:p-12 shadow-sm overflow-hidden">
            <div className="w-full overflow-hidden md:overflow-visible mobile-fade-mask">
              <div className="marquee-track md:grid-cols-5 gap-6 md:gap-10 items-center justify-items-center">
                
                {/* [TRACK 1]: Elemen Asli */}
                {sponsoredLogos.map((logo) => (
                  <div key={`spon-${logo.id}`} className="w-[150px] md:w-full flex items-center justify-center p-2 group transition-all duration-300 relative">
                    <img src={logo.src} alt={`${logo.name} Logo`} className={imgClassNameSponsors} loading="lazy" />
                  </div>
                ))}
                
                {/* [TRACK 2]: Elemen Duplikat Sejajar */}
                {sponsoredLogos.map((logo) => (
                  <div key={`spon-dup-${logo.id}`} className="w-[150px] md:hidden flex items-center justify-center p-2 group relative">
                    <img src={logo.src} alt={`${logo.name} Logo`} className={imgClassNameSponsors} loading="lazy" />
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Sponsors;