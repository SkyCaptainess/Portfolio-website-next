import React, { useState } from 'react';
import Hamburger from './Hamburger';
import DropdownUl from './DropdownUl';

const DropdownMenu = () => {
  const [isMenuClicked, setMenuClicked] = useState<boolean>(false);

  return (
    <div className="lg:hidden">
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
