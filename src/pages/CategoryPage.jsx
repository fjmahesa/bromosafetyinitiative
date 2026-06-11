import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaCalendarAlt, FaUser, FaArrowRight, FaFolderOpen } from 'react-icons/fa';

function CategoryPage() {
  const { categorySlug } = useParams();
  const { t, i18n } = useTranslation();
  const [articles, setArticles] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const currentLang = i18n.language.startsWith('en') ? 'en' : 'id';

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setIsLoading(true);

    // Langkah 1: Cari ID Kategori berdasarkan slug teksnya
    fetch(`https://admin.bromosafetyinitiative.com/wp-json/wp/v2/categories?slug=${categorySlug}`, { signal })
      .then(res => res.json())
      .then(categoriesData => {
        if (categoriesData && categoriesData.length > 0) {
          const catId = categoriesData[0].id;
          setCategoryName(categoriesData[0].name);

          // Langkah 2: Ambil semua artikel yang masuk dalam ID Kategori tersebut
          return fetch(`https://admin.bromosafetyinitiative.com/wp-json/wp/v2/posts?_embed&categories=${catId}`, { signal });
        } else {
          throw new Error('Kategori tidak ditemukan');
        }
      })
      .then(res => res.json())
      .then(postsData => {
        setArticles(postsData);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [categorySlug, i18n.language]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto w-full px-4 py-20 animate-pulse space-y-8 page-enter">
        <div className="h-8 bg-slate-200 rounded-xl w-1/4" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map(n => <div key={n} className="bg-slate-200 rounded-3xl h-80" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 min-h-screen page-enter">
      {/* Breadcrumb / Penanda Kategori */}
      <div className="mb-12">
        <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[var(--color-brand-orange)] bg-[var(--color-brand-orange-light)] px-3 py-1 rounded-md border border-[var(--color-brand-orange-border)] mb-4">
          <FaFolderOpen /> {t('catBadge')}
        </span>
        <h1 className="text-3xl font-black text-slate-900 sm:text-5xl capitalize">
          {t('catArchive')} {categoryName}
        </h1>
      </div>

      {articles.length === 0 ? (
        <div className="text-center py-20 text-slate-400 font-bold">{t('catEmpty')}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((post) => {
            const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1605540435647-88d707f7f4a2?w=600';
            const formattedDate = new Date(post.date).toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', {
              year: 'numeric', month: 'long', day: 'numeric'
            });

            return (
              <Link 
                key={post.id}
                to={`/post/${post.slug}`} // <-- Arahkan menggunakan slug teks
                className="flex flex-col rounded-3xl border-2 border-slate-200/80 bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-brand-orange)] shadow-xs group"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img src={featuredImage} alt={post.title.rendered} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
                    <FaCalendarAlt /> {formattedDate}
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-3 group-hover:text-[var(--color-brand-orange)] transition-colors line-clamp-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  <div className="text-xs sm:text-sm text-slate-500 line-clamp-3 mb-6 mt-auto" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[var(--color-brand-orange)] uppercase tracking-widest pt-4 border-t border-slate-100 w-full">
                    {t('catReadMore')} <FaArrowRight />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;