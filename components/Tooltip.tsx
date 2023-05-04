import React from 'react';
import { clsx } from 'clsx';
import { childrenNode } from '@/constants/typeInterface';
import { Root, Trigger, Portal, Content, Arrow } from '@radix-ui/react-tooltip';

type ToolTipProps = childrenNode & {
  side: 'top' | 'bottom' | 'left' | 'right';
  tooltipText: string;
};
const Tooltip = ({ children, side, tooltipText }: ToolTipProps) => {
  return (
    <Root>
      <Trigger asChild>{children}</Trigger>
      <Portal>
        <Content
          className={clsx(
            'select-none rounded bg-aqua px-1.5 py-2.5',
            'text-base text-white-400 shadow-tooltip transition ease-tooltip',
            'will-change-tooltip dark:bg-orange dark:text-black-300 md:px-2.5',
            {
              'animate-slideDownAndFade': side === 'top',
              'animate-slideLeftAndFade': side === 'right',
              'animate-slideRightAndFade': side === 'left',
            }
          )}
          side={side}
        >
          {tooltipText}
          <Arrow className="fill-aqua dark:fill-orange" />
        </Content>
      </Portal>
    </Root>
  );
};

export default Tooltip;
