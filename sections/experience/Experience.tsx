'use client';

import React, { lazy } from 'react';
import JobPointers from './JobPointers';
import ExperienceLight from '../../public/animations/experience-light.json';
import { m, useReducedMotion } from 'framer-motion';
import { Tanimation } from '@/constants/global';
import Animation from '../../components/Animation';

const Lottie = lazy(() => import('lottie-react'));

const Experience = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="dark-blue-section">
      <Animation
        animation={containerAnimation}
        className="aboutmeContainer md:mb-56 md:pt-0 md:grid-rows-5 md:gap-y-0 md:gap-x-10 md:justify-center md:items-center lg:mb-[18rem] xl:mb-64 2xl:mb-[19em] 3xl:mb-[22rem]"
      >
        <m.h2
          variants={childAnimation}
          className="aboutmeHeading md:col-span-2 md:-mt-3 md:row-start-1 md:row-end-1"
        >
          💼 Experience
        </m.h2>
        <JobPointers childAnimation={childAnimation} />
        <m.aside
          variants={lottieAnimation}
          className="aboutmeAnimation md:row-end-5"
        >
          <Lottie animationData={ExperienceLight} />
        </m.aside>
      </Animation>
      <div className="dark-blue-gradient"></div>
    </section>
  );
};

export default Experience;