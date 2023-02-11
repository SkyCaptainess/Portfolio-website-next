'use client';

import React from 'react';
import Animation from '@/components/Animation';
import { useReducedMotion } from 'framer-motion';
import { Tanimation } from '@/constants/global';

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();
  const containerAnimation: Tanimation = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 1,
        bounce: 0.4,
      },
    },
  };

  return (
    <section className="dark-blue-section">
      <Animation
        animation={containerAnimation}
        className="contactContainer mb-20 ipad-mini:mb-28 md:mb-32 lg:mb-48 xl:mb-56 3xl:mb-72"
      >
        <h2 className="text-blue text-xl font-bold md:text-3xl xl:text-4xl">
          🤙 What&apos;s next?
        </h2>
        <h2 className="text-lg text-white-300 font-bold md:text-3xl xl:text-4xl">
          Get in touch
        </h2>
        <h4 className="text-white-300 text-base font-normal md:text-lg xl:text-xl">
          I&apos;m always on the lookout for new opportunities. Whether you have
          a question or just want to say hi, I&apos;ll try my best to get back
          to you!
        </h4>
        <button
          type="button"
          className="bg-aqua px-4 py-2 rounded-2xl transition-colors ease-linear duration-200 hover:bg-dark-aqua w-1/2 max-w-[160px]"
        >
          <a
            href="mailto:nicholas5538@gmail.com"
            className="text-base text-white-300 tracking-widest no-underline hover:no-underline w-full h-full md:text-lg xl:text-xl"
          >
            Say Hello
          </a>
        </button>
      </Animation>
      <div className="dark-blue-gradient h-[145%] ipad-mini:h-[160%] lg:h-[170%] xl:h-[180%] 3xl:h-[200%]"></div>
    </section>
  );
};

export default Contact;
