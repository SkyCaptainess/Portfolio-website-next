import { Tanimation } from '@/constants/global';
import { LazyMotion, domAnimation, m } from 'framer-motion';

type staggerProps = {
  className: string;
  children: JSX.Element[] | JSX.Element;
  animation: Tanimation;
};

const Animation = ({ animation, className, children }: staggerProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={animation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.65 }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};

export default Animation;
