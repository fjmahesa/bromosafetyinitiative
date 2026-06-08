import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaShieldAlt, FaExclamationTriangle, FaChevronDown } from 'react-icons/fa';
import { useFadeIn } from '../../hooks/useFadeIn';
import bromoBg from '../../assets/bromo-bg.webp'; // Import gambar latar belakang

function Hero() {
  const { t } = useTranslation();
  const [domRef, isVisible] = useFadeIn(150);

  return (
    /* 1. KONTEN UTAMA & PEMBUNGKUS UTAMA SEKARANG DIPISAH.
         Tag utama <section> sekarang bersih dari ref animasi agar background langsung render 100%.
    */
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
      
      {/* BACKGROUND LAYER: Sekarang bebas dari efek animasi fade-in, langsung tampil instan */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bromoBg} 
          alt="Mount Bromo Landscape" 
          className="w-full h-full object-cover object-center scale-105 select-none pointer-events-none filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/55 to-slate-50/90 mix-blend-normal" />
      </div>

      {/* 2. INNER CONTAINER: Di sinilah kita memindahkan `ref={domRef}` dan kelas animasinya.
           Efek fade-in hanya akan memengaruhi teks, badge, tombol, dan indikator scroll.
      */}
      <div 
        ref={domRef}
        className={`fade-in-hidden ${isVisible ? 'fade-in-visible' : ''} relative z-10 max-w-5xl mx-auto text-center mt-4 w-full`}
      >
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-brand-orange-light)] text-brand-orange text-xs sm:text-sm font-semibold border border-[var(--color-brand-orange-border)] mb-8 backdrop-blur-xs">
          <FaShieldAlt className="animate-pulse" /> {t('heroBadge')}
        </div>
        
        {/* Judul Utama */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]">
          {t('heroTitle').split(' ').map((word, i) => {
            const isHighlight = word === 'Confidence' || word === 'Percaya' || word === 'Diri';
            return (
              <span key={i} className={isHighlight ? "text-brand-orange block sm:inline font-black" : ""}>
                {word}{' '}
              </span>
            );
          })}
        </h1>
        
        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          {t('heroSubtitle')}
        </p>
        
        {/* Tombol Aksi */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm sm:max-w-none mx-auto mb-16">
          <button className="w-full sm:w-auto rounded-xl bg-brand-orange px-8 py-4 text-sm font-bold text-white border-b-4 border-brand-orange-hover hover:brightness-105 active:border-b-0 active:mt-[4px] transition-all shadow-md">
            {t('btnGuide')}
          </button>
          
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border-2 border-slate-900 bg-white px-8 py-4 text-sm font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm">
            <FaExclamationTriangle className="text-amber-500" /> {t('btnStatus')}
          </button>
        </div>

        {/* Indikator Scroll Down */}
        <div className="animate-bounce hidden sm:flex flex-col items-center justify-center text-slate-400 text-xs font-semibold gap-1">
          <span className="tracking-widest uppercase">Scroll Down</span>
          <FaChevronDown />
        </div>

      </div>

      {/* Pembatas Organik (Bottom Divider) */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </section>
  );
}

export default Hero;