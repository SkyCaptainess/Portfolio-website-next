import { Variants } from 'framer-motion';
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
} from '@tabler/icons-react';

export const listElements = [
  'About Me',
  'Skills',
  'Experience',
  'Projects',
  'Contact',
];

type Tlinks = {
  [key: string]: {
    Icon: typeof IconBrandGithub;
    url: string;
  };
};

export const externalLinks: Tlinks = {
  Linkedin: {
    Icon: IconBrandLinkedin,
    url: 'https://www.linkedin.com/in/nicholas-yjy/',
  },
  GitHub: { Icon: IconBrandGithub, url: 'https://github.com/nicholas5538' },
  Instragram: {
    Icon: IconBrandInstagram,
    url: 'https://www.instagram.com/frivolousnicholas',
  },
};

export type Tvariants = {
  containerAnimation?: Variants;
  childAnimation?: Variants;
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
