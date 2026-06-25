import { useState, useEffect, useRef } from 'react';

export function useFadeIn(delayMs = 0) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      
      if (entry.isIntersecting) {
        setTimeout(() => {
          setIsIntersecting(true);
        }, delayMs);
      }
    }, { threshold: 0.1 }); 

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