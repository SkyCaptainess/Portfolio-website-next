'use client';

import React, { lazy } from 'react';
import AboutMeLight from '../../public/animations/aboutme-light.json';
import { m, useReducedMotion } from 'framer-motion';
import { Tanimation } from '@/constants/global';
import Animation from '../../components/Animation';

const Lottie = lazy(() => import('lottie-react'));

const AboutMe = () => {
  const prefersReducedMotion = useReducedMotion();

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
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="dark-blue-section">
      <Animation
        animation={containerAnimation}
        className="aboutmeContainer"
        viewAmount={0.7}
      >
        <m.div
          variants={childAnimation}
          className="md:col-span-2 md:justify-self-start"
        >
          <h2 className="aboutmeHeading">👨 About Me</h2>
          <h2 className="text-lg text-white-300 font-bold mb-5 md:mb-0 md:text-3xl xl:text-4xl">
            Never too late to learn
          </h2>
        </m.div>
        <m.h4 variants={childAnimation} className="aboutmeText md:col-span-2">
          I always thought my dream was to be a licensed aircraft engineer, it
          seemed like an appropriate dream given my education path, but I always
          felt mundane.
        </m.h4>
        <m.h4 variants={childAnimation} className="aboutmeText md:col-span-2">
          It all changed when I had my first and only programming module in
          university, the fascination it produced when I wrote my 1st Hello
          World program on Python.
        </m.h4>
        <m.h4 variants={childAnimation} className="aboutmeText md:col-span-2">
          Since then, I have taken a liking in web development which comprises
          of problem-solving skills and creativity.
        </m.h4>
        <m.h4
          variants={childAnimation}
          className="aboutmeText font-semibold m-0 md:col-span-2"
        >
          Graduated B.Eng. with Honours in Aircraft Systems Engineering, from{' '}
          <a className="cursor-pointer text-light-blue no-underline hover:underline hover:underline-offset-4">
            SIT
          </a>
          .
        </m.h4>
        <m.aside variants={lottieAnimation} className="aboutmeAnimation">
          <Lottie animationData={AboutMeLight} />
        </m.aside>
      </Animation>
      <div className="dark-blue-gradient"></div>
    </section>
  );
};

export default AboutMe;
