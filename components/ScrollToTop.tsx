'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { SlArrowUpCircle } from 'react-icons/sl';
import { scrollTo } from 'seamless-scroll-polyfill';
import Tooltip from '@/components/Tooltip';
import { Tanimation } from '@/constants/typeInterface';
import { useMotionContext } from '@/hooks/useMotionContext';
import { Provider } from '@radix-ui/react-tooltip';

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
    show: { opacity: 1, transition: { duration: 0.3 } },
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
            <Provider delayDuration={400}>
              <Tooltip side="left" tooltipText="Click to scroll to the top">
                <i className="fixed top-[90%] z-50 ml-[85%] cursor-pointer md:ml-[94%]">
                  <SlArrowUpCircle
                    size={40}
                    className="text-blue-gradient-2 dark:text-orange"
                  />
                </i>
              </Tooltip>
            </Provider>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

export default ScrollToTop;
