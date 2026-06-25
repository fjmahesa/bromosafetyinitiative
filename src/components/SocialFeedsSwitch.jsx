import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaTiktok, FaWhatsapp, FaCompass } from "react-icons/fa";
import { useFadeIn } from "../hooks/useFadeIn";

function SocialFeedsSwitch() {
  const { t, i18n } = useTranslation();
  const currentLang =
    i18n.language && i18n.language.startsWith("en") ? "en" : "id";
  const [domRef, isVisible] = useFadeIn(150);

  const [activeTab, setActiveTab] = useState("instagram");

  const [igFeeds, setIgFeeds] = useState([]);
  const [loadingIg, setLoadingIg] = useState(true);

  useEffect(() => {
    if (activeTab === "instagram") {
      setLoadingIg(true);

      fetch("https://admin.bromosafetyinitiative.com/wp-json/bsi/v1/instagram")
        .then((res) => {
          if (!res.ok) throw new Error("Gagal mengambil data");
          return res.json();
        })
        .then((data) => {
          if (Array.isArray(data)) {
            setIgFeeds(data);
          }
          setLoadingIg(false);
        })
        .catch((err) => {
          console.error("Gagal memuat Custom Instagram API:", err);
          setLoadingIg(false);
        });
    }

    if (activeTab === "tiktok") {
      const scriptId = "elfsight-platform-script";
      let script = document.getElementById(scriptId);

      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [activeTab]);

  const waMessage =
    currentLang === "en"
      ? "Hello Bromo Safety Initiative, I would like to join the movement and collaborate."
      : "Halo Bromo Safety Initiative, saya ingin bergabung dengan gerakan ini dan berkolaborasi.";
  const whatsappUrl = `https://wa.me/6281180001091?text=${encodeURIComponent(waMessage)}`;

  return (
    <section
      ref={domRef}
      className={`zoom-in-hidden ${isVisible ? "zoom-in-visible" : ""} bg-slate-50/50 pt-20 pb-20 md:pt-32 md:pb-28 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 relative overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-[var(--color-brand-orange)] uppercase bg-[var(--color-brand-orange-light)] px-3 py-1 rounded-md border border-[var(--color-brand-orange-border)]/30 mb-4">
              <FaCompass className="text-sm" />{" "}
              {currentLang === "id" ? "Pusat Media Sosial" : "Social Media Hub"}
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight uppercase">
              {currentLang === "id" ? "Pantau Kabar Terbaru" : "Stay Updated"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mt-2">
              {currentLang === "id"
                ? "Ikuti dokumentasi aksi lapangan, infografis keselamatan, dan laporan lalu lintas riil langsung dari akun resmi kami."
                : "Follow field action documentation, safety infographics, and real-time traffic reports directly from our official accounts."}
            </p>
          </div>

          <div className="flex items-center bg-slate-200/60 p-1.5 rounded-2xl w-fit h-fit border border-slate-300/30">
            <button
              onClick={() => setActiveTab("instagram")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === "instagram"
                  ? "bg-slate-900 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <FaInstagram
                className={
                  activeTab === "instagram"
                    ? "text-[var(--color-brand-orange)]"
                    : ""
                }
              />{" "}
              Instagram
            </button>
            <button
              onClick={() => setActiveTab("tiktok")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === "tiktok"
                  ? "bg-slate-900 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <FaTiktok
                className={activeTab === "tiktok" ? "text-cyan-400" : ""}
              />{" "}
              TikTok
            </button>
          </div>
        </div>

        <div className="w-full rounded-3xl border-2 border-slate-200/60 p-4 sm:p-6 bg-white shadow-xl shadow-slate-200/40 min-h-[400px] relative overflow-hidden">
          {activeTab === "instagram" && (
            <div className="animate-fade-in-quick w-full h-full">
              <iframe
                src="https://admin.bromosafetyinitiative.com/instagram-feed"
                title="Instagram BSI Feed"
                className="w-full max-sm:h-[500px] sm:h-[575px] border-none rounded-2xl overflow-hidden dynamic-iframe"
                scrolling="no"
                loading="lazy"
              />
            </div>
          )}

          {activeTab === "tiktok" && (
            <div className="animate-fade-in-quick w-full h-full">
              <iframe
                src="https://admin.bromosafetyinitiative.com/tiktok-feed/"
                title="TikTok BSI Feed"
                className="w-full max-sm:h-[770px] sm:h-[640px] border-none rounded-2xl overflow-hidden"
                scrolling="no"
                loading="lazy"
              />
            </div>
          )}
        </div>

        <div className="mt-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 md:p-16 border border-slate-800 shadow-2xl overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div className="absolute right-0 top-0 w-80 h-80 bg-radial from-white/5 to-transparent rounded-full pointer-events-none -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-110" />

            <div className="space-y-3 text-center md:text-left relative z-10 max-w-md">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-brand-orange)] bg-[var(--color-brand-orange-light)]/10 border border-[var(--color-brand-orange-border)]/20 px-3 py-1 rounded-md">
                {currentLang === "en" ? "TAKE ACTION" : "AKSI NYATA"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase leading-tight pt-2">
                {t("igCtaTitle")}
              </h3>
            </div>

            <div className="relative z-10 flex-shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4.5 bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white text-xs font-black tracking-widest uppercase rounded-xl shadow-xl shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 active:scale-95 cursor-pointer select-none border border-orange-400/20 group/btn"
              >
                <FaWhatsapp className="text-base text-white transition-transform group-hover/btn:rotate-12" />
                <span>{t("igCtaBtn")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialFeedsSwitch;
