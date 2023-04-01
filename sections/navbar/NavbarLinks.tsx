import React from 'react';
import { useMotionContext } from '@/hooks/useMotionContext';
import { useRefsContext } from '@/hooks/useRefsContext';
import { listElements } from '@/constants/global';
import { Tvariants } from '@/constants/typeInterface';
import { scrollToRef } from '@/constants/global';
import { motion } from 'framer-motion';

const NavbarLinks = ({ childAnimation }: Pick<Tvariants, 'childAnimation'>) => {
  const { prefersReducedMotion } = useMotionContext() ?? false;
  const refsArray = Object.values(useRefsContext() ?? {});

  const liElements = listElements.map((element, index) => {
    return (
      <motion.li
        variants={childAnimation}
        key={index.toString()}
        onClick={() =>
          scrollToRef(refsArray[index], prefersReducedMotion ?? false)
        }
        className="navbar-text cursor-pointer hover:underline hover:decoration-white-400 hover:decoration-2 hover:underline-offset-8"
      >
        {index === listElements.length - 1 ? (
          <button type="button" className="redirect-button">
            <a
              aria-label="resume pdf"
              href="https://drive.google.com/file/d/1kRKuXcY7BFh2te6BMJLDYogwU3V29dba/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
              className="h-full w-full text-base tracking-widest text-white-400 no-underline hover:no-underline dark:text-black-300 xl:text-xl"
            >
              Resume
            </a>
          </button>
        ) : (
          element
        )}
      </motion.li>
    );
  });

  return (
    <ul className="hidden flex-row items-center justify-between gap-x-6 lg:order-2 lg:flex 2xl:gap-x-10">
      {liElements}
    </ul>
  );
};

export default NavbarLinks;
