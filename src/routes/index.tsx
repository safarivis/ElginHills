import React from 'react';
import MainLayout from '../layouts/MainLayout';
import HomeHero from '../components/home/HomeHero';
import AppleVarieties from '../components/home/AppleVarieties';
import Contact from '../components/home/Contact';
import Sustainability from '../components/home/Sustainability';

const HomePage = () => {
  return (
    <MainLayout>
      <HomeHero />
      <AppleVarieties />
      <Sustainability />
      <Contact />
    </MainLayout>
  );
};

export default HomePage;