import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowRight, FaSearch, FaFolderOpen, FaInbox } from 'react-icons/fa';

function ArticlesPage() {
  const { t, i18n } = useTranslation();
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // State untuk Fitur Pencarian & Filter
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const currentLang = i18n.language.startsWith('en') ? 'en' : 'id';

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setIsLoading(true);

    // 1. Ambil Data Semua Artikel (Maksimal 20 artikel pertama untuk halaman indeks)
    const fetchPosts = fetch(`https://admin.bromosafetyinitiative.com/wp-json/wp/v2/posts?_embed&per_page=20`, { signal })
      .then((res) => {
        if (!res.ok) throw new Error('Gagal mengambil artikel');
        return res.json();
      });

    // 2. Ambil Data Semua Kategori dari WordPress untuk Tombol Filter
    const fetchCats = fetch(`https://admin.bromosafetyinitiative.com/wp-json/wp/v2/categories`, { signal })
      .then((res) => {
        if (!res.ok) throw new Error('Gagal mengambil kategori');
        return res.json();
      });

    // Jalankan kedua fetch secara bersamaan (Parallel Fetching)
    Promise.all([fetchPosts, fetchCats])
      .then(([postsData, catsData]) => {
        setArticles(postsData);
        // Saring kategori bawaan WordPress yang bernama "Uncategorized" agar tidak muncul
        const filteredCats = catsData.filter(cat => cat.slug !== 'uncategorized');
        setCategories(filteredCats);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error('Error memuat data Blog:', err);
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, [i18n.language]);

  // LOGIKA PENYARINGAN (FILTER & SEARCH)
  const filteredArticles = articles.filter((post) => {
    // 1. Cocokkan dengan input pencarian (Judul atau Isi konten)
    const matchesSearch = 
      post.title.rendered.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.rendered.toLowerCase().includes(searchQuery.toLowerCase());

    // 2. Cocokkan dengan kategori yang dipilih
    const matchesCategory = 
      selectedCategory === 'all' || 
      post.categories.includes(parseInt(selectedCategory));

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 min-h-screen">
      
      {/* HEADER HALAMAN */}
      <div className="max-w-3xl mb-12">
        <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-[var(--color-brand-orange)] uppercase bg-[var(--color-brand-orange-light)] px-3 py-1 rounded-md border border-[var(--color-brand-orange-border)] mb-4">
          Pusat Edukasi & Literasi BSI
        </span>
        <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl leading-tight">
          Kumpulan Artikel & <br />
          <span className="text-[var(--color-brand-orange)]">Panduan Keselamatan</span>
        </h1>
        <p className="text-base text-slate-500 font-medium mt-4">
          Temukan info rute terupdate, tips pengereman motor matic, regulasi kawasan konservasi, serta berita resmi gerakan Bromo Safety Initiative.
        </p>
      </div>

      {/* BAR PENCARIAN & FILTER PANEL */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between border-b border-slate-200 pb-8 mb-12">
        
        {/* INPUT PENCARIAN (KIRI) */}
        <div className="relative w-full md:max-w-md flex items-center">
          <FaSearch className="absolute left-4 text-slate-400 text-sm pointer-events-none" />
          <input 
            type="text"
            placeholder="Cari judul artikel atau kata kunci..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-2xl pl-11 pr-4 py-3 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[var(--color-brand-orange)] focus:ring-4 focus:ring-[var(--color-brand-orange)]/5 transition-all"
          />
        </div>

        {/* REKAYASA FILTER KATEGORI (KANAN) */}
        <div className="flex flex-wrap items-center gap-2 overflow-x-auto max-w-full no-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider border transition-all cursor-pointer select-none
              ${selectedCategory === 'all'
                ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
              }
            `}
          >
            Semua Artikel
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id.toString())}
              className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider border transition-all cursor-pointer select-none whitespace-nowrap
                ${selectedCategory === cat.id.toString()
                  ? 'bg-[var(--color-brand-orange)] border-[var(--color-brand-orange)] text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }
              `}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* KONDISI LOADING STATE */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="animate-pulse bg-white rounded-3xl h-96 border border-slate-200" />
          ))}
        </div>
      ) : (
        /* KONDISI JIKA HASIL FILTER KOSONG */
        filteredArticles.length === 0 ? (
          <div className="text-center py-24 bg-white border border-dashed border-slate-200 rounded-3xl p-8 flex flex-col items-center max-w-md mx-auto">
            <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-4 border border-slate-100">
              <FaInbox className="text-xl" />
            </div>
            <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">Artikel Tidak Ditemukan</h3>
            <p className="text-xs text-slate-400 font-semibold mt-1">Tidak ada hasil yang cocok dengan kata kunci atau kategori terpilih. Coba cari kata kunci lainnya.</p>
          </div>
        ) : (
          /* GRID ARTIKEL */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch animate-fade-in-quick">
            {filteredArticles.map((post) => {
              const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1605540435647-88d707f7f4a2?w=600';
              const formattedDate = new Date(post.date).toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
              });

              return (
                <Link 
                  key={post.id}
                  to={`/post/${post.id}`}
                  className="flex flex-col rounded-3xl border-2 border-slate-200/80 bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-brand-orange)] hover:shadow-2xl hover:shadow-[var(--color-brand-orange)]/5 group cursor-pointer select-none"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <img 
                      src={featuredImage} 
                      alt={post.title.rendered}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
                      <div className="flex items-center gap-1.5">
                        <FaCalendarAlt /> {formattedDate}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaUser /> Admin BSI
                      </div>
                    </div>

                    <h3 
                      className="text-lg font-black text-slate-900 leading-snug mb-3 group-hover:text-[var(--color-brand-orange)] transition-colors line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />

                    <div 
                      className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium line-clamp-3 mb-6 mt-auto"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />

                    <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[var(--color-brand-orange)] uppercase tracking-widest pt-4 border-t border-slate-100 w-full group-hover:text-[var(--color-brand-orange-hover)] transition-colors">
                      Selengkapnya <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )
      )}
    </div>
  );
}

export default ArticlesPage;