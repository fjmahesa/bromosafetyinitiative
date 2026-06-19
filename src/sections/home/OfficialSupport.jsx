import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaQuoteLeft } from 'react-icons/fa6';
import { useFadeIn } from '../../hooks/useFadeIn';

function OfficialSupport() {
  const { t } = useTranslation();
  
  // Memisahkan observer untuk efek slide berlawanan arah
  const [leftRef, leftVisible] = useFadeIn(100);
  const [rightRef, rightVisible] = useFadeIn(250);

  return (
    <section className="bg-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-100 relative overflow-hidden">
      {/* Pola dekoratif garis topografi tipis di latar belakang */}
      <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto">
        
        {/* HEADER - Warna badge disesuaikan ke Biru Perisai Bromo */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-extrabold tracking-widest text-[var(--color-brand-orange)] uppercase bg-[var(--color-brand-orange-light)] px-3 py-1 rounded-md border border-[var(--color-brand-orange-border)]">
            {t('supportBadge')}
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mt-4 mb-4 leading-tight">
            {t('supportTitle')}
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
            {t('supportSubtitle')}
          </p>
        </div>

        {/* TWO-COLUMN STATEMENT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* DUKUNGAN TNBTS - Slide-In Left (Konten Tetap) */}
          <div 
            ref={leftRef}
            className={`slide-left-hidden ${leftVisible ? 'slide-left-visible' : ''} flex flex-col justify-between bg-slate-50/70 border border-slate-300/80 rounded-3xl p-6 md:p-10 relative hover:bg-white hover:shadow-2xl hover:border-slate-300 transition-all duration-300 group`}
          >
            <FaQuoteLeft className="text-5xl text-slate-200/80 absolute top-6 right-6 group-hover:text-[var(--color-brand-orange-border)] transition-colors duration-300" />
            
            <div className="relative z-10">
              {/* Nama Instansi */}
              <h3 className="text-xs font-black tracking-widest text-slate-400 uppercase mb-6 border-b border-slate-200/60 pb-3 w-fit">
                {t('supportInstitution1')}
              </h3>
              {/* Petikan Isi Surat Dukungan */}
              <p className="text-base md:text-xl text-slate-700 italic font-semibold leading-relaxed mb-10">
                "{t('tnbtsQuote')}"
              </p>
            </div>

            {/* Kaki Surat / Penandatangan dengan FOTO BESAR */}
            <div className="flex items-center gap-5 pt-6 border-t border-slate-200/80">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[var(--color-brand-orange-border)] bg-slate-200 shadow-md shadow-slate-200/50 flex-shrink-0 transition-transform duration-300 group-hover:scale-120">
                <img 
                  src="/Rudijanta_Tjahja_Nugraha.jpg" 
                  alt={t('tnbtsSign')}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">{t('tnbtsSign')}</h4>
                <p className="text-xs sm:text-sm text-[var(--color-brand-orange)] font-bold mt-0.5">{t('tnbtsRole')}</p>
              </div>
            </div>
          </div>

          {/* DUKUNGAN WAKIL BUPATI PROBOLINGGO - Slide-In Right */}
          <div 
            ref={rightRef}
            className={`slide-right-hidden ${rightVisible ? 'slide-right-visible' : ''} flex flex-col justify-between bg-slate-50/70 border border-slate-300/80 rounded-3xl p-6 md:p-10 relative hover:bg-white hover:shadow-2xl hover:border-slate-300 transition-all duration-300 group`}
          >
            <FaQuoteLeft className="text-5xl text-slate-200/80 absolute top-6 right-6 group-hover:text-[var(--color-brand-orange-border)] transition-colors duration-300" />
            
            <div className="relative z-10">
              {/* Nama Instansi */}
              <h3 className="text-xs font-black tracking-widest text-slate-400 uppercase mb-6 border-b border-slate-200/60 pb-3 w-fit">
                {t('supportInstitution2')}
              </h3>
              {/* Petikan Isi Surat Dukungan Baru */}
              <p className="text-sm sm:text-base md:text-lg text-slate-700 italic font-semibold leading-relaxed mb-10">
                "{t('sukapuraQuote')}"
              </p>
            </div>

            {/* Kaki Surat / Penandatangan Baru - Mempertahankan file foto Nur_Rachmad_Sholeh.jpg */}
            <div className="flex items-center gap-5 pt-6 border-t border-slate-200/80">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[var(--color-brand-orange-border)] bg-slate-200 shadow-md shadow-slate-200/50 flex-shrink-0 transition-transform duration-300 group-hover:scale-120">
                <img 
                  src="/H_Fahmi_Abdul_Haq_Zaini.jpg" 
                  alt={t('sukapuraSign')}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">{t('sukapuraSign')}</h4>
                <p className="text-xs sm:text-sm text-[var(--color-brand-orange)] font-bold mt-0.5">{t('sukapuraRole')}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default OfficialSupport;