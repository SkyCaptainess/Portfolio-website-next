import React from 'react';
import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { HamburgerProps } from '@/constants/typeInterface';
import { scrollToRef } from '@/constants/global';
import { listElements } from '@/constants/global';
import { useMotionContext } from '@/hooks/useMotionContext';
import { useRefsContext } from '@/hooks/useRefsContext';

const DropdownUl = ({ isMenuClicked, setMenuClicked }: HamburgerProps) => {
  const { prefersReducedMotion } = useMotionContext() ?? false;
  const refsArray = Object.values(useRefsContext() ?? false);

  const transitionType = {
    type: 'spring',
    duration: 0.4,
    bounce: 0.3,
    ease: `${isMenuClicked ? 'easeOut' : 'easeIn'}`,
  };

  const liElements = listElements.map((element, index) => {
    const lastElement = listElements.length - 1;
    return (
      <li
        key={index.toString()}
        onClick={() => {
          scrollToRef(refsArray[index], prefersReducedMotion ?? false);
          setMenuClicked((prevState) => !prevState);
        }}
        className={clsx(
          'cursor-pointer font-mont font-semibold tracking-widest',
          'text-black-200 transition duration-200 hover:bg-white-300 hover:text-aqua',
          'rounded-none dark:text-white-200 dark:hover:bg-black-400 dark:hover:text-orange',
          {
            'rounded-t-xl': index === 0,
            'py-2.5 pl-4 ': index !== lastElement,
            'rounded-b-xl py-0 pl-0': index === lastElement,
          }
        )}
      >
        {index === lastElement ? (
          <Link
            aria-label="resume pdf"
            href="https://drive.google.com/file/d/1kRKuXcY7BFh2te6BMJLDYogwU3V29dba/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
            className={clsx(
              'redirect-button block h-full w-full rounded-b-xl rounded-t-none bg-aqua',
              'py-2.5 pl-4 font-bold text-white-400 transition-colors duration-300 ease-out',
              'hover:bg-dark-aqua hover:no-underline ',
              'dark:bg-light-orange dark:text-black-300 dark:hover:bg-orange-red'
            )}
          >
            {element}
          </Link>
        ) : (
          element
        )}
      </li>
    );
  });

  return (
    <AnimatePresence>
      {isMenuClicked && (
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          exit={{ x: '-100vw' }}
          transition={transitionType}
          className="absolute left-0 top-12 z-50 w-full max-w-sm"
          data-testid="dropdown-ul"
        >
          <ul className="rounded-xl bg-white-400 shadow-dropdown dark:bg-black-500 dark:shadow-none">
            {liElements}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownUl;
