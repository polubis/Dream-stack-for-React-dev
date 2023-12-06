import { useScroll, useToggle } from '@system/figa-hooks';
import type { LayoutProps } from './defs';

import c from 'classnames';
import { NavBar } from '../nav-bar';

const Layout = ({
  className,
  children,
  topNav,
  footer,
  offPadding,
  sidebar,
}: LayoutProps) => {
  const toggler = useToggle({ opened: !!sidebar });
  const [state] = useScroll({ delay: 50 });

  return (
    <div
      className={c(
        'layout',
        className,
        { asided: !!sidebar },
        { opened: toggler.opened },
        { 'off-padding': offPadding }
      )}
    >
      <NavBar out={state.is === 'progress' && state.value > 50}>
        {topNav}
      </NavBar>
      <main className="layout-content">
        {sidebar && (
          <aside className="layout-content-sidebar">{sidebar(toggler)}</aside>
        )}
        {children}
      </main>
      <footer className="layout-footer">{footer}</footer>
    </div>
  );
};

export { Layout };
