'use client';

import React from 'react';
import { projectCards } from './projectDetails';
import Animation from '@/components/Animation';
import ProjectCard from '@/components/ProjectCard';
import { useMotionContext } from '@/hooks/useMotionContext';
import { useRefsContext } from '@/hooks/useRefsContext';
import { Tanimation } from '@/constants/typeInterface';
import { Provider } from '@radix-ui/react-tooltip';

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

  const displayCards = projectCards.map((card) => {
    return <ProjectCard key={card.id} animation={animation} {...card} />;
  });

  return (
    <section>
      <div className="mx-auto mb-20 w-11/12 max-w-7xl sm:mb-28 2xl:mb-44">
        <Animation animation={animation} className="mb-8" viewAmount={0.7}>
          <h2
            ref={projectsRef}
            className="white-bg-heading mb-5 text-lg md:mb-0 md:text-3xl xl:text-4xl"
          >
            👇
            <span className="span-heading from-black-400 to-black-400">
              Projects
            </span>
          </h2>
          <h3 className="white-sub-heading text-lg font-bold md:text-3xl xl:text-4xl">
            Coding projects that I enjoyed working on.
          </h3>
        </Animation>
        <Provider delayDuration={400}>{displayCards}</Provider>
      </div>
    </section>
  );
};

export default Projects;
