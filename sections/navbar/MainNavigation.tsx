'use client';

import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import NavbarLinks from './NavbarLinks';
import { IconMoodSmileBeam } from '@tabler/icons-react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const MainNavigation = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  return (
    <nav className="mx-auto w-11/12 max-w-7xl mb-6 md:mb-60">
      <div className="relative flex flex-row justify-between items-center py-8">
        <DropdownMenu />
        <NavbarLinks />
        <div className="flex flex-row items-center gap-x-2 lg:order-1">
          <h1 className="navbar-text text-xl lg:text-xl 2xl:text-[1.75rem]">
            NICHOLAS
          </h1>
          <IconMoodSmileBeam
            size={24}
            color="#F8F8F8"
            className="hidden sm:block"
          />
        </div>
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={(checked: boolean) => setDarkMode(checked)}
          sunColor={'#F8F8F8'}
          moonColor={'#EB7F13'}
          className="lg:order-3"
          data-testid="darkModeSwitch"
        />
      </div>
      <div className="navbar-gradient"></div>
    </nav>
  );
};

export default MainNavigation;
