import { useClickOutside, useToggle } from '@system/figa-hooks';
import type { PopoverProps } from './defs';
import c from 'classnames';
import { Box } from '../box';

const Popover = ({
  className,
  children,
  trigger,
  initialOpen,
}: PopoverProps) => {
  const toggler = useToggle(initialOpen);

  const { ref } = useClickOutside<HTMLDivElement>({
    onOutside: toggler.close,
  });

  return (
    <div className={c('popover', className)} ref={ref}>
      {trigger(toggler)}

      {toggler.isOpen && (
        <Box className="popover-content" variant="outlined">
          {children(toggler)}
        </Box>
      )}
    </div>
  );
};

export { Popover };
