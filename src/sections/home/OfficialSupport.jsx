import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaQuoteLeft, FaFileSignature } from 'react-icons/fa6';
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
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-extrabold tracking-widest text-brand-orange uppercase bg-orange-50 px-3 py-1 rounded-md border border-orange-100">
            Kredibilitas Gerakan
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
          
          {/* DUKUNGAN TNBTS - Slide-In Left */}
          <div 
            ref={leftRef}
            className={`slide-left-hidden ${leftVisible ? 'slide-left-visible' : ''} flex flex-col justify-between bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 md:p-8 relative hover:bg-white hover:shadow-xl hover:border-slate-300 transition-all duration-300 group`}
          >
            <FaQuoteLeft className="text-4xl text-slate-200 absolute top-6 right-6 group-hover:text-orange-100 transition-colors" />
            
            <div className="relative z-10">
              {/* Nama Instansi */}
              <h3 className="text-sm font-extrabold tracking-wider text-slate-400 uppercase mb-6">
                Balai Besar TNBTS
              </h3>
              {/* Petikan Isi Surat Dukungan */}
              <p className="text-base md:text-lg text-slate-700 italic font-medium leading-relaxed mb-8">
                "{t('tnbtsQuote')}"
              </p>
            </div>

            {/* Kaki Surat / Penandatangan */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200">
              <div className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600">
                <FaFileSignature />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">{t('tnbtsSign')}</h4>
                <p className="text-xs text-slate-500 font-semibold">{t('tnbtsRole')}</p>
              </div>
            </div>
          </div>

          {/* DUKUNGAN KECAMATAN SUKAPURA - Slide-In Right */}
          <div 
            ref={rightRef}
            className={`slide-right-hidden ${rightVisible ? 'slide-right-visible' : ''} flex flex-col justify-between bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 md:p-8 relative hover:bg-white hover:shadow-xl hover:border-slate-300 transition-all duration-300 group`}
          >
            <FaQuoteLeft className="text-4xl text-slate-200 absolute top-6 right-6 group-hover:text-orange-100 transition-colors" />
            
            <div className="relative z-10">
              {/* Nama Instansi */}
              <h3 className="text-sm font-extrabold tracking-wider text-slate-400 uppercase mb-6">
                Pemerintah Daerah
              </h3>
              {/* Petikan Isi Surat Dukungan */}
              <p className="text-base md:text-lg text-slate-700 italic font-medium leading-relaxed mb-8">
                "{t('sukapuraQuote')}"
              </p>
            </div>

            {/* Kaki Surat / Penandatangan */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200">
              <div className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600">
                <FaFileSignature />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">{t('sukapuraSign')}</h4>
                <p className="text-xs text-slate-500 font-semibold">{t('sukapuraRole')}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default OfficialSupport;