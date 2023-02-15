import { RefObject } from 'react';
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
} from '@tabler/icons-react';
import { Tlinks } from './typeInterface';
import { scrollIntoView } from 'seamless-scroll-polyfill';

export const listElements = [
  'About Me',
  'Skills',
  'Experience',
  'Projects',
  'Contact',
];

export const externalLinks: Tlinks = {
  Linkedin: {
    Icon: IconBrandLinkedin,
    url: 'https://www.linkedin.com/in/nicholas-yjy/',
  },
  GitHub: { Icon: IconBrandGithub, url: 'https://github.com/nicholas5538' },
  Instagram: {
    Icon: IconBrandInstagram,
    url: 'https://www.instagram.com/frivolousnicholas',
  },
};

export const scrollToRef = (
  ref: RefObject<HTMLHeadingElement>,
  prefersReducedMotion: boolean
) => {
  if (ref && ref.current) {
    scrollIntoView(ref.current, {
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  }
};
