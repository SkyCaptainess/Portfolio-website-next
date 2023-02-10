import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import {
  stockProjectCard,
  ioTProjectCard,
  pepsiProjectCard,
  unicurdProjectCard,
} from './projectDetails';

const Projects = () => {
  return (
    <section>
      <div className="mx-auto mb-12 w-11/12 max-w-7xl">
        <div className="mb-8">
          <h2 className="skillsHeading">🧑‍💻 Projects</h2>
          <h3 className="skillsSubHeading">
            Coding projects that I enjoyed working on.
          </h3>
        </div>
        <ProjectCard {...stockProjectCard} />
        <ProjectCard {...ioTProjectCard} />
        <ProjectCard {...pepsiProjectCard} />
        <ProjectCard {...unicurdProjectCard} />
      </div>
    </section>
  );
};

export default Projects;
