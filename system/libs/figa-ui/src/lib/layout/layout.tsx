import { useToggle } from '@system/figa-hooks';
import type { LayoutProps } from './defs';

import c from 'classnames';

const Layout = ({
  className,
  children,
  header,
  footer,
  offPadding,
  sidebar,
}: LayoutProps) => {
  const toggler = useToggle({ opened: !!sidebar });

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
      {header}
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
