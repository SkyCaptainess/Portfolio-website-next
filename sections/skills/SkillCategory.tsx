import React from 'react';
import { clsx } from 'clsx';
import { averageDesignIcons, goodDesignIcons, TIcons } from './common';
import { m } from 'framer-motion';
import { Tvariants } from '@/constants/typeInterface';
import { useThemeContext } from '@/hooks/useThemeContext';
import * as Tooltip from '@radix-ui/react-tooltip';

const SkillCategory = ({
  heading,
  icons,
  containerAnimation,
  childAnimation,
}: TIcons & Tvariants) => {
  const { darkMode } = useThemeContext() ?? false;
  const tooltipSide =
    icons === goodDesignIcons || icons === averageDesignIcons ? 'right' : 'top';
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
            <m.div variants={childAnimation} key={tooltipText}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Icon key={tooltipText} size={40} color={iconColor} />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    side={tooltipSide}
                    className={clsx(
                      'animate-slideDownAndFade tooltip-content',
                      {
                        'animate-slideLeftAndFade':
                          icons === goodDesignIcons ||
                          icons === averageDesignIcons,
                      }
                    )}
                  >
                    {tooltipText}
                    <Tooltip.Arrow className="tooltip-arrow" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </m.div>
          );
        })}
      </m.div>
    </>
  );
};

export default SkillCategory;
