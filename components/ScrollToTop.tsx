'use client';

import React, { useEffect, useState } from 'react';
import { useMotionContext } from '@/hooks/useMotionContext';
import { IconArrowBigUpLineFilled } from '@tabler/icons-react';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { Tanimation } from '@/constants/typeInterface';
import { scrollTo } from 'seamless-scroll-polyfill';

const ScrollToTop = () => {
  const [visibleButton, setVisibleButton] = useState<boolean>(false);
  const { prefersReducedMotion } = useMotionContext();

  useEffect(() => {
    const setBtnState = () => {
      if (window.scrollY > 400) {
        setVisibleButton(true);
      } else {
        setVisibleButton(false);
      }
    };
    window.addEventListener('scroll', setBtnState);

    return () => window.removeEventListener('scroll', setBtnState);
  }, []);

  const goToTop = () => {
    scrollTo(window, {
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  const animation: Tanimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.25 } },
  };

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {visibleButton && (
          <m.div
            variants={animation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="relative"
            onClick={goToTop}
          >
            <IconArrowBigUpLineFilled
              size={50}
              strokeWidth={2}
              color={'#00D4FF'}
              className="fixed z-50 top-[90%] ml-[90%] bg-none cursor-pointer md:ml-[94%]"
            />
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

export default ScrollToTop;
