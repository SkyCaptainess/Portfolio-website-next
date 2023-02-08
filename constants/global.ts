export const listElements = [
  'About Me',
  'Skills',
  'Experience',
  'Projects',
  'Contact',
];

export const externalLinks = {
  LinkedIn: 'https://www.linkedin.com/in/nicholas-yjy/',
  GitHub: 'https://github.com/nicholas5538',
  Instagram: 'https://www.instagram.com/frivolousnicholas',
};

export type Tanimation = {
  hidden: { opacity: 0; x?: number; y?: number };
  show: {
    opacity: 1;
    x?: number;
    y?: number;
    transition?: {
      bounce?: number;
      delayChildren?: number;
      duration: number;
      type?: 'inertia' | 'spring' | 'tween';
      staggerChildren?: number;
    };
  };
};
