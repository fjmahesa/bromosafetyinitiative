import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaAngleDoubleUp, FaExchangeAlt, FaCompressArrowsAlt, FaExclamationTriangle } from 'react-icons/fa';
import { useFadeIn } from '../../hooks/useFadeIn';
import pathExtremeImg from '../../assets/extreme-path.webp'; // Gambar jalur ekstrem yang sudah disiapkan di folder assets

function PathAnatomy() {
  const { t } = useTranslation();
  
  // Kita buat dua observer terpisah untuk sisi kiri (gambar) dan sisi kanan (konten)
  const [leftRef, leftVisible] = useFadeIn(100);
  const [rightRef, rightVisible] = useFadeIn(250); // Diberi sedikit delay agar masuknya bergantian

  const pathPoints = [
    {
      id: 1,
      icon: <FaAngleDoubleUp className="text-xl" />,
      title: t('pointTitle1'),
      desc: t('pointDesc1'),
      badge: t('pathBadge1'),
      accentColor: "group-hover:text-orange-600 group-hover:bg-orange-50 group-hover:border-orange-200",
      iconColor: "text-orange-600 bg-orange-50 border-orange-100"
    },
    {
      id: 2,
      icon: <FaExchangeAlt className="text-xl" />,
      title: t('pointTitle2'),
      desc: t('pointDesc2'),
      badge: t('pathBadge2'),
      accentColor: "group-hover:text-amber-600 group-hover:bg-amber-50 group-hover:border-amber-200",
      iconColor: "text-amber-600 bg-amber-50 border-amber-100"
    },
    {
      id: 3,
      icon: <FaCompressArrowsAlt className="text-xl" />,
      title: t('pointTitle3'),
      desc: t('pointDesc3'),
      badge: t('pathBadge3'),
      accentColor: "group-hover:text-red-600 group-hover:bg-red-50 group-hover:border-red-200",
      iconColor: "text-red-600 bg-red-50 border-red-100"
    },
  ];

  return (
    <section className="bg-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 -right-64 w-[500px] h-[500px] bg-orange-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* SISI KIRI: Meluncur dari arah KIRI (slide-left) */}
          <div 
            ref={leftRef}
            className={`slide-left-hidden ${leftVisible ? 'slide-left-visible' : ''} lg:col-span-5 relative`}
          >
            <div className="absolute -inset-3 rounded-2xl bg-slate-100 border border-slate-200/60 -z-10 transform -rotate-1 hidden sm:block" />
            
            <div className="relative rounded-2xl overflow-hidden border border-slate-250 shadow-lg aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5]">
              <img 
                src={pathExtremeImg} 
                alt={t('pathAlt')} 
                className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-start gap-3 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-md">
                <div className="p-2 bg-red-50 text-red-600 rounded-lg text-lg flex-shrink-0">
                  <FaExclamationTriangle className="animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 tracking-wide uppercase mb-0.5">{t('pathNoticeTitle')}</h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{t('pathWarning')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* SISI KANAN: Meluncur dari arah KANAN (slide-right) */}
          <div 
            ref={rightRef}
            className={`slide-right-hidden ${rightVisible ? 'slide-right-visible' : ''} lg:col-span-7 flex flex-col justify-center`}
          >
            <div className="mb-10 text-left">
              <span className="text-xs font-extrabold tracking-widest text-brand-orange uppercase bg-orange-50 px-3 py-1 rounded-md border border-orange-100">
                {t('pathSectionBadge')}
              </span>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mt-4 mb-4 leading-tight">
                {t('pathTitle')}
              </h2>
              <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
                {t('pathSubtitle')}
              </p>
            </div>

            <div className="space-y-4">
              {pathPoints.map((point) => (
                <div 
                  key={point.id}
                  className="group flex flex-col sm:flex-row items-start gap-4 p-5 rounded-xl bg-slate-50/60 border border-slate-200/70 transition-all duration-300 hover:bg-white hover:border-slate-300 hover:shadow-md"
                >
                  <div className={`p-3.5 rounded-xl border transition-all duration-300 flex-shrink-0 ${point.iconColor} ${point.accentColor}`}>
                    {point.icon}
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight transition-colors group-hover:text-brand-orange">
                        {point.title}
                      </h3>
                      <span className="text-[10px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-md bg-slate-200/60 text-slate-700 border border-slate-350/40">
                        {point.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PathAnatomy;