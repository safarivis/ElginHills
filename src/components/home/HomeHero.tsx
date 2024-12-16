import React, { useState, useEffect } from 'react';

const HomeHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const images = [
    '/images/banner/MBD_ElginValley-03689 (1).jpg',
    '/images/banner/VW0002-Website-FA_MEDIA-GALLERY_Elgin-Wine-Valley-01.jpg.webp',
    '/images/banner/wines-of-elgin-oak-valley-936B1084.webp'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      } else {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    }
    setTouchStart(null);
  };

  return (
    <div 
      className="relative h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImageIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Elgin Hills ${index + 1}`}
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center text-center z-20">
        <div className="max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Welcome to Elgin Hills
          </h1>
          <p className="text-xl text-white/90">
            Experience the finest apples and wines from the heart of Elgin Valley
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 touch-manipulation
              ${currentImageIndex === index 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeHero;