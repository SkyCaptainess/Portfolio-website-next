import React from 'react';
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
} from '@tabler/icons-react';

const Footer = () => {
  const icons = [IconBrandLinkedin, IconBrandGithub, IconBrandInstagram];

  return (
    <footer>
      <div className="footerContainer">
        <h4 className="footerText text-black-200 ">
          Designed & Built by Nicholas Yong
        </h4>
        <h4 className="footerText text-black-200">Thanks for visiting!</h4>

        <div className="flex flex-row flex-nowrap gap-x-4 md:order-last">
          {icons.map((Icon, index) => (
            <Icon
              key={index}
              size={30}
              color={'#343434'}
              className="cursor-pointer hover:animate-bounce"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
