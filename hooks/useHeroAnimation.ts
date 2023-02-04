import { useRef, useEffect } from 'react';
import { useInView, useAnimationControls } from 'framer-motion';

export const useHeroAnimation = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef);
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { type: 'spring', duration: 2, bounce: 0.3 },
      });
    }
    if (!isInView) {
      controls.start({
        opacity: 0,
        x: '-100vw',
      });
    }
  }, [isInView, controls]);

  return { controls, heroRef };
};
