'use client';

import { createContext, useContext, useRef, type RefObject } from 'react';
import { childrenNode } from '@/constants/typeInterface';

type TrefElements = {
  aboutMeRef: RefObject<HTMLHeadingElement>;
  skillsRef: RefObject<HTMLHeadingElement>;
  experienceRef: RefObject<HTMLHeadingElement>;
  projectsRef: RefObject<HTMLHeadingElement>;
  contactRef: RefObject<HTMLHeadingElement>;
};

const RefsContext = createContext(null as unknown as TrefElements);

export const useRefsContext = () => {
  return useContext(RefsContext);
};

const RefsProvider = ({ children }: childrenNode) => {
  const aboutMeRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLHeadingElement>(null);
  const experienceRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLHeadingElement>(null);
  const contactRef = useRef<HTMLHeadingElement>(null);

  return (
    <RefsContext.Provider
      value={{ aboutMeRef, skillsRef, experienceRef, projectsRef, contactRef }}
    >
      {children}
    </RefsContext.Provider>
  );
};

export default RefsProvider;
