import React, { type FC } from 'react';
import dynamic from 'next/dynamic';
import MotionProvider from '@/hooks/useMotionContext';
import RefsProvider from '@/hooks/useRefsContext';
import ThemeProvider from '@/hooks/useThemeContext';
import AboutMe from '@/sections/about-me/AboutMe';
import Hero from '@/sections/hero/Hero';
import MainNavigation from '@/sections/navbar/MainNavigation';
import Splash from '@/sections/splash/Splash';

const ScrollToTop = dynamic(() => import('@/components/ScrollToTop')) as FC;
const Skills = dynamic(() => import('@/sections/skills/Skills')) as FC;
const Experience = dynamic(
  () => import('@/sections/experience/Experience')
) as FC;
const Projects = dynamic(() => import('@/sections/projects/Projects')) as FC;
const Contact = dynamic(() => import('@/sections/contact/Contact')) as FC;
const Footer = dynamic(() => import('@/sections/footer/Footer')) as FC;

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
