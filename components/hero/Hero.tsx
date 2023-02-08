'use client';

import React from 'react';
import Image from 'next/image';
import profilePic from '../../public/profile-light.webp';
import HeroButtons from './HeroButtons';
import Animation from '../Animation';
import { m } from 'framer-motion';
import { Tanimation } from '@/constants/global';

const childAnimation: Tanimation = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0 },
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
const Hero = () => {
  return (
    <Animation animation={containerAnimation} className="heroSection">
      <Image src={profilePic} alt="Profile Picture" className="profilePic" />
      <m.h1
        variants={childAnimation}
        className="mb-4 md:mb-0 md:text-4xl md:col-span-2 md:row-start-1 md:row-end-2 xl:text-5xl"
      >
        <span className="waving">👋</span>
        &nbsp;&nbsp;Hi there! I&apos;m{' '}
        <span className="text-aqua font-bold md:text-black-200">Nicholas</span>,
        I love to design and code beautifully simple things
      </m.h1>
      <m.h3
        variants={childAnimation}
        className="mb-4 md:mb-0 md:text-2xl md:col-span-2 md:row-start-2 md:row-end-2 xl:text-3xl"
      >
        Nothing excites me more than learning something new and starting a new
        adventure.
      </m.h3>
      <m.div
        variants={childAnimation}
        className="md:col-span-2 md:row-start-3 md:row-end-4 xl:gap-y-10"
      >
        <h3 className="mb-4 md:text-2xl md:mb-8 xl:text-3xl">
          Currently working as a SWE Trainee @{' '}
          <a href="https://www.foodpanda.com" rel="noreferrer" target="_blank">
            foodpanda
          </a>
        </h3>
        <HeroButtons />
      </m.div>
    </Animation>
  );
};

export default Hero;
