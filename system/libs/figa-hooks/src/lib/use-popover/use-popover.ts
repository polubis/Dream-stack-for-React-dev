import { useRef } from 'react';
import type { UsePopoverReturn } from './defs';
import { useClickOutside } from '../use-click-outside';
import { useToggle } from '../use-toggle';
import { useIsomorphicLayoutEffect } from '../use-isomorphic-layout-effect';

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

const usePopover = <
  T extends HTMLElement,
  C extends HTMLElement,
  P extends HTMLElement
>(
  offsetY: number,
  initialOpen?: boolean
): UsePopoverReturn<T, C, P> => {
  const popover = useToggle({ opened: initialOpen });

  const { ref: popoverRef } = useClickOutside<P>({
    onOutside: popover.close,
  });

  const triggerRef = useRef<T>(null);
  const contentRef = useRef<C>(null);

  useIsomorphicLayoutEffect(() => {
    const triggerElement = triggerRef.current;
    const contentElement = contentRef.current;

    if (popover.closed || !triggerElement || !contentElement) {
      return;
    }

    updateContentXY(triggerElement, contentElement, offsetY);
  }, [popover.opened, offsetY]);

  return {
    popoverRef,
    triggerRef,
    contentRef,
    popover,
  };
};

export { usePopover };
