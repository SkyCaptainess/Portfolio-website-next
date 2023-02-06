import React from 'react';
import MainNavigation from '@/components/navbar/MainNavigation';
import Hero from '@/components/hero/Hero';
import AboutMe from '@/components/about-me/AboutMe';

const Page = () => {
  return (
    <div className="relative z-0 w-screen">
      <MainNavigation />
      <Hero />
      <AboutMe />
    </div>
  );
};

export default Page;
