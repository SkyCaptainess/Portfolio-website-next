import React from 'react';
import { externalLinks } from '../constants/global';

const HeroButtons = () => {
  const anchorElements = Object.entries(externalLinks).map(
    ([name, { Icon, url }], index) => {
      return (
        <div
          key={index}
          className="tooltip tooltip-info tooltip-bottom ml-2 md:tooltip-top md:ml-0"
          data-tip={name}
        >
          <a href={url} rel="noreferrer" target="_blank">
            <Icon size={40} color={'#343434'} className="cursor-pointer" />
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
        className="bg-aqua px-4 py-2 rounded-2xl transition-colors ease-linear duration-200 hover:bg-dark-aqua"
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
