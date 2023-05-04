import React, { lazy, Suspense } from 'react';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import errorPic from '../public/images/error.webp';
import Skeleton from '@/components/Skeleton';

const Card = lazy(() =>
  import('@/components/card').then((module) => ({ default: module.Card }))
);
const CardContent = lazy(() =>
  import('@/components/card').then((module) => ({
    default: module.CardContent,
  }))
);
const CardFooter = lazy(() =>
  import('@/components/card').then((module) => ({ default: module.CardFooter }))
);
const CardHeader = lazy(() =>
  import('@/components/card').then((module) => ({ default: module.CardHeader }))
);
const CardTitle = lazy(() =>
  import('@/components/card').then((module) => ({ default: module.CardTitle }))
);

const NotFound = () => {
  return (
    <div className="grid h-screen w-screen place-items-center bg-black-300">
      <Suspense fallback={<Skeleton className="w-11/12 max-w-sm" />}>
        <Card className="w-11/12 max-w-sm border-4 border-black-500 bg-black-400">
          <CardHeader>
            <CardTitle className="text-xl tracking-wider text-white-300 md:text-2xl">
              Uh oh, looks like you&apos;re lost.
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <Image
              src={errorPic}
              alt="Picture of error 404"
              placeholder="blur"
            />
          </CardContent>
          <CardFooter>
            <Link
              aria-label="home"
              href="/"
              replace
              className={clsx(
                'rounded-2xl bg-light-orange px-4 py-2 text-lg font-bold',
                'tracking-widest text-black-400 no-underline transition-colors duration-200',
                'ease-linear hover:bg-orange-red hover:no-underline'
              )}
            >
              Send me back!
            </Link>
          </CardFooter>
        </Card>
      </Suspense>
    </div>
  );
};

export default NotFound;
