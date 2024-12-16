import React from 'react';
import MainLayout from '../layouts/MainLayout';
import WineHero from '../components/wine/WineHero';
import FeaturedWines from '../components/wine/FeaturedWines';
import WineTasting from '../components/wine/WineTasting';

const WinePage = () => {
  return (
    <MainLayout>
      <WineHero />
      <FeaturedWines />
      <WineTasting />
    </MainLayout>
  );
};

export default WinePage;