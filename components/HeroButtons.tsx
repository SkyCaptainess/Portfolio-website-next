import React from 'react';
import Link from 'next/link';
import Tooltip from '@/components/Tooltip';
import { externalLinks } from '@/constants/global';
import { Provider } from '@radix-ui/react-tooltip';

const HeroButtons = () => {
  const anchorElements = Object.entries(externalLinks).map(
    ([name, { Icon, url }]) => {
      return (
        <Tooltip key={name} side="top" tooltipText={name}>
          <Link aria-label={name} href={url} rel="noreferrer" target="_blank">
            <Icon
              className="icon cursor-pointer"
              size={30}
              data-testid={name}
            />
          </Link>
        </Tooltip>
      );
    }
  );

  return (
    <div className="flex flex-row items-center justify-start gap-x-6">
      <Provider delayDuration={400}>{anchorElements}</Provider>
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
