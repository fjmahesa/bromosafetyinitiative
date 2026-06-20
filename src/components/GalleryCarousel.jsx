import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronLeft, FaChevronRight, FaImages } from 'react-icons/fa';
import { useFadeIn } from '../hooks/useFadeIn';

function GalleryCarousel() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'id';
  const [domRef, isVisible] = useFadeIn(150);

  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch('https://admin.bromosafetyinitiative.com/wp-json/wp/v2/galeri_rest_area?_embed');
        const posts = await response.json();

        if (Array.isArray(posts)) {
          const extractedImages = posts.map(post => {
            // Mengambil langsung media dari _embedded sesuai dengan log konsol Anda
            const mediaObj = post._embedded?.['wp:featuredmedia']?.[0];
            
            return {
              id: post.id,
              url: mediaObj?.source_url || 'https://placehold.co/800x500?text=Gambar+Kosong',
              alt: mediaObj?.alt_text || post.title?.rendered || "BSI Documentation"
            };
          });

          setImages(extractedImages);
        }
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, images]);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 mt-8">
        <div className="w-full h-[350px] bg-slate-100 animate-pulse rounded-3xl flex items-center justify-center text-slate-400 text-xs font-semibold">
          Loading BSI Gallery...
        </div>
      </div>
    );
  }

  if (images.length === 0) return null;

  return (
    <section 
      ref={domRef}
      className={`zoom-in-hidden ${isVisible ? 'zoom-in-visible' : ''} bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100 relative`}
    >
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-[var(--color-brand-orange)] uppercase bg-[var(--color-brand-orange-light)] px-3 py-1 rounded-md mb-3">
            <FaImages /> {currentLang === 'id' ? 'Galeri Aksi' : 'Action Gallery'}
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Dokumentasi Lapangan BSI
          </h2>
        </div>

        <div className="relative group w-full h-[300px] sm:h-[450px] md:h-[550px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-white shadow-slate-200/80">
          
          <div className="w-full h-full relative">
            <img 
              src={images[currentIndex]?.url} 
              alt={images[currentIndex]?.alt} 
              className="w-full h-full object-cover transition-all duration-700 ease-in-out select-none"
              key={currentIndex} // Memaksa re-render transisi gambar saat index berubah
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow-lg backdrop-blur-xs transition-all duration-350 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 cursor-pointer select-none active:scale-95"
          >
            <FaChevronLeft className="text-sm" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow-lg backdrop-blur-xs transition-all duration-350 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 cursor-pointer select-none active:scale-95"
          >
            <FaChevronRight className="text-sm" />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-slate-950/30 backdrop-blur-md px-3 py-1.5 rounded-full">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex ? 'w-6 bg-[var(--color-brand-orange)]' : 'w-2 bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default GalleryCarousel;