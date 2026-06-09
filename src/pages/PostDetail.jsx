import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaCalendarAlt, FaUser, FaArrowLeft, FaClock } from 'react-icons/fa';

function PostDetail() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const currentLang = i18n.language.startsWith('en') ? 'en' : 'id';

  useEffect(() => {
    // Gunakan AbortController untuk membatalkan fetch lama jika id/bahasa berganti cepat
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

    // Cleanup function untuk memutus koneksi fetch lama jika komponen unmount
    return () => controller.abort();
    
  }, [id, i18n.language]); //  MENGGUNAKAN i18n.language JAUH LEBIH STABIL & AMAN

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

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      
      {/* TOMBOL KEMBALI */}
      <Link 
        to="/articles" 
        className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase text-slate-400 hover:text-[var(--color-brand-orange)] transition-colors mb-8 group"
      >
        <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" /> Kembali ke Halaman Artikel
      </Link>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LINGKUP ARTIKEL UTAMA */}
        <article className="lg:col-span-8 bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[10px] font-black tracking-widest text-[var(--color-brand-orange)] uppercase bg-[var(--color-brand-orange-light)] px-2.5 py-1 rounded-md border border-[var(--color-brand-orange-border)]">
              Edukasi Jalur
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400">
              <FaClock /> 4 Menit Baca
            </span>
          </div>

          <h1 
            className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight mb-6"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          <div className="flex items-center gap-6 border-b border-slate-100 pb-6 mb-8 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[var(--color-brand-orange)] text-white text-[10px] flex items-center justify-center font-black">BSI</div>
              <span className="text-slate-700">Admin Bromo Safety</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaCalendarAlt /> {formattedDate}
            </div>
          </div>

          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md bg-slate-100 mb-10">
            <img src={featuredImage} alt={post.title.rendered} className="w-full h-full object-cover" />
          </div>

          <div 
            className="prose prose-slate max-w-none 
              prose-p:text-base prose-p:sm:text-lg prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
              prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight prose-headings:mt-8 prose-headings:mb-4
              prose-h2:text-xl prose-h2:sm:text-2xl
              prose-strong:font-black prose-strong:text-slate-900
              prose-img:rounded-2xl prose-img:shadow-md
              prose-a:text-[var(--color-brand-orange)] prose-a:font-bold hover:prose-a:text-[var(--color-brand-orange-hover)]"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </article>

        {/* SIDEBAR REKOMENDASI */}
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