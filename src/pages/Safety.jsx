import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaShieldAlt, FaMotorcycle, FaMapMarkerAlt, FaExclamationTriangle, FaCheckCircle, FaBookOpen, FaHandHoldingHeart, FaArrowRight } from 'react-icons/fa';
import { useFadeIn } from '../hooks/useFadeIn';

const emergencyContacts = [
  { icon: FaPhoneAlt, label: 'safetyEmergency112', phone: '112', color: 'red' },
  { icon: FaMapMarkerAlt, label: 'safetyEmergencyPost', phone: 'safetyEmergencyPostPhone', color: 'brand-orange' },
  { icon: FaMotorcycle, label: 'safetyCoolingPoint', phone: 'safetyCoolingPointPhone', color: 'slate' },
];

const guidelines = [
  {
    icon: FaMotorcycle,
    key: 'safetyGuide1',
    title: 'safetyGuideTitle1',
    desc: 'safetyGuideDesc1',
    color: 'bg-amber-50 border-amber-200 text-amber-700',
    iconBg: 'bg-amber-100 text-amber-600',
  },
  {
    icon: FaExclamationTriangle,
    key: 'safetyGuide2',
    title: 'safetyGuideTitle2',
    desc: 'safetyGuideDesc2',
    color: 'bg-red-50 border-red-200 text-red-700',
    iconBg: 'bg-red-100 text-red-600',
  },
  {
    icon: FaShieldAlt,
    key: 'safetyGuide3',
    title: 'safetyGuideTitle3',
    desc: 'safetyGuideDesc3',
    color: 'bg-blue-50 border-blue-200 text-blue-700',
    iconBg: 'bg-blue-100 text-blue-600',
  },
  {
    icon: FaHandHoldingHeart,
    key: 'safetyGuide4',
    title: 'safetyGuideTitle4',
    desc: 'safetyGuideDesc4',
    color: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    iconBg: 'bg-emerald-100 text-emerald-600',
  },
];

const checklists = [
  { icon: FaCheckCircle, key: 'safetyCheck1' },
  { icon: FaCheckCircle, key: 'safetyCheck2' },
  { icon: FaCheckCircle, key: 'safetyCheck3' },
  { icon: FaCheckCircle, key: 'safetyCheck4' },
  { icon: FaCheckCircle, key: 'safetyCheck5' },
  { icon: FaCheckCircle, key: 'safetyCheck6' },
];

