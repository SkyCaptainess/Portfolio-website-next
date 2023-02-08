import React from 'react';
import { TIcons } from './common';
import { goodDesignIcons, averageDesignIcons } from './common';
import { m } from 'framer-motion';
import { Tanimation } from '@/constants/global';

const childContainerAnimation: Tanimation = {
  hidden: { opacity: 0, y: -20 },
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

const createButtonElements = (icons: TIcons['icons']) =>
  icons.map(({ Icon, tooltipText: tooltipText }, index) => {
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
  });

const SkillCategory = ({ heading, icons }: TIcons) => {
  return (
    <>
      <h3 className="skillsSubHeading font-medium opacity-80">{heading}</h3>
      <m.div
        variants={containerAnimation}
        className="flex flex-row flex-wrap gap-x-4 mb-2 lg:mb-4"
      >
        {createButtonElements(icons)}
      </m.div>
    </>
  );
};

export default SkillCategory;
