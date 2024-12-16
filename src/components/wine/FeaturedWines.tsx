import React, { useState } from 'react';
import OptimizedImage from '../common/OptimizedImage';

interface Wine {
  name: string;
  description: string;
  image: string;
  details: string[];
}

const FeaturedWines = () => {
  const [activeWine, setActiveWine] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const wines: Wine[] = [
    {
      name: "Estate Cabernet",
      description: "Bold and complex with notes of blackberry and cedar",
      image: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      details: [
        'Vintage: 2023',
        'Region: Elgin Valley',
        'Alcohol: 13.5%',
        'Style: Dry Red'
      ]
    },
    {
      name: "Reserve Chardonnay",
      description: "Elegant and crisp with hints of apple and vanilla",
      image: "/images/wines/Chardonnayjpg.jpg",
      details: [
        'Vintage: 2023',
        'Region: Elgin Valley',
        'Alcohol: 13.5%',
        'Style: Dry White'
      ]
    },
    {
      name: "Heritage Red Blend",
      description: "A masterful blend of our finest estate grapes",
      image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      details: [
        'Vintage: 2023',
        'Region: Elgin Valley',
        'Alcohol: 13.5%',
        'Style: Dry Red'
      ]
    }
  ];

  const handleTouchStart = (e: React.TouchEvent, index: number) => {
    setTouchStart(e.touches[0].clientY);
    setActiveWine(index);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    
    const touchEnd = e.changedTouches[0].clientY;
    const diff = touchStart - touchEnd;

    // If the user swiped up more than 50px, keep the details open
    // Otherwise, close them
    if (Math.abs(diff) < 50) {
      setActiveWine(null);
    }
    setTouchStart(null);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-6">Featured Wines</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Discover our collection of premium wines, crafted with passion in the heart of Elgin Valley
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {wines.map((wine, index) => (
            <div 
              key={wine.name}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 
                active:scale-[0.98] touch-manipulation"
              onTouchStart={(e) => handleTouchStart(e, index)}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <OptimizedImage
                  src={wine.image}
                  alt={wine.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-serif mb-2">{wine.name}</h3>
                <p className="text-white/90 mb-4 line-clamp-2 md:line-clamp-none">
                  {wine.description}
                </p>

                {/* Wine Details - Shown on touch/hover */}
                <div 
                  className={`space-y-2 transition-all duration-300 origin-bottom
                    ${activeWine === index ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
                >
                  {wine.details.map((detail, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-white/70 rounded-full mr-2" />
                      {detail}
                    </div>
                  ))}
                </div>

                <button 
                  className="mt-4 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2 rounded-full
                    hover:bg-white/20 transition-all duration-300 text-sm
                    active:scale-95 touch-manipulation"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWines;