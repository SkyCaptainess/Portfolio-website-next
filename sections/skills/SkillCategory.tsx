import React from 'react';
import { averageDesignIcons, goodDesignIcons, TIcons } from './common';
import { m } from 'framer-motion';
import Tooltip from '@/components/Tooltip';
import { Tvariants } from '@/constants/typeInterface';

const SkillCategory = ({
  heading,
  icons,
  containerAnimation,
  childAnimation,
}: TIcons & Tvariants) => {
  const tooltipSide =
    icons === goodDesignIcons || icons === averageDesignIcons ? 'right' : 'top';

  return (
    <>
      <h3 className="white-sub-heading font-medium opacity-80 dark:text-white-100 dark:opacity-100">
        {heading}
      </h3>
      <m.div
        variants={containerAnimation}
        className="mb-2 flex flex-row flex-wrap gap-x-4 gap-y-4 ipad-mini:gap-y-0 lg:mb-4"
      >
        {icons.map(({ Icon, tooltipText: tooltipText }) => {
          return (
            <m.div variants={childAnimation} key={tooltipText}>
              <Tooltip side={tooltipSide} tooltipText={tooltipText}>
                <i>
                  <Icon size={30} className="icon" />
                </i>
              </Tooltip>
            </m.div>
          );
        })}
      </m.div>
    </>
  );
};

export default SkillCategory;
