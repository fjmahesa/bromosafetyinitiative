import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; 
import { FaShieldAlt, FaChevronDown } from 'react-icons/fa';
import { useFadeIn } from '../../hooks/useFadeIn';
import bromoBg from '../../assets/bromo-bg.webp';

function Hero() {
  const { t } = useTranslation();
  const [domRef, isVisible] = useFadeIn(150);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 py-18 px-4 sm:px-6 lg:px-8">
      
      
      <div className="absolute inset-0 z-0">
        <img 
          src={bromoBg} 
          alt={t('heroAlt')} 
          className="w-full h-full object-cover object-center scale-105 select-none pointer-events-none filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-slate-50/90 mix-blend-normal" />
      </div>

      
      <div 
        ref={domRef}
        className={`fade-in-hidden ${isVisible ? 'fade-in-visible' : ''} relative z-10 max-w-5xl mx-auto text-center w-full`}
      >
        
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-brand-orange-light)] text-brand-orange text-xs sm:text-sm font-semibold border border-[var(--color-brand-orange-border)] mb-8 backdrop-blur-xs">
          <FaShieldAlt className="animate-pulse" /> {t('heroBadge')}
        </div>
        
        
        <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]">
          {t('heroTitle').split(' ').map((word, i) => {
            const isHighlight = word === 'Confidence' || word === 'Percaya' || word === 'Diri';
            return (
              <span key={i} className={isHighlight ? "text-brand-orange block sm:inline font-black" : ""}>
                {word}{' '}
              </span>
            );
          })}
        </h1>
        
        
        <p className="text-base sm:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          {t('heroSubtitle')}
        </p>
        
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm sm:max-w-none mx-auto mb-16">
          <Link 
            to="/safety-guide" 
            className="w-full sm:w-auto text-center rounded-xl bg-brand-orange px-8 py-4 text-sm font-bold text-white border-b-4 border-brand-orange-hover hover:brightness-105 active:border-b-0 active:mt-[4px] transition-all shadow-md select-none cursor-pointer"
          >
            {t('btnGuide')}
          </Link>
        </div>

        
        <div className="animate-bounce hidden sm:flex flex-col items-center justify-center text-slate-400 text-xs font-semibold gap-1">
          <span className="tracking-widest uppercase">{t('heroScrollDown')}</span>
          <FaChevronDown />
        </div>

      </div>

      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </section>
  );
}

export default Hero;