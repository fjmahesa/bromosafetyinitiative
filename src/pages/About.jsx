import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FaAmbulance, 
  FaUserShield, 
  FaUsers 
} from 'react-icons/fa';

function About() {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative bg-slate-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute -right-32 -top-32 w-96 h-96 bg-[var(--color-brand-orange)]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-slate-800 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-[var(--color-brand-orange)] bg-[var(--color-brand-orange-light)]/10 border border-[var(--color-brand-orange-border)]/30 text-xs font-black tracking-widest uppercase px-3 py-1.5 rounded-full inline-block mb-4">
            {t('aboutBadge')}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight max-w-3xl mx-auto leading-tight">
            {t('aboutHeroTitle')}
          </h1>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            {t('aboutHeroDesc')}
          </p>
        </div>
      </section>

      {/* ==================== LATAR BELAKANG & MISI ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Sisi Kiri: Narasi */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {t('aboutBgTitle')}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              {t('aboutBgP1')}
            </p>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              {t('aboutBgP2')}
            </p>
          </div>

          {/* Sisi Kanan: Visi & Misi Box */}
          <div className="lg:col-span-5 bg-white border border-slate-200/60 p-6 sm:p-8 rounded-3xl shadow-xs space-y-6">
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-[var(--color-brand-orange)] mb-2">
                {t('aboutVisionTitle')}
              </h3>
              <p className="text-sm font-extrabold text-slate-800 leading-relaxed">
                {t('aboutVisionDesc')}
              </p>
            </div>
            <div className="border-t border-slate-100 pt-5">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
                {t('aboutMissionTitle')}
              </h3>
              <ul className="space-y-2.5 text-xs font-bold text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)] mt-1.5 flex-shrink-0" />
                  {t('aboutMissionItem1')}
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)] mt-1.5 flex-shrink-0" />
                  {t('aboutMissionItem2')}
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)] mt-1.5 flex-shrink-0" />
                  {t('aboutMissionItem3')}
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== 3 PILAR UTAMA (FEATURES GRID) ==================== */}
      <section className="bg-white border-y border-slate-200/60 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {t('aboutPillarTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-wider mt-2">
              {t('aboutPillarSub')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pilar 1 */}
            <div className="bg-slate-50 border border-slate-200/50 p-6 sm:p-8 rounded-3xl transition-all hover:scale-[1.02] duration-300">
              <div className="w-12 h-12 bg-[var(--color-brand-orange-light)] border border-[var(--color-brand-orange-border)] rounded-2xl flex items-center justify-center text-[var(--color-brand-orange)] text-xl mb-6">
                <FaAmbulance />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight">
                {t('aboutPillarHead1')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                {t('aboutPillarDesc1')}
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="bg-slate-50 border border-slate-200/50 p-6 sm:p-8 rounded-3xl transition-all hover:scale-[1.02] duration-300">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-xl mb-6 shadow-md">
                <FaUserShield />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight">
                {t('aboutPillarHead2')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                {t('aboutPillarDesc2')}
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="bg-slate-50 border border-slate-200/50 p-6 sm:p-8 rounded-3xl transition-all hover:scale-[1.02] duration-300">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-center text-emerald-600 text-xl mb-6">
                <FaUsers />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight">
                {t('aboutPillarHead3')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                {t('aboutPillarDesc3')}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==================== CALL TO ACTION SECTION ==================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden border border-slate-800">
          <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-[var(--color-brand-orange)]/10 rounded-full blur-3xl" />
          
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
            {t('aboutCtaTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-medium max-w-xl mx-auto leading-relaxed mb-8">
            {t('aboutCtaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:112"
              className="inline-flex w-full sm:w-auto justify-center items-center text-center bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white text-xs font-extrabold tracking-widest uppercase px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md animate-pulse"
            >
              {t('aboutCtaBtn')}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;