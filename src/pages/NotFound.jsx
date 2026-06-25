import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import { FaHome, FaPhoneAlt, FaExclamationTriangle } from 'react-icons/fa';

function NotFound() {
  const { t } = useTranslation(); 

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-slate-50 relative overflow-hidden page-enter">
      
      
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-[var(--color-brand-orange)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-slate-200 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-8 relative z-10">
        
        
        <div className="relative inline-block animate-bounce duration-1000">
          <div className="absolute inset-0 bg-[var(--color-brand-orange-light)] scale-150 rounded-full blur-xl opacity-50" />
          <div className="w-24 h-24 bg-white border border-slate-200 shadow-md rounded-3xl flex items-center justify-center text-[var(--color-brand-orange)] text-4xl mx-auto">
            <FaExclamationTriangle />
          </div>
        </div>

        
        <div className="space-y-3">
          <h1 className="text-7xl font-black tracking-tighter text-slate-900">
            404
          </h1>
          <h2 className="text-xl font-extrabold text-slate-800 tracking-tight">
            {t('errorTitle')} 
          </h2>
          <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-xs mx-auto">
            {t('errorDesc')} 
          </p>
        </div>

        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            to="/"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold tracking-widest uppercase px-5 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 select-none"
          >
            <FaHome className="text-sm" /> {t('btnHome')} 
          </Link>
          
          <a
            href="tel:112"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white text-xs font-extrabold tracking-widest uppercase px-5 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 select-none"
          >
            <FaPhoneAlt className="text-xs animate-pulse" /> {t('btnEmergency')} 
          </a>
        </div>

        
        <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider pt-8">
          Bromo Safety Initiative &copy; {new Date().getFullYear()}
        </p>

      </div>
    </div>
  );
}

export default NotFound;