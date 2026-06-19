import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';

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
    { key: 'navHome', path: '/' },
    { key: 'navAbout', path: '/about' },
    { 
      key: 'navSafety', 
      path: 'https://admin.bromosafetyinitiative.com/wp-content/uploads/2026/06/Panduan-Keselamatan.pdf', 
      isExternal: true // Penanda khusus agar dirender menggunakan tag <a> murni
    },
    { key: 'navRestArea', path: '/rest-area' },
    { key: 'navLocation', path: '/location' },
  ];

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

              // RENDER OPTION: Jika eksternal (PDF), gunakan tag <a> biasa dengan target _blank
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

              // Jika internal, gunakan Link Router
              return (
                <Link key={item.key} to={item.path} className={className}>
                  {t(item.key)}
                </Link>
              );
            })}
          </div>

          {/* RIGHT CONTROLS */}
          <div className="hidden md:flex items-center gap-4">
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
          </div>

          {/* MOBILE MENU BUTTON */}
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
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[340px] opacity-100 border-b border-slate-200' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white">
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;