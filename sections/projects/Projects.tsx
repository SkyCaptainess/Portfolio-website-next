'use client';

import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import {
  stockProjectCard,
  ioTProjectCard,
  pepsiProjectCard,
  unicurdProjectCard,
} from './projectDetails';
import Animation from '@/components/Animation';
import { useReducedMotion } from 'framer-motion';
import { Tanimation } from '@/constants/global';

const Projects = () => {
  const prefersReducedMotion = useReducedMotion();

  const animation: Tanimation = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 1,
        bounce: 0.4,
      },
    },
  };

  return (
    <section>
      <div className="mx-auto mb-20 w-11/12 max-w-7xl sm:mb-28 2xl:mb-44">
        <Animation animation={animation} className="mb-8">
          <h2 className="skillsHeading">🧑‍💻 Projects</h2>
          <h3 className="skillsSubHeading">
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
