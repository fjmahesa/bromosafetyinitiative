import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaUsers, FaExclamationCircle, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { useFadeIn } from '../../hooks/useFadeIn';
import CounterItem from '../../components/CounterItem'; // Import komponen counter baru

function ImpactStats() {
  const { t } = useTranslation();
  
  // Menggunakan trigger visibilitas dari observer hook
  const [domRef, isVisible] = useFadeIn(200);

  // Basis data riil dari berkas PROPOSAL Bromo Safety Initiative.pdf
  const statsData = [
    {
      id: 1,
      icon: <FaUsers className="text-2xl text-brand-orange" />,
      number: "536.984", // Data Kunjungan (p.4)
      label: t('statsLabel1'),
      desc: t('statsDesc1'),
    },
    {
      id: 2,
      icon: <FaExclamationCircle className="text-2xl text-amber-500" />,
      number: "400+", // Motor matic dihentikan warga/hari (p.15)
      label: t('statsLabel2'),
      desc: t('statsDesc2'),
    },
    {
  id: 3,
  icon: <FaChartLine className="text-2xl text-blue-600" />,
  number: "34,88%", // Tulis langsung format persentase aslinya dari proposal (p.4)
  label: t('statsLabel3'),
  desc: t('statsDesc3'),
},
    {
      id: 4,
      icon: <FaShieldAlt className="text-2xl text-emerald-600" />,
      number: "10.000+", // Target mitigasi fisik (p.20)
      label: t('statsLabel4'),
      desc: t('statsDesc4'),
    },
  ];

  return (
    <section 
      ref={domRef}
      className={`fade-in-hidden ${isVisible ? 'fade-in-visible' : ''} bg-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-100`}
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

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {statsData.map((stat) => (
            <div 
              key={stat.id}
              className="flex flex-col p-6 rounded-2xl bg-slate-50/50 border border-slate-200/60 shadow-xs transition-all duration-300 hover:bg-white hover:border-slate-300 hover:shadow-md group"
            >
              <div className="p-3 bg-white rounded-xl border border-slate-200 w-fit shadow-xs mb-6 group-hover:scale-105 transition-transform duration-300">
                {stat.icon}
              </div>

              {/* Efek Hitung Interaktif dimasukkan di sini */}
              <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-2 tabular-nums">
                <CounterItem 
  targetValue={stat.number} 
  isVisible={isVisible} 
/>
              </div>

              <div className="text-sm font-bold text-slate-800 tracking-wide uppercase mb-3">
                {stat.label}
              </div>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium mt-auto">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ImpactStats;