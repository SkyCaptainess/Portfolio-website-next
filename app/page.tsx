import React from 'react';
import ScrollToTop from '@/components/ScrollToTop';
import MainNavigation from '@/sections/navbar/MainNavigation';
import Hero from '@/sections/hero/Hero';
import AboutMe from '@/sections/about-me/AboutMe';
import Skills from '@/sections/skills/Skills';
import Experience from '@/sections/experience/Experience';
import Projects from '@/sections/projects/Projects';
import Contact from '@/sections/contact/Contact';
import Footer from '@/sections/footer/Footer';

const Page = () => {
  return (
    <div className="relative z-0">
      <MainNavigation />
      <Hero />
      <AboutMe />
      <ScrollToTop />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
