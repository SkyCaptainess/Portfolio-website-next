'use client';

import React, { lazy } from 'react';
import { useMotionContext } from '@/hooks/useMotionContext';
import { useRefsContext } from '@/hooks/useRefsContext';
import JobPointers from './JobPointers';
import ExperienceLottie from '../../public/animations/experience.json';
import { m } from 'framer-motion';
import { Tanimation } from '@/constants/typeInterface';
import Animation from '../../components/Animation';

const Lottie = lazy(() => import('lottie-react'));

const Experience = () => {
  const { prefersReducedMotion } = useMotionContext() ?? false;
  const { experienceRef } = useRefsContext() ?? {};

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
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  return (
    <section className="dark-blue-section">
      <Animation
        animation={containerAnimation}
        className="dark-blue-container mb-40 md:mb-72 md:grid-rows-5 md:items-center md:justify-center md:gap-y-0 md:gap-x-10 md:pt-0 lg:mb-[22rem] xl:mb-80 2xl:mb-[26rem] 3xl:mb-[22rem]"
        viewAmount={0.65}
      >
        <m.h2
          ref={experienceRef}
          variants={childAnimation}
          className="mb-5 text-xl font-bold text-blue md:col-span-2 md:row-start-1 md:row-end-1 md:mb-0 md:-mt-3 md:text-3xl xl:text-4xl"
        >
          🧑‍💻<span className="span-heading">Experience</span>
        </m.h2>
        <JobPointers childAnimation={childAnimation} />
        <m.aside variants={lottieAnimation} className="experience-animation">
          <Lottie
            animationData={ExperienceLottie}
            loop={prefersReducedMotion ? 1 : true}
          />
        </m.aside>
      </Animation>
      <div className="dark-blue-gradient -left-[6rem] xl:h-[130%] 2xl:-left-40 2xl:h-[140%]"></div>
    </section>
  );
};

export default Experience;
