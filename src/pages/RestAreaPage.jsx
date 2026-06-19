import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
    FaMapMarkedAlt, FaClock, FaCoffee, FaWrench,
    FaFirstAid, FaRestroom, FaMotorcycle, FaRoute
} from 'react-icons/fa';

function RestAreaPage() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'id';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Fasilitas gratis yang tersedia di Rest Area BSI
    const facilities = [
        {
            icon: <FaMotorcycle className="text-xl text-[var(--color-brand-orange)]" />,
            title: currentLang === 'id' ? 'Cooling Braking Station' : 'Brake Cooling Hub',
            desc: currentLang === 'id' ? 'Fasilitas penyiraman piringan cakram cakram rem secara aman oleh relawan lokal.' : 'Safe brake disc spraying and cooling facilities managed by local volunteers.'
        },
        {
            icon: <FaWrench className="text-xl text-[var(--color-brand-orange)]" />,
            title: currentLang === 'id' ? 'Pos Mekanik & Toolkit' : 'Mechanical Tools & Kits',
            desc: currentLang === 'id' ? 'Penyediaan peralatan mekanik standar, pengecekan minyak rem, dan kompresor angin gratis.' : 'Standard mechanical tools, brake fluid inspection, and free air compressor access.'
        },
        {
            icon: <FaCoffee className="text-xl text-[var(--color-brand-orange)]" />,
            title: currentLang === 'id' ? 'Area Istirahat & Logistik' : 'Rest Corner & Refreshments',
            desc: currentLang === 'id' ? 'Tempat rehat yang nyaman dengan penyediaan air minum gratis untuk mengembalikan fokus pengendara.' : 'Comfortable seating area with free drinking water to restore rider alertness.'
        },
        {
            icon: <FaFirstAid className="text-xl text-[var(--color-brand-orange)]" />,
            title: currentLang === 'id' ? 'Posko Medis P3K' : 'First Aid Medical Post',
            desc: currentLang === 'id' ? 'Peralatan pertolongan pertama dasar dan kesiapan tabung oksigen portable untuk mitigasi awal.' : 'Basic first aid equipment and portable oxygen tanks ready for initial mitigation.'
        },
        {
            icon: <FaRestroom className="text-xl text-[var(--color-brand-orange)]" />,
            title: currentLang === 'id' ? 'Fasilitas Umum toilet' : 'Public Restrooms',
            desc: currentLang === 'id' ? 'Fasilitas toilet bersih yang dapat digunakan secara cuma-cuma oleh para pelancong.' : 'Clean restroom facilities accessible completely free of charge for travelers.'
        },
        {
            icon: <FaRoute className="text-xl text-[var(--color-brand-orange)]" />,
            title: currentLang === 'id' ? 'Pusat Literasi Jalur' : 'Route Literacy Hub',
            desc: currentLang === 'id' ? 'Papan informasi peta kerawanan kecelakaan rute Tosari dan Cemorolawang secara riil.' : 'Live risk topography map display for both Tosari and Cemorolawang pathways.'
        },
    ];

    return (
        <div className="w-full min-h-screen bg-slate-50/50 pb-24 page-enter">

            {/* HEADER BANNER */}
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

            {/* BLOCK UTAMA: LIVE MAPS & JAM OPERASIONAL */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-12 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* SISI KIRI: SEMATAN INTERAKTIF MAPS */}
                    <div className="lg:col-span-8 bg-white border-2 border-slate-200/60 rounded-3xl p-4 shadow-xl shadow-slate-200/30 flex flex-col h-[400px] md:h-[520px] animate-fade-in-quick">
                        <iframe
                            // PERBAIKAN: Gunakan URL HTTPS resmi hasil copy dari Google Maps Embed
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.780156943912!2d112.97672999999999!3d-7.918018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd63700712858ed%3A0x3545ff180b928282!2sRest%20Area%20Bromo%20Safety%20Initiative!5e0!3m2!1sid!2sid!4v1781841687662!5m2!1sid!2sid"
                            title="Rest Area Bromo Safety Initiative Location Map"
                            className="w-full h-full rounded-2xl border border-slate-100 bg-slate-100 shadow-inner"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* SISI KANAN: JAM OPERASIONAL & LAYANAN INTEGRASI */}
                    <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col justify-between">
                        <div className="space-y-6">
                            <div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-orange)] bg-[var(--color-brand-orange-light)]/10 border border-[var(--color-brand-orange-border)]/20 px-2 py-0.5 rounded-md">
                                    Information Center
                                </span>
                                <h2 className="text-xl font-black tracking-tight mt-3 uppercase text-white">
                                    {currentLang === 'id' ? 'Waktu Operasional' : 'Operating Hours'}
                                </h2>
                            </div>

                            {/* Detail Jam Kerja */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-4 items-center">
                                <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-orange)] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                                    <FaClock className="text-base" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black tracking-wide text-white uppercase">24 Jam / 7 Hari</h4>
                                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                                        {currentLang === 'id' ? 'Siaga penuh sepanjang musim libur & akhir pekan.' : 'Fully operational during peak holiday seasons and weekends.'}
                                    </p>
                                </div>
                            </div>

                            <div className="text-xs text-slate-400 leading-relaxed font-medium space-y-3">
                                <p>
                                    {currentLang === 'id'
                                        ? 'Pengendara motor matic yang melintasi jalur turunan tajam sangat direkomendasikan berhenti minimal 10-15 menit untuk mengembalikan suhu piringan cakram rem ke batas aman guna menghindari kegagalan rem total (Vapor Lock).'
                                        : 'Automatic scooter riders cruising down steep slopes are highly advised to stop for at least 10-15 minutes to allow brake disc temperatures to safely cool down, avoiding unexpected Vapor Lock total brake failure.'}
                                </p>
                            </div>
                        </div>

                        {/* Tombol Aksi Navigasi */}
                        <a
                            href="https://maps.app.goo.gl/7rSMNsha7rDzr6i9A?g_st=aw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex w-full justify-center items-center gap-2 text-center bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white text-xs font-black tracking-widest uppercase py-3.5 rounded-xl shadow-lg shadow-orange-500/10 transition-all cursor-pointer select-none"
                        >
                            <FaMapMarkedAlt /> {currentLang === 'id' ? 'Buka Navigasi Rute Maps' : 'Open Google Maps Navigation'}
                        </a>
                    </div>

                </div>
            </div>

            {/* SECTION 2: FASILITAS GRATIS (GRID CARDS SYSTEM) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-28">
                <div className="max-w-3xl mb-12">
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 uppercase">
                        {currentLang === 'id' ? 'Layanan & Fasilitas' : 'Services & Facilities'} <span className="text-[var(--color-brand-orange)]">Gratis</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 font-medium mt-2">
                        {currentLang === 'id'
                            ? 'Seluruh fasilitas di bawah ini dikelola secara swadaya dan sukarela tanpa dipungut biaya apa pun.'
                            : 'All services listed below are independently run by local volunteers and are completely free of charge.'}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facilities.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-xs flex flex-col gap-4 items-start hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-[var(--color-brand-orange-light)] group-hover:border-[var(--color-brand-orange-border)] transition-all">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-base font-black text-slate-900 tracking-tight group-hover:text-[var(--color-brand-orange)] transition-colors mb-1">
                                    {item.title}
                                </h4>
                                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default RestAreaPage;