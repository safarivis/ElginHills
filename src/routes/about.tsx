import React from 'react';
import MainLayout from '../layouts/MainLayout';
import AboutUs from '../components/about/AboutUs';

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="relative h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/MainPageBanner/AppleOrchard.jpg")'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-6">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-white/90">
              A legacy of innovation, sustainability, and excellence in apple farming
            </p>
          </div>
        </div>
      </div>
      <AboutUs />
    </MainLayout>
  );
};

export default AboutPage;
