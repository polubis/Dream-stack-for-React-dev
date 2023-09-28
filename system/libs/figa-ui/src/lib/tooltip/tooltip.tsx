import { useState } from 'react';
import { TooltipProps, TooltipDirection } from './defs';
import c from 'classnames';
import { Font } from '../font';

const Tooltip = ({
  className,
  content,
  delay,
  direction,
  children,
  ...props
}: TooltipProps) => {
  let timeout: NodeJS.Timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTip = () => {
    clearTimeout(timeout);
    setActive(false);
  };

  return (
    <div
      className={c('tooltip', className)}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
        {children}
        {active && <div className={c('tooltip-tip', className)}></div>}
    </div>
  );
};

export { Tooltip };
