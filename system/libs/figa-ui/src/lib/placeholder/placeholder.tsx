import c from 'classnames';
import type { PlaceholderProps } from './defs';
import { LogoGraphic } from '../logo-graphic';

const Placeholder = ({
  className,
  variant = 'filled',
  full,
}: PlaceholderProps) => {
  return (
    <div className={c('placeholder', variant, { full }, className)}>
      <LogoGraphic size={48} />
    </div>
  );
};

export { Placeholder };
