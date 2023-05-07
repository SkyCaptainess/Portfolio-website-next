import {
  SiAdobe,
  SiBootstrap,
  SiC,
  SiCss3,
  SiCypress,
  SiDjango,
  SiFigma,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

export type TIcons = {
  heading: string;
  icons: typeof goodCodingIcons;
};

export const goodCodingIcons = [
  { Icon: SiPython, tooltipText: 'Python' },
  { Icon: SiDjango, tooltipText: 'Django' },
  { Icon: SiHtml5, tooltipText: 'HTML' },
  { Icon: SiCss3, tooltipText: 'CSS' },
  { Icon: SiJavascript, tooltipText: 'JavaScript' },
  { Icon: SiTypescript, tooltipText: 'TypeScript' },
  { Icon: SiReact, tooltipText: 'React' },
  { Icon: SiTailwindcss, tooltipText: 'Tailwind CSS' },
  { Icon: SiBootstrap, tooltipText: 'Bootstrap' },
];

export const goodDesignIcons = [
  { Icon: SiAdobe, tooltipText: 'Photoshop & Lightroom' },
];

export const averageCodingIcons = [
  { Icon: SiNextdotjs, tooltipText: 'Nextjs' },
  { Icon: SiMysql, tooltipText: 'MySQL' },
  { Icon: SiPostgresql, tooltipText: 'PostgreSQL' },
  { Icon: SiFramer, tooltipText: 'Framer Motion' },
  { Icon: SiCypress, tooltipText: 'Cypress' },
  { Icon: SiVite, tooltipText: 'Vite & Vitest' },
  { Icon: SiC, tooltipText: 'C' },
];

export const averageDesignIcons = [{ Icon: SiFigma, tooltipText: 'Figma' }];
