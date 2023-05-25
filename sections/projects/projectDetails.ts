import {
  SiArduino,
  SiBootstrap,
  SiCss3,
  SiDjango,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJupyter,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiYoutube,
} from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { StaticImageData } from 'next/image';
import handSanitizerImage from '../../public/images/handsanitizer.webp';
import pepsiImage from '../../public/images/pepsi-corporate.webp';
import stockImage from '../../public/images/stocks-portfolio.webp';
import voucherImage from '../../public/images/voucher_management.webp';

export type Tproject = {
  id: number;
  image: StaticImageData;
  projectTitle: string;
  projectDesc: string;
  stack: {
    Icon: typeof SiBootstrap;
    tooltipText: string;
    url?: string;
  }[];
  links: {
    Icon: typeof SiBootstrap;
    tooltipText: 'YouTube' | 'GitHub' | 'Website';
    url: string;
  }[];
};

const voucherManagementCard: Tproject = {
  id: 0,
  image: voucherImage,
  projectTitle: 'Voucher Management',
  projectDesc:
    'This is a web-based program that enables users to carry out CRUD operations on vouchers. It also provides a data table for convenient access to all information related to the vouchers.',
  stack: [
    { Icon: SiReact, tooltipText: 'React' },
    { Icon: SiTypescript, tooltipText: 'TypeScript' },
    { Icon: SiVite, tooltipText: 'Vite' },
    { Icon: SiTailwindcss, tooltipText: 'Tailwind CSS' },
    { Icon: SiFramer, tooltipText: 'Framer Motion' },
  ],
  links: [
    {
      Icon: SiGithub,
      tooltipText: 'GitHub',
      url: 'https://github.com/skycaptainess/fp-capstone',
    },
    {
      Icon: FaExternalLinkAlt,
      tooltipText: 'Website',
      url: 'https://fp-capstone-voucher-78842.web.app',
    },
  ],
};

const stockProjectCard: Tproject = {
  id: 1,
  image: stockImage,
  projectTitle: 'Stockstracker',
  projectDesc:
    'This is a web-based program that enables users to quickly analyze the performance of their stock portfolio. It also allows users to save and make changes to their transaction history, which can be easily accessed on a single page.',
  stack: [
    { Icon: SiPython, tooltipText: 'Python' },
    { Icon: SiDjango, tooltipText: 'Django' },
    { Icon: SiHtml5, tooltipText: 'HTML' },
    { Icon: SiCss3, tooltipText: 'CSS' },
    { Icon: SiJavascript, tooltipText: 'JavaScript' },
    { Icon: SiBootstrap, tooltipText: 'Bootstrap' },
    { Icon: SiPostgresql, tooltipText: 'PostgreSQL' },
  ],
  links: [
    {
      Icon: SiGithub,
      tooltipText: 'GitHub',
      url: 'https://github.com/skycaptainess/StocksTracker',
    },
    {
      Icon: SiYoutube,
      tooltipText: 'YouTube',
      url: 'https://youtu.be/T_cgG668pf4',
    },
    {
      Icon: FaExternalLinkAlt,
      tooltipText: 'Website',
      url: 'https://stockstracker.up.railway.app/user/login/',
    },
  ],
};

const ioTProjectCard: Tproject = {
  id: 2,
  image: handSanitizerImage,
  projectTitle: 'IoT Hand Sanitizer',
  projectDesc:
    'A hand sanitizer product that incorporates data analytics and simple machine learning techniques to forecast certain data points, such as the number of times the sanitizer dispenser needs to be used before it runs out.',
  stack: [
    { Icon: SiPython, tooltipText: 'Python' },
    { Icon: SiJupyter, tooltipText: 'Jupyter Notebook' },
    { Icon: SiArduino, tooltipText: 'Arduino' },
  ],
  links: [
    {
      Icon: SiGithub,
      tooltipText: 'GitHub',
      url: 'https://github.com/skycaptainess/sanitizer-IoT',
    },
    {
      Icon: SiYoutube,
      tooltipText: 'YouTube',
      url: 'https://www.youtube.com/watch?v=G4GZ-QFubOY',
    },
  ],
};

const pepsiProjectCard: Tproject = {
  id: 3,
  image: pepsiImage,
  projectTitle: 'Pepsi corporate SPA',
  projectDesc:
    'Creating a new React-based single-page application from the beginning, in order to gain familiarity with various tools, including Typescript, React Router, framer motion, and the vitest unit testing framework.',
  stack: [
    { Icon: SiReact, tooltipText: 'React' },
    { Icon: SiTypescript, tooltipText: 'TypeScript' },
    { Icon: SiVite, tooltipText: 'Vite & Vitest' },
    { Icon: SiFramer, tooltipText: 'Framer Motion' },
  ],
  links: [
    {
      Icon: SiGithub,
      tooltipText: 'GitHub',
      url: 'https://github.com/skycaptainess/fp-mini-project',
    },
  ],
};

export const projectCards: Tproject[] = [
  voucherManagementCard,
  stockProjectCard,
  ioTProjectCard,
  pepsiProjectCard,
];
