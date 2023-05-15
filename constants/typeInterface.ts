import { type IconType } from 'react-icons';
import { Variants } from 'framer-motion';
import { ReactNode, type Dispatch, type SetStateAction } from 'react';

export type childrenNode = {
  children: JSX.Element | JSX.Element[] | ReactNode;
};

export type HamburgerProps = {
  isMenuClicked: boolean;
  setMenuClicked: Dispatch<SetStateAction<boolean>>;
};

export type Tlinks = {
  [key: string]: {
    Icon: IconType;
    url: string;
  };
};

export type Tvariants = {
  containerAnimation: Variants;
  childAnimation: Variants;
};

export type Tanimation = {
  hidden: { opacity?: 0; x?: number; y?: number };
  show: {
    opacity?: 1;
    x?: number;
    y?: number;
    transition?: {
      bounce?: number;
      delay?: number;
      delayChildren?: number;
      duration?: number;
      type?: 'inertia' | 'spring' | 'tween';
      staggerChildren?: number;
    };
  };
};

export type Tbutton<T> = {
  buttonClass?: T;
  label: T;
  link: T;
  linkClass: T;
  rel: T;
  target: T;
  text: T;
};
