import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Memaksa jendela browser gulir ke posisi paling atas (koordinat X: 0, Y: 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Efek ini akan berjalan setiap kali rute jalan (pathname) berubah

  return null; // Komponen ini tidak merender elemen UI apa pun
}

export default ScrollToTop;