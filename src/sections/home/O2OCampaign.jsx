import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobeAmericas, FaMapMarkedAlt, FaCloudUploadAlt, FaHandsHelping, FaExclamationTriangle, FaPhoneVolume } from 'react-icons/fa';
import { useFadeIn } from '../../hooks/useFadeIn';

function O2OCampaign() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('online');
  const [domRef, isVisible] = useFadeIn(150);

  return (
  <section ref={domRef} className={`fade-in-hidden ${isVisible ? 'fade-in-visible' : ''} bg-slate-50/60 py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 relative`}>
    <div className="max-w-7xl mx-auto">
      
      {/* HEADER SEKSI */}
      <div className="max-w-3xl mb-16 md:mb-24">
        <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-[var(--color-brand-orange)] uppercase bg-[var(--color-brand-orange-light)] px-3 py-1 rounded-md border border-[var(--color-brand-orange-border)] mb-4">
          {t('o2oBadge')}
        </span>
        <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
          {t('o2oTitleMain')}
        </h2>
        <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed mt-4">
          {t('o2oSubtitle')}
        </p>
      </div>

      {/* INTERACTIVE O2O BOARD GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* PANEL NAVIGASI STRATEGI */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <button onClick={() => setActiveTab('online')} className={`w-full flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${activeTab === 'online' ? 'bg-white border-[var(--color-brand-orange)] shadow-xl' : 'bg-white/50 border-slate-200'}`}>
            <div className={`p-3 rounded-xl border ${activeTab === 'online' ? 'bg-[var(--color-brand-orange-light)] text-[var(--color-brand-orange)]' : 'bg-slate-100 text-slate-400'}`}>
              <FaGlobeAmericas className="text-xl sm:text-2xl" />
            </div>
            <div>
              <h4 className="text-base font-black uppercase tracking-wide text-slate-900">{t('o2oTabOnlineTitle')}</h4>
              <p className="text-xs text-slate-400 font-semibold mt-0.5">{t('o2oTabOnlineSub')}</p>
            </div>
          </button>

          <button onClick={() => setActiveTab('offline')} className={`w-full flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${activeTab === 'offline' ? 'bg-white border-[var(--color-brand-orange)] shadow-xl' : 'bg-white/50 border-slate-200'}`}>
            <div className={`p-3 rounded-xl border ${activeTab === 'offline' ? 'bg-[var(--color-brand-orange-light)] text-[var(--color-brand-orange)]' : 'bg-slate-100 text-slate-400'}`}>
              <FaMapMarkedAlt className="text-xl sm:text-2xl" />
            </div>
            <div>
              <h4 className="text-base font-black uppercase tracking-wide text-slate-900">{t('o2oTabOfflineTitle')}</h4>
              <p className="text-xs text-slate-400 font-semibold mt-0.5">{t('o2oTabOfflineSub')}</p>
            </div>
          </button>
        </div>

        {/* DYNAMIC CONTENT DISPLAY PANEL */}
        <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xs min-h-[460px] flex flex-col justify-between">
          
          {activeTab === 'online' && (
            <div className="animate-fade-in-quick space-y-8">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-wide">{t('o2oOnlineHeader')}</h3>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">{t('o2oOnlineSubheader')}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center"><FaCloudUploadAlt /></div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800 mb-1">{t('o2oOnlinePointTitle1')}</h5>
                    <p className="text-xs text-slate-500 font-medium">{t('o2oOnlinePointDesc1')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center"><FaGlobeAmericas /></div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800 mb-1">{t('o2oOnlinePointTitle2')}</h5>
                    <p className="text-xs text-slate-500 font-medium">{t('o2oOnlinePointDesc2')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center"><FaMapMarkedAlt /></div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800 mb-1">{t('o2oOnlinePointTitle3')}</h5>
                    <p className="text-xs text-slate-500 font-medium">{t('o2oOnlinePointDesc3')}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'offline' && (
            <div className="animate-fade-in-quick space-y-8">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-wide">{t('o2oOfflineHeader')}</h3>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">{t('o2oOfflineSubheader')}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center"><FaHandsHelping /></div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800 mb-1">{t('o2oOfflinePointTitle1')}</h5>
                    <p className="text-xs text-slate-500 font-medium">{t('o2oOfflinePointDesc1')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center"><FaExclamationTriangle /></div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800 mb-1">{t('o2oOfflinePointTitle2')}</h5>
                    <p className="text-xs text-slate-500 font-medium">{t('o2oOfflinePointDesc2')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-50 text-teal-500 rounded-xl flex items-center justify-center"><FaPhoneVolume /></div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800 mb-1">{t('o2oOfflinePointTitle3')}</h5>
                    <p className="text-xs text-slate-500 font-medium">{t('o2oOfflinePointDesc3')}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-bold text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-orange)] animate-ping" />
            {t('o2oFootnote')}
          </div>

        </div>
      </div>
    </div>
  </section>
);
}

export default O2OCampaign;