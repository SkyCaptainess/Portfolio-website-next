import React, { useRef } from 'react';
import { useMotionContext } from '@/hooks/useMotionContext';
import { useRefsContext } from '@/hooks/useRefsContext';
import { AnimatePresence, motion } from 'framer-motion';
import { setMenuType } from '@/constants/typeInterface';
import { scrollToRef } from '@/constants/global';
import { useOutsideAlerter } from '@/hooks/useOutsideAlerter';
import { listElements } from '@/constants/global';

type menuType = {
  isMenuClicked: boolean;
};

const DropdownUl = ({
  isMenuClicked,
  setMenuClicked,
}: menuType & setMenuType) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { prefersReducedMotion } = useMotionContext() ?? false;
  const refsArray = Object.values(useRefsContext() ?? false);
  useOutsideAlerter(dropdownRef, () => setMenuClicked(false));

  const liElements = listElements.map((element, index) => {
    return (
      <li
        key={index}
        onClick={() =>
          scrollToRef(refsArray[index], prefersReducedMotion ?? false)
        }
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
          ref={dropdownRef}
          className="absolute top-20 left-0 z-50 w-full max-w-sm"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          exit={{ x: '-100vw' }}
          transition={{ type: 'spring', duration: 0.3, bounce: 0.3 }}
          data-testid="dropdown-ul"
        >
          <ul className="bg-white-300 rounded-xl shadow-dropdown">
            {liElements}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownUl;
