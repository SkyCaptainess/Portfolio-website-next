import {
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandDjango,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandYoutube,
  IconDatabase,
  IconExternalLink,
  IconNotebook,
  IconCirclePlus,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandVite,
} from '@tabler/icons-react';
import { StaticImageData } from 'next/image';
import stockImage from '../../public/images/stocks-portfolio.webp';
import ioTImage from '../../public/images/ioT.webp';
import unicardImage from '../../public/images/unicurd.webp';
import pepsiImage from '../../public/images/pepsi-corporate.webp';

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

export const stockProjectCard: Tproject = {
  id: 0,
  image: stockImage,
  projectTitle: 'Stockstracker',
  projectDesc:
    'It is a web application that allows user to gain a quick insight into the performance of their stock portfolio and investment transactions.',
  stack: [
    { Icon: IconBrandPython, tooltipText: 'Python' },
    { Icon: IconBrandDjango, tooltipText: 'Django' },
    { Icon: IconBrandHtml5, tooltipText: 'HTML' },
    { Icon: IconBrandCss3, tooltipText: 'CSS' },
    { Icon: IconBrandJavascript, tooltipText: 'JavaScript' },
    { Icon: IconBrandBootstrap, tooltipText: 'Bootstrap' },
    { Icon: IconDatabase, tooltipText: 'PostgreSql' },
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

export const ioTProjectCard: Tproject = {
  id: 1,
  image: ioTImage,
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

export const pepsiProjectCard: Tproject = {
  id: 2,
  image: pepsiImage,
  projectTitle: 'Pepsi corporate SPA',
  projectDesc:
    'Setting up a React single-page application from scratch to learn Typescript, React Router, framer motion and vitest unit test framework.',
  stack: [
    { Icon: IconBrandReact, tooltipText: 'React' },
    { Icon: IconBrandTypescript, tooltipText: 'Typescript' },
    { Icon: IconBrandVite, tooltipText: 'Vite & Vitest' },
  ],
  links: [
    {
      Icon: IconBrandGithub,
      tooltipText: 'GitHub',
      url: 'https://github.com/nicholas5538/fp-mini-project',
    },
  ],
};

export const unicurdProjectCard: Tproject = {
  id: 3,
  image: unicardImage,
  projectTitle: 'Unicurd website remake',
  projectDesc:
    'It is mini project that revamps the Unicurd website, and to make it responsive with Bootstrap. Unicurd actual website is outdated and unresponsive.',
  stack: [
    { Icon: IconBrandHtml5, tooltipText: 'HTML' },
    { Icon: IconBrandCss3, tooltipText: 'CSS' },
    { Icon: IconBrandBootstrap, tooltipText: 'Bootstrap' },
  ],
  links: [
    {
      Icon: IconBrandGithub,
      tooltipText: 'GitHub',
      url: 'https://github.com/nicholas5538/learn-bootstrap',
    },
    {
      Icon: IconExternalLink,
      tooltipText: 'Website',
      url: 'https://unicurd-bootstrap.netlify.app/',
    },
  ],
};
