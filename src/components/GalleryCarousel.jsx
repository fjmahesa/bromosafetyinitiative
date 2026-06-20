import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronLeft, FaChevronRight, FaImages, FaTimes, FaSearchPlus } from 'react-icons/fa';
import { useFadeIn } from '../hooks/useFadeIn';

function GalleryCarousel() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'id';
  const [domRef, isVisible] = useFadeIn(150);

  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [selectedImage, setSelectedImage] = useState(null);
  const [slideDirection, setSlideDirection] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else {
        setItemsPerSlide(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch('https://admin.bromosafetyinitiative.com/wp-json/wp/v2/galeri_rest_area?_embed');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const posts = await response.json();

        if (Array.isArray(posts)) {
          const extractedImages = posts
            .map(post => {
              const mediaObj = post._embedded?.['wp:featuredmedia']?.[0];
              const finalUrl = mediaObj?.source_url || post.featured_image_src_url || post.featured_media_src;
              return {
                id: post.id,
                url: finalUrl,
                alt: mediaObj?.alt_text || post.title?.rendered || "BSI Documentation"
              };
            })
            .filter(img => img.url !== undefined && img.url !== null && img.url !== '');

          setImages(extractedImages);
        }
      } catch (error) {
        console.error("Gagal memuat data galeri:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const totalSlides = Math.ceil(images.length / itemsPerSlide);

  useEffect(() => {
    setCurrentSlide(0);
  }, [itemsPerSlide]);

  const triggerSlideAnimation = (targetSlide, direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection(direction);
    
    setTimeout(() => {
      setCurrentSlide(targetSlide);
      setSlideDirection(direction === 'slide-left' ? 'enter-right' : 'enter-left');
      
      setTimeout(() => {
        setIsAnimating(false);
        setSlideDirection('');
      }, 500);
    }, 200);
  };

  const prevSlide = () => {
    if (totalSlides <= 1 || isAnimating) return;
    const target = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    triggerSlideAnimation(target, 'slide-right');
  };

  const nextSlide = () => {
    if (totalSlides <= 1 || isAnimating) return;
    const target = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
    triggerSlideAnimation(target, 'slide-left');
  };

  useEffect(() => {
    if (totalSlides <= 1 || selectedImage) return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [currentSlide, totalSlides, selectedImage, isAnimating]);

  const activeImages = images.slice(
    currentSlide * itemsPerSlide,
    (currentSlide * itemsPerSlide) + itemsPerSlide
  );

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 my-8">
        <div className="w-full h-[350px] bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400 text-xs font-semibold animate-pulse">
          Memuat Galeri Rest Area BSI...
        </div>
      </div>
    );
  }

  if (images.length === 0) return null;

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 relative block clear-both overflow-hidden">
      
      <style>{`
        .slide-item {
          transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease;
          opacity: 1;
          transform: translateX(0);
        }
        .slide-left .slide-item { transform: translateX(-40px); opacity: 0; }
        .slide-right .slide-item { transform: translateX(40px); opacity: 0; }
        .enter-right .slide-item { transform: translateX(40px); opacity: 0; }
        .enter-left .slide-item { transform: translateX(-40px); opacity: 0; }
      `}</style>

      <div className="max-w-7xl mx-auto relative group">
        
        {/* HEADER */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-extrabold tracking-widest text-[var(--color-brand-orange)] uppercase bg-[var(--color-brand-orange-light)]/20 px-3 py-1 rounded-md mb-2">
            <FaImages className="inline mr-1" /> {currentLang === 'id' ? 'Galeri Aksi' : 'Action Gallery'}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
            Dokumentasi Lapangan BSI
          </h2>
        </div>

        {/* CONTAINER SLIDER */}
        <div className="w-full relative px-2 sm:px-12">
          
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${slideDirection}`}>
            {activeImages.map((image, index) => (
              <div 
                key={image.id} 
                onClick={() => setSelectedImage(image)}
                className="slide-item relative w-full h-auto bg-transparent rounded-2xl overflow-hidden cursor-pointer group/card hover:scale-[1.01]"
                style={{ 
                  transitionDelay: `${isAnimating || slideDirection.startsWith('enter') ? index * 80 : 0}ms`
                }}
              >
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-auto object-contain block opacity-100 visible select-none transition-transform duration-500 group-hover/card:scale-102"
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                  loading="lazy"
                />
                
                {/* Hover Overlay View Image */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 rounded-2xl">
                  <span className="bg-slate-900/90 text-white p-3 rounded-full text-xs shadow-xl backdrop-blur-md flex items-center gap-1.5 font-bold tracking-wide scale-90 group-hover/card:scale-100 transition-transform duration-300">
                    <FaSearchPlus /> {currentLang === 'id' ? 'Lihat Foto' : 'View Image'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON NAVIGASI */}
          {totalSlides > 1 && (
            <>
              <button 
                onClick={prevSlide}
                disabled={isAnimating}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-slate-900 disabled:opacity-50 text-white flex items-center justify-center shadow-lg z-20 cursor-pointer active:scale-95 transition-all md:opacity-0 md:group-hover:opacity-100"
              >
                <FaChevronLeft className="text-xs" />
              </button>

              <button 
                onClick={nextSlide}
                disabled={isAnimating}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-slate-900 disabled:opacity-50 text-white flex items-center justify-center shadow-lg z-20 cursor-pointer active:scale-95 transition-all md:opacity-0 md:group-hover:opacity-100"
              >
                <FaChevronRight className="text-xs" />
              </button>
            </>
          )}

        </div>

        {/* DOTS INDICATOR */}
        {totalSlides > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8 z-20">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && triggerSlideAnimation(index, index > currentSlide ? 'slide-left' : 'slide-right')}
                /* PERBAIKAN WARNA KELAS:
                  - Menggunakan style inline background dari var(--color-brand-orange) 
                    saat index sama dengan currentSlide, agar selaras dengan index.css
                */
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide ? 'w-6' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                style={{
                  backgroundColor: index === currentSlide ? 'var(--color-brand-orange)' : undefined
                }}
              />
            ))}
          </div>
        )}

      </div>

      {/* PORTAL MODAL VIEWIMAGE (LIGHTBOX OVERLAY) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-xl flex items-center justify-center backdrop-blur-md transition-colors border border-white/10 cursor-pointer text-lg z-50 active:scale-95"
          >
            <FaTimes />
          </button>

          <div 
            className="relative max-w-6xl w-full h-[75vh] md:h-[80vh] flex items-center justify-center select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.url} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border-2 border-white/5 animate-zoom-in"
            />
          </div>

          {selectedImage.alt && (
            <p className="text-white/80 text-xs sm:text-sm font-semibold tracking-wide mt-4 bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5 max-w-xl text-center">
              {selectedImage.alt}
            </p>
          )}
        </div>
      )}

    </section>
  );
}

export default GalleryCarousel;