import React from 'react';
import dynamic from 'next/dynamic';
import MotionProvider from '@/hooks/useMotionContext';
import RefsProvider from '@/hooks/useRefsContext';
import ThemeProvider from '@/hooks/useThemeContext';
import AboutMe from '@/sections/about-me/AboutMe';
import MainNavigation from '@/sections/navbar/MainNavigation';
import Splash from '@/sections/splash/Splash';

const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'));
const Hero = dynamic(() => import('@/sections/hero/Hero'));
const Skills = dynamic(() => import('@/sections/skills/Skills'));
const Experience = dynamic(() => import('@/sections/experience/Experience'));
const Projects = dynamic(() => import('@/sections/projects/Projects'));
const Contact = dynamic(() => import('@/sections/contact/Contact'));
const Footer = dynamic(() => import('@/sections/footer/Footer'));

const Page = () => {
  return (
    <ThemeProvider>
      <Splash>
        <MotionProvider>
          <RefsProvider>
            <div className="relative z-0">
              <div className="navbar-gradient"></div>
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
        </MotionProvider>
      </Splash>
    </ThemeProvider>
  );
};

export default Page;
