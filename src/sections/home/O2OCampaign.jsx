import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobeAmericas, FaMapMarkedAlt, FaCloudUploadAlt, FaHandsHelping, FaExclamationTriangle, FaPhoneVolume } from 'react-icons/fa';
import { useFadeIn } from '../../hooks/useFadeIn';

function O2OCampaign() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('online');
  const [domRef, isVisible] = useFadeIn(150);

  return (
    <section 
      ref={domRef}
      className={`fade-in-hidden ${isVisible ? 'fade-in-visible' : ''} bg-slate-50/60 py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 relative`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SEKSi */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-[var(--color-brand-orange)] uppercase bg-[var(--color-brand-orange-light)] px-3 py-1 rounded-md border border-[var(--color-brand-orange-border)] mb-4">
            Strategi Intervensi O2O
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
            Kampanye Keselamatan <br className="hidden sm:inline" />
            <span className="text-[var(--color-brand-orange)]">Online to Offline (O2O)</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed mt-4">
            Menghubungkan kesadaran mitigasi digital sebelum keberangkatan dengan aksi penyelamatan fisik nyata di medan ekstrem kawasan Bromo.
          </p>
        </div>

        {/* INTERACTIVE O2O BOARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* SISI KIRI: PANEL NAVIGASI STRATEGI (4 KOLOM) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Tombol Strategi ONLINE */}
            <button
              onClick={() => setActiveTab('online')}
              className={`w-full flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer select-none
                ${activeTab === 'online' 
                  ? 'bg-white border-[var(--color-brand-orange)] shadow-xl shadow-[var(--color-brand-orange)]/5 -translate-y-1' 
                  : 'bg-white/50 border-slate-200 hover:bg-white hover:border-slate-300'
                }
              `}
            >
              <div className={`p-3 rounded-xl border transition-colors duration-300
                ${activeTab === 'online' ? 'bg-[var(--color-brand-orange-light)] border-[var(--color-brand-orange-border)] text-[var(--color-brand-orange)]' : 'bg-slate-100 border-slate-200 text-slate-400'}
              `}>
                <FaGlobeAmericas className="text-xl sm:text-2xl" />
              </div>
              <div>
                <h4 className={`text-base font-black uppercase tracking-wide transition-colors ${activeTab === 'online' ? 'text-slate-900' : 'text-slate-700'}`}>
                  1. Gerakan Online
                </h4>
                <p className="text-xs text-slate-400 font-semibold mt-0.5">Edukasi & Pra-Kunjungan Digital</p>
              </div>
            </button>

            {/* Tombol Strategi OFFLINE */}
            <button
              onClick={() => setActiveTab('offline')}
              className={`w-full flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer select-none
                ${activeTab === 'offline' 
                  ? 'bg-white border-[var(--color-brand-orange)] shadow-xl shadow-[var(--color-brand-orange)]/5 -translate-y-1' 
                  : 'bg-white/50 border-slate-200 hover:bg-white hover:border-slate-300'
                }
              `}
            >
              <div className={`p-3 rounded-xl border transition-colors duration-300
                ${activeTab === 'offline' ? 'bg-[var(--color-brand-orange-light)] border-[var(--color-brand-orange-border)] text-[var(--color-brand-orange)]' : 'bg-slate-100 border-slate-200 text-slate-400'}
              `}>
                <FaMapMarkedAlt className="text-xl sm:text-2xl" />
              </div>
              <div>
                <h4 className={`text-base font-black uppercase tracking-wide transition-colors ${activeTab === 'offline' ? 'text-slate-900' : 'text-slate-700'}`}>
                  2. Aksi Offline
                </h4>
                <p className="text-xs text-slate-400 font-semibold mt-0.5">Intervensi & Mitigasi Fisik Lapangan</p>
              </div>
            </button>
          </div>

          {/* SISI KANAN: DYNAMIC CONTENT DISPLAY PANEL (8 KOLOM) */}
          <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xs relative overflow-hidden min-h-[460px] flex flex-col justify-between">
            
            {/* KONDISI TAMPILAN JIKA TAB ONLINE AKTIF */}
            {activeTab === 'online' && (
              <div className="animate-fade-in-quick space-y-8">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-wide">Fokus Kegiatan Edukasi Online</h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Membentuk pemahaman risiko bagi wisatawan sebelum menginjakkan kaki di kaldera Bromo.</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Poin Online 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center font-bold text-sm border border-blue-100">
                      <FaCloudUploadAlt className="text-lg" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-800 mb-1">Peta Risiko Interaktif</h5>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">Pemetaan digital rute *hazard* (Tosari & Cemorolawang) yang dapat dibuka via mobile browser sepanjang perjalanan.</p>
                    </div>
                  </div>
                  {/* Poin Online 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center font-bold text-sm border border-emerald-100">
                      <FaGlobeAmericas className="text-lg" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-800 mb-1">Kampanye Anti Vapor Lock</h5>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">Infografis & penyebaran video pendek edukasi cara mencegah rem matic blong akibat panas berlebih di turunan.</p>
                    </div>
                  </div>
                  {/* Poin Online 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center font-bold text-sm border border-purple-100">
                      <FaMapMarkedAlt className="text-lg" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-800 mb-1">Status Jalur Real-Time</h5>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">Portal pantauan cuaca, visibilitas kabut asap, dan tingkat kepadatan lalu lintas jalur wisata secara terpusat.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* KONDISI TAMPILAN JIKA TAB OFFLINE AKTIF */}
            {activeTab === 'offline' && (
              <div className="animate-fade-in-quick space-y-8">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-wide">Aksi & Intervensi Fisik Offline</h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Implementasi perlindungan fisik langsung di lapangan demi meminimalisir fatalitas kecelakaan.</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Poin Offline 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center font-bold text-sm border border-amber-100">
                      <FaHandsHelping className="text-lg" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-800 mb-1">Pos Penghentian & Pendinginan</h5>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">Aksi warga lokal menghentikan 400+ motor matic per hari secara sukarela untuk mendinginkan rem cakram yang panas.</p>
                    </div>
                  </div>
                  {/* Poin Offline 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center font-bold text-sm border border-red-100">
                      <FaExclamationTriangle className="text-lg" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-800 mb-1">Jalur Pasir Penyelamat</h5>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">Rekomendasi penataan dinding/kantong penyelamat darurat berbahan pasir & kerikil lepas di dasar turunan curam.</p>
                    </div>
                  </div>
                  {/* Poin Offline 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-50 text-teal-500 rounded-xl flex items-center justify-center font-bold text-sm border border-teal-100">
                      <FaPhoneVolume className="text-lg" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-800 mb-1">10.000+ Rambu High-Contrast</h5>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">Pemasangan papan peringatan neon mencolok mata di setiap tikungan buta (*blind spot*) rawan insiden.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FOOTNOTE ALUR DATA INTEGRASI */}
            <div className="mt-8 pt-4 border-t border-slate-100 text-[11px] sm:text-xs font-bold text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-orange)] animate-ping" />
              Sistem Terkoneksi: Tombol Darurat Digital Website Terhubung Langsung ke Posko Ambulans Sukapura.
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default O2OCampaign;