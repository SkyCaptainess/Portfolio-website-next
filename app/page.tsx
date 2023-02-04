import React from 'react';
import MainNavigation from '@/components/navbar/MainNavigation';
import Hero from '@/components/hero/Hero';

const Page = () => {
  return (
    <div className="relative w-screen">
      <MainNavigation />
      <Hero />
    </div>
  );
};

export default Page;
