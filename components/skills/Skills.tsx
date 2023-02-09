'use client';

import React, { lazy } from 'react';
import {
  goodCodingIcons,
  goodDesignIcons,
  averageCodingIcons,
  averageDesignIcons,
} from './common';
import SkillCategory from './SkillCategory';
import SkillsLight from '../../public/animations/skills-light.json';
import Animation from '../Animation';
import { m, useReducedMotion } from 'framer-motion';
import { Tanimation } from '@/constants/global';

const Lottie = lazy(() => import('lottie-react'));

const Skills = () => {
  const prefersReducedMotion = useReducedMotion();

  const childContainerAnimation: Tanimation = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : -20 },
    show: { opacity: 1, y: 0 },
  };

  const lottieAnimation: Tanimation = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 100 },
    show: { opacity: 1, x: 0 },
  };

  const containerAnimation: Tanimation = {
    ...childContainerAnimation,
    show: {
      ...childContainerAnimation.show,
      transition: {
        type: 'spring',
        duration: 1,
        bounce: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section>
      <Animation animation={containerAnimation} className="skillsContainer">
        <m.h2 variants={childContainerAnimation} className="skillsHeading">
          💪 Skills
        </m.h2>
        <m.div variants={containerAnimation}>
          <h3 className="skillsSubHeading">I am not that bad with:</h3>
          <SkillCategory heading="coding" icons={goodCodingIcons} />
          <SkillCategory heading="design" icons={goodDesignIcons} />
        </m.div>
        <m.div variants={containerAnimation}>
          <h3 className="skillsSubHeading">I have played around with</h3>
          <SkillCategory heading="coding" icons={averageCodingIcons} />
          <SkillCategory heading="design" icons={averageDesignIcons} />
        </m.div>
        <m.aside variants={lottieAnimation} className="skillsAnimation">
          <Lottie animationData={SkillsLight} />
        </m.aside>
      </Animation>
    </section>
  );
};

export default Skills;
