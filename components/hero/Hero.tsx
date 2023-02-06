'use client';

import React from 'react';
import Image from 'next/image';
import profilePic from '../../public/profile-light.webp';
import HeroButtons from './HeroButtons';
import Animation from '../Animation';
import { Tanimation } from '@/constants/global';

const animation: Tanimation = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', duration: 1, bounce: 0.4 },
  },
};

const Hero = () => {
  return (
    <Animation animation={animation} className="heroSection">
      <Image src={profilePic} alt="Profile Picture" className="profilePic" />
      <h1 className="mb-4 md:mb-0 md:text-4xl md:col-span-2 md:row-start-1 md:row-end-2 xl:text-5xl">
        <span className="waving">👋</span>
        &nbsp;&nbsp;Hi there! I&apos;m{' '}
        <span className="text-aqua font-bold md:text-black-200">Nicholas</span>,
        I love to design and code beautifully simple things
      </h1>
      <h3 className="mb-4 md:mb-0 md:text-2xl md:col-span-2 md:row-start-2 md:row-end-2 xl:text-3xl">
        Nothing excites me more than learning something new and starting a new
        adventure.
      </h3>
      <div className="md:col-span-2 md:row-start-3 md:row-end-4 xl:gap-y-10">
        <h3 className="mb-4 md:text-2xl md:mb-8 xl:text-3xl">
          Currently working as a SWE Trainee @{' '}
          <a href="https://www.foodpanda.com" rel="noreferrer" target="_blank">
            foodpanda
          </a>
        </h3>
        <HeroButtons />
      </div>
    </Animation>
  );
};

export default Hero;
