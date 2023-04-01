import React from 'react';
import { useThemeContext } from '@/hooks/useThemeContext';
import { averageDesignIcons, goodDesignIcons, TIcons } from './common';
import { Tvariants } from '@/constants/typeInterface';
import { m } from 'framer-motion';

const SkillCategory = ({
  heading,
  icons,
  containerAnimation,
  childAnimation,
}: TIcons & Tvariants) => {
  const { darkMode } = useThemeContext() ?? false;
  const tooltipColor = darkMode ? 'tooltip-warning' : 'tooltip-info';
  const iconColor = darkMode ? '#DEE2E6' : '#343434';

  return (
    <>
      <h3 className="white-sub-heading font-medium opacity-80 dark:text-white-100 dark:opacity-100">
        {heading}
      </h3>
      <m.div
        variants={containerAnimation}
        className="mb-2 flex flex-row flex-wrap gap-x-4 lg:mb-4"
      >
        {icons.map(({ Icon, tooltipText: tooltipText }) => {
          return (
            <m.div
              variants={childAnimation}
              key={tooltipText}
              className={`tooltip ${tooltipColor} ${
                icons === goodDesignIcons || icons === averageDesignIcons
                  ? 'tooltip-right'
                  : 'tooltip-top'
              }`}
              data-tip={tooltipText}
            >
              <Icon key={tooltipText} size={40} color={iconColor} />
            </m.div>
          );
        })}
      </m.div>
    </>
  );
};

export default SkillCategory;
