'use client';

import React, { useEffect, useState } from 'react';
import { useMotionContext } from '@/hooks/useMotionContext';
import { IconCircleArrowUp } from '@tabler/icons-react';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { Tanimation } from '@/constants/typeInterface';
import { scrollTo } from 'seamless-scroll-polyfill';
import Tooltip from '@/components/Tooltip';
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
                <IconCircleArrowUp
                  size={50}
                  strokeWidth={2}
                  className="fixed top-[90%] z-50 ml-[85%] cursor-pointer bg-none text-blue-gradient-2 dark:text-orange md:ml-[94%]"
                />
              </Tooltip>
            </Provider>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

export default ScrollToTop;
