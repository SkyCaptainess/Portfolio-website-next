export type childrenNode = {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
};

export type setMenuType = {
  setMenuClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export type HamburgerProps = {
  isMenuClicked: boolean;
  onClick: () => void;
};
