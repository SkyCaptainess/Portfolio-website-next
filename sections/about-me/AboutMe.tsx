'use client';

import React, { lazy } from 'react';
import { useMotionContext } from '@/hooks/useMotionContext';
import { useRefsContext } from '@/hooks/useRefsContext';
import { useThemeContext } from '@/hooks/useThemeContext';
import AboutMeLight from '../../public/animations/aboutme-light.json';
import AboutMeDark from '../../public/animations/aboutme-dark.json';
import { m } from 'framer-motion';
import { Tanimation } from '@/constants/typeInterface';
import Animation from '../../components/Animation';

const Lottie = lazy(() => import('lottie-react'));

const AboutMe = () => {
  const { prefersReducedMotion } = useMotionContext() ?? false;
  const { aboutMeRef } = useRefsContext() ?? {};
  const { darkMode } = useThemeContext() ?? false;

  const animationData = darkMode ? AboutMeDark : AboutMeLight;

  const childAnimation: Tanimation = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -100 },
    show: { opacity: 1, x: 0 },
  };

  const lottieAnimation: Tanimation = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 100 },
    show: { opacity: 1, x: 0 },
  };

  const containerAnimation: Tanimation = {
    ...childAnimation,
    show: {
      ...childAnimation.show,
      transition: {
        type: 'spring',
        duration: 1,
        bounce: 0.4,
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  return (
    <section className="dark-blue-section">
      <Animation
        animation={containerAnimation}
        className="dark-blue-container md:mb-40 md:grid-rows-5 md:gap-y-4 lg:mb-52 2xl:mb-[15.5rem] 3xl:mb-[17rem]"
        viewAmount={0.7}
      >
        <m.div
          variants={childAnimation}
          className="md:col-span-2 md:justify-self-start"
        >
          <h2
            className="mb-5 text-xl font-bold md:mb-0 md:text-3xl xl:text-4xl"
            ref={aboutMeRef}
          >
            👨
            <span className="span-heading">About Me</span>
          </h2>
          <h2 className="mb-5 text-lg font-bold text-white-400 dark:text-white-300 md:mb-0 md:text-3xl xl:text-4xl">
            Never too late to learn
          </h2>
        </m.div>
        <m.h4 variants={childAnimation} className="about-me-text">
          I always thought my dream was to be a licensed aircraft engineer, it
          seemed like an appropriate dream given my education path, but I always
          felt mundane.
        </m.h4>
        <m.h4 variants={childAnimation} className="about-me-text">
          It all changed when I had my first and only programming module in
          university, the fascination it produced when I wrote my 1st Hello
          World program on Python.
        </m.h4>
        <m.h4 variants={childAnimation} className="about-me-text">
          Since then, I have taken a liking in web development which comprises
          of problem-solving skills and creativity.
        </m.h4>
        <m.h4
          variants={childAnimation}
          className="about-me-text m-0 font-semibold text-white-300"
        >
          Graduated B.Eng. with Honours in Aircraft Systems Engineering, from{' '}
          <a
            aria-label="SIT"
            href="https://www.singaporetech.edu.sg/undergraduate-programmes/aircraft-systems-engineering"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer text-light-blue no-underline hover:underline hover:underline-offset-4"
          >
            SIT
          </a>
          .
        </m.h4>
        <m.aside variants={lottieAnimation} className="about-me-animation">
          <Lottie
            animationData={animationData}
            loop={prefersReducedMotion ? 1 : true}
          />
        </m.aside>
      </Animation>
      <div className="dark-blue-gradient"></div>
    </section>
  );
};

export default AboutMe;
