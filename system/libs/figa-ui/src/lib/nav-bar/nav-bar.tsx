import { useScroll } from '@system/figa-hooks';
import type { NavBarHeaderProps, NavBarProps } from './defs';
import c from 'classnames';

const Header = ({ className, children }: NavBarHeaderProps) => {
  return <header className={c('nav-bar', className)}>{children}</header>;
};

const NonSticky = ({ className, children }: Omit<NavBarProps, 'sticky'>) => {
  const [state] = useScroll({ delay: 100 });

  const out = state.is === 'progress';

  return <Header className={c(className, { out })} children={children} />;
};

const NavBar = ({ sticky, ...props }: NavBarProps) => {
  const Component = sticky ? Header : NonSticky;
  return <Component {...props} />;
};

export { NavBar };
