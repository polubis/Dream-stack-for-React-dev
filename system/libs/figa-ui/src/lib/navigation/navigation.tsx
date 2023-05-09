import type { NavigationProps } from './defs';

import c from 'classnames';

const Navigation = ({ className, logo, links, action }: NavigationProps) => {
  return (
    <nav className={c('navigation', className)}>
      <div className="navigation-logo">{logo}</div>
      <ul className="navigation-links">
        {links.map((link, idx) => (
          <li className="navigation-link" key={idx}>
            {link}
          </li>
        ))}
      </ul>
      <div className="navigation-action">{action}</div>
    </nav>
  );
};

export { Navigation };
