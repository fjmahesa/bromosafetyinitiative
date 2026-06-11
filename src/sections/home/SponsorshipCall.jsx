import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaDownload, FaGem, FaCrown, FaAward, FaMedal, FaRibbon } from 'react-icons/fa6';
import { useFadeIn } from '../../hooks/useFadeIn';

function SponsorshipCall() {
  const { t } = useTranslation();
  
  // Kontrol animasi staggered berurutan
  const [headerRef, headerVisible] = useFadeIn(100);
  const [gridRef, gridVisible] = useFadeIn(200);

  // Struktur data 5 tingkatan sponsor riil berdasarkan proposal halaman 34
  const sponsorTiers = [
    {
      id: 1,
      name: t('sponsorTierBronze'),
      price: "Rp 10.000.000",
      desc: t('descBronze'),
      badge: t('tierEssential'),
      icon: <FaRibbon className="text-amber-700" />,
      styles: "border-slate-200 bg-slate-50/50"
    },
    {
      id: 2,
      name: t('sponsorTierSilver'),
      price: "Rp 25.000.000",
      desc: t('descSilver'),
      badge: t('tierEssential'),
      icon: <FaMedal className="text-slate-400" />,
      styles: "border-slate-200 bg-slate-50/50"
    },
    {
      id: 3,
      name: t('sponsorTierGold'),
      price: "Rp 50.000.000",
      desc: t('descGold'),
      badge: t('tierPopular'),
      icon: <FaAward className="text-amber-500" />,
      styles: "border-amber-200 bg-amber-50/20"
    },
    {
      id: 4,
      name: t('sponsorTierPlatinum'),
      price: "Rp 100.000.000",
      desc: t('descPlatinum'),
      badge: t('tierPopular'),
      icon: <FaGem className="text-blue-500" />,
      styles: "border-blue-200 bg-blue-50/10 lg:-translate-y-4" // Membuat struktur asimetris menonjol
    },
    {
      id: 5,
      name: t('sponsorTierTitle'),
      price: "Rp 239.000.000",
      desc: t('descTitle'),
      badge: t('tierExclusive'),
      icon: <FaCrown className="text-orange-500" />,
      styles: "border-orange-300 bg-orange-50/30 lg:-translate-y-4 shadow-md shadow-orange-500/5 ring-2 ring-orange-500/20"
    }
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div 
          ref={headerRef}
          className={`fade-in-hidden ${headerVisible ? 'fade-in-visible' : ''} text-center max-w-3xl mx-auto mb-16 md:mb-24`}
        >
          <span className="text-xs font-extrabold tracking-widest text-brand-orange uppercase bg-orange-50 px-3 py-1 rounded-md border border-orange-100">
            {t('sponsorBadge')}
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mt-4 mb-4 leading-tight">
            {t('sponsorTitle')}
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
            {t('sponsorSubtitle')}
          </p>
        </div>

        {/* ASYMMETRIC TIER GRID */}
        <div 
          ref={gridRef}
          className={`fade-in-hidden ${gridVisible ? 'fade-in-visible' : ''} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch mb-16`}
        >
          {sponsorTiers.map((tier) => (
            <div 
              key={tier.id}
              className={`flex flex-col p-6 rounded-2xl border-2 transition-all duration-300 hover:bg-white hover:border-brand-orange hover:shadow-xl group ${tier.styles}`}
            >
              {/* Badge Kategori Atas */}
              <span className="w-fit text-[9px] font-black tracking-wider uppercase px-2 py-0.5 rounded-sm bg-white border border-slate-200 mb-4 text-slate-600 group-hover:border-orange-200 group-hover:text-brand-orange transition-colors">
                {tier.badge}
              </span>

              {/* Identitas Paket & Icon */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">{tier.name}</h3>
                <div className="text-xl p-1.5 bg-white border border-slate-100 rounded-lg shadow-xs group-hover:scale-110 transition-transform">
                  {tier.icon}
                </div>
              </div>

              {/* Angka Nilai Paket */}
              <div className="text-xl font-black text-slate-900 tracking-tight mb-4 border-b border-slate-200 pb-3 tabular-nums">
                {tier.price}
              </div>

              {/* Deskripsi Manfaat */}
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                {tier.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CALL TO ACTION BUTTON */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 text-sm font-bold transition-all shadow-lg shadow-orange-500/15 transform hover:-translate-y-0.5 cursor-pointer">
            <FaDownload /> {t('btnDownload')}
          </button>
        </div>

      </div>
    </section>
  );
}

export default SponsorshipCall;