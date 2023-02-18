import { IconBrandGithub } from '@tabler/icons-react';
import { Variants } from 'framer-motion';

export type childrenNode = {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
};

export type HamburgerProps = {
  isMenuClicked: boolean;
  setMenuClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export type Tlinks = {
  [key: string]: {
    Icon: typeof IconBrandGithub;
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
