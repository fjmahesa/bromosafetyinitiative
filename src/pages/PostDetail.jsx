import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaCalendarAlt,
  FaUser,
  FaArrowLeft,
  FaClock,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaCopy,
  FaCheck
} from 'react-icons/fa';
// Menggunakan komponen khusus dari react-icons/fa6 untuk logo X (Twitter) terbaru
import { FaXTwitter } from 'react-icons/fa6';

function PostDetail() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // State untuk animasi feedback saat menyalin tautan
  const [isCopied, setIsCopied] = useState(false);

  const currentLang = i18n.language.startsWith('en') ? 'en' : 'id';
  const currentUrl = window.location.href; // Mengambil URL artikel aktif secara otomatis

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    window.scrollTo(0, 0);
    setIsLoading(true);

    // 1. Fetch Detail Artikel Utama
    fetch(`https://admin.bromosafetyinitiative.com/wp-json/wp/v2/posts/${id}?_embed`, { signal })
      .then((res) => {
        if (!res.ok) throw new Error('Gagal memuat artikel utama');
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error('Gagal memuat artikel utama:', err);
          setIsLoading(false);
        }
      });

    // 2. Fetch 4 Artikel Lainnya untuk Sidebar Kanan
    fetch(`https://admin.bromosafetyinitiative.com/wp-json/wp/v2/posts?_embed&per_page=4&exclude=${id}`, { signal })
      .then((res) => {
        if (!res.ok) throw new Error('Gagal memuat artikel bilah samping');
        return res.json();
      })
      .then((data) => setRecentPosts(data))
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error('Gagal memuat artikel bilah samping:', err);
        }
      });

    return () => controller.abort();
  }, [id, i18n.language]);

  // FUNGSI COPY LINK (MENYALIN TAUTAN)
  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        setIsCopied(true);
        // Kembalikan ikon menjadi semula setelah 2 detik
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => console.error('Gagal menyalin tautan:', err));
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-pulse space-y-8">
        <div className="h-6 bg-slate-200 rounded-md w-24" />
        <div className="h-12 bg-slate-200 rounded-xl w-3/4" />
        <div className="aspect-[16/7] bg-slate-200 rounded-3xl w-full" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-32 font-black text-slate-400 uppercase tracking-widest text-sm">
        Artikel tidak ditemukan.
      </div>
    );
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1605540435647-88d707f7f4a2?w=1200';
  const formattedDate = new Date(post.date).toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
  const articleTitle = post.title.rendered;

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20">

      {/* TOMBOL KEMBALI */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase text-slate-400 hover:text-[var(--color-brand-orange)] transition-colors mb-8 group"
      >
        <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" /> Kembali ke Beranda
      </Link>

      {/* GRID LAYOUT: 8 KOLOM KONTEN, 4 KOLOM SIDEBAR */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* LINGKUP ARTIKEL UTAMA (8 KOLOM) */}
        <article className="lg:col-span-8 bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-10 shadow-xs">

          {/* KATEGORI & ESTIMASI BACA */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[10px] font-black tracking-widest text-[var(--color-brand-orange)] uppercase bg-[var(--color-brand-orange-light)] px-2.5 py-1 rounded-md border border-[var(--color-brand-orange-border)]">
              Edukasi Jalur
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400">
              <FaClock /> 4 Menit Baca
            </span>
          </div>

          {/* JUDUL UTAMA */}
          <h1
            className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight mb-6"
            dangerouslySetInnerHTML={{ __html: articleTitle }}
          />

          {/* METADATA PENULIS */}
          <div className="flex items-center gap-6 border-b border-slate-100 pb-6 mb-8 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[var(--color-brand-orange)] text-white text-[10px] flex items-center justify-center font-black">BSI</div>
              <span className="text-slate-700">Admin Bromo Safety</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaCalendarAlt /> {formattedDate}
            </div>
          </div>

          {/* HERO IMAGE ARTIKEL */}
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md bg-slate-100 mb-10">
            <img src={featuredImage} alt={articleTitle} className="w-full h-full object-cover" />
          </div>

          {/* ISI BODY ARTIKEL */}
          <div
            className="prose prose-slate max-w-none 
              prose-p:text-base prose-p:sm:text-lg prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
              prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight prose-headings:mt-8 prose-headings:mb-4
              prose-h2:text-xl prose-h2:sm:text-2xl
              prose-strong:font-black prose-strong:text-slate-900
              prose-img:rounded-2xl prose-img:shadow-md
              prose-a:text-[var(--color-brand-orange)] prose-a:font-bold hover:prose-a:text-[var(--color-brand-orange-hover)] mb-12"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* ==================== PANEL TOMBOL SHARE KE SOSIAL MEDIA ==================== */}
          <div className="border-t border-slate-100 pt-8 mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-black uppercase tracking-wider text-slate-800">Bagikan Informasi Ini</h4>
              <p className="text-xs text-slate-400 font-medium mt-0.5">Satu kepedulian Anda bisa menyelamatkan nyawa pengendara lain.</p>
            </div>

            {/* Jajaran Ikon Bulat */}
            <div className="flex flex-wrap items-center gap-3">

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share to Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#1877F2] hover:bg-[#166FE5] hover:scale-110 shadow-md shadow-[#1877F2]/20 transition-all duration-300"
              >
                {/* Pastikan sudah meng-import FaFacebook dari 'react-icons/fa' di bagian atas file */}
                <FaFacebook className="text-lg" />
              </a>

              {/* WHATSAPP */}
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' - ' + currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share to WhatsApp"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#25D366] hover:bg-[#20ba5a] hover:scale-110 shadow-md shadow-[#25D366]/20 transition-all duration-300"
              >
                <FaWhatsapp className="text-lg" />
              </a>

              {/* INSTAGRAM (Catatan: API Web IG tidak mendukung direct text share, dialihkan membuka web IG) */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Open Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#E1306C] hover:bg-[#c2255c] hover:scale-110 shadow-md shadow-[#E1306C]/20 transition-all duration-300"
              >
                <FaInstagram className="text-lg" />
              </a>

              {/* TIKTOK (Catatan: API Web Tiktok mengarah ke beranda untuk upload/posting berkas edukasi) */}
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Open TikTok"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#000000] hover:bg-[#1a1a1a] hover:scale-110 shadow-md shadow-black/20 border border-slate-800 transition-all duration-300"
              >
                <FaTiktok className="text-sm" />
              </a>

              {/* X (TWITTER) */}
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(articleTitle)}&url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share to X"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#000000] hover:bg-[#1a1a1a] hover:scale-110 shadow-md shadow-black/20 border border-slate-800 transition-all duration-300"
              >
                <FaXTwitter className="text-sm" />
              </a>

              {/* COPY LINK BUTTON (Dengan icon Kertas & Feedback Sukses) */}
              <button
                onClick={handleCopyLink}
                title="Salin Tautan"
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer select-none hover:scale-110 shadow-md
                  ${isCopied
                    ? 'bg-emerald-500 shadow-emerald-500/20'
                    : 'bg-slate-500 hover:bg-slate-600 shadow-slate-500/20'
                  }
                `}
              >
                {isCopied ? <FaCheck className="text-sm animate-fade-in-quick" /> : <FaCopy className="text-sm" />}
              </button>

            </div>
          </div>
          {/* ============================================================================ */}

        </article>

        {/* SIDEBAR REKOMENDASI (4 KOLOM) - STICKY POSITION */}
        <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-xs">
            <h3 className="text-sm font-black tracking-wider text-slate-900 uppercase mb-6 pb-3 border-b border-slate-100 flex items-center justify-between">
              <span>Artikel Lainnya</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)]" />
            </h3>

            <div className="flex flex-col gap-5">
              {recentPosts.map((recent) => {
                const recentImg = recent._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1605540435647-88d707f7f4a2?w=150';
                const recentDate = new Date(recent.date).toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', {
                  month: 'short', day: 'numeric', year: 'numeric'
                });

                return (
                  <Link
                    key={recent.id}
                    to={`/post/${recent.id}`}
                    className="flex gap-4 items-start group select-none cursor-pointer"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-100 shadow-xs">
                      <img src={recentImg} alt={recent.title.rendered} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        {recentDate}
                      </span>
                      <h4
                        className="text-sm font-extrabold text-slate-800 group-hover:text-[var(--color-brand-orange)] transition-colors leading-snug line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: recent.title.rendered }}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden border border-slate-800">
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[var(--color-brand-orange)]/10 rounded-full blur-2xl" />
            <h4 className="text-base font-black tracking-tight mb-2">Butuh Bantuan Medis di Bromo?</h4>
            <p className="text-xs text-slate-400 font-medium leading-relaxed mb-4">Tekan tombol darurat fisik untuk langsung tersambung ke Command Center Ambulans Sukapura.</p>
            <a
              href="tel:112"
              className="inline-flex w-full justify-center items-center text-center bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white text-xs font-extrabold tracking-widest uppercase py-3 rounded-xl transition-all duration-300 shadow-md shadow-[var(--color-brand-orange)]/20"
            >
              Hubungi 112 Sekarang
            </a>
          </div>
        </aside>

      </div>
    </div>
  );
}

export default PostDetail;