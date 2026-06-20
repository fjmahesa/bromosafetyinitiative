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
  ];

  // Kelas utility gambar untuk standarisasi ukuran besar yang konsisten
  const imgClassName = "max-h-20 md:max-h-24 max-w-[140px] md:max-w-[160px] w-auto h-auto object-contain filter opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 select-none pointer-events-none";

  const imgClassNameSponsors = "max-h-28 md:max-h-35 max-w-[140px] md:max-w-[160px] w-auto h-auto object-contain filter opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 select-none pointer-events-none";

  return (
    <section 
      ref={domRef}
      className={`fade-in-hidden ${isVisible ? 'fade-in-visible' : ''} bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100 relative overflow-hidden`}
    >
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
          
          <div className="bg-slate-50/40 border border-slate-200/50 rounded-3xl p-8 sm:p-12 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-14 items-center justify-items-center">
              {supportedLogos.map((logo) => (
                <div 
                  key={logo.id} 
                  className="w-full flex items-center justify-center p-2 group transition-all duration-300 relative"
                  title={logo.name}
                >
                  <img src={logo.src} alt={`${logo.name} Logo`} className={imgClassName} loading="lazy" />
                </div>
              ))}
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
          
          <div className="bg-slate-50/40 border border-slate-200/50 rounded-3xl p-8 sm:p-12 shadow-xs max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-14 items-center justify-items-center">
              {sponsoredLogos.map((logo) => (
                <div 
                  key={logo.id} 
                  className="w-full flex items-center justify-center p-2 group transition-all duration-300 relative"
                  title={logo.name}
                >
                  <img src={logo.src} alt={`${logo.name} Logo`} className={imgClassNameSponsors} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Sponsors;