import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram } from 'react-icons/fa';
import { useFadeIn } from '../../hooks/useFadeIn';

function InstagramFeed() {
  const { t } = useTranslation();
  const [domRef, isVisible] = useFadeIn(150);

  useEffect(() => {
    // Memuat script platform Elfsight secara dinamis agar aman di React SPA
    const scriptId = 'elfsight-platform-script';
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Pembersihan saat komponen dilepas (unmounted)
    return () => {
      // Script dibiarkan di body agar tidak perlu load ulang saat pindah halaman
    };
  }, []);

  return (
    <section 
      ref={domRef} 
      className={`zoom-in-hidden ${isVisible ? 'zoom-in-visible' : ''} bg-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION - DISELARASKAN DENGAN DESAIN UTAMA BSI */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-[var(--color-brand-orange)] uppercase bg-[var(--color-brand-orange-light)] px-3 py-1 rounded-md border border-[var(--color-brand-orange-border)]/30 mb-4">
              <FaInstagram className="text-sm" /> {t('igBadge')}
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight uppercase">
              {t('igTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mt-2">
              {t('igDesc')}
            </p>
          </div>
          
          {/* Tombol Follow Premium Slate-Orange (Selaras dengan Footer & Navbar) */}
          <a 
            href="https://www.instagram.com/bromosafetyinitiative/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-black tracking-wider uppercase rounded-xl shadow-md transition-all duration-300 active:scale-95 hover:-translate-y-0.5 cursor-pointer w-fit h-fit select-none whitespace-nowrap"
          >
            <FaInstagram className="text-sm text-[var(--color-brand-orange)]" /> {t('igFollowBtn')}
          </a>
        </div>

        {/* =================================================================================== */}
        {/* CONTAINER UTAMA WIDGET ELFSIGHT DYNAMIC FEEDS */}
        {/* =================================================================================== */}
        <div className="w-full rounded-2xl border border-slate-200/60 p-4 bg-slate-50 min-h-[450px] shadow-xs">
          {/* 
            CRITICAL: Ganti teks "KODE-WIDGET-ASLI-Milik-Fajar" di bawah ini dengan 
            kode hash unik yang kamu dapatkan setelah menekan tombol "Publish" di dashboard Elfsight.
          */}
          <div 
            className="elfsight-app-0702755a-c92f-4a04-913e-5d8a7e497183" 
            data-elfsight-app-lazy 
          />
        </div>
        {/* =================================================================================== */}

      </div>
    </section>
  );
}

export default InstagramFeed;