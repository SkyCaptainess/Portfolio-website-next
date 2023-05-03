import React from 'react';
import Link from 'next/link';
import { externalLinks } from '@/constants/global';
import { useThemeContext } from '@/hooks/useThemeContext';
import * as Tooltip from '@radix-ui/react-tooltip';

const HeroButtons = () => {
  const { darkMode } = useThemeContext() ?? false;

  const anchorElements = Object.entries(externalLinks).map(
    ([name, { Icon, url }]) => {
      return (
        <Tooltip.Root key={name}>
          <Tooltip.Trigger asChild>
            <Link aria-label={name} href={url} rel="noreferrer" target="_blank">
              <Icon
                size={40}
                color={`${darkMode ? '#DEE2E6' : '#343434'}`}
                className="cursor-pointer"
                data-testid={name}
              />
            </Link>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="animate-slideDownAndFade tooltip-content">
              {name}
              <Tooltip.Arrow className="tooltip-arrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      );
    }
  );

  return (
    <div className="flex flex-row items-center justify-start gap-x-6">
      <Tooltip.Provider delayDuration={400}>{anchorElements}</Tooltip.Provider>
      <button type="button" className="redirect-button">
        <Link
          aria-label="resume pdf"
          href="https://drive.google.com/file/d/1kRKuXcY7BFh2te6BMJLDYogwU3V29dba/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
          className="h-full w-full text-lg tracking-widest text-white-400 no-underline hover:no-underline dark:text-black-300 md:text-2xl"
        >
          Resume
        </Link>
      </button>
    </div>
  );
};

export default HeroButtons;
