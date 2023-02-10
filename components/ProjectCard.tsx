import React from 'react';
import Image from 'next/image';
import { Tproject } from '@/sections/projects/projectDetails';

const ProjectCard = ({
  id,
  image,
  projectTitle,
  projectDesc,
  stack,
  links,
}: Tproject) => {
  const createProjectIcons = (
    iconList: Tproject['stack'] | Tproject['links']
  ) =>
    iconList.map((icon, index) => (
      <div
        key={index}
        className={`tooltip tooltip-info tooltip-top ${
          icon?.url ? 'cursor-pointer' : 'cursor-default'
        }`}
        data-tip={icon.tooltipText}
      >
        {icon?.url ? (
          <icon.Icon key={index} size={35} color="#343434" />
        ) : (
          <a href={icon.url} rel="noreferrer" target="_blank">
            <icon.Icon key={index} size={35} color="#343434" />
          </a>
        )}
      </div>
    ));

  return (
    <ul className="relative z-0 list-none mb-5">
      <li className="projectCard">
        <h3
          className={`skillsSubHeading tracking-wide font-bold md:mb-0 md:row-start-1 md:row-end-2 ${
            id % 2 === 0
              ? 'md:col-start-1 md:col-end-7'
              : 'md:col-start-6 md:col-end-13'
          }`}
        >
          {projectTitle}
        </h3>
        <p
          className={`text-sm mb-2 md:text-lg xl:text-xl md:row-start-2 md:row-end-4 md:shadow-project md:p-4 md:bg-white-300 ${
            id % 2 === 0
              ? 'md:col-start-1 md:col-end-7'
              : 'md:col-start-6 md:col-end-13'
          }`}
        >
          {projectDesc}
        </p>
        <div
          className={`row-span-1 mb-2 md:row-start-4 md:row-end-5 ${
            id % 2 === 0
              ? 'md:col-start-1 md:col-end-7'
              : 'md:col-start-6 md:col-end-13'
          }`}
        >
          <h4 className="projectIconsHeading">Tech Stack</h4>
          <div className="projectIcons">{createProjectIcons(stack)}</div>
        </div>
        <div
          className={`row-span-1 mb-2 md:row-start-5 md:row-end-6 ${
            id % 2 === 0
              ? 'md:col-start-1 md:col-end-7'
              : 'md:col-start-6 md:col-end-13'
          }`}
        >
          <h4 className="projectIconsHeading">Links</h4>
          <div className="projectIcons">{createProjectIcons(links)}</div>
        </div>
        <div>
          <Image
            src={image}
            alt={`Image of ${projectTitle}`}
            className={`projectImage ${
              id % 2 === 0 ? 'md:left-[45%]' : 'md:left-0'
            }`}
          />
        </div>
      </li>
    </ul>
  );
};

export default ProjectCard;
