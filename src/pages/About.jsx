import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FaShieldAlt, FaUsers, FaLeaf, FaHeart, FaHandshake, 
  FaAward, FaCompass, FaMapMarkerAlt, FaBullhorn 
} from 'react-icons/fa';

function AboutPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // PERBAIKAN: Gunakan key i18n agar array misi fleksibel dan dinamis berubah bahasa
  const missions = [
    "aboutMission1",
    "aboutMission2",
    "aboutMission3",
    "aboutMission4",
    "aboutMission5",
    "aboutMission6",
    "aboutMission7"
  ];

  const values = [
    { title: t('aboutValueSafetyTitle'), desc: t('aboutValueSafetyDesc'), icon: <FaShieldAlt className="text-xl text-[var(--color-brand-orange)]" /> },
    { title: t('aboutValueCollabTitle'), desc: t('aboutValueCollabDesc'), icon: <FaHandshake className="text-xl text-[var(--color-brand-orange)]" /> },
    { title: t('aboutValueRespTitle'), desc: t('aboutValueRespDesc'), icon: <FaHeart className="text-xl text-[var(--color-brand-orange)]" /> },
    { title: t('aboutValueSustTitle'), desc: t('aboutValueSustDesc'), icon: <FaLeaf className="text-xl text-[var(--color-brand-orange)]" /> },
    { title: t('aboutValueCommTitle'), desc: t('aboutValueCommDesc'), icon: <FaUsers className="text-xl text-[var(--color-brand-orange)]" /> },
    { title: t('aboutValueServiceTitle'), desc: t('aboutValueServiceDesc'), icon: <FaAward className="text-xl text-[var(--color-brand-orange)]" /> }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50/50 pb-24 page-enter">
      
      {/* HERO HEADER */}
      <div className="relative bg-slate-900 text-white py-24 md:py-36 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1605540435647-88d707f7f4a2?w=1600')] bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-[var(--color-brand-orange)] uppercase bg-[var(--color-brand-orange-light)]/10 border border-[var(--color-brand-orange-border)]/30 px-3 py-1 rounded-md mb-6">
            <FaCompass className="animate-spin-slow" /> {t('aboutBadge')}
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
            {t('aboutTitleMain')} <span className="text-[var(--color-brand-orange)]">{t('aboutTitleHighlight')}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-400 font-medium mt-6 leading-relaxed">
            {t('aboutDescMain')}
          </p>
        </div>
      </div>

      {/* NARASI UTAMA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-8 bg-white border-2 border-slate-200/60 rounded-3xl p-6 sm:p-12 shadow-xl shadow-slate-100/50 flex flex-col justify-between space-y-6 text-slate-600 font-medium text-base leading-relaxed animate-fade-in-quick">
            <p className="text-lg font-bold text-slate-900 leading-relaxed border-l-4 border-[var(--color-brand-orange)] pl-4">
              {t('aboutParagraph1')}
            </p>
            <p>{t('aboutParagraph2')}</p>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-orange-light)] text-[var(--color-brand-orange)] flex items-center justify-center flex-shrink-0 border border-[var(--color-brand-orange-border)]">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide mb-1">{t('aboutRestAreaTitle')}</h4>
                <p className="text-xs text-slate-500">{t('aboutRestAreaDesc')}</p>
              </div>
            </div>
            <p className="text-sm sm:text-base">{t('aboutParagraph3')}</p>
          </div>

          {/* VISI CARD */}
          <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 shadow-xl border border-slate-800 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[var(--color-brand-orange)] opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-all duration-500" />
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-orange)] bg-[var(--color-brand-orange-light)]/10 border border-[var(--color-brand-orange-border)]/20 px-2 py-0.5 rounded-md">
                {t('aboutVisionBadge')}
              </span>
              <h2 className="text-2xl font-black tracking-tight mt-4 uppercase text-white">{t('aboutVisionTitle')}</h2>
              <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed mt-4">
                {t('aboutVisionDesc')}
              </p>
            </div>
            <div className="pt-8 border-t border-slate-800 text-xs font-bold text-slate-500 tracking-wider uppercase mt-8 select-none">
              Bromo Safety Initiative © 2026
            </div>
          </div>

        </div>
      </div>

      {/* MISI GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-28">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 uppercase">
            {t('aboutVisionTitle')} <span className="text-[var(--color-brand-orange)]">{t('aboutMissionHighlight')}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-medium mt-2">{t('aboutMissionDesc')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {missions.map((missionKey, index) => (
            <div key={index} className="bg-white border-2 border-slate-200/70 hover:border-[var(--color-brand-orange)] rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-lg group">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-white text-xs font-black flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-brand-orange)] transition-colors">
                  {index + 1}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                  {t(`aboutMission${index + 1}`)} {/* Memanggil key dinamis dari JSON */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NILAI-NILAI BSI */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-28">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 uppercase">
            {t('aboutValuesTitle')} <span className="text-[var(--color-brand-orange)]">{t('aboutValuesHighlight')}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-medium mt-2">{t('aboutValuesDesc')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item, index) => (
            <div key={index} className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-xs flex flex-col gap-4 items-start hover:shadow-xl transition-all duration-300 group">
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-[var(--color-brand-orange-light)] group-hover:border-[var(--color-brand-orange-border)] transition-all">
                {item.icon}
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900 tracking-tight group-hover:text-[var(--color-brand-orange)] transition-colors mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SLOGAN CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <div className="bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-orange)] opacity-5 rounded-full blur-xl pointer-events-none" />
          <FaBullhorn className="text-2xl text-[var(--color-brand-orange)] mx-auto mb-4" />
          <h3 className="text-xl sm:text-3xl font-black tracking-tight uppercase leading-snug">{t('aboutSlogan')}</h3>
          <div className="w-12 h-1 bg-[var(--color-brand-orange)] mx-auto mt-6 rounded-full" />
        </div>
      </div>

    </div>
  );
}

export default AboutPage;