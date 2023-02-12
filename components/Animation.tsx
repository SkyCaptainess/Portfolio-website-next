import { Tanimation } from '@/constants/typeInterface';
import { LazyMotion, domAnimation, m } from 'framer-motion';

type staggerProps = {
  className: string;
  children: JSX.Element[] | JSX.Element;
  viewAmount: number | 'all' | 'some' | undefined;
  animation: Tanimation;
};

const Animation = ({
  animation,
  className,
  viewAmount,
  children,
}: staggerProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={animation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: viewAmount }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};

export default Animation;
