'use client';

import React, { lazy } from 'react';
import Link from 'next/link';
import errorAnimation from '../public/animations/404.json';

const Lottie = lazy(() => import('lottie-light-react'));

const NotFound = () => {
  return (
    <div className="grid h-screen w-screen place-items-center bg-black-300">
      <div className="card w-11/12 max-w-sm bg-base-100">
        <div className="card-body p-0">
          <h2 className="card-title pl-8 pt-8 text-xl tracking-wider md:text-2xl">
            Uh oh, looks like you&apos;re lost.
          </h2>
          <Lottie animationData={errorAnimation} />
          <div className="card-actions justify-start pb-8 pl-8">
            <Link
              aria-label="home"
              href="/"
              replace
              className="rounded-2xl bg-light-orange px-4 py-2 text-lg font-bold tracking-widest text-black-400 no-underline transition-colors duration-200 ease-linear hover:bg-orange-red hover:no-underline"
            >
              Send me back!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
