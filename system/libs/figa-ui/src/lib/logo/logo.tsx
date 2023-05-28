import { LogoGraphic } from '../logo-graphic';
import type { LogoProps } from './defs';

import c from 'classnames';

const Logo = ({
  className,
  graphic = <LogoGraphic size={52} />,
  parts = ['Green', 'On', 'Software'],
}: LogoProps) => {
  return (
    <div className={c('logo', className)}>
      {graphic}
      <div className="logo-text">
        <div className="logo-text-top">
          <span>{parts[0]}</span>
          <span>{parts[1]}</span>
        </div>
        <span className="logo-text-bottom">{parts[2]}</span>
      </div>
    </div>
  );
};

export { Logo };
