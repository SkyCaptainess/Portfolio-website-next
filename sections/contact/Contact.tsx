'use client';

import React from 'react';
import Animation from '@/components/Animation';
import Button from '@/components/button';
import { Tanimation, Tbutton } from '@/constants/typeInterface';
import { useMotionContext } from '@/hooks/useMotionContext';
import { useRefsContext } from '@/hooks/useRefsContext';

const Contact = () => {
  const { prefersReducedMotion } = useMotionContext() ?? false;
  const { contactRef } = useRefsContext() ?? {};

  const containerAnimation: Tanimation = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 1.25,
        bounce: 0.4,
      },
    },
  };

  const ButtonProps: Tbutton<string> = {
    buttonClass: 'w-1/2 max-w-[160px]',
    label: 'email',
    link: 'mailto:andychris9474@gmail.com',
    linkClass: 'text-base md:text-lg xl:text-xl',
    rel: 'noreferrer noopener',
    target: '_blank',
    text: 'Say Hello!',
  };

  return (
    <section className="dark-blue-section">
      <Animation
        animation={containerAnimation}
        className="relative mx-auto mb-20 flex h-full w-11/12 max-w-[450px] flex-col items-center justify-center gap-y-4 p-0 text-center ipad-mini:mb-28 md:mb-32 lg:mb-48 lg:gap-y-8 xl:mb-56 xl:max-w-[600px] 3xl:mb-72"
        viewAmount={0.65}
      >
        <h2
          ref={contactRef}
          className="text-xl font-bold md:text-3xl xl:text-4xl"
        >
          🤙 <span className="span-heading">What&apos;s next?</span>
        </h2>
        <h2 className="text-lg font-bold text-white-400 transition-colors duration-300 ease-out dark:text-white-300 md:text-3xl xl:text-4xl">
          Get in touch
        </h2>
        <h3 className="text-base font-normal text-white-400 transition-colors duration-300 ease-out dark:text-white-100 md:text-lg xl:text-xl">
          I&apos;m always on the lookout for new opportunities. Whether you have
          a question or just want to say hi, I&apos;ll try my best to get back
          to you!
        </h3>
        <Button {...ButtonProps} />
      </Animation>
      <div className="dark-blue-gradient h-[145%] ipad-mini:h-[160%] lg:h-[170%] xl:h-[180%] 3xl:h-[200%]"></div>
    </section>
  );
};

export default Contact;
