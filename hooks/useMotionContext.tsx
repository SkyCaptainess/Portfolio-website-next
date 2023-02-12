'use client';

import { childrenNode } from '@/constants/typeInterface';
import { useReducedMotion } from 'framer-motion';
import { createContext, useContext } from 'react';

type TreducedMotion = {
  prefersReducedMotion: boolean | null;
};

const MotionContext = createContext(null as unknown as TreducedMotion);

export const useMotionContext = () => {
  return useContext(MotionContext);
};

const MotionProvider = ({ children }: childrenNode) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionContext.Provider value={{ prefersReducedMotion }}>
      {children}
    </MotionContext.Provider>
  );
};

export default MotionProvider;
