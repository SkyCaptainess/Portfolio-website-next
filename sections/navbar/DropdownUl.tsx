import React from 'react';
import { useMotionContext } from '@/hooks/useMotionContext';
import { useRefsContext } from '@/hooks/useRefsContext';
import { AnimatePresence, motion } from 'framer-motion';
import { HamburgerProps } from '@/constants/typeInterface';
import { scrollToRef } from '@/constants/global';
import { listElements } from '@/constants/global';

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
    let lastElement = listElements.length - 1;
    return (
      <li
        key={index.toString()}
        onClick={() => {
          scrollToRef(refsArray[index], prefersReducedMotion ?? false);
          setMenuClicked((prevState) => !prevState);
        }}
        className={`dropdown-link ${
          index === 0
            ? 'rounded-t-xl'
            : index === lastElement
            ? 'rounded-b-xl p-0'
            : 'rounded-none'
        }`}
      >
        {index === lastElement ? (
          <a
            aria-label="resume pdf"
            href="https://drive.google.com/file/d/1kRKuXcY7BFh2te6BMJLDYogwU3V29dba/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
            className="redirect-button block h-full w-full rounded-t-none rounded-b-xl bg-aqua py-2.5 pl-4 font-bold text-white-400 transition-colors duration-300 ease-out hover:bg-dark-aqua hover:no-underline dark:text-black-300"
          >
            {element}
          </a>
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
          className="absolute top-12 left-0 z-50 w-full max-w-sm"
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
