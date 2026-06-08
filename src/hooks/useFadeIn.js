import { useState, useEffect, useRef } from 'react';

export function useFadeIn(delayMs = 0) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Jika komponen masuk layar, set true dan stop observe (agar animasi hanya running sekali)
      if (entry.isIntersecting) {
        setTimeout(() => {
          setIsIntersecting(true);
        }, delayMs);
      }
    }, { threshold: 0.1 }); // Animasi jalan saat 10% bagian komponen terlihat

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delayMs]);

  return [domRef, isIntersecting];
}