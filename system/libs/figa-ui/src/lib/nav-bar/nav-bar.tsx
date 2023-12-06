import type { NavBarProps } from './defs';
import c from 'classnames';

const NavBar = ({ out, className, children }: NavBarProps) => {
  return (
    <header className={c('nav-bar', className, { out })}>{children}</header>
  );
};

export { NavBar };
