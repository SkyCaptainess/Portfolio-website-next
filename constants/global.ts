import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
} from '@tabler/icons-react';
import { Tlinks } from './typeInterface';

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
  Instragram: {
    Icon: IconBrandInstagram,
    url: 'https://www.instagram.com/frivolousnicholas',
  },
};
