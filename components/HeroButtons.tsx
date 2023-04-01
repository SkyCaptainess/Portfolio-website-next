import React from 'react';
import { externalLinks } from '../constants/global';
import { useThemeContext } from '@/hooks/useThemeContext';

const HeroButtons = () => {
  const { darkMode } = useThemeContext() ?? false;

  const anchorElements = Object.entries(externalLinks).map(
    ([name, { Icon, url }]) => {
      return (
        <div
          key={name}
          className="tooltip tooltip-bottom tooltip-info ml-2 dark:tooltip-warning md:tooltip-top md:ml-0"
          data-tip={name}
        >
          <a aria-label={name} href={url} rel="noreferrer" target="_blank">
            <Icon
              size={40}
              color={`${darkMode ? '#DEE2E6' : '#343434'}`}
              className="cursor-pointer"
            />
          </a>
        </div>
      );
    }
  );

  return (
    <div className="flex flex-row items-center justify-start gap-x-6">
      {anchorElements}
      <button type="button" className="redirect-button">
        <a
          aria-label="resume pdf"
          href="https://drive.google.com/file/d/1kRKuXcY7BFh2te6BMJLDYogwU3V29dba/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
          className="h-full w-full text-lg tracking-widest text-white-400 no-underline hover:no-underline dark:text-black-300 md:text-2xl"
        >
          Resume
        </a>
      </button>
    </div>
  );
};

export default HeroButtons;
