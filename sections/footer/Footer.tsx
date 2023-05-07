import React from 'react';
import Link from 'next/link';
import { externalLinks } from '@/constants/global';

const Footer = () => {
  const footerIcons = Object.entries(externalLinks).map(
    ([name, { Icon, url }]) => {
      return (
        <Link
          aria-label={name}
          key={name}
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          <Icon size={30} className="icon cursor-pointer" />
        </Link>
      );
    }
  );

  return (
    <footer>
      <div className="mx-auto flex h-full w-11/12 max-w-7xl flex-col flex-nowrap items-start justify-between gap-y-2 py-4 md:flex-row md:items-center md:gap-y-0 lg:py-8">
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
