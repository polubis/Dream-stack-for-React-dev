import { Box } from '../box';
import type { DividerProps } from './defs';
import c from 'classnames';

const Divider = ({
  className,
  motive = 'default',
  axis = 'x',
  ...props
}: DividerProps) => {
  return (
    <Box {...props} className={c('divider', className, motive, axis)}>
      <div />
    </Box>
  );
};

export { Divider };
