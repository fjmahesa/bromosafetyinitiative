import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronLeft, FaChevronRight, FaImages, FaTimes, FaSearchPlus, FaSearchMinus, FaUndo } from 'react-icons/fa';
import { useFadeIn } from '../hooks/useFadeIn';

function GalleryCarousel() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'id';
  const [domRef, isVisible] = useFadeIn(150);

  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);

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

  const maxIndex = Math.max(0, images.length - itemsPerSlide);

  const prevSlide = () => {
    if (images.length <= itemsPerSlide) return;
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    if (images.length <= itemsPerSlide) return;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    if (images.length <= itemsPerSlide || selectedImage) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, images, itemsPerSlide, selectedImage]);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerSlide, maxIndex, currentIndex]);

  const handleZoomIn = () => setZoomScale((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoomScale((prev) => Math.max(prev - 0.25, 0.5));
  const handleZoomReset = () => setZoomScale(1);

  const closeLightbox = () => {
    setSelectedImage(null);
    setZoomScale(1);
  };

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
      <div className="max-w-7xl mx-auto relative group">
        
        
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-extrabold tracking-widest text-[var(--color-brand-orange)] uppercase bg-[var(--color-brand-orange-light)]/20 px-3 py-1 rounded-md mb-2">
            <FaImages className="inline mr-1" /> {currentLang === 'id' ? 'Galeri Aksi' : 'Action Gallery'}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
            Dokumentasi Lapangan BSI
          </h2>
        </div>

        
        <div className="w-full relative px-2 sm:px-12 overflow-hidden">
          
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` 
            }}
          >
            {images.map((image) => (
              <div 
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="w-full md:w-1/3 flex-shrink-0 px-3"
              >
                <div className="relative w-full h-auto bg-transparent rounded-2xl overflow-hidden cursor-pointer group/card hover:scale-[1.01] transition-transform duration-300">
                  <img 
                    src={image.url} 
                    alt={image.alt} 
                    className="w-full h-full object-contain block opacity-100 visible select-none transition-transform duration-500 group-hover/card:scale-102"
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                    loading="lazy"
                  />
                  
                  
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 rounded-2xl">
                    <span className="bg-slate-900/90 text-white p-3 rounded-full text-xs shadow-xl backdrop-blur-md flex items-center gap-1.5 font-bold tracking-wide scale-90 group-hover/card:scale-100 transition-transform duration-300">
                      <FaSearchPlus /> {currentLang === 'id' ? 'Lihat Foto' : 'View Image'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          {images.length > itemsPerSlide && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-lg z-20 cursor-pointer active:scale-95 transition-all md:opacity-0 md:group-hover:opacity-100"
              >
                <FaChevronLeft className="text-xs" />
              </button>

              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-lg z-20 cursor-pointer active:scale-95 transition-all md:opacity-0 md:group-hover:opacity-100"
              >
                <FaChevronRight className="text-xs" />
              </button>
            </>
          )}

        </div>

        
        {images.length > itemsPerSlide && (
          <div className="flex items-center justify-center gap-2 mt-8 z-20">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="h-2 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  width: index === currentIndex ? '24px' : '8px',
                  backgroundColor: index === currentIndex ? 'var(--color-brand-orange)' : '#cbd5e1'
                }}
              />
            ))}
          </div>
        )}

      </div>

      
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          
          <div 
            className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-3 z-50 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            
            <div className="hidden md:flex items-center gap-1.5 bg-slate-900/80 border border-white/10 p-1.5 rounded-xl backdrop-blur-lg shadow-2xl">
              <button 
                onClick={handleZoomIn}
                className="w-9 h-9 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer text-xs"
                title="Zoom In"
              >
                <FaSearchPlus />
              </button>
              <button 
                onClick={handleZoomOut}
                className="w-9 h-9 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer text-xs"
                title="Zoom Out"
              >
                <FaSearchMinus />
              </button>
              <button 
                onClick={handleZoomReset}
                className="w-9 h-9 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer text-xs"
                title="Reset Zoom"
              >
                <FaUndo />
              </button>
              <span className="text-white/60 text-xs font-bold px-2.5 whitespace-nowrap min-w-[50px] text-center">
                {Math.round(zoomScale * 100)}%
              </span>
            </div>

            
            <button 
              onClick={closeLightbox}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-xl flex items-center justify-center backdrop-blur-md transition-colors border border-white/10 cursor-pointer text-lg active:scale-95 shadow-2xl"
              title="Close Preview"
            >
              <FaTimes />
            </button>
          </div>

          {/* PERBAIKAN UTAMA:
            - Menggunakan overflow-scroll/auto yang tegas.
            - Jika sedang di-zoom (zoomScale > 1), block alignment diubah agar scrollbar berfungsi normal dari pojok kiri atas.
          */}
          <div 
            className={`w-full h-[75vh] md:h-[80vh] overflow-auto p-4 flex justify-center ${
              zoomScale > 1 ? 'items-start content-start' : 'items-center'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* - Lebar dikontrol dinamis lewat inline style width berbasis persentase.
              - max-w-none memaksa browser mengabaikan batas layar saat gambar membesar.
            */}
            <img 
              src={selectedImage.url} 
              alt={selectedImage.alt} 
              className="rounded-xl shadow-2xl border-2 border-white/5 transition-all duration-250 ease-out block"
              style={{ 
                width: `${zoomScale * 100}%`,
                maxHeight: zoomScale > 1 ? 'none' : '100%',
                maxWidth: zoomScale > 1 ? 'none' : '100%',
                objectFit: 'contain'
              }}
            />
          </div>

          
          {selectedImage.alt && (
            <p className="text-white/80 text-xs sm:text-sm font-semibold tracking-wide mt-4 bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5 max-w-xl text-center z-10">
              {selectedImage.alt}
            </p>
          )}
        </div>
      )}

    </section>
  );
}

export default GalleryCarousel;