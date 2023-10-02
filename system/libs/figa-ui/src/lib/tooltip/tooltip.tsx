import { useState, useEffect, useRef } from 'react';
import { TooltipProps } from './defs';
import c from 'classnames';

const Tooltip = ({
  className,
  content,
  delay,
  direction,
  children,
}: TooltipProps) => {
  const [active, setActive] = useState(false);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const showTip = () => {
      timeout = setTimeout(() => {
        setActive(true);
      }, delay);
    };

    const hideTip = () => {
      clearTimeout(timeout);
      setActive(false);
    };

    if (tooltipRef.current) {
      const tooltipElement = tooltipRef.current;
      tooltipElement.addEventListener('mouseenter', showTip);
      tooltipElement.addEventListener('mouseleave', hideTip);

      return () => {
        tooltipElement.removeEventListener('mouseenter', showTip);
        tooltipElement.removeEventListener('mouseleave', hideTip);
      };
    }
  }, [delay]);

  return (
    <div className="tooltip" ref={tooltipRef}>
      {children}
      {active && (
        <div className={c('tooltip-tip', className, direction)}>{content}</div>
      )}
    </div>
  );
};

export { Tooltip };
