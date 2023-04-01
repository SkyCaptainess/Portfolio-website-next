import React from 'react';
import { useThemeContext } from '@/hooks/useThemeContext';
import Image from 'next/image';
import { Tproject } from '@/sections/projects/projectDetails';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { Tanimation } from '@/constants/typeInterface';

const ProjectCard = ({
  id,
  image,
  projectTitle,
  projectDesc,
  stack,
  links,
  animation,
}: Tproject & { animation: Tanimation }) => {
  const { darkMode } = useThemeContext() ?? false;
  const iconColor = darkMode ? '#DEE2E6' : '#343434';

  const createProjectIcons = (
    iconList: Tproject['stack'] | Tproject['links']
  ) =>
    iconList.map((icon, index) => (
      <div
        key={icon.tooltipText}
        className={`tooltip tooltip-top tooltip-info dark:tooltip-warning ${
          icon?.url ? 'cursor-pointer' : 'cursor-default'
        }`}
        data-tip={icon.tooltipText}
      >
        {iconList === stack ? (
          <icon.Icon key={index} size={35} color={iconColor} />
        ) : (
          <a
            aria-label={icon.tooltipText}
            href={icon.url}
            rel="noreferrer"
            target="_blank"
          >
            <icon.Icon key={index} size={35} color={iconColor} />
          </a>
        )}
      </div>
    ));

  return (
    <LazyMotion features={domAnimation}>
      <m.ul
        variants={animation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="relative z-0 mb-5 list-none"
      >
        <li className="grid grid-rows-1 rounded-lg py-4 px-5 shadow-project transition-transform duration-300 ease-out hover:-translate-y-2 md:grid-cols-12 md:grid-rows-5 md:items-center md:justify-items-center md:rounded-none md:shadow-none md:transition-none md:hover:translate-y-0">
          <h3
            className={`white-sub-heading font-bold tracking-wide dark:text-[#FFA54E] md:row-start-1 md:row-end-2 md:mb-0 ${
              id % 2 === 0
                ? 'md:col-start-1 md:col-end-7'
                : 'md:col-start-6 md:col-end-13'
            }`}
          >
            {projectTitle}
          </h3>
          <p
            className={`mb-2 text-sm transition-colors duration-300 ease-out dark:bg-none dark:text-white-100 md:row-start-2 md:row-end-4 md:bg-white-400 md:p-4 md:text-lg md:shadow-project dark:md:bg-black-500 dark:md:shadow-xl xl:text-xl ${
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
            <h4 className="mb-2 font-semibold text-black-200 dark:text-white-500 md:text-center md:text-lg lg:text-xl xl:text-2xl">
              Tech Stack
            </h4>
            <div className="flex flex-row flex-wrap gap-x-2 md:justify-center lg:gap-x-4 2xl:gap-x-6">
              {createProjectIcons(stack)}
            </div>
          </div>
          <div
            className={`row-span-1 mb-2 md:row-start-5 md:row-end-6 ${
              id % 2 === 0
                ? 'md:col-start-1 md:col-end-7'
                : 'md:col-start-6 md:col-end-13'
            }`}
          >
            <h4 className="mb-2 font-semibold text-black-200 transition-colors duration-300 ease-out dark:text-white-500 md:text-center md:text-lg lg:text-xl xl:text-2xl">
              Links
            </h4>
            <div className="flex flex-row flex-wrap gap-x-2 md:justify-center lg:gap-x-4 2xl:gap-x-6">
              {createProjectIcons(links)}
            </div>
          </div>
          <aside
            className={`project-image-container ${
              id % 2 === 0 ? 'md:left-[45%]' : 'md:left-0'
            }`}
          >
            <Image
              src={image}
              alt={`Image of ${projectTitle}`}
              className="h-full w-full object-cover object-center"
            />
          </aside>
        </li>
      </m.ul>
    </LazyMotion>
  );
};

export default ProjectCard;
