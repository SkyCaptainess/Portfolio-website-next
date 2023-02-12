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
import Splash from '@/sections/splash/Splash';
import MotionProvider from '@/hooks/useMotionContext';
import RefsProvider from '@/hooks/useRefsContext';

const Page = () => {
  return (
    <MotionProvider>
      <Splash>
        <RefsProvider>
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
        </RefsProvider>
      </Splash>
    </MotionProvider>
  );
};

export default Page;
