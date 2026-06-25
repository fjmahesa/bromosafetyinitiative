import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaMapMarkedAlt } from 'react-icons/fa';
import GalleryCarousel from '../components/GalleryCarousel';

function RestAreaPage() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'id';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-screen bg-slate-50/50 pb-20 page-enter">

            
            <div className="relative bg-slate-900 text-white py-20 md:py-28 overflow-hidden border-b border-slate-800">
                {/* <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1605540435647-88d707f7f4a2?w=1600')] bg-cover bg-center mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" /> */}

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in">
                    <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-[var(--color-brand-orange)] uppercase bg-[var(--color-brand-orange-light)]/10 border border-[var(--color-brand-orange-border)]/30 px-3 py-1 rounded-md mb-4">
                        <FaMapMarkedAlt /> {currentLang === 'id' ? 'Fasilitas Mitigasi Fisik' : 'Physical Mitigation Facility'}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
                        Rest Area <span className="text-[var(--color-brand-orange)]">BSI</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-400 font-medium mt-4 leading-relaxed">
                        {currentLang === 'id'
                            ? 'Titik perlindungan intervensi fisik gratis di jalur Sukapura - Cemoro Lawang demi mendinginkan rem matic dan memulihkan stamina berkendara.'
                            : 'Free physical intervention checkpoint on the Sukapura - Cemoro Lawang route to cool down scooter automatic brakes and restore driving stamina.'}
                    </p>
                </div>
            </div>

            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-12 relative z-20">
                
                <div className="w-full bg-white border-2 border-slate-200/60 rounded-3xl p-4 shadow-xl shadow-slate-200/30 flex flex-col h-[450px] md:h-[600px] animate-fade-in-quick">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7903.560313887824!2d112.97673!3d-7.918018!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd63700712858ed%3A0x3545ff180b928282!2sRest%20Area%20Bromo%20Safety%20Initiative!5e0!3m2!1sid!2sid!4v1781917502930!5m2!1sid!2sid"
                        title="Rest Area Bromo Safety Initiative Location Map"
                        className="w-full h-full rounded-2xl border border-slate-100 bg-slate-100 shadow-inner"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>

            <div className="mt-12">
                <GalleryCarousel />

                <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-100 text-center relative block clear-both">
                    <div className="max-w-3xl mx-auto">

                        
                        <span className="inline-block text-xs font-extrabold tracking-widest text-[var(--color-brand-orange)] uppercase bg-[var(--color-brand-orange-light)]/10 border border-[var(--color-brand-orange-border)]/20 px-3 py-1 rounded-md mb-4">
                            {currentLang === 'id' ? 'Ikuti Perkembangan Kami' : 'Stay Connected'}
                        </span>

                        
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight mb-3">
                            {currentLang === 'id' ? 'Pantau Aksi BSI di Media Sosial' : 'Follow BSI on Social Media'}
                        </h2>

                        
                        <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed max-w-xl mx-auto mb-8">
                            {currentLang === 'id'
                                ? 'Dapatkan informasi edukasi keselamatan berkendara terbaru, dokumentasi kegiatan lapangan, dan kabar terkini mengenai Kawasan Taman Nasional Bromo Tengger Semeru melalui akun resmi kami.'
                                : 'Get the latest driving safety educational insights, field documentation, and updates regarding the Bromo tourist route through our official accounts.'}
                        </p>

                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                            
                            <a
                                href="https://www.instagram.com/bromosafetyinitiative"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-black text-sm uppercase tracking-wider rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer select-none"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                                Instagram
                            </a>

                            
                            <a
                                href="https://www.tiktok.com/@bromosafetyinitiative"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3.5 bg-slate-950 text-white font-black text-sm uppercase tracking-wider rounded-2xl shadow-md hover:shadow-lg hover:bg-slate-900 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer select-none border border-slate-800"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.03 1.6 4.17 1.13 1.2 2.72 1.94 4.38 2.1v3.71c-1.35-.02-2.69-.38-3.87-1.07-.75-.46-1.42-1.06-1.95-1.77v6.62c.03 2.14-.6 4.29-1.89 5.96-1.76 2.17-4.51 3.37-7.26 3.19-2.8-.13-5.42-1.72-6.84-4.14-1.6-2.64-1.63-6.1-.09-8.77 1.34-2.43 3.86-3.95 6.64-4.13v3.74c-1.28.1-2.48.75-3.19 1.8-.82 1.14-.95 2.7-.35 3.95.59 1.3 1.94 2.14 3.37 2.12 1.62-.05 3.01-1.21 3.25-2.82.08-.41.08-.83.08-1.25V0h.17z" />
                                </svg>
                                TikTok
                            </a>

                        </div>

                        
                        <p className="text-slate-400 text-[11px] font-bold tracking-wider mt-4 uppercase">
                            @bromosafetyinitiative
                        </p>

                    </div>
                </section>
            </div>

        </div>
    );
}

export default RestAreaPage;