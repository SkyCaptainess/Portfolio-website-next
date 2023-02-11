import React, { lazy } from 'react';
import Link from 'next/link';
import errorAnimation from '../public/animations/404.json';
import '../app/globals.css';

const Lottie = lazy(() => import('lottie-react'));

const Custom404 = () => {
  return (
    <div className="grid place-items-center w-screen h-screen bg-black-300">
      <div className="card bg-base-100 w-11/12 max-w-sm ">
        <div className="card-body p-0">
          <h2 className="card-title pl-8 pt-8 tracking-wider text-xl md:text-2xl">
            Uh oh, looks like you&apos;re lost.
          </h2>
          <Lottie animationData={errorAnimation} />
          <div className="card-actions pl-8 pb-8 justify-start">
            <button className="bg-aqua px-4 py-2 rounded-2xl transition-colors ease-linear duration-200 hover:bg-dark-aqua">
              <Link
                href="/"
                className="text-lg text-white-300 tracking-widest no-underline hover:no-underline"
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
