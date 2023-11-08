import type { PopoverProps } from './defs';
import c from 'classnames';
import { tokens } from '../theme-provider';
import { ReactNode, useEffect, useRef } from 'react';
import {
  ToggleReturn,
  useClickOutside,
  useIsomorphicLayoutEffect,
  usePortal,
  useToggle,
} from '@system/figa-hooks';

const updateContentXY = (
  triggerElement: HTMLElement,
  contentElement: HTMLElement,
  offsetY: number
) => {
  const triggerRect = triggerElement.getBoundingClientRect();
  const contentRect = contentElement.getBoundingClientRect();

  const windowHalfWidth = window.innerWidth / 2;
  const windowHalfHeight = window.innerHeight / 2;

  const isRight = triggerRect.left >= windowHalfWidth;
  const isBottom = triggerRect.top >= windowHalfHeight;

  const x =
    triggerRect.left - (isRight ? contentRect.width - triggerRect.width : 0);
  const y = isBottom
    ? triggerRect.top - (offsetY + contentRect.height)
    : triggerRect.top + triggerRect.height + offsetY;

  contentElement.style.top = `${y}px`;
  contentElement.style.left = `${x}px`;
};

const Popover = ({
  className,
  children,
  trigger,
  offsetY = 150,
  initialOpen,
}: PopoverProps) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const popover = useToggle();
  const { render } = usePortal();
  const { ref: contentRef } = useClickOutside<HTMLDivElement>({
    onOutside: popover.close,
  });

  useEffect(() => {
    if (initialOpen) popover.open();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useIsomorphicLayoutEffect(() => {
    const triggerElement = triggerRef.current;
    const contentElement = contentRef.current;

    if (popover.closed || !triggerElement || !contentElement) {
      return;
    }

    updateContentXY(
      triggerElement,
      contentElement,
      +tokens.spacing[offsetY].replace('px', '')
    );
  }, [popover.opened, offsetY]);

  return (
    <div className={c('popover', className)}>
      <div className="popover-trigger" ref={triggerRef}>
        {trigger(popover)}
      </div>

      {popover.opened &&
        render(
          <div className="popover-content" ref={contentRef}>
            {children(popover)}
          </div>
        )}
    </div>
  );
};

export { Popover };
