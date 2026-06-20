import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaUsers, FaChartLine, FaExclamationCircle, FaShieldAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6'; 
import { useFadeIn } from '../../hooks/useFadeIn';
import CounterItem from '../../components/CounterItem';

function ImpactStats() {
  const { t } = useTranslation();

  // STATE: Melacak kartu statistik mana yang sedang aktif disorot/disentuh
  const [activeStatId, setActiveStatId] = useState(null);

  const [domRef, isVisible] = useFadeIn(200);

  // Basis data riil yang disesuaikan dengan narasi baru dari klien
  const statsData = [
    {
      id: 1,
      icon: <FaUsers className="text-2xl text-orange-400" />,
      number: "536.984",
      label: t('statsLabel1'),
      desc: t('statsDesc1'),
      // Tema Oranye (Kunjungan Wisatawan)
      colorIdle: "bg-slate-50/50 border-slate-200/60 shadow-xs text-slate-900",
      colorActive: "bg-orange-50/70 border-orange-500 shadow-2xl shadow-orange-500/15 text-orange-950",
      iconIdle: "bg-white border-slate-200",
      iconActive: "bg-white border-orange-300 scale-110 shadow-md",
      numberActive: "text-orange-400"
    },
    {
      id: 2,
      icon: <FaChartLine className="text-2xl text-blue-600" />,
      number: "34,88%",
      label: t('statsLabel2'),
      desc: t('statsDesc2'),
      // Tema Biru (Lonjakan Pengunjung)
      colorIdle: "bg-slate-50/50 border-slate-200/60 shadow-xs text-slate-900",
      colorActive: "bg-blue-50/70 border-blue-500 shadow-2xl shadow-blue-500/15 text-blue-950",
      iconIdle: "bg-white border-slate-200",
      iconActive: "bg-white border-blue-300 scale-110 shadow-md",
      numberActive: "text-blue-600"
    },
    {
      id: 3,
      icon: <FaExclamationCircle className="text-2xl text-red-500" />,
      number: "400+",
      label: t('statsLabel3'),
      desc: t('statsDesc3'),
      // Tema Merah/Amber (Pencegahan Rem Blong Matic)
      colorIdle: "bg-slate-50/50 border-slate-200/60 shadow-xs text-slate-900",
      colorActive: "bg-red-50/70 border-red-500 shadow-2xl shadow-red-500/15 text-red-950",
      iconIdle: "bg-white border-slate-200",
      iconActive: "bg-white border-red-300 scale-110 shadow-md",
      numberActive: "text-red-600"
    },
    {
      id: 4,
      icon: <FaShieldAlt className="text-2xl text-emerald-600" />,
      number: "10.000+",
      label: t('statsLabel4'),
      desc: t('statsDesc4'),
      // Tema Emerald (Mitigasi/Proteksi Target Edukasi)
      colorIdle: "bg-slate-50/50 border-slate-200/60 shadow-xs text-slate-900",
      colorActive: "bg-emerald-50/70 border-emerald-500 shadow-2xl shadow-emerald-500/15 text-emerald-950",
      iconIdle: "bg-white border-slate-200",
      iconActive: "bg-white border-emerald-300 scale-110 shadow-md",
      numberActive: "text-emerald-600"
    },
  ];

  return (
    <section
      ref={domRef}
      className={`fade-in-hidden ${isVisible ? 'fade-in-visible' : ''} bg-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-200`}
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mb-4">
              {t('statsTitle')}
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
              {t('statsSubtitle')}
            </p>
          </div>
          <div className="hidden lg:block w-32 h-1 bg-slate-200 rounded mb-4" />
        </div>

        {/* STATS GRID WITH HIGH-CONTRAST INTERACTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-stretch">
          {statsData.map((stat) => {
            const isCurrentActive = activeStatId === stat.id;

            return (
              <div
                key={stat.id}
                onTouchStart={() => setActiveStatId(stat.id)}
                onMouseEnter={() => setActiveStatId(stat.id)}
                onMouseLeave={() => setActiveStatId(null)}
                className={`flex flex-col p-6 rounded-2xl border-2 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer select-none
                  ${isCurrentActive ? '-translate-y-3 scale-[1.03]' : ''}
                  ${isCurrentActive ? stat.colorActive : stat.colorIdle}
                `}
              >
                {/* Bulatan Lingkaran Ikon */}
                <div className={`p-3 rounded-xl border w-fit mb-6 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  ${isCurrentActive ? stat.iconActive : stat.iconIdle}
                `}>
                  <div className={`transition-transform duration-300 ${isCurrentActive ? 'scale-110' : ''}`}>
                    {stat.icon}
                  </div>
                </div>

                {/* Nilai Counter Angka */}
                <div className={`text-4xl sm:text-5xl font-black tracking-tight mb-2 tabular-nums transition-colors duration-300
                  ${isCurrentActive ? stat.numberActive : 'text-slate-900'}
                `}>
                  <CounterItem
                    targetValue={stat.number}
                    isVisible={isVisible}
                  />
                </div>

                {/* Judul Label Keterangan */}
                <div className={`text-xs font-black tracking-wide uppercase mb-3 transition-colors duration-300 leading-snug
                  ${isCurrentActive ? stat.numberActive : 'text-slate-800'}
                `}>
                  {stat.label}
                </div>

                {/* Deskripsi Info Ringkas */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium mt-auto">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>

        
        {/* <div className="text-center mt-16 md:mt-20">
          <a href="/rest-area" className="inline-flex items-center gap-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-xs font-black uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5 cursor-pointer select-none active:scale-95">
            <FaLocationDot className="text-brand-orange text-sm animate-bounce" /> {t('btnMap')}
          </a>
        </div> */}
 
      </div>
    </section>
  );
}

export default ImpactStats;