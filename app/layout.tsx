import { Montserrat } from '@next/font/google';
import { childrenNode } from '@/constants/typeInterface';
import './globals.css';

const monserrat = Montserrat({
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal', 'italic'],
  variable: '--font-mont',
});

export default function RootLayout({ children }: childrenNode) {
  return (
    <html className={monserrat.className}>
      <body>{children}</body>
    </html>
  );
}
