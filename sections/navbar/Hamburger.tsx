import React from 'react';
import { motion } from 'framer-motion';
import { HamburgerProps } from '@/constants/typeInterface';

const Hamburger = ({ isMenuClicked, setMenuClicked }: HamburgerProps) => {
  const transitionType = {
    type: 'spring',
    duration: 0.4,
    bounce: 0.5,
    ease: `${isMenuClicked ? 'easeOut' : 'easeIn'}`,
  };
  const variant = isMenuClicked ? 'click' : 'unclick';
  const variantType = {
    top: {
      unclick: {
        rotate: 0,
        translateY: 0,
      },
      click: {
        rotate: 45,
        translateY: 10,
      },
    },
    center: {
      unclick: {
        x: 0,
      },
      click: {
        x: -100,
      },
    },
    bottom: {
      unclick: {
        rotate: 0,
        translateY: 0,
      },
      click: {
        rotate: -45,
        translateY: -10,
      },
    },
  };

  return (
    <ul
      onClick={() => setMenuClicked((prevState) => !prevState)}
      className="h-full cursor-pointer"
      data-testid="hamburger-btn"
    >
      <motion.li
        animate={variant}
        variants={variantType.top}
        transition={transitionType}
        className="h-[2px] w-8 bg-black-200 dark:bg-white-400"
      />
      <motion.li
        animate={variant}
        variants={variantType.center}
        transition={transitionType}
        className="my-2 h-[2px] w-8 bg-black-200 dark:bg-white-400"
      />
      <motion.li
        animate={variant}
        variants={variantType.bottom}
        transition={transitionType}
        className="h-[2px] w-8 bg-black-200 dark:bg-white-400"
      />
    </ul>
  );
};

export default Hamburger;
