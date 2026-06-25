import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; 
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

function ArticlesSection() {
  const { t, i18n } = useTranslation();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  const currentLang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'id';

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setArticles([]); 
    setIsLoading(true);
    
    
    
    
    fetch(`https://admin.bromosafetyinitiative.com/wp-json/wp/v2/posts?_embed&per_page=3&lang=${currentLang}`, { signal })
      .then((res) => {
        if (!res.ok) throw new Error('Gagal memuat data dari WordPress');
        return res.json();
      })
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Fetch lama dibatalkan karena perpindahan halaman/bahasa.');
        } else {
          console.error('Error REST API WordPress:', err);
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, [currentLang]); 

  return (
    <section id="articles" className="bg-slate-50 py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-extrabold tracking-widest text-[var(--color-brand-orange)] uppercase bg-[var(--color-brand-orange-light)] px-3 py-1 rounded-md border border-[var(--color-brand-orange-border)]">
            {t('navArticles')}
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mt-4">
            {t('articlesSectionHeading')}
          </h2>
        </div>

        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="animate-pulse bg-white rounded-3xl h-96 border border-slate-200" />
            ))}
          </div>
        ) : (
          /* DYNAMIC ARTICLES GRID */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {articles.map((post) => {
              
              const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1605540435647-88d707f7f4a2?w=600';
              
              
              const formattedDate = new Date(post.date).toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
              });

              return (
                <Link 
                  key={post.id}
                  to={`/post/${post.slug}`} 
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
                        <FaUser /> {t('articlesSectionAuthor')}
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
                      {t('articlesSectionReadMore')} <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}

export default ArticlesSection;