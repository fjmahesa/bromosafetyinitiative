import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFadeIn } from '../hooks/useFadeIn';

function Sponsors() {
  const { t } = useTranslation();
  const [domRef, isVisible] = useFadeIn(150);

  // Array data 5 logo sponsor utama
  const sponsorLogos = [
    { id: 1, name: "Pemerintah Daerah Probolinggo", src: "/images/sponsors/logo-pemda.png" },
    { id: 2, name: "TNBTS", src: "/images/sponsors/logo-tnbts.png" },
    { id: 3, name: "Kolatmar", src: "/images/sponsors/logo-kolatmar.png" },
    { id: 4, name: "Salam Setara", src: "/images/sponsors/logo-salamsetara.png" },
    { id: 5, name: "KitaBisa", src: "/images/sponsors/logo-kitabisa.png" },
  ];

  return (
    <section 
      ref={domRef}
      className={`fade-in-hidden ${isVisible ? 'fade-in-visible' : ''} bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100 relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* SUB-HEADER KECIL / PENANDA SEKSI */}
        <div className="text-center mb-10 md:mb-14">
          <h3 className="text-xs sm:text-sm font-extrabold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-3 before:h-[1px] before:w-8 before:bg-slate-200 after:h-[1px] after:w-8 after:bg-slate-200">
            Sponsored By
          </h3>
        </div>

        {/* FLEX/GRID BRAND LOGO CONTAINER */}
        <div className="bg-slate-50/40 border border-slate-200/50 rounded-3xl p-8 sm:p-12 shadow-xs">
          {/* Mengurangi tumpukan gap agar ukuran logo yang membesar memiliki ruang bernapas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 sm:gap-14 items-center justify-items-center">
            {sponsorLogos.map((logo) => (
              <div 
                key={logo.id} 
                className="w-full flex items-center justify-center p-2 group transition-all duration-300 relative"
                title={logo.name}
              >
                
                <img 
                  src={logo.src} 
                  alt={`${logo.name} Logo`} 
                  className="max-h-20 md:max-h-24 max-w-[140px] md:max-w-[160px] w-auto h-auto object-contain filter opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 select-none pointer-events-none"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Sponsors;