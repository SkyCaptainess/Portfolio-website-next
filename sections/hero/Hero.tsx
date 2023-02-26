'use client';

import React from 'react';
import Image from 'next/image';
import profilePic from '../../public/images/profile-light.webp';
import HeroButtons from '../../components/HeroButtons';
import { useMotionContext } from '@/hooks/useMotionContext';
import { motion } from 'framer-motion';
import { Tanimation } from '@/constants/typeInterface';

const Hero = () => {
  const { prefersReducedMotion } = useMotionContext() ?? false;
  const childAnimation: Tanimation = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', duration: 0.9, bounce: 0.4 },
    },
  };

  const containerAnimation: Tanimation = {
    ...childAnimation,
    show: {
      ...childAnimation.show,
      transition: {
        duration: 0.3,
        delayChildren: 0.7,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={containerAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.65 }}
      className="mx-auto mb-28 grid w-11/12 max-w-7xl grid-cols-1 pt-32 md:grid-cols-3 md:grid-rows-3 md:items-center md:justify-evenly md:gap-x-8 md:pt-60 lg:mb-60 xl:grid-cols-4"
    >
      <Image
        src={profilePic}
        alt="Profile Picture"
        priority
        className="profilePic "
      />
      <motion.h1
        variants={childAnimation}
        className="mb-4 md:col-span-2 md:row-start-1 md:row-end-2 md:mb-0 md:text-4xl xl:text-5xl"
      >
        <span
          className={`inline-block text-4xl xl:text-5xl ${
            prefersReducedMotion ? 'animate-none' : 'origin-wave animate-wave'
          }`}
        >
          👋
        </span>
        &nbsp;&nbsp;Hi there! I&apos;m{' '}
        <span className="bg-transparent bg-gradient-to-b from-aqua to-aqua bg-clip-text font-bold text-transparent transition-bgi duration-300 ease-out dark:bg-orange-gradient dark:text-transparent md:text-black-200">
          Nicholas
        </span>
        , I love to design and code beautifully simple things
      </motion.h1>
      <motion.h3
        variants={childAnimation}
        className="mb-4 md:col-span-2 md:row-start-2 md:row-end-2 md:mb-0 md:text-2xl xl:text-3xl"
      >
        Nothing excites me more than learning something new and starting a new
        adventure.
      </motion.h3>
      <motion.div
        variants={childAnimation}
        className="md:col-span-2 md:row-start-3 md:row-end-4 xl:gap-y-10"
      >
        <h3 className="mb-4 md:mb-8 md:text-2xl xl:text-3xl">
          Currently working as a SWE Trainee @{' '}
          <a
            aria-label="foodpanda"
            href="https://www.foodpanda.com"
            rel="noreferrer"
            target="_blank"
          >
            foodpanda
          </a>
        </h3>
        <HeroButtons />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
