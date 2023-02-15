'use client';

import React from 'react';
import { useMotionContext } from '@/hooks/useMotionContext';
import { useThemeContext } from '@/hooks/useThemeContext';
import DropdownMenu from './DropdownMenu';
import NavbarLinks from './NavbarLinks';
import { IconMoodSmileBeam } from '@tabler/icons-react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { motion } from 'framer-motion';
import { Tanimation } from '@/constants/typeInterface';

const MainNavigation = () => {
  // const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const { darkMode, setDarkMode, toggleThemeHandler } =
    useThemeContext() ?? false;
  const { prefersReducedMotion } = useMotionContext() ?? false;

  const childAnimation: Tanimation = {
    hidden: {
      y: prefersReducedMotion ? 0 : -50,
    },
    show: {
      y: 0,
      transition: {
        type: 'spring',
        duration: 1,
        bounce: 0.4,
      },
    },
  };

  const containerAnimation: Tanimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  return (
    <nav className="mx-auto mb-6 w-11/12 max-w-7xl md:mb-60">
      <motion.div
        variants={containerAnimation}
        initial="hidden"
        animate="show"
        className="relative flex flex-row items-center justify-between py-8"
      >
        <motion.div
          variants={childAnimation}
          className="order-2 flex flex-row items-center gap-x-2 lg:order-1"
        >
          <h1 className="navbar-text text-xl lg:text-xl 2xl:text-[1.75rem]">
            NICHOLAS
          </h1>
          <IconMoodSmileBeam
            size={24}
            color={`${darkMode ? '#E9ECEF' : '#F8F8F8'}`}
            className="hidden sm:block"
          />
        </motion.div>
        <div className="order-first lg:order-2">
          <DropdownMenu />
          <NavbarLinks childAnimation={childAnimation} />
        </div>
        <motion.div variants={childAnimation} className="order-last">
          <DarkModeSwitch
            checked={darkMode}
            onChange={(checked: boolean) => setDarkMode(checked)}
            onClick={toggleThemeHandler}
            sunColor={'#F8F8F8'}
            moonColor={'#FFB26B'}
            data-testid="darkModeSwitch"
          />
        </motion.div>
      </motion.div>
      <div className="navbar-gradient"></div>
    </nav>
  );
};

export default MainNavigation;
