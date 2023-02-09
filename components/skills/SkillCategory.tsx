import React from 'react';
import { TIcons } from './common';
import { goodDesignIcons, averageDesignIcons } from './common';
import { m, useReducedMotion } from 'framer-motion';
import { Tanimation } from '@/constants/global';

const SkillCategory = ({ heading, icons }: TIcons) => {
  const prefersReducedMotion = useReducedMotion();
  const childContainerAnimation: Tanimation = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : -20 },
    show: { opacity: 1, y: 0 },
  };

  const containerAnimation: Tanimation = {
    ...childContainerAnimation,
    show: {
      ...childContainerAnimation.show,
      transition: {
        type: 'spring',
        duration: 1,
        bounce: 0.4,
        staggerChildren: 0.075,
      },
    },
  };

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
              variants={childContainerAnimation}
              key={index}
              className={`tooltip tooltip-info ${
                icons === goodDesignIcons || icons === averageDesignIcons
                  ? 'tooltip-right'
                  : 'tooltip-top'
              }`}
              data-tip={tooltipText}
            >
              <button type="button">
                <Icon key={index} size={40} color="#343434" />
              </button>
            </m.div>
          );
        })}
      </m.div>
    </>
  );
};

export default SkillCategory;
