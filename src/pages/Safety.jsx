import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FaFilePdf, FaMotorcycle, FaCloudSun, FaTriangleExclamation, 
  FaKitMedical
} from 'react-icons/fa6';

import { 
  FaCheckCircle, FaDownload, FaShieldAlt 
} from 'react-icons/fa';

function Safety() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'id';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pdfUrl = "https://admin.bromosafetyinitiative.com/wp-content/uploads/2026/06/Panduan-Keselamatan.pdf";

  // Data Panduan Utama hasil ekstraksi materi selebaran BSI
  const guides = [
    {
      icon: <FaTriangleExclamation className="text-xl text-[var(--color-brand-orange)]" />,
      title: t('safetyGuideTitle1'),
      desc: t('safetyGuideDesc1')
    },
    {
      icon: <FaShieldAlt className="text-xl text-[var(--color-brand-orange)]" />,
      title: t('safetyGuideTitle2'),
      desc: t('safetyGuideDesc2')
    },
    {
      icon: <FaCloudSun className="text-xl text-[var(--color-brand-orange)]" />,
      title: t('safetyGuideTitle3'),
      desc: t('safetyGuideDesc3')
    },
    {
      icon: <FaMotorcycle className="text-xl text-[var(--color-brand-orange)]" />,
      title: t('safetyGuideTitle4'),
      desc: t('safetyGuideDesc4')
    }
  ];

  // Data Checklist Elektronik Pra-Keberangkatan
  const checklistItems = [
    t('safetyCheck1'),
    t('safetyCheck2'),
    t('safetyCheck3'),
    t('safetyCheck4'),
    t('safetyCheck5'),
    t('safetyCheck6')
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50/50 pb-24 page-enter">
      
      {/* HERO BANNER & DOWNLOAD PROMINENT */}
      <div className="relative bg-slate-900 text-white py-20 md:py-28 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1600')] bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-[var(--color-brand-orange)] uppercase bg-[var(--color-brand-orange-light)]/10 border border-[var(--color-brand-orange-border)]/30 px-3 py-1 rounded-md mb-4">
            <FaShieldAlt /> {t('safetyGuideBadge')}
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase max-w-4xl mx-auto leading-tight">
            {t('safetyHeroTitle')}
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-400 font-medium mt-4 leading-relaxed">
            {t('safetyHeroDesc')}
          </p>

          {/* CTA TOMBOL UNDUH PDF UTAMA */}
          <div className="mt-10 flex justify-center">
            <a 
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white text-xs sm:text-sm font-black tracking-widest uppercase px-8 py-4 rounded-xl shadow-xl shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 active:scale-95 cursor-pointer select-none"
            >
              <FaFilePdf className="text-lg" /> {t('btnDownload')}
            </a>
          </div>
        </div>
      </div>

      {/* INTI PANDUAN: GRID SYSTEM */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-12 relative z-20">
        <div className="bg-white border-2 border-slate-200/60 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/30">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 uppercase">
              {t('safetyGuideSectionTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1.5">
              {t('safetyGuideSectionDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {guides.map((guide, idx) => (
              <div 
                key={idx} 
                className="flex gap-5 p-5 rounded-2xl bg-slate-50/50 border border-slate-200/60 hover:bg-white hover:border-slate-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center flex-shrink-0 shadow-xs group-hover:bg-[var(--color-brand-orange-light)] transition-colors">
                  {guide.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-black text-slate-900 tracking-tight group-hover:text-[var(--color-brand-orange)] transition-colors">
                    {guide.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {guide.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SEKSI DAFTAR PERSIAPAN (PRE-DEPARTURE CHECKLIST) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-10 translate-y-10 pointer-events-none">
            <FaShieldAlt className="text-[250px]" />
          </div>
          
          <div className="relative z-10">
            <div className="mb-8">
              <span className="text-[9px] font-black uppercase tracking-widest text-[var(--color-brand-orange)] bg-[var(--color-brand-orange-light)]/10 border border-[var(--color-brand-orange-border)]/20 px-2.5 py-1 rounded-md">
                {t('safetyCheckBadge')}
              </span>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase mt-3">
                {t('safetyCheckTitle')}
              </h3>
              <p className="text-xs text-slate-400 font-medium mt-1">
                {t('safetyCheckDesc')}
              </p>
            </div>

            {/* BARIS CHECKLIST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start bg-white/5 border border-white/10 rounded-xl p-4 transition-colors hover:bg-white/10">
                  <FaCheckCircle className="text-[var(--color-brand-orange)] text-base flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-bold text-slate-200 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* SEKSI LINK DOWNLOAD BAWAH */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[11px] text-slate-400 font-semibold text-center sm:text-left">
                {currentLang === 'id' 
                  ? "Butuh panduan fisik offline? Simpan versi cetak PDF resmi langsung ke ponsel Anda." 
                  : "Need offline documentation? Save the official printable PDF version straight to your device."}
              </p>
              <a 
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                
                className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest text-white uppercase bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2.5 rounded-lg transition-all cursor-pointer whitespace-nowrap select-none"
              >
                <FaDownload /> {currentLang === 'id' ? "Unduh PDF" : "Download PDF"}
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Safety;