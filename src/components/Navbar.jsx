import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    /* 
      PERBAIKAN UTAMA: 
      - Memastikan 'sticky top-0' berjalan kuat dengan 'w-full'
      - 'bg-white/90' dan 'backdrop-blur-md' memberikan efek kaca transparan premium saat melewati konten bawah
      - 'shadow-sm' memberikan pembatas kontras yang jelas dengan konten di belakangnya
    */
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO AREA - DENGAN SUB-TEKS INITIATIVE YANG PRESISI */}
          <a 
            href="/" 
            className="flex-shrink-0 flex items-center gap-3 group transition-transform duration-200 active:scale-95 cursor-pointer"
            title="Go to homepage"
          >
            {/* Wadah Logo SVG */}
            <div className="flex items-center justify-center">
              <img 
                src="/logo_BSI.png" 
                alt="Bromo Safety Initiative Logo" 
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain transition-transform duration-300 "
              />
            </div>
            
            {/* STRUKTUR VERTIKAL TEKS BRAND */}
            <div className="flex flex-col justify-center -space-y-1">
              {/* Baris Atas: BromoSafety */}
              <span className="text-base font-black tracking-wider text-slate-900 uppercase sm:text-lg transition-colors duration-300 group-hover:text-slate-700 leading-none">
                Bromo<span className="text-brand-orange transition-colors duration-300 group-hover:text-brand-orange-hover">Safety</span>
              </span>
              
              {/* Baris Bawah: INITIATIVE (Presisi, Rapi, & Selaras) */}
              <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.22em] text-slate-400 uppercase leading-none pt-1 transition-colors duration-300 group-hover:text-brand-orange">
                Initiative
              </span>
            </div>
          </a>

          {/* DESKTOP & TABLET MENU */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <a href="/" className="text-sm font-semibold text-slate-600 hover:text-brand-orange transition-colors">{t('navHome')}</a>
            <a href="/articles" className="text-sm font-semibold text-slate-600 hover:text-brand-orange transition-colors">{t('navArticles')}</a>
            <a href="#safety" className="text-sm font-semibold text-slate-600 hover:text-brand-orange transition-colors">{t('navSafety')}</a>
            <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-brand-orange transition-colors">{t('navAbout')}</a>
            <a href="#contact" className="text-sm font-semibold text-slate-600 hover:text-brand-orange transition-colors">{t('navContact')}</a>
          </div>

          {/* RIGHT CONTROLS */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-bold">
              <button 
                onClick={() => changeLanguage('id')} 
                className={`px-2 py-1 rounded cursor-pointer ${i18n.language.startsWith('id') ? 'bg-white text-brand-orange shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
              >
                ID
              </button>
              <button 
                onClick={() => changeLanguage('en')} 
                className={`px-2 py-1 rounded cursor-pointer ${i18n.language.startsWith('en') ? 'bg-white text-brand-orange shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
              >
                EN
              </button>
            </div>

            {/* Emergency Button */}
            <button className="px-4 lg:px-5 py-2.5 bg-brand-orange text-white text-xs lg:text-sm font-bold rounded-lg hover:bg-brand-orange-hover transition-colors shadow-md shadow-orange-500/15 whitespace-nowrap cursor-pointer">
              {t('btnEmergency')}
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex items-center gap-3 md:hidden">
            <button 
              onClick={() => changeLanguage(i18n.language.startsWith('id') ? 'en' : 'id')}
              className="p-2 text-slate-500 hover:text-slate-900 flex items-center gap-1 text-xs font-bold cursor-pointer"
            >
              <FaGlobe /> <span className="uppercase">{i18n.language.substring(0, 2)}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
            >
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE & TABLET DROPDOWN MENU */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-72 opacity-100 border-b border-slate-200' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-3 bg-white">
          <a href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">{t('navHome')}</a>
          <a href="/articles" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">{t('navArticles')}</a>
          <a href="#safety" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">{t('navSafety')}</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">{t('navAbout')}</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">{t('navContact')}</a>
          <div className="pt-2 px-3">
            <button className="w-full py-2.5 bg-brand-orange text-white text-sm font-bold rounded-lg hover:bg-brand-orange-hover transition-colors cursor-pointer">
              {t('btnEmergency')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;