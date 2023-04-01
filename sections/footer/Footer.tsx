'use client';

import React from 'react';
import { useThemeContext } from '@/hooks/useThemeContext';
import { externalLinks } from '@/constants/global';

const Footer = () => {
  const { darkMode } = useThemeContext() ?? false;

  const iconColor = darkMode ? '#E9ECEF' : '#343434';

  const footerIcons = Object.entries(externalLinks).map(
    ([name, { Icon, url }]) => {
      return (
        <a
          aria-label={name}
          key={name}
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          <Icon size={30} color={iconColor} className="cursor-pointer" />
        </a>
      );
    }
  );

  return (
    <footer>
      <div className="footer-container">
        <h4 className="text-base font-medium text-black-200 dark:text-white-300 md:order-first md:text-lg xl:text-xl ">
          Designed & Built by Nicholas Yong
        </h4>
        <h4 className="text-base font-medium text-black-200 dark:text-white-300 md:order-2 md:text-lg xl:text-xl">
          Thanks for visiting!
        </h4>
        <div className="flex flex-row flex-nowrap gap-x-4 md:order-last">
          {footerIcons}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
