import { type HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

const Skeleton = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('bg-muted rounded-md motion-safe:animate-pulse', className)}
      {...props}
    />
  );
};

export default Skeleton;
