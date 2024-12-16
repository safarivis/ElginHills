import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Crafting Excellence in Every Bottle
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Experience the perfect harmony of tradition and innovation in our sustainable vineyard
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Explore Our Wines
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;