import React from 'react';
import { motion } from 'framer-motion';
import { HamburgerProps } from '@/constants/typeInterface';

const Hamburger = ({ isMenuClicked, setMenuClicked }: HamburgerProps) => {
  const clickHandler = () => {
    setMenuClicked((prevState) => !prevState);
  };

  const transitionType = { type: 'spring', duration: 0.4, bounce: 0.5 };
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
    <div
      className="h-full cursor-pointer"
      onClick={clickHandler}
      data-testid="hamburger-btn"
    >
      <motion.div
        animate={variant}
        variants={variantType.top}
        transition={transitionType}
        className="h-[2px] w-8 bg-black-200 dark:bg-white-400"
      />
      <motion.div
        animate={variant}
        variants={variantType.center}
        transition={transitionType}
        className="my-2 h-[2px] w-8 bg-black-200 dark:bg-white-400"
      />
      <motion.div
        animate={variant}
        variants={variantType.bottom}
        transition={transitionType}
        className="h-[2px] w-8 bg-black-200 dark:bg-white-400"
      />
    </div>
  );
};

export default Hamburger;
