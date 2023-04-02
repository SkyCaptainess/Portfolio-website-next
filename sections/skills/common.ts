import {
  IconBrandAdobe,
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandCypress,
  IconBrandDjango,
  IconBrandFigma,
  IconBrandFramer,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandPython,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVite,
  IconDatabase,
  IconLetterC,
} from '@tabler/icons-react';

export type TIcons = {
  heading: string;
  icons: typeof goodCodingIcons;
};

export const goodCodingIcons = [
  { Icon: IconBrandPython, tooltipText: 'Python' },
  { Icon: IconBrandDjango, tooltipText: 'Django' },
  { Icon: IconBrandHtml5, tooltipText: 'HTML' },
  { Icon: IconBrandCss3, tooltipText: 'CSS' },
  { Icon: IconBrandJavascript, tooltipText: 'JavaScript' },
  { Icon: IconBrandTypescript, tooltipText: 'TypeScript' },
  { Icon: IconBrandReact, tooltipText: 'React' },
  { Icon: IconBrandTailwind, tooltipText: 'Tailwind CSS' },
  { Icon: IconBrandBootstrap, tooltipText: 'Bootstrap' },
];

export const goodDesignIcons = [
  { Icon: IconBrandAdobe, tooltipText: 'Photoshop & Lightroom' },
];

export const averageCodingIcons = [
  { Icon: IconBrandNextjs, tooltipText: 'Nextjs' },
  { Icon: IconBrandMysql, tooltipText: 'MySQL' },
  { Icon: IconDatabase, tooltipText: 'PostgreSQL' },
  { Icon: IconBrandFramer, tooltipText: 'Framer Motion' },
  { Icon: IconBrandCypress, tooltipText: 'Cypress' },
  { Icon: IconBrandVite, tooltipText: 'Vite & Vitest' },
  { Icon: IconLetterC, tooltipText: 'C' },
];

export const averageDesignIcons = [
  { Icon: IconBrandFigma, tooltipText: 'Figma' },
];
