import React, { useId } from 'react';
import { externalLinks } from '../../constants/global';
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
} from '@tabler/icons-react';

const HeroButtons = () => {
  const icons = [
    <IconBrandLinkedin key={useId()} size={40} color="#343434" />,
    <IconBrandGithub key={useId()} size={40} color="#343434" />,
    <IconBrandInstagram key={useId()} size={40} color="#343434" />,
  ];

  const anchorElements = Object.entries(externalLinks).map(
    ([name, link], index) => {
      return (
        <div
          key={index}
          className="tooltip tooltip-info tooltip-bottom md:tooltip-top"
          data-tip={name}
        >
          <a href={link} rel="noreferrer" target="_blank">
            {icons[index]}
          </a>
        </div>
      );
    }
  );

  return (
    <div className="flex flex-row justify-start items-center gap-x-6">
      {anchorElements}
      <button
        type="button"
        className="bg-aqua px-4 py-2 rounded-2xl transition-colors ease-linear duration-200 hover:bg-dark-blue"
      >
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className="text-lg text-white-300 tracking-widest no-underline hover:no-underline w-full h-full md:text-2xl"
        >
          Resume
        </a>
      </button>
    </div>
  );
};

export default HeroButtons;
