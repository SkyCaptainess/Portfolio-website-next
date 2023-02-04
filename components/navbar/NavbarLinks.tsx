import React from 'react';
import { listElements } from '@/constants/global';

const NavbarLinks = () => {
  const liElements = listElements.map((element, index) => {
    return (
      <li
        key={index}
        className="navbar-text cursor-pointer hover:underline hover:decoration-white-300 hover:decoration-2 hover:underline-offset-8"
      >
        {element}
      </li>
    );
  });

  return (
    <ul className="hidden flex-row justify-between items-center gap-x-6 lg:flex lg:order-2 2xl:gap-x-10">
      {liElements}
    </ul>
  );
};

export default NavbarLinks;
