import React from 'react';
import { clsx } from 'clsx';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Tooltip from '@/components/Tooltip';
import { Tanimation } from '@/constants/typeInterface';
import { Tproject } from '@/sections/projects/projectDetails';

const ProjectCard = ({
  id,
  image,
  projectTitle,
  projectDesc,
  stack,
  links,
  animation,
}: Tproject & { animation: Tanimation }) => {
  const checkId = id % 2 === 0;
  const colPlacement = checkId
    ? 'md:col-start-1 md:col-end-7'
    : 'md:col-start-6 md:col-end-13';

  const createProjectIcons = (
    iconList: Tproject['stack'] | Tproject['links']
  ) =>
    iconList.map(({ Icon, tooltipText, url }) => (
      <Tooltip key={tooltipText} side="top" tooltipText={tooltipText}>
        {iconList === stack ? (
          <i>
            <Icon size={30} className="text-black-200 dark:text-white-500" />
          </i>
        ) : (
          <Link
            aria-label={tooltipText}
            href={url as string}
            rel="noreferrer"
            target="_blank"
          >
            <Icon
              size={30}
              className="cursor-pointer text-black-200 dark:text-white-500"
            />
          </Link>
        )}
      </Tooltip>
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
        <li
          className={clsx(
            'grid grid-rows-1 rounded-lg px-5 py-4 shadow-project dark:shadow-project-dark',
            'transition-transform duration-300 ease-out hover:-translate-y-2',
            'md:grid-cols-12 md:grid-rows-6 md:items-center md:justify-items-center',
            'md:rounded-none md:shadow-none md:transition-none md:hover:translate-y-0 dark:md:shadow-none',
            'lg:grid-rows-5 lg:gap-y-2'
          )}
        >
          <h3
            className={`white-sub-heading select-none font-bold tracking-wide dark:text-[#FFA54E] md:row-start-1 md:row-end-2 md:mb-0 ${colPlacement}`}
          >
            {projectTitle}
          </h3>
          <p
            className={`mb-2 text-sm transition-colors duration-300 ease-out dark:bg-none dark:text-white-100 md:row-start-2 md:row-end-5 md:bg-white-400 md:p-4 md:text-lg md:shadow-project dark:md:bg-black-500 dark:md:shadow-xl lg:row-end-4 xl:text-xl ${colPlacement}`}
          >
            {projectDesc}
          </p>
          <div
            className={`row-span-1 mb-2 md:row-start-5 md:row-end-6 lg:row-start-4 lg:row-end-5 ${colPlacement}`}
          >
            <h4 className="mb-2 select-none font-semibold text-black-200 dark:text-white-500 md:text-center md:text-lg lg:text-xl xl:text-2xl">
              Tech Stack
            </h4>
            <div className="flex flex-row flex-wrap gap-x-4 gap-y-4 sm:gap-y-0 md:justify-center">
              {createProjectIcons(stack)}
            </div>
          </div>
          <div
            className={`row-span-1 mb-2 md:row-start-6 md:row-end-7 lg:row-start-5 lg:row-end-6 ${colPlacement}`}
          >
            <h4 className="mb-2 select-none font-semibold text-black-200 transition-colors duration-300 ease-out dark:text-white-500 md:text-center md:text-lg lg:text-xl xl:text-2xl">
              Links
            </h4>
            <div className="flex flex-row flex-wrap gap-x-4 md:justify-center">
              {createProjectIcons(links)}
            </div>
          </div>
          <aside
            className={clsx(
              'absolute left-0 top-0 -z-10 h-full max-h-[350px]',
              'opacity-[8%] md:top-1/4 md:h-1/2 md:w-1/2 md:max-w-[600px]',
              'md:border-2 md:border-black-200 md:opacity-60 dark:md:opacity-30',
              'md:left-0 lg:top-[12.5%] lg:h-3/4 lg:w-1/2',
              {
                'md:left-[45%]': checkId,
              }
            )}
          >
            <Image
              src={image}
              alt={`Image of ${projectTitle}`}
              placeholder="blur"
              className="h-full object-cover object-center"
            />
          </aside>
        </li>
      </m.ul>
    </LazyMotion>
  );
};

export default ProjectCard;
