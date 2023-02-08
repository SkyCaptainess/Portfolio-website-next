import React from 'react';
import ScrollToTop from '@/components/ScrollToTop';
import MainNavigation from '@/components/navbar/MainNavigation';
import Hero from '@/components/hero/Hero';
import AboutMe from '@/components/about-me/AboutMe';
import Skills from '@/components/skills/Skills';

const Page = () => {
  return (
    <div className="relative z-0">
      <MainNavigation />
      <Hero />
      <AboutMe />
      <ScrollToTop />
      <Skills />
    </div>
  );
};

export default Page;
