import {
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandDjango,
  IconBrandFramer,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVite,
  IconBrandYoutube,
  IconCirclePlus,
  IconDatabase,
  IconExternalLink,
  IconNotebook,
} from '@tabler/icons-react';
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
    Icon: typeof IconBrandBootstrap;
    tooltipText: string;
    url?: string;
  }[];
  links: {
    Icon: typeof IconBrandBootstrap;
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
    { Icon: IconBrandReact, tooltipText: 'React' },
    { Icon: IconBrandTypescript, tooltipText: 'TypeScript' },
    { Icon: IconBrandVite, tooltipText: 'Vite' },
    { Icon: IconBrandTailwind, tooltipText: 'Tailwind CSS' },
    { Icon: IconBrandFramer, tooltipText: 'Framer Motion' },
  ],
  links: [
    {
      Icon: IconBrandGithub,
      tooltipText: 'GitHub',
      url: 'https://github.com/nicholas5538/fp-capstone',
    },
    {
      Icon: IconExternalLink,
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
    { Icon: IconBrandPython, tooltipText: 'Python' },
    { Icon: IconBrandDjango, tooltipText: 'Django' },
    { Icon: IconBrandHtml5, tooltipText: 'HTML' },
    { Icon: IconBrandCss3, tooltipText: 'CSS' },
    { Icon: IconBrandJavascript, tooltipText: 'JavaScript' },
    { Icon: IconBrandBootstrap, tooltipText: 'Bootstrap' },
    { Icon: IconDatabase, tooltipText: 'PostgreSQL' },
  ],
  links: [
    {
      Icon: IconBrandGithub,
      tooltipText: 'GitHub',
      url: 'https://github.com/nicholas5538/StocksTracker',
    },
    {
      Icon: IconBrandYoutube,
      tooltipText: 'YouTube',
      url: 'https://youtu.be/T_cgG668pf4',
    },
    {
      Icon: IconExternalLink,
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
    { Icon: IconBrandPython, tooltipText: 'Python' },
    { Icon: IconNotebook, tooltipText: 'Jupyter Notebook' },
    { Icon: IconCirclePlus, tooltipText: 'Arduino' },
  ],
  links: [
    {
      Icon: IconBrandGithub,
      tooltipText: 'GitHub',
      url: 'https://github.com/nicholas5538/sanitizer-IoT',
    },
    {
      Icon: IconBrandYoutube,
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
    { Icon: IconBrandReact, tooltipText: 'React' },
    { Icon: IconBrandTypescript, tooltipText: 'TypeScript' },
    { Icon: IconBrandVite, tooltipText: 'Vite & Vitest' },
    { Icon: IconBrandFramer, tooltipText: 'Framer Motion' },
  ],
  links: [
    {
      Icon: IconBrandGithub,
      tooltipText: 'GitHub',
      url: 'https://github.com/nicholas5538/fp-mini-project',
    },
  ],
};

export const projectCards: Tproject[] = [
  voucherManagementCard,
  stockProjectCard,
  ioTProjectCard,
  pepsiProjectCard,
];
