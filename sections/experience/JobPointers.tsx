import { experiences } from './experienceDesc';
import { m } from 'framer-motion';
import { Tvariants } from '@/constants/typeInterface';

const JobPointers = ({ childAnimation }: Tvariants) => {
  const createExperienceElement = experiences.map((experience, index) => {
    return (
      <m.div
        key={index}
        variants={childAnimation}
        className={`mb-5 md:col-span-2 ${
          index === 0
            ? 'md:row-start-2 md:row-end-4'
            : 'md:row-start-4 md:row-end-6'
        }`}
      >
        <h3 className="text-white-300 font-semibold pl-4 border-l-2 border-l-blue mb-2 md:text-xl lg:text-2xl xl:text-3xl">
          {experience.date}
        </h3>
        <h4 className="text-white-300 font-semibold md:text-lg lg:text-xl xl:text-2xl">
          {experience.title}
        </h4>
        <h4 className="text-white-300 font-semibold mb-2 md:text-lg lg:text-xl xl:text-2xl">
          @&nbsp;
          <a
            className="text-blue"
            href={experience.companyURL}
            rel="noreferrer"
            target="_blank"
          >
            {experience.company}
          </a>
        </h4>
        <ul className="opacity-80 text-sm text-white-300 list-disc list-inside md:text-lg xl:text-xl">
          {experience.pointers.map((pointer, index) => (
            <li
              key={index}
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
