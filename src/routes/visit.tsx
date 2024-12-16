import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Accommodations from '../components/visit/Accommodations';

const VisitPage = () => {
  return (
    <MainLayout>
      <div className="relative h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/accommodation/cottages.webp")'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-6">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Stay & Experience
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Immerse yourself in the beauty of our valley with accommodations for every type of traveler
            </p>
          </div>
        </div>
      </div>
      <Accommodations />
    </MainLayout>
  );
};

export default VisitPage;
