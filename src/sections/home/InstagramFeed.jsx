import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useFadeIn } from '../../hooks/useFadeIn';

function InstagramFeed() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'id';
  const [domRef, isVisible] = useFadeIn(150);

  useEffect(() => {
    
    const scriptId = 'elfsight-platform-script';
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  
  const waMessage = currentLang === 'en'
    ? "Hello Bromo Safety Initiative, I would like to join the movement and collaborate."
    : "Halo Bromo Safety Initiative, saya ingin bergabung dengan gerakan ini dan berkolaborasi.";

  const whatsappUrl = `https://wa.me/6281180001091?text=${encodeURIComponent(waMessage)}`;

  return (
    <section 
      ref={domRef} 
      className={`zoom-in-hidden ${isVisible ? 'zoom-in-visible' : ''} bg-slate-50/50 pt-20 pb-20 md:pt-32 md:pb-28 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 relative overflow-hidden`}
    >
      
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-[var(--color-brand-orange)] uppercase bg-[var(--color-brand-orange-light)] px-3 py-1 rounded-md border border-[var(--color-brand-orange-border)]/30 mb-4">
              <FaInstagram className="text-sm" /> {t('igBadge')}
            </span>
            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-5xl uppercase leading-tight">
              {t('igTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mt-2">
              {t('igDesc')}
            </p>
          </div>
          
          
          <a 
            href="https://www.instagram.com/bromosafetyinitiative/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-black tracking-wider uppercase rounded-xl shadow-md transition-all duration-300 active:scale-95 hover:-translate-y-0.5 cursor-pointer w-fit h-fit select-none whitespace-nowrap"
          >
            <FaInstagram className="text-sm text-[var(--color-brand-orange)]" /> {t('igFollowBtn')}
          </a>
        </div>

        
        
        
        <div className="w-full rounded-3xl border-2 border-slate-200/60 p-4 sm:p-6 bg-white shadow-xl shadow-slate-200/40">
          <div 
            className="elfsight-app-0702755a-c92f-4a04-913e-5d8a7e497183" 
            data-elfsight-app-lazy 
          />
        </div>

        
        
        
        <div className="mt-20 relative">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 md:p-16 border border-slate-800 shadow-2xl overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 group">
            
            
            <div className="absolute right-0 top-0 w-80 h-80 bg-radial from-white/5 to-transparent rounded-full pointer-events-none -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-110" />
            
            
            <div className="space-y-3 text-center md:text-left relative z-10 max-w-md">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-brand-orange)] bg-[var(--color-brand-orange-light)]/10 border border-[var(--color-brand-orange-border)]/20 px-3 py-1 rounded-md">
                {currentLang === 'en' ? "TAKE ACTION" : "AKSI NYATA"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase leading-tight pt-2">
                {t('igCtaTitle')}
              </h3>
            </div>

            
            <div className="relative z-10 flex-shrink-0">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4.5 bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white text-xs font-black tracking-widest uppercase rounded-xl shadow-xl shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 active:scale-95 cursor-pointer select-none border border-orange-400/20 group/btn"
              >
                <FaWhatsapp className="text-base text-white transition-transform group-hover/btn:rotate-12" /> 
                <span>{t('igCtaBtn')}</span>
              </a>
            </div>

          </div>
        </div>
        

      </div>
    </section>
  );
}

export default InstagramFeed;