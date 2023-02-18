import React, { useRef, useState } from 'react';
import { useOutsideAlerter } from '@/hooks/useOutsideAlerter';
import Hamburger from './Hamburger';
import DropdownUl from './DropdownUl';

const DropdownMenu = () => {
  const [isMenuClicked, setMenuClicked] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(dropdownRef, () => setMenuClicked(false));

  return (
    <div ref={dropdownRef} className="lg:hidden">
      <Hamburger
        isMenuClicked={isMenuClicked}
        setMenuClicked={setMenuClicked}
      />
      <DropdownUl
        isMenuClicked={isMenuClicked}
        setMenuClicked={setMenuClicked}
      />
    </div>
  );
};

export default DropdownMenu;
