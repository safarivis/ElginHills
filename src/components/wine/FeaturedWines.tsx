import React from 'react';

const FeaturedWines = () => {
  const wines = [
    {
      name: "Estate Cabernet",
      image: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "Bold and complex with notes of blackberry and cedar"
    },
    {
      name: "Reserve Chardonnay",
      image: "/images/wines/Chardonnayjpg.jpg",
      description: "Elegant and crisp with hints of apple and vanilla"
    },
    {
      name: "Heritage Red Blend",
      image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "A masterful blend of our finest estate grapes"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-16">Featured Wines</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {wines.map((wine) => (
            <div key={wine.name} className="group">
              <div className="relative overflow-hidden mb-6">
                <img 
                  src={wine.image} 
                  alt={wine.name}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">{wine.name}</h3>
              <p className="text-gray-600">{wine.description}</p>
              <button className="mt-4 border-b-2 border-gray-900 pb-1 hover:border-gray-600 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWines;