import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // <-- Menggunakan Link untuk navigasi internal SPA
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Array menu baru diselaraskan 100% dengan susunan rute Navbar terbaru
  const footerMenuItems = [
    { key: 'navHome', path: '/' },
    { key: 'navAbout', path: '/about-us' },
    { key: 'navSafety', path: '/safety-guide' },
    { key: 'navRestArea', path: '/rest-area' },
    { key: 'navContact', path: '/contact-us' },
  ];

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* MULTI-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          
          {/* KOLOM 1: AREA LOGO & DESKRIPSI */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link 
              to="/" 
              className="flex items-center gap-3 group transition-transform duration-200 active:scale-95 cursor-pointer w-fit select-none"
              title={t('footerTitleBack')}
            >
              <div className="flex items-center justify-center">
                <img 
                  src="/logo_BSI.png" 
                  alt={t('footerLogoAlt')} 
                  className="w-10 h-10 object-contain transition-transform duration-300"
                />
              </div>
              
              <div className="flex flex-col justify-center -space-y-1">
                <span className="text-base font-black tracking-wider text-slate-900 uppercase transition-colors duration-300 group-hover:text-slate-700 leading-none">
                  Bromo<span className="text-brand-orange transition-colors duration-300 group-hover:text-brand-orange-hover">Safety</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.22em] text-slate-400 uppercase leading-none pt-1 transition-colors duration-300 group-hover:text-brand-orange">
                  Initiative
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium max-w-sm mt-2">
              {t('footerDesc')}
            </p>
          </div>

          {/* KOLOM 2: DAFTAR MENU (JUDUL NAVIGASI RINGKAS TELAH DIHAPUS) */}
          <div className="md:col-span-3 pt-2">
            <ul className="space-y-3 text-xs sm:text-sm font-black uppercase tracking-wider">
              {footerMenuItems.map((item) => {
                // Konfigurasi style hover warna oranye brand
                const className = "text-slate-600 hover:text-brand-orange transition-colors";

                // Jika elemen berupa tautan PDF eksternal
                if (item.isExternal) {
                  return (
                    <li key={item.key}>
                      <a 
                        href={item.path} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={className}
                      >
                        {t(item.key)}
                      </a>
                    </li>
                  );
                }

                // Jika elemen internal SPA route
                return (
                  <li key={item.key}>
                    <Link to={item.path} className={className}>
                      {t(item.key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* KOLOM 3: KONTAK & ALAMAT */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-1">
              {t('footerContactTitle')}
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm font-semibold text-slate-500">
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-slate-400 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{t('footerAddress')}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="text-slate-400 flex-shrink-0" />
                <a href="mailto:bromosafetyinitiative@gmail.com" className="break-all hover:text-brand-orange transition-colors">
                  bromosafetyinitiative@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-slate-400 flex-shrink-0 text-[11px] sm:text-xs" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <a href="tel:02150606093" className="hover:text-brand-orange transition-colors">
                    021-50606093
                  </a>
                  <span className="hidden sm:inline text-slate-300">|</span>
                  <a href="tel:02183789544" className="hover:text-brand-orange transition-colors">
                    021-83789544
                  </a>
                </div>
              </li>
              {/* PERBAIKAN: Menambahkan kontak nomor WhatsApp aktif di bawah nomor telepon */}
              <li className="flex items-center gap-2.5">
                <FaWhatsapp className="text-slate-400 flex-shrink-0 text-sm sm:text-base" />
                <a 
                  href="https://wa.me/6281180001091" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-orange transition-colors"
                >
                  +62 811-8000-1091
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION: COPYRIGHT */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs font-semibold text-slate-400">
          <div>
            &copy; {currentYear} {t('footerCopyright')}. {t('footerRights')}
          </div>
          {/* <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-slate-600 transition-colors">{t('footerPrivacy')}</Link>
            <Link to="/terms" className="hover:text-slate-600 transition-colors">{t('footerTerms')}</Link>
          </div> */}
        </div>

      </div>
    </footer>
  );
}

export default Footer;