import { useScroll } from '@system/figa-hooks';

import c from 'classnames';
import type { LeftBarProps } from './defs';

const LeftBar = ({ children }: LeftBarProps) => {
  const [{ is }] = useScroll({ delay: 0 });

  return (
    <div
      className={c(
        'left-bar',
        is === 'regress' || is === 'idle' ? 'visible' : 'hidden'
      )}
    >
      {children}
    </div>
  );
};

export { LeftBar };
