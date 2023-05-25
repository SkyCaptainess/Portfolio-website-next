import { Montserrat } from 'next/font/google';
import { Metadata } from 'next';
import { childrenNode } from '@/constants/typeInterface';
import './globals.css';

const monserrat = Montserrat({
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal', 'italic'],
  variable: '--font-mont',
});

export const metadata: Metadata = {
  title: 'Your Name',
  description:
    'Hi, I\'m "Your Name" and I love to build simple and beautiful things!',
  creator: 'Your Name',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f8f8' },
    { media: '(prefers-color-scheme: dark)', color: '#212529' },
  ],
  icons: {
    icon: '/favicons/favicon.ico',
    apple: '/favicons/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicons/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/favicons/android-chrome-192x192.png',
      },
      {
        rel: 'mask-icon',
        url: '/favicons/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/favicons/site.webmanifest',
};

export default function RootLayout({ children }: childrenNode) {
  return (
    <html lang="en" className={monserrat.className}>
      <body>{children}</body>
    </html>
  );
}
