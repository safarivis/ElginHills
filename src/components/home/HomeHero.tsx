import React, { useState, useEffect, useCallback } from 'react';

const HomeHero = () => {
  const bannerImages = [
    'https://images.unsplash.com/photo-1474564862106-1f23d10b9d72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    '/images/banner/VW0002-Website-FA_MEDIA-GALLERY_Elgin-Wine-Valley-01.jpg.webp',
    '/images/banner/wines-of-elgin-oak-valley-936B1084.webp',
    '/images/banner/MBD_ElginValley-03689 (1).jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(bannerImages.length).fill(false));
  const [isFirstImageLoaded, setFirstImageLoaded] = useState(false);

  // Check if we're on mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Progressive image loading
  const loadImage = useCallback((src: string, index: number) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImagesLoaded(prev => {
        const newState = [...prev];
        newState[index] = true;
        return newState;
      });
      if (index === 0) {
        setFirstImageLoaded(true);
      }
    };
  }, []);

  // Load images progressively
  useEffect(() => {
    // Load first image immediately
    loadImage(bannerImages[0], 0);

    // Load other images after first one is loaded
    if (isFirstImageLoaded) {
      // On mobile, load fewer images
      const imagesToLoad = isMobile ? bannerImages.slice(1, 3) : bannerImages.slice(1);
      imagesToLoad.forEach((src, idx) => {
        loadImage(src, idx + 1);
      });
    }
  }, [isFirstImageLoaded, isMobile, loadImage]);

  // Rotate images
  useEffect(() => {
    if (!isFirstImageLoaded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const maxIndex = isMobile ? 2 : bannerImages.length - 1;
        return prevIndex === maxIndex ? 0 : prevIndex + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isFirstImageLoaded, isMobile]);

  // Get the appropriate image size based on device
  const getImageUrl = (url: string) => {
    if (url.includes('unsplash.com')) {
      // Adjust Unsplash image size based on device
      return `${url}&w=${isMobile ? 800 : 2340}`;
    }
    return url;
  };

  if (!isFirstImageLoaded) {
    return (
      <div className="relative h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative h-screen">
      {bannerImages.slice(0, isMobile ? 3 : bannerImages.length).map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            currentImageIndex === index ? 'opacity-100' : 'opacity-0'
          } ${!imagesLoaded[index] ? 'invisible' : ''}`}
          style={{
            backgroundImage: `url("${getImageUrl(image)}")`,
            zIndex: currentImageIndex === index ? 1 : 0
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}
      <div className="relative h-full flex items-center justify-center text-center z-10">
        <div className="max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Premium Apples from the Heart of Elgin
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Experience the finest apple varieties grown in South Africa's premier apple-growing region
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;