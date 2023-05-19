import type { LayoutProps } from './defs';

import c from 'classnames';

const Layout = ({ className, children, header, footer, full }: LayoutProps) => {
  return (
    <div className={c('layout', className, { full })}>
      <header className="layout-header">{header}</header>
      <main className="layout-content">{children}</main>
      <footer className="layout-footer">{footer}</footer>
    </div>
  );
};

export { Layout };
