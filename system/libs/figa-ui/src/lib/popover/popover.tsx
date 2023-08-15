import type { PopoverProps } from './defs';
import c from 'classnames';
import { tokens } from '../theme-provider';
import { useMemo } from 'react';
import { usePopover } from '@system/figa-hooks';

const Popover = ({
  className,
  children,
  trigger,
  offsetY = 150,
  initialOpen,
}: PopoverProps) => {
  const spacing = useMemo(
    () => +tokens.spacing[offsetY].replace('px', ''),
    [offsetY]
  );
  const { popoverRef, popover, triggerRef, contentRef } = usePopover<
    HTMLDivElement,
    HTMLDivElement,
    HTMLDivElement
  >(spacing, initialOpen);

  return (
    <div className={c('popover', className)} ref={popoverRef}>
      <div className="popover-trigger" ref={triggerRef}>
        {trigger(popover)}
      </div>

      {popover.opened && (
        <div className="popover-content" ref={contentRef}>
          {children(popover)}
        </div>
      )}
    </div>
  );
};

export { Popover };
