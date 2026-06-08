import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGear, FaFire, FaWater, FaLocationDot } from 'react-icons/fa6'; // Menggunakan react-icons/fa6 untuk variasi ikon modern
import { useFadeIn } from '../../hooks/useFadeIn';

function BrakeEducation() {
  const { t } = useTranslation();
  
  // Kita buat 3 observer terpisah dengan delay berjenjang (staggered)
  const [headerRef, headerVisible] = useFadeIn(100);
  const [cardRef1, cardVisible1] = useFadeIn(150);
  const [cardRef2, cardVisible2] = useFadeIn(300); // Jeda 150ms dari kartu pertama
  const [cardRef3, cardVisible3] = useFadeIn(450); // Jeda 150ms dari kartu kedua

  const educationCards = [
    {
      id: 1,
      ref: cardRef1,
      visible: cardVisible1,
      icon: <FaGear className="text-3xl text-orange-600" />,
      title: t('cardTitle1'),
      desc: t('cardDesc1'),
      tag: "Mekanika Kendaraan"
    },
    {
      id: 2,
      ref: cardRef2,
      visible: cardVisible2,
      icon: <FaFire className="text-3xl text-amber-600" />,
      title: t('cardTitle2'),
      desc: t('cardDesc2'),
      tag: "Bahaya Termal"
    },
    {
      id: 3,
      ref: cardRef3,
      visible: cardVisible3,
      icon: <FaWater className="text-3xl text-blue-600" />,
      title: t('cardTitle3'),
      desc: t('cardDesc3'),
      tag: "Fasilitas Lapangan"
    }
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER MODUL */}
        <div 
          ref={headerRef}
          className={`fade-in-hidden ${headerVisible ? 'fade-in-visible' : ''} text-center max-w-3xl mx-auto mb-16 md:mb-24`}
        >
          <span className="text-xs font-extrabold tracking-widest text-brand-orange uppercase bg-orange-50 px-3 py-1 rounded-md border border-orange-100">
            Fokus Edukasi Utama
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mt-4 mb-4 leading-tight">
            {t('brakeTitle')}
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
            {t('brakeSubtitle')}
          </p>
        </div>

        {/* STAGGERED CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {educationCards.map((card) => (
            <div
              key={card.id}
              ref={card.ref}
              className={`scale-up-hidden ${card.visible ? 'scale-up-visible' : ''} flex flex-col bg-white border-2 border-slate-200/80 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-brand-orange hover:shadow-xl group relative overflow-hidden`}
            >
              {/* Garis Aksen Warna Tipis di Atas Kartu saat di-hover */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-orange transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

              {/* Tag Atas Kartu */}
              <span className="w-fit text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 mb-6 group-hover:bg-orange-50 group-hover:text-brand-orange transition-colors">
                {card.tag}
              </span>

              {/* Bundaran Ikon Besar */}
              <div className="p-4 bg-slate-50 rounded-2xl w-fit mb-6 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>

              {/* Judul Materi */}
              <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3">
                {card.title}
              </h3>

              {/* Narasi Penjelasan */}
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ACTION BUTTON TO MAPS */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-sm font-bold transition-all shadow-md transform hover:-translate-y-0.5">
            <FaLocationDot className="text-brand-orange" /> {t('btnMap')}
          </button>
        </div>

      </div>
    </section>
  );
}

export default BrakeEducation;