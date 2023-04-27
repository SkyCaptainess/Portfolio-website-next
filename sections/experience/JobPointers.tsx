import { experiences } from './experienceDesc';
import { m } from 'framer-motion';
import Link from 'next/link';
import { Tvariants } from '@/constants/typeInterface';

const JobPointers = ({ childAnimation }: Pick<Tvariants, 'childAnimation'>) => {
  const createExperienceElement = experiences.map((experience, index) => {
    return (
      <m.div
        key={experience.company}
        variants={childAnimation}
        className={`mb-5 md:col-span-2 ${
          index === 0
            ? 'md:row-start-2 md:row-end-4'
            : 'md:row-start-4 md:row-end-6'
        }`}
      >
        <h3 className="mb-2 border-l-2 border-l-blue pl-4 font-semibold text-white-400 transition-colors duration-300 ease-out dark:border-l-orange-red dark:text-white-300 md:text-xl lg:text-2xl xl:text-3xl">
          {experience.date}
        </h3>
        <h4 className="font-semibold text-white-400 transition-colors duration-300 ease-out dark:text-white-300 md:text-lg lg:text-xl xl:text-2xl">
          {experience.title}
        </h4>
        <h4 className="mb-2 font-semibold text-white-400 transition-colors duration-300 ease-out dark:text-white-300 md:text-lg lg:text-xl xl:text-2xl">
          @&nbsp;
          <Link
            aria-label={experience.company}
            href={experience.companyURL}
            rel="noreferrer"
            target="_blank"
            className="text-blue"
          >
            {experience.company}
          </Link>
        </h4>
        <ul className="list-inside list-disc text-sm text-white-300 opacity-80 transition-colors duration-300 ease-out dark:text-white-100 md:text-lg xl:text-xl">
          {experience.pointers.map((pointer, index) => (
            <li
              key={index.toString()}
              className={`${
                index === experience.pointers.length - 1 ? 'mb-0' : 'mb-2'
              }`}
            >
              {pointer}
            </li>
          ))}
        </ul>
      </m.div>
    );
  });

  return <>{createExperienceElement}</>;
};

export default JobPointers;
