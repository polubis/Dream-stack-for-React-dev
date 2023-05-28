import { useScrollY } from '@system/figa-hooks';

import c from 'classnames';
import type { LeftBarProps } from './defs';

const LeftBar = ({ children }: LeftBarProps) => {
  const { state } = useScrollY();

  return (
    <div
      className={c(
        'left-bar',
        state.direction === 'up' || state.direction === 'idle'
          ? 'visible'
          : 'hidden'
      )}
    >
      {children}
    </div>
  );
};

export { LeftBar };
