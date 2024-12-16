import React, { useState, useEffect } from 'react';
import OptimizedImage from '../common/OptimizedImage';

const HomeHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  const images = [
    '/images/banner/MBD_ElginValley-03689 (1).jpg',
    '/images/banner/VW0002-Website-FA_MEDIA-GALLERY_Elgin-Wine-Valley-01.jpg.webp',
    '/images/banner/wines-of-elgin-oak-valley-936B1084.webp'
  ];

  // Initialize imagesLoaded array
  useEffect(() => {
    setImagesLoaded(new Array(images.length).fill(false));
  }, []);

  // Auto-rotate images only after first image is loaded
  useEffect(() => {
    if (!imagesLoaded[0]) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [imagesLoaded]);

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Swipe threshold of 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      } else {
        // Swipe right
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    }
    setTouchStart(null);
  };

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  // If first image hasn't loaded, show loading state
  if (!imagesLoaded[0]) {
    return (
      <div className="relative h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div 
      className="relative h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImageIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <OptimizedImage
            src={image}
            alt={`Elgin Hills ${index + 1}`}
            className="w-full h-full object-cover"
            priority={index === 0}
            sizes="100vw"
            onLoad={() => handleImageLoad(index)}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 transition-all">
            Welcome to Elgin Hills
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the finest apples and wines from the heart of Elgin Valley
          </p>
          <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3 rounded-full 
            hover:bg-white/20 transition-all duration-300 text-lg
            active:scale-95 touch-manipulation">
            Explore Our Products
          </button>
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
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