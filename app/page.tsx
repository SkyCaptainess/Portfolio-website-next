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
import ThemeProvider from '@/hooks/useThemeContext';

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
