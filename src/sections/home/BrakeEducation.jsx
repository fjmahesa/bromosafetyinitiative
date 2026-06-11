import React, { useState } from 'react'; // <-- Tambahkan useState
import { useTranslation } from 'react-i18next';
import { FaGear, FaFire, FaWater, FaLocationDot } from 'react-icons/fa6'; 
import { useFadeIn } from '../../hooks/useFadeIn';

function BrakeEducation() {
  const { t } = useTranslation();
  
  // STATE BARU: Melacak kartu yang sedang aktif disentuh di mobile
  const [activeCardId, setActiveCardId] = useState(null);

  const [headerRef, headerVisible] = useFadeIn(100);
  const [cardRef1, cardVisible1] = useFadeIn(150);
  const [cardRef2, cardVisible2] = useFadeIn(300);
  const [cardRef3, cardVisible3] = useFadeIn(450);

  const educationCards = [
    {
      id: 1,
      ref: cardRef1,
      visible: cardVisible1,
      icon: <FaGear className="text-3xl text-orange-600" />,
      title: t('cardTitle1'),
      desc: t('cardDesc1'),
      tag: t('brakeTag1'),
      activeStyles: "border-brand-orange shadow-xl bg-white scale-[1.01]" // Gaya saat aktif disentuh
    },
    {
      id: 2,
      ref: cardRef2,
      visible: cardVisible2,
      icon: <FaFire className="text-3xl text-amber-600" />,
      title: t('cardTitle2'),
      desc: t('cardDesc2'),
      tag: t('brakeTag2'),
      activeStyles: "border-brand-orange shadow-xl bg-white scale-[1.01]"
    },
    {
      id: 3,
      ref: cardRef3,
      visible: cardVisible3,
      icon: <FaWater className="text-3xl text-blue-600" />,
      title: t('cardTitle3'),
      desc: t('cardDesc3'),
      tag: t('brakeTag3'),
      activeStyles: "border-brand-orange shadow-xl bg-white scale-[1.01]"
    }
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER MODUL */}
        <div ref={headerRef} className={`fade-in-hidden ${headerVisible ? 'fade-in-visible' : ''} text-center max-w-3xl mx-auto mb-16 md:mb-24`}>
          <span className="text-xs font-extrabold tracking-widest text-brand-orange uppercase bg-orange-50 px-3 py-1 rounded-md border border-orange-100">
            {t('brakeSectionBadge')}
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
          {educationCards.map((card) => {
            const isCurrentActive = activeCardId === card.id;
            
            return (
              <div
                key={card.id}
                ref={card.ref}
                // EVENT MOBIL: Memicu state aktif saat disentuh layar HP
                onTouchStart={() => setActiveCardId(card.id)}
                className={`scale-up-hidden ${card.visible ? 'scale-up-visible' : ''} flex flex-col border-2 rounded-2xl p-6 md:p-8 transition-all duration-300 group relative overflow-hidden cursor-pointer
                  /* Kondisi Default & Efek Hover Desktop */
                  bg-white border-slate-200/80 hover:border-brand-orange hover:shadow-xl
                  /* Kondisi Aktif Mobile (Mengikuti State) */
                  ${isCurrentActive ? card.activeStyles : ''}
                `}
              >
                {/* Garis Aksen Oranye */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-brand-orange transition-transform duration-300 ${isCurrentActive ? 'translate-y-0' : 'transform -translate-y-full group-hover:translate-y-0'}`} />

                {/* Tag Atas */}
                <span className={`w-fit text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-md mb-6 transition-colors ${isCurrentActive ? 'bg-orange-50 text-brand-orange' : 'bg-slate-100 text-slate-600 group-hover:bg-orange-50 group-hover:text-brand-orange'}`}>
                  {card.tag}
                </span>

                {/* Bundaran Ikon */}
                <div className={`p-4 bg-slate-50 rounded-2xl w-fit mb-6 border border-slate-100 transition-transform duration-300 ${isCurrentActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                  {card.icon}
                </div>

                {/* Judul Materi */}
                <h3 className={`text-xl font-black tracking-tight mb-3 transition-colors ${isCurrentActive ? 'text-brand-orange' : 'text-slate-900'}`}>
                  {card.title}
                </h3>

                {/* Narasi */}
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* BUTTON */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-sm font-bold transition-all shadow-md transform hover:-translate-y-0.5 cursor-pointer">
            <FaLocationDot className="text-brand-orange" /> {t('btnMap')}
          </button>
        </div>

      </div>
    </section>
  );
}

export default BrakeEducation;