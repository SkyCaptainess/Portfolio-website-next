import {
  IconBrandPython,
  IconBrandDjango,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandBootstrap,
  IconBrandNextjs,
  IconBrandMysql,
  IconLetterC,
  IconBrandCypress,
  IconBrandAdobe,
  IconBrandFigma,
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
  { Icon: IconBrandTailwind, tooltipText: 'Tailwindcss' },
  { Icon: IconBrandBootstrap, tooltipText: 'Bootstrap' },
];

export const goodDesignIcons = [
  { Icon: IconBrandAdobe, tooltipText: 'Photoshop & Lightroom' },
];

export const averageCodingIcons = [
  { Icon: IconBrandNextjs, tooltipText: 'Nextjs' },
  { Icon: IconBrandMysql, tooltipText: 'MySQL' },
  { Icon: IconLetterC, tooltipText: 'C' },
  { Icon: IconBrandCypress, tooltipText: 'Cypress' },
];

export const averageDesignIcons = [
  { Icon: IconBrandFigma, tooltipText: 'Figma' },
];
