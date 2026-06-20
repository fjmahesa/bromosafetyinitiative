import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaMapMarkedAlt, FaCompass, FaExternalLinkAlt } from 'react-icons/fa';
import { useFadeIn } from '../../hooks/useFadeIn';

function MapSection() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'id';
  const [domRef, isVisible] = useFadeIn(150);

  return (
    <section 
      ref={domRef}
      className={`zoom-in-hidden ${isVisible ? 'zoom-in-visible' : ''} bg-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-[var(--color-brand-orange)] uppercase bg-[var(--color-brand-orange-light)] px-3 py-1 rounded-md border border-[var(--color-brand-orange-border)]/30 mb-4">
              <FaCompass className="text-sm" /> {currentLang === 'id' ? 'Intervensi Fisik' : 'Physical Intervention'}
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight uppercase">
              {currentLang === 'id' ? 'Lokasi Posko Rest Area BSI' : 'BSI Rest Area Station Location'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mt-2">
              {currentLang === 'id' 
                ? 'Pos istirahat pengendara motor matic untuk mendinginkan rem (mencegah rem blong) serta memulihkan stamina sebelum melanjutkan perjalanan.'
                : 'Automatic motorcycle rest stop to cool down the brakes (prevent brake failure) and restore stamina before continuing the journey.' }
            </p>
          </div>

          {/* <a
            href="https://maps.app.goo.gl/7rSMNsha7rDzr6i9A?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-black tracking-wider uppercase rounded-xl shadow-md transition-all duration-300 active:scale-95 hover:-translate-y-0.5 cursor-pointer w-fit h-fit select-none whitespace-nowrap"
          >
            <FaMapMarkedAlt className="text-sm text-[var(--color-brand-orange)]" /> 
            <span>{currentLang === 'id' ? 'Buka Petunjuk Arah' : 'Get Directions'}</span>
            <FaExternalLinkAlt className="text-[10px] opacity-50 ml-1" />
          </a> */}
        </div>

        {/* MAP DISPLAY BOX (BENTO CARD STYLE) */}
        <div className="relative group rounded-3xl border-2 border-slate-200/60 p-3 sm:p-4 bg-slate-50 shadow-xl shadow-slate-200/40 overflow-hidden">
          
          {/* Bingkai Peta Interaktif */}
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-slate-200/80 shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.780156943912!2d112.97672999999999!3d-7.918018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd63700712858ed%3A0x3545ff180b928282!2sRest%20Area%20Bromo%20Safety%20Initiative!5e0!3m2!1sid!2sid!4v1781841687662!5m2!1sid!2sid"
              title="Rest Area Bromo Safety Initiative Location Map"
              className="w-full h-full bg-slate-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* <div className="absolute bottom-8 left-8 bg-slate-950/80 backdrop-blur-md text-white px-4 py-2.5 rounded-xl border border-white/10 text-[11px] font-bold tracking-wide pointer-events-none opacity-0 md:opacity-100 transform translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="text-[var(--color-brand-orange)]">📌 Koordinat Resmi:</span> -7.918018, 112.976730
          </div> */}
        </div>

      </div>
    </section>
  );
}

export default MapSection;