function Safety() {
  const { t } = useTranslation();
  const [heroRef, heroVisible] = useFadeIn(0);
  const [guideRef, guideVisible] = useFadeIn(100);
  const [checklistRef, checklistVisible] = useFadeIn(200);
  const [emergencyRef, emergencyVisible] = useFadeIn(300);
  const [ctaRef, ctaVisible] = useFadeIn(400);

  return (
    <div className="bg-slate-50 min-h-screen">

      <section className="relative bg-slate-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute -right-32 -top-32 w-96 h-96 bg-[var(--color-brand-orange)]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-slate-800 rounded-full blur-3xl pointer-events-none" />
        <div ref={heroRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center transition-all duration-700 ${heroVisible ? 'fade-in-visible' : 'fade-in-hidden'}`}>
          <span className="text-[var(--color-brand-orange)] bg-[var(--color-brand-orange-light)]/10 border border-[var(--color-brand-orange-border)]/30 text-xs font-black tracking-widest uppercase px-3 py-1.5 rounded-full inline-block mb-4">
            {t('safetyBadge')}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight max-w-3xl mx-auto leading-tight">
            {t('safetyHeroTitle')}
          </h1>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            {t('safetyHeroDesc')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="tel:112" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-extrabold tracking-widest uppercase px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md animate-pulse">
              <FaPhoneAlt /> {t('safetyEmergencyBtn')}
            </a>
            <Link to="/articles" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-extrabold tracking-widest uppercase px-8 py-3.5 rounded-xl border border-white/20 transition-all duration-300">
              <FaBookOpen /> {t('safetyGuideBtn')}
            </Link>
          </div>
        </div>
      </section>

      <div className="page-enter">

      <section ref={emergencyRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 transition-all duration-700 delay-300 ${emergencyVisible ? 'fade-in-visible' : 'fade-in-hidden'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {emergencyContacts.map((item, i) => {
            const Icon = item.icon;
            const isPhone = item.color === 'red';
            return (
              <a key={i} href={isPhone ? `tel:${item.phone}` : '#'}
                className={`flex items-center gap-4 bg-white border-2 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${isPhone ? 'border-red-200 hover:border-red-400 hover:shadow-red-200/50' : item.color === 'brand-orange' ? 'border-[var(--color-brand-orange-border)] hover:border-[var(--color-brand-orange)] hover:shadow-[var(--color-brand-orange)]/10' : 'border-slate-200 hover:border-slate-400'}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${isPhone ? 'bg-red-50 text-red-600' : item.color === 'brand-orange' ? 'bg-[var(--color-brand-orange-light)] text-[var(--color-brand-orange)]' : 'bg-slate-100 text-slate-600'}`}>
                  <Icon />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t(item.label)}</span>
                  <span className={`text-sm font-black mt-0.5 ${isPhone ? 'text-red-700' : 'text-slate-900'}`}>{isPhone ? item.phone : t(item.phone)}</span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section ref={guideRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 transition-all duration-700 ${guideVisible ? 'fade-in-visible' : 'fade-in-hidden'}`}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[var(--color-brand-orange)] bg-[var(--color-brand-orange-light)] border border-[var(--color-brand-orange-border)] text-xs font-black tracking-widest uppercase px-3 py-1.5 rounded-full inline-block mb-4">
            {t('safetyGuideBadge')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{t('safetyGuideSectionTitle')}</h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-3 max-w-xl mx-auto">{t('safetyGuideSectionDesc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guidelines.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className={`${item.color} border rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02]`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${item.iconBg}`}>
                    <Icon />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-black tracking-tight mb-2">{t(item.title)}</h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed opacity-90">{t(item.desc)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white border-y border-slate-200/60 py-16 md:py-24">
        <div ref={checklistRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${checklistVisible ? 'fade-in-visible' : 'fade-in-hidden'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-[var(--color-brand-orange)] bg-[var(--color-brand-orange-light)] border border-[var(--color-brand-orange-border)] text-xs font-black tracking-widest uppercase px-3 py-1.5 rounded-full inline-block mb-4">
                {t('safetyCheckBadge')}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{t('safetyCheckTitle')}</h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-3 leading-relaxed">{t('safetyCheckDesc')}</p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {checklists.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-200/60 rounded-xl p-4 transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50/50">
                      <Icon className="text-emerald-500 text-base mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-slate-700 leading-snug">{t(item.key)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden border border-slate-800">
            <div className="absolute -right-16 -bottom-16 w-40 h-40 bg-[var(--color-brand-orange)]/10 rounded-full blur-3xl" />
            <FaMapMarkerAlt className="text-[var(--color-brand-orange)] text-2xl mb-5" />
            <h3 className="text-xl font-black tracking-tight mb-3">{t('safetyCoolingTitle')}</h3>
            <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed mb-6">{t('safetyCoolingDesc')}</p>
            <Link to="/articles" className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase text-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange-hover)] transition-colors">
              {t('safetyCoolingBtn')} <FaArrowRight />
            </Link>
          </div>
          <div className="bg-white border border-slate-200/60 rounded-3xl p-8 sm:p-10">
            <FaShieldAlt className="text-[var(--color-brand-orange)] text-2xl mb-5" />
            <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3">{t('safetyReportTitle')}</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mb-6">{t('safetyReportDesc')}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase text-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange-hover)] transition-colors">
              {t('safetyReportBtn')} <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section ref={ctaRef} className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 transition-all duration-700 ${ctaVisible ? 'fade-in-visible' : 'fade-in-hidden'}`}>
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden border border-slate-800 text-center">
          <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-[var(--color-brand-orange)]/10 rounded-full blur-3xl" />
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">{t('safetyCtaTitle')}</h2>
          <p className="text-xs sm:text-sm text-slate-400 font-medium max-w-xl mx-auto leading-relaxed mb-8">{t('safetyCtaDesc')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:112" className="inline-flex w-full sm:w-auto justify-center items-center text-center bg-red-600 hover:bg-red-700 text-white text-xs font-extrabold tracking-widest uppercase px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md gap-2 animate-pulse">
              <FaPhoneAlt /> {t('safetyEmergencyBtn')}
            </a>
            <Link to="/" className="inline-flex w-full sm:w-auto justify-center items-center text-center bg-white/10 hover:bg-white/20 text-white text-xs font-extrabold tracking-widest uppercase px-8 py-3.5 rounded-xl border border-white/20 transition-all duration-300">
              {t('safetyBackBtn')}
            </Link>
          </div>
        </div>
      </section>

      </div>
    </div>
  );
}

export default Safety;
