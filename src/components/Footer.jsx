import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaShieldAlt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Menyesuaikan FaShield yang stabil

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* MULTI-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          
          {/* KOLOM 1: LOGO & DESKRIPSI */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[var(--color-brand-orange-light)] rounded-lg border border-[var(--color-brand-orange-border)]">
                <FaShieldAlt className="text-xl text-brand-orange" />
              </div>
              <span className="text-base font-bold tracking-wider text-slate-900 uppercase sm:text-lg">
                Bromo<span className="text-brand-orange">Safety</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium max-w-sm">
              {t('footerDesc')}
            </p>
          </div>

          {/* KOLOM 2: NAVIGASI RINGKAS */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-4">
              {t('footerNavTitle')}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
              <li>
                <a href="#home" className="hover:text-brand-orange transition-colors">{t('navHome')}</a>
              </li>
              
              {/* PENAMBAHAN MENU BARU: ARTIKEL (FOOTER) */}
              <li>
                <a href="#articles" className="hover:text-brand-orange transition-colors">{t('navArticles')}</a>
              </li>
              
              <li>
                <a href="#safety" className="hover:text-brand-orange transition-colors">{t('navSafety')}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-orange transition-colors">{t('navAbout')}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-orange transition-colors">{t('navContact')}</a>
              </li>
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
                <span>Kecamatan Sukapura, Kabupaten Probolinggo, Jawa Timur</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="text-slate-400 flex-shrink-0" />
                <span className="break-all">info@bromosafetyinitiative.org</span>
              </li>
            </ul>
            
            <a 
              href="tel:112" 
              className="inline-flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold rounded-xl border border-red-200 transition-colors shadow-xs w-fit cursor-pointer"
            >
              <FaPhoneAlt className="animate-pulse" /> {t('footerEmergencyCall')} (112)
            </a>
          </div>

        </div>

        {/* BOTTOM SECTION: COPYRIGHT */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs font-semibold text-slate-400">
          <div>
            &copy; {currentYear} Bromo Safety Initiative. {t('footerRights')}
          </div>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;