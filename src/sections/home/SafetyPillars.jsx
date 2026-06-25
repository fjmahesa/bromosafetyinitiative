import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaLeaf, FaMountainSun, FaGem, FaBuildingColumns } from 'react-icons/fa6';
import { useFadeIn } from '../../hooks/useFadeIn';

function SafetyPillars() {
  const { t } = useTranslation();
  const [activePillarId, setActivePillarId] = useState(null);
  const [domRef, isVisible] = useFadeIn(150);

  const pillarsData = [
    {
      id: 1,
      icon: <FaLeaf className="text-3xl text-emerald-600" />,
      title: t('pillarLabel1'),
      desc: t('pillarDesc1'),
      colorIdle: "bg-white border-slate-200/80 shadow-xs text-slate-900",
      colorActive: "bg-emerald-50/70 border-emerald-500 shadow-2xl shadow-emerald-500/15 text-emerald-950",
      iconIdle: "bg-slate-50 border-slate-100",
      iconActive: "bg-white border-emerald-300 scale-110 shadow-md",
      titleActive: "text-emerald-700",
      descActive: "text-emerald-800/80"
    },
    {
      id: 2,
      icon: <FaMountainSun className="text-3xl text-red-600" />,
      title: t('pillarLabel2'),
      desc: t('pillarDesc2'),
      colorIdle: "bg-white border-slate-200/80 shadow-xs text-slate-900",
      colorActive: "bg-red-50/70 border-red-500 shadow-2xl shadow-red-500/15 text-red-950",
      iconIdle: "bg-slate-50 border-slate-100",
      iconActive: "bg-white border-red-300 scale-110 shadow-md",
      titleActive: "text-red-700",
      descActive: "text-red-800/80"
    },
    {
      id: 3,
      icon: <FaBuildingColumns className="text-3xl text-orange-600" />,
      title: t('pillarLabel3'),
      desc: t('pillarDesc3'),
      colorIdle: "bg-white border-slate-200/80 shadow-xs text-slate-900",
      colorActive: "bg-orange-50/70 border-orange-500 shadow-2xl shadow-orange-500/15 text-orange-950",
      iconIdle: "bg-slate-50 border-slate-100",
      iconActive: "bg-white border-orange-300 scale-110 shadow-md",
      titleActive: "text-brand-orange",
      descActive: "text-orange-900/80"
    },
    {
      id: 4,
      icon: <FaGem className="text-3xl text-blue-600" />,
      title: t('pillarLabel4'),
      desc: t('pillarDesc4'),
      colorIdle: "bg-white border-slate-200/80 shadow-xs text-slate-900",
      colorActive: "bg-blue-50/70 border-blue-500 shadow-2xl shadow-blue-500/15 text-blue-950",
      iconIdle: "bg-slate-50 border-slate-100",
      iconActive: "bg-white border-blue-300 scale-110 shadow-md",
      titleActive: "text-blue-700",
      descActive: "text-blue-800/80"
    },
  ];

  return (
    <section 
      ref={domRef}
      className={`zoom-in-hidden ${isVisible ? 'zoom-in-visible' : ''} bg-slate-50 py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto">
        
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-extrabold tracking-widest text-brand-orange uppercase bg-orange-50 px-3 py-1 rounded-md border border-orange-100">
            {t('pillarsSectionBadge')}
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mt-4 mb-4 leading-tight">
            {t('pillarsTitle')}
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
            {t('pillarsSubtitle')}
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {pillarsData.map((pillar) => {
            const isCurrentActive = activePillarId === pillar.id;

            return (
              <div 
                key={pillar.id}
                
                onTouchStart={() => setActivePillarId(pillar.id)}
                
                
                onMouseEnter={() => setActivePillarId(pillar.id)}
                onMouseLeave={() => setActivePillarId(null)}
                
                className={`flex flex-col items-center text-center p-8 border-2 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer select-none
                  /* Efek Transformasi Fisik Pop-Up Semuanya Aktif Saat state isCurrentActive Terpenuhi */
                  ${isCurrentActive ? '-translate-y-3 scale-[1.03]' : ''}
                  
                  /* Aturan Pergantian Warna Bersih Tanpa Crash Antar Device */
                  ${isCurrentActive ? pillar.colorActive : pillar.colorIdle}
                `}
              >
                
                <div className={`p-5 rounded-full border mb-6 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  ${isCurrentActive ? pillar.iconActive : pillar.iconIdle}
                `}>
                  <div className={`transition-transform duration-300 ${isCurrentActive ? 'scale-110' : ''}`}>
                    {pillar.icon}
                  </div>
                </div>

                
                <h3 className={`text-lg font-black tracking-tight mb-3 transition-colors duration-300
                  ${isCurrentActive ? pillar.titleActive : 'text-slate-900'}
                `}>
                  {pillar.title}
                </h3>

                
                <p className={`text-xs sm:text-sm leading-relaxed font-semibold transition-colors duration-300
                  ${isCurrentActive ? pillar.descActive : 'text-slate-500'}
                `}>
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default SafetyPillars;