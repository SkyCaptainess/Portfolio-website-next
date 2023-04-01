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
    'A web application that allows user to perform CRUD operations on vouchers, easily access all particulars of the vouchers with a data table, and allow them to use a dummy checkout page to apply the newly created or modified vouchers.',
  stack: [
    { Icon: IconBrandReact, tooltipText: 'React' },
    { Icon: IconBrandTypescript, tooltipText: 'TypeScript' },
    { Icon: IconBrandVite, tooltipText: 'Vite & Vitest' },
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
      url: 'https://foodpanda-capstone.vercel.app/',
    },
  ],
};

const stockProjectCard: Tproject = {
  id: 1,
  image: stockImage,
  projectTitle: 'Stockstracker',
  projectDesc:
    'A web application that allows user to gain a quick insight into the performance of their stock portfolio, store and modify all their transaction histories, and easily access them in a single page.',
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
    'A hand sanitizier product implementated with data analytic tools and basic machine learning techniques to predict data such as the amount of dispense count required to empty the sanitizer.',
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
    'Setting up a React single-page application from scratch to learn Typescript, React Router, framer motion and vitest unit test framework.',
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
