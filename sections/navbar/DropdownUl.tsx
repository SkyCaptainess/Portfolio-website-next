import React from 'react';
import { useMotionContext } from '@/hooks/useMotionContext';
import { useRefsContext } from '@/hooks/useRefsContext';
import { AnimatePresence, motion } from 'framer-motion';
import { HamburgerProps } from '@/constants/typeInterface';
import { scrollToRef } from '@/constants/global';
// import { useOutsideAlerter } from '@/hooks/useOutsideAlerter';
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
    return (
      <li
        key={index}
        onClick={() => {
          scrollToRef(refsArray[index], prefersReducedMotion ?? false);
          setMenuClicked((prevState) => !prevState);
        }}
        className={`dropdown-link ${
          index === 0
            ? 'rounded-t-xl'
            : index === 4
            ? 'rounded-b-xl'
            : 'rounded-none'
        }`}
      >
        {element}
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
