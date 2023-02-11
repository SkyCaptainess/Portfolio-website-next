import React from 'react';
import { externalLinks } from '@/constants/global';

const Footer = () => {
  const footerIcons = Object.values(externalLinks).map(
    ({ Icon, url }, index) => {
      return (
        <a key={index} href={url} rel="noreferrer" target="_blank">
          <Icon size={30} color={'#343434'} className="cursor-pointer" />
        </a>
      );
    }
  );

  return (
    <footer>
      <div className="footerContainer">
        <h4 className="footerText text-black-200 ">
          Designed & Built by Nicholas Yong
        </h4>
        <h4 className="footerText text-black-200">Thanks for visiting!</h4>

        <div className="flex flex-row flex-nowrap gap-x-4 md:order-last">
          {footerIcons}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
