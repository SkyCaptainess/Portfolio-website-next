'use client';

import { createContext, useContext, useRef } from 'react';
import { childrenNode } from '@/constants/typeInterface';

type TrefElements = {
  aboutMeRef: React.RefObject<HTMLHeadingElement>;
  skillsRef: React.RefObject<HTMLHeadingElement>;
  experienceRef: React.RefObject<HTMLHeadingElement>;
  projectsRef: React.RefObject<HTMLHeadingElement>;
  contactRef: React.RefObject<HTMLHeadingElement>;
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
