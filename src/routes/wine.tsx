import React from 'react';
import MainLayout from '../layouts/MainLayout';
import WineHero from '../components/wine/WineHero';
import FeaturedWines from '../components/wine/FeaturedWines';

const WinePage = () => {
  return (
    <MainLayout>
      <WineHero />
      <FeaturedWines />
    </MainLayout>
  );
};

export default WinePage;