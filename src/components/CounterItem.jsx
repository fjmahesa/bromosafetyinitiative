import React, { useState, useEffect } from 'react';

function CounterItem({ targetValue, isVisible }) {
  const [count, setCount] = useState(0);
  const isPercent = targetValue.includes('%');

  useEffect(() => {
    if (!isVisible) return;

    // Jika persen, hilangkan tanda % dan ubah koma menjadi titik agar dibaca desimal oleh JS
    const cleanValue = isPercent 
      ? targetValue.replace('%', '').replace(',', '.') 
      : targetValue.replace(/[^0-9]/g, '');

    const numericTarget = parseFloat(cleanValue);
    
    let start = 0;
    const duration = 1500; // 1.5 detik
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    const step = numericTarget / totalFrames;

    const timer = setInterval(() => {
      start += step;
      if (start >= numericTarget) {
        clearInterval(timer);
        setCount(numericTarget);
      } else {
        setCount(start);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [targetValue, isVisible, isPercent]);

  // Format ribuan untuk angka bulat
  const formatNumber = (num) => {
    return Math.floor(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // Cetak output akhir
  const renderOutput = () => {
    if (isPercent) {
      // Tampilkan dua angka di belakang koma, lalu ubah titik menjadi koma khas Indonesia
      return `+${count.toFixed(2).replace('.', ',')}%`;
    }
    if (targetValue.includes('+')) {
      return `${formatNumber(count)}+`;
    }
    return formatNumber(count);
  };

  return <>{renderOutput()}</>;
}

export default CounterItem;