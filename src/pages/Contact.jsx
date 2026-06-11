import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// 1. IMPORT TOAST DAN TOASTER
import toast, { Toaster } from 'react-hot-toast'; 
import {
    FaEnvelope,
    FaPhoneAlt,
    FaFacebook,
    FaInstagram,
    FaWhatsapp,
    FaTiktok,
    FaPaperPlane
} from 'react-icons/fa';

function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Pemicu animasi loading saat proses pengiriman data sedang berjalan
        const loadingToast = toast.loading(t('contactToastSending'));

        const FORMSPREE_ID = 'mjgderdq'; 
        const endpoint = `https://formspree.io/f/${FORMSPREE_ID}`;

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // 2. KUSTOMISASI PESAN SUKSES DENGAN DESAIN KHAS BROMO SAFETY
            toast.success(t('contactToastSuccess'),
                {
                    id: loadingToast, // Menggantikan animasi loading secara instan
                    duration: 5000,
                    style: {
                        background: '#0f172a', // Slate 900 (Menyesuaikan warna tema heromu)
                        color: '#ffffff',
                        fontSize: '14px',
                        fontWeight: '500',
                        borderRadius: '16px',
                        padding: '16px',
                        border: '1px solid rgba(249, 115, 22, 0.2)', // Border oranye tipis
                    },
                    iconTheme: {
                        primary: '#f97316', // Warna Oranye Brand sebagai ikon sukses
                        secondary: '#ffffff',
                    },
                }
            );

            setFormData({ name: '', email: '', subject: '', message: '' });

        } catch (error) {
            console.error('Error integrasi form via Formspree:', error);
            
            // 3. TAMPILAN JIKA TERJADI GANGGUAN KONEKSI
            toast.error(t('contactToastError'),
                { id: loadingToast }
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen py-12 md:py-20 page-enter">
            {/* 4. WAJIB DILETAKKAN DI SINI SEBAGAI WADAH POP-UP TOAST */}
            <Toaster position="bottom-center" reverseOrder={false} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ==================== HERO HEADER ==================== */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="text-[var(--color-brand-orange)] bg-[var(--color-brand-orange-light)]/10 border border-[var(--color-brand-orange-border)]/30 text-xs font-black tracking-widest uppercase px-3 py-1.5 rounded-full inline-block">
                        {t('contactBadge')}
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                        {t('contactTitle')}
                    </h1>
                    <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
                        {t('contactDesc')}
                    </p>
                </div>

                {/* ==================== MAIN CONTENT GRID ==================== */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* KOLOM KIRI: FORMULIR HUBUNGI KAMI */}
                    <div className="lg:col-span-7 bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-10 shadow-xs">
                        <h2 className="text-lg font-black text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
                            <FaPaperPlane className="text-[var(--color-brand-orange)] text-sm" />
                            {t('contactFormTitle')}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-black text-slate-500 uppercase tracking-wide">{t('formName')}</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-black text-slate-500 uppercase tracking-wide">{t('formEmail')}</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-black text-slate-500 uppercase tracking-wide">{t('formSubject')}</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-black text-slate-500 uppercase tracking-wide">{t('formMessage')}</label>
                                <textarea
                                    rows="5"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold tracking-widest uppercase py-4 rounded-xl transition-all duration-300 shadow-md select-none ${
                                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                                }`}
                            >
                                {isSubmitting ? t('contactBtnSending') : t('formBtn')}
                            </button>
                        </form>
                    </div>

                    {/* KOLOM KANAN: DETAIL INFO & SOSIAL MEDIA */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
                            <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-100">
                                {t('contactInfoTitle')}
                            </h2>

                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-600 text-sm flex-shrink-0">
                                    <FaEnvelope />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">{t('contactOfficialEmail')}</h4>
                                    <a href="mailto:info@bromosafetyinitiative.com" className="text-sm font-bold text-slate-800 hover:text-[var(--color-brand-orange)] transition-colors block break-all">
                                        info@bromosafetyinitiative.com
                                    </a>
                                </div>
                            </div>

                            <div className="pt-2">
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-3">{t('contactSocialMedia')}</h4>
                                <div className="flex flex-wrap gap-3">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-slate-200/80 bg-white text-[#1877F2] flex items-center justify-center hover:bg-slate-50 hover:scale-110 transition-all duration-300">
                                        <FaFacebook className="text-lg" />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-slate-200/80 bg-white text-[#E1306C] flex items-center justify-center hover:bg-slate-50 hover:scale-110 transition-all duration-300">
                                        <FaInstagram className="text-lg" />
                                    </a>
                                    <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-slate-200/80 bg-white text-[#25D366] flex items-center justify-center hover:bg-slate-50 hover:scale-110 transition-all duration-300">
                                        <FaWhatsapp className="text-lg" />
                                    </a>
                                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-slate-200/80 bg-white text-slate-900 flex items-center justify-center hover:bg-slate-50 hover:scale-110 transition-all duration-300">
                                        <FaTiktok className="text-base" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-slate-800">
                            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[var(--color-brand-orange)]/10 rounded-full blur-2xl" />
                            <h3 className="text-base font-black tracking-tight mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                                {t('contactEmergencyTitle')}
                            </h3>
                            <p className="text-xs text-slate-400 font-medium leading-relaxed mb-5">
                                {t('contactEmergencyDesc')}
                            </p>
                            <a href="tel:112" className="inline-flex w-full justify-center items-center text-center bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white text-xs font-extrabold tracking-widest uppercase py-3.5 rounded-xl transition-all duration-300 shadow-md">
                                <FaPhoneAlt className="text-[10px] mr-2 animate-pulse" />
                                {t('contactEmergencyBtn')}
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;