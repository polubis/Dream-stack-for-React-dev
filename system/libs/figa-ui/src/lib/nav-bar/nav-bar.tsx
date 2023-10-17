import { useScroll } from '@system/figa-hooks';
import type { NavBarProps } from './defs';
import c from 'classnames';

const NavBar = ({ className, children }: NavBarProps) => {
  const [state] = useScroll({ delay: 100 });

  const out = state.is === 'progress';

  return (
    <header className={c('nav-bar', className, { out })}>{children}</header>
  );
};

export { NavBar };
