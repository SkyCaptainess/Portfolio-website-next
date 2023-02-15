import React, { lazy } from 'react';
import Link from 'next/link';
import errorAnimation from '../public/animations/404.json';
import '../app/globals.css';

const Lottie = lazy(() => import('lottie-react'));

const Custom404 = () => {
  return (
    <div className="grid h-screen w-screen place-items-center bg-black-300">
      <div className="card w-11/12 max-w-sm bg-base-100 ">
        <div className="card-body p-0">
          <h2 className="card-title pl-8 pt-8 text-xl tracking-wider md:text-2xl">
            Uh oh, looks like you&apos;re lost.
          </h2>
          <Lottie animationData={errorAnimation} />
          <div className="card-actions justify-start pl-8 pb-8">
            <button className="rounded-2xl bg-aqua px-4 py-2 transition-colors duration-200 ease-linear hover:bg-dark-aqua">
              <Link
                aria-label="home"
                href="/"
                className="text-lg tracking-widest text-white-300 no-underline hover:no-underline"
              >
                Send me back!
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
