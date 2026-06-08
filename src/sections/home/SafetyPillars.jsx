import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLeaf, FaMountainSun, FaGem, FaBuildingColumns } from 'react-icons/fa6';
import { useFadeIn } from '../../hooks/useFadeIn';

function SafetyPillars() {
  const { t } = useTranslation();
  
  // Pemicu animasi komponen
  const [domRef, isVisible] = useFadeIn(150);

  // Data 4 Pilar Riil berdasarkan Proposal halaman 6
  const pillarsData = [
    {
      id: 1,
      icon: <FaLeaf className="text-3xl text-emerald-600" />, // [cite: 38]
      title: t('pillarLabel1'), // Nilai Ekologi [cite: 38]
      desc: t('pillarDesc1'), // Keanekaragaman hayati [cite: 42]
    },
    {
      id: 2,
      icon: <FaMountainSun className="text-3xl text-amber-600" />, // [cite: 39]
      title: t('pillarLabel2'), // Nilai Geologi [cite: 39]
      desc: t('pillarDesc2'), // Bentang alam vulkanik purba [cite: 43]
    },
    {
      id: 3,
      icon: <FaBuildingColumns className="text-3xl text-orange-600" />, // [cite: 40]
      title: t('pillarLabel3'), // Nilai Budaya [cite: 40]
      desc: t('pillarDesc3'), // Warisan leluhur Tengger [cite: 44]
    },
    {
      id: 4,
      icon: <FaGem className="text-3xl text-blue-600" />, // [cite: 41]
      title: t('pillarLabel4'), // Nilai Pariwisata [cite: 41]
      desc: t('pillarDesc4'), // Daya tarik ekonomi kelas dunia [cite: 45]
    },
  ];

  return (
    <section 
      ref={domRef}
      className={`zoom-in-hidden ${isVisible ? 'zoom-in-visible' : ''} bg-slate-50 py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-extrabold tracking-widest text-brand-orange uppercase bg-orange-50 px-3 py-1 rounded-md border border-orange-100">
            Visi Kampanye Berkelanjutan
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mt-4 mb-4 leading-tight">
            {t('pillarsTitle')}
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
            {t('pillarsSubtitle')}
          </p>
        </div>

        {/* 4-COLUMN SYMMETRIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillarsData.map((pillar) => (
            <div 
              key={pillar.id}
              className="flex flex-col items-center text-center p-6 bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 group"
            >
              {/* Bulatan Lingkaran Ikon */}
              <div className="p-5 bg-slate-50 rounded-full border border-slate-100 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xs">
                {pillar.icon}
              </div>

              {/* Judul Pilar */}
              <h3 className="text-lg font-black text-slate-900 tracking-tight mb-2 group-hover:text-brand-orange transition-colors">
                {pillar.title}
              </h3>

              {/* Keterangan */}
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SafetyPillars;