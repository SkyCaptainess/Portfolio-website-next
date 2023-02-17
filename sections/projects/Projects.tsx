'use client';

import React from 'react';
import { useMotionContext } from '@/hooks/useMotionContext';
import { useRefsContext } from '@/hooks/useRefsContext';
import ProjectCard from '@/components/ProjectCard';
import {
  stockProjectCard,
  ioTProjectCard,
  pepsiProjectCard,
  unicurdProjectCard,
} from './projectDetails';
import Animation from '@/components/Animation';
import { Tanimation } from '@/constants/typeInterface';

const Projects = () => {
  const { prefersReducedMotion } = useMotionContext() ?? false;
  const { projectsRef } = useRefsContext() ?? {};

  const animation: Tanimation = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 1.5,
        bounce: 0.4,
      },
    },
  };

  return (
    <section>
      <div className="mx-auto mb-20 w-11/12 max-w-7xl sm:mb-28 2xl:mb-44">
        <Animation animation={animation} className="mb-8" viewAmount={0.7}>
          <h2 ref={projectsRef} className="white-bg-heading">
            👇
            <span className="span-heading from-black-400 to-black-400">
              Projects
            </span>
          </h2>
          <h3 className="white-sub-heading font-bold">
            Coding projects that I enjoyed working on.
          </h3>
        </Animation>
        <ProjectCard {...stockProjectCard} animation={animation} />
        <ProjectCard {...ioTProjectCard} animation={animation} />
        <ProjectCard {...pepsiProjectCard} animation={animation} />
        <ProjectCard {...unicurdProjectCard} animation={animation} />
      </div>
    </section>
  );
};

export default Projects;
