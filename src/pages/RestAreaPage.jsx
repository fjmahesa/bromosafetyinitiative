import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaMapMarkedAlt } from 'react-icons/fa';

function RestAreaPage() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'id';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-screen bg-slate-50/50 pb-20 page-enter">

            {/* HEADER BANNER (JUDUL & SUBJUDUL) */}
            <div className="relative bg-slate-900 text-white py-20 md:py-28 overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1605540435647-88d707f7f4a2?w=1600')] bg-cover bg-center mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />

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

            {/* BLOCK UTAMA: LIVE MAPS ONLY */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-12 relative z-20">
                {/* Lebar Penuh (Full Layout) Menggantikan Grid Lama */}
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

        </div>
    );
}

export default RestAreaPage;