import { useState } from 'react';
import { TooltipProps } from './defs';
import c from 'classnames';

const Tooltip = ({
  className,
  content,
  delay,
  direction,
  children,
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
    <div className="tooltip" onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
      {active && (
        <div className={c('tooltip-tip', className, direction)}>{content}</div>
      )}
    </div>
  );
};

export { Tooltip };
