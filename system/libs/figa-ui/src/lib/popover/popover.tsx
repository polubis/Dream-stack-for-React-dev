import type { PopoverProps } from './defs';
import c from 'classnames';
import { isMDown, tokens } from '../theme-provider';
import { useRef } from 'react';
import {
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

  const isTriggerRight = triggerRect.left >= window.innerWidth / 2;
  const isTriggerBottom = triggerRect.top >= window.innerHeight / 2;
  const triggerRightOffset = window.innerWidth - triggerRect.right;
  const isContentExceedingWindow =
    contentRect.width + triggerRightOffset > window.innerWidth;

  const offsetTop = isTriggerBottom
    ? triggerRect.top - (offsetY + contentRect.height)
    : triggerRect.top + triggerRect.height + offsetY;
  contentElement.style.top = `${offsetTop}px`;

  if (isMDown(window.innerWidth) && isContentExceedingWindow) {
    contentElement.style.width = '94%';
    contentElement.style.left = '3%';
    return;
  }

  const offsetLeft =
    triggerRect.left -
    (isTriggerRight ? contentRect.width - triggerRect.width : 0);

  contentElement.style.left = `${offsetLeft}px`;
};

const Popover = ({
  className,
  children,
  trigger,
  offsetY = 150,
  initialOpen,
}: PopoverProps) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const popover = useToggle({ opened: initialOpen });
  const { render } = usePortal();
  const { ref: contentRef } = useClickOutside<HTMLDivElement>({
    onOutside: popover.close,
    exceptionRefs: [triggerRef],
  });

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
