import type { FooterProps } from './defs';

import c from 'classnames';

const Footer = ({ className, socials, blocks, logo }: FooterProps) => {
  return (
    <div className={c('footer', className)}>
      <div className="footer-container">
        <div className="footer-content">{blocks}</div>

        <div className="footer-bar">
          <div className="footer-bar-left">{socials}</div>
          <div className="footer-bar-right">{logo}</div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
