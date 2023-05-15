import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/button';
import { listElements, scrollToRef } from '@/constants/global';
import { Tbutton, Tvariants } from '@/constants/typeInterface';
import { useMotionContext } from '@/hooks/useMotionContext';
import { useRefsContext } from '@/hooks/useRefsContext';

const NavbarLinks = ({ childAnimation }: Pick<Tvariants, 'childAnimation'>) => {
  const { prefersReducedMotion } = useMotionContext() ?? false;
  const refsArray = Object.values(useRefsContext() ?? {});
  const ButtonProps: Tbutton<string> = {
    label: 'Resume PDF',
    link: 'https://drive.google.com/file/d/1kRKuXcY7BFh2te6BMJLDYogwU3V29dba/view?usp=sharing',
    linkClass: 'xl:text-xl',
    rel: 'noreferrer noopener',
    target: '_blank',
    text: 'Resume',
  };

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
          <Button {...ButtonProps} />
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
