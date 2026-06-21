import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaCopy, FaCheck, FaWhatsapp } from 'react-icons/fa';

function ContactUs() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'id';
  
  // State untuk feedback saat teks disalin
  const [copiedType, setCopiedType] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000); // Reset status setelah 2 detik
  };

  const contactData = {
    address: "Menara MTH. Lt. 15 - Suite 1508. Letjen MT Haryono Kav 23, Jakarta. 12820",
    email: "bromosafetyinitiative@gmail.com",
    whatsapp: "+62 811-8000-1091",
    whatsappLink: "https://wa.me/6281180001091",
    phones: [
      { id: 'phone1', number: "021-50606093" },
      { id: 'phone2', number: "021-83789544" }
    ]
  };

  return (
    <div className="w-full min-h-screen bg-slate-50/50 pb-24 page-enter">
      
      {/* HERO BANNER */}
      <div className="relative bg-slate-900 text-white py-20 md:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600')] bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-[var(--color-brand-orange)] uppercase bg-[var(--color-brand-orange-light)]/10 border border-[var(--color-brand-orange-border)]/30 px-3 py-1 rounded-md mb-4">
            Headquarters
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
            {currentLang === 'id' ? 'Kontak & Lokasi' : 'Contact & Location'}
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-400 font-medium mt-3 leading-relaxed">
            {currentLang === 'id' 
              ? 'Hubungi sekretariat pusat atau kunjungi kantor representatif Bromo Safety Initiative.' 
              : 'Reach out to our central secretariat or visit the Bromo Safety Initiative representative office.'}
          </p>
        </div>
      </div>

      {/* HUB KONTAK UTAMA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-12 relative z-20">
        <div className="bg-white border-2 border-slate-200/60 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/40 grid grid-cols-1 gap-8">
          
          {/* BARIS KARTU 1: ALAMAT KANTOR */}
          <div className="flex flex-col sm:flex-row gap-5 items-start p-5 rounded-2xl bg-slate-50/60 border border-slate-100 hover:border-slate-200 transition-all group relative">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-orange)] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-500/10">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <div className="flex-1 space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                {currentLang === 'id' ? 'Alamat Kantor Sekretariat' : 'Office Address'}
              </span>
              <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                {contactData.address}
              </p>
            </div>
            <button 
              onClick={() => handleCopy(contactData.address, 'address')}
              className="sm:absolute sm:top-5 sm:right-5 p-2 rounded-lg border border-slate-200 hover:bg-white text-slate-400 hover:text-slate-700 transition-all cursor-pointer self-end sm:self-start"
              title="Salin Alamat"
            >
              {copiedType === 'address' ? <FaCheck className="text-green-600" /> : <FaCopy />}
            </button>
          </div>

          {/* PERBAIKAN GRID: Diubah dari md:grid-cols-2 menjadi md:grid-cols-3 untuk menampung komponen ketiga */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* EMAIL */}
            <div className="flex gap-4 items-start p-5 rounded-2xl bg-slate-50/60 border border-slate-100 hover:border-slate-200 transition-all justify-between group">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-base text-[var(--color-brand-orange)]" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Email Resmi</span>
                  <a href={`mailto:${contactData.email}`} className="block text-xs sm:text-sm font-bold text-slate-900 hover:text-[var(--color-brand-orange)] transition-colors break-all">
                    {contactData.email}
                  </a>
                </div>
              </div>
              <button 
                onClick={() => handleCopy(contactData.email, 'email')}
                className="p-2 rounded-lg border border-slate-200 hover:bg-white text-slate-400 hover:text-slate-700 transition-all cursor-pointer self-start"
              >
                {copiedType === 'email' ? <FaCheck className="text-green-600" /> : <FaCopy className="text-xs" />}
              </button>
            </div>

            {/* WHATSAPP */}
            <div className="flex gap-4 items-start p-5 rounded-2xl bg-slate-50/60 border border-slate-100 hover:border-slate-200 transition-all justify-between group">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-base text-emerald-500" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">WhatsApp Chat</span>
                  <a href={contactData.whatsappLink} target="_blank" rel="noopener noreferrer" className="block text-xs sm:text-sm font-bold text-slate-900 hover:text-[var(--color-brand-orange)] transition-colors break-all">
                    {contactData.whatsapp}
                  </a>
                </div>
              </div>
              <button 
                onClick={() => handleCopy(contactData.whatsapp, 'whatsapp')}
                className="p-2 rounded-lg border border-slate-200 hover:bg-white text-slate-400 hover:text-slate-700 transition-all cursor-pointer self-start"
                title="Salin Nomor WhatsApp"
              >
                {copiedType === 'whatsapp' ? <FaCheck className="text-green-600" /> : <FaCopy className="text-xs" />}
              </button>
            </div>

            {/* TELEPON */}
            <div className="flex gap-4 items-start p-5 rounded-2xl bg-slate-50/60 border border-slate-100 hover:border-slate-200 transition-all justify-between group">
              <div className="flex gap-4 items-start w-full">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="text-base text-[var(--color-brand-orange)]" />
                </div>
                <div className="space-y-3 flex-1">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block -mb-1">Hotline Telepon</span>
                  
                  {/* Mapping Iterasi Dua Nomor */}
                  {contactData.phones.map((phone) => (
                    <div key={phone.id} className="flex items-center justify-between gap-2 border-b border-slate-200/40 pb-2 last:border-none last:pb-0">
                      <a 
                        href={`tel:${phone.number.replace(/\s/g, '')}`} 
                        className="block text-xs sm:text-sm font-bold text-slate-900 hover:text-[var(--color-brand-orange)] transition-colors"
                      >
                        {phone.number}
                      </a>
                      <button 
                        onClick={() => handleCopy(phone.number, phone.id)}
                        className="p-1.5 rounded-md border border-slate-200 hover:bg-white text-slate-400 hover:text-slate-700 transition-all cursor-pointer"
                        title="Salin Nomor"
                      >
                        {copiedType === phone.id ? <FaCheck className="text-green-600 text-[10px]" /> : <FaCopy className="text-[10px]" />}
                      </button>
                    </div>
                  ))}

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default ContactUs;