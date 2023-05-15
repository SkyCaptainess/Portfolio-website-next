import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { Tbutton } from '@/constants/typeInterface';

const Button = ({
  buttonClass,
  label,
  link,
  linkClass,
  rel,
  target,
  text,
}: Tbutton<string>) => {
  return (
    <button
      type="button"
      className={twMerge(
        'rounded-2xl bg-aqua px-4 py-2 font-bold transition-colors duration-300 ease-out hover:bg-dark-aqua dark:bg-light-orange dark:hover:bg-orange-red',
        buttonClass ?? ''
      )}
    >
      <Link
        aria-label={label}
        href={link}
        rel={rel}
        target={target}
        className={twMerge(
          'h-full w-full text-lg tracking-widest text-white-400 no-underline hover:no-underline dark:text-black-300',
          linkClass
        )}
      >
        {text}
      </Link>
    </button>
  );
};

export default Button;
