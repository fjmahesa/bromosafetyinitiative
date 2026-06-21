import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGlobe, FaUserPlus } from 'react-icons/fa';

function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'id';

  // Array menu yang disesuaikan dengan tautan PDF eksternal pesanan klien
  const menuItems = [
    // { key: 'navHome', path: '/' },
    { key: 'navAbout', path: '/about-us' },
    { key: 'navSafety', path: '/safety-guide' },
    { key: 'navRestArea', path: '/rest-area' },
    { key: 'navContact', path: '/contact-us' },
  ];

  // 🛠️ VARIABEL LINK GOOGLE FORM (Silakan ganti dengan link asli milikmu)
  const googleFormUrl = "https://forms.gle/89pGdiQ7SJwwxjYk7";

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO AREA */}
          <Link 
            to="/" 
            className="flex-shrink-0 flex items-center gap-3 group transition-transform duration-200 active:scale-95 cursor-pointer"
            title={t('navTitleHome')}
          >
            <div className="flex items-center justify-center">
              <img 
                src="/logo_BSI.png" 
                alt={t('navLogoAlt')} 
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain transition-transform duration-300"
              />
            </div>
            
            <div className="flex flex-col justify-center -space-y-1">
              <span className="text-base font-black tracking-wider text-slate-900 uppercase sm:text-lg transition-colors duration-300 group-hover:text-slate-700 leading-none">
                Bromo<span className="text-brand-orange transition-colors duration-300 group-hover:text-brand-orange-hover">Safety</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.22em] text-slate-400 uppercase leading-none pt-1 transition-colors duration-300 group-hover:text-brand-orange">
                Initiative
              </span>
            </div>
          </Link>

          {/* DESKTOP & TABLET MENU */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              const className = `text-xs lg:text-sm font-black uppercase tracking-wider transition-colors whitespace-nowrap ${
                isActive ? 'text-brand-orange' : 'text-slate-600 hover:text-brand-orange'
              }`;

              if (item.isExternal) {
                return (
                  <a 
                    key={item.key} 
                    href={item.path} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={className}
                  >
                    {t(item.key)}
                  </a>
                );
              }

              return (
                <Link key={item.key} to={item.path} className={className}>
                  {t(item.key)}
                </Link>
              );
            })}
          </div>

          {/* RIGHT CONTROLS (DESKTOP) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Pemilih Bahasa */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-bold">
              <button 
                onClick={() => changeLanguage('id')} 
                className={`px-2 py-1 rounded cursor-pointer transition-all ${currentLang === 'id' ? 'bg-white text-brand-orange shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
              >
                ID
              </button>
              <button 
                onClick={() => changeLanguage('en')} 
                className={`px-2 py-1 rounded cursor-pointer transition-all ${currentLang === 'en' ? 'bg-white text-brand-orange shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
              >
                EN
              </button>
            </div>

            {/* PERBAIKAN: Mengubah target tautan langsung ke Google Form eksternal */}
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange)]/90 text-white text-xs lg:text-sm font-black uppercase tracking-wider rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer select-none"
            >
              <FaUserPlus />
              {currentLang === 'id' ? 'Daftar Relawan' : 'Register Volunteer'}
            </a>
          </div>

          {/* MOBILE CONTROLS HEADER */}
          <div className="flex items-center gap-3 md:hidden">
            <button 
              onClick={() => changeLanguage(currentLang === 'id' ? 'en' : 'id')}
              className="p-2 text-slate-500 hover:text-slate-900 flex items-center gap-1 text-xs font-bold cursor-pointer"
            >
              <FaGlobe /> <span className="uppercase">{currentLang}</span>
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
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[420px] opacity-100 border-b border-slate-200' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-3 bg-white">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const className = `block px-3 py-2.5 rounded-md text-base font-bold uppercase tracking-wide text-xs ${
              isActive ? 'bg-slate-50 text-brand-orange' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`;

            if (item.isExternal) {
              return (
                <a
                  key={item.key}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={className}
                >
                  {t(item.key)}
                </a>
              );
            }

            return (
              <Link
                key={item.key}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={className}
              >
                {t(item.key)}
              </Link>
            );
          })}

          {/* PERBAIKAN: Mengubah tautan tombol mobile langsung ke Google Form eksternal */}
          <div className="pt-2 px-3">
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[var(--color-brand-orange)] text-white text-sm font-black uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-95 text-center"
            >
              <FaUserPlus />
              {currentLang === 'id' ? 'Daftar Relawan' : 'Register Volunteer'}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;