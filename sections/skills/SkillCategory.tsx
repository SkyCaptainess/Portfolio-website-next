import React from 'react';
import { averageDesignIcons, goodDesignIcons, TIcons } from './common';
import { Tvariants } from '@/constants/global';
import { m } from 'framer-motion';

const SkillCategory = ({
  heading,
  icons,
  containerAnimation,
  childAnimation,
}: TIcons & Tvariants) => {
  return (
    <>
      <h3 className="skillsSubHeading font-medium opacity-80">{heading}</h3>
      <m.div
        variants={containerAnimation}
        className="flex flex-row flex-wrap gap-x-4 mb-2 lg:mb-4"
      >
        {icons.map(({ Icon, tooltipText: tooltipText }, index) => {
          return (
            <m.div
              variants={childAnimation}
              key={index}
              className={`tooltip tooltip-info ${
                icons === goodDesignIcons || icons === averageDesignIcons
                  ? 'tooltip-right'
                  : 'tooltip-top'
              }`}
              data-tip={tooltipText}
            >
              <Icon key={index} size={40} color="#343434" />
            </m.div>
          );
        })}
      </m.div>
    </>
  );
};

export default SkillCategory;
