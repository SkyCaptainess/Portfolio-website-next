import { Montserrat } from '@next/font/google';
import { childrenNode } from '@/constants/typeInterface';

const monserrat = Montserrat({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-mont',
});

export default function RootLayout({ children }: childrenNode) {
  return (
    <html className={monserrat.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
