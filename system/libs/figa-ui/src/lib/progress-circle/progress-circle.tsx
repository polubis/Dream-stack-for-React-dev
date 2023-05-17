import type { ProgressCircleProps, ProgressCircleChildren } from './defs';
import { useState, useEffect, useRef } from 'react';

import c from 'classnames';
import { Font } from '../font';

const toPercentage = (value: number, decimals = 1): number =>
  parseInt((value * 100).toFixed(decimals));

const defaultChildren: ProgressCircleChildren = (ms) =>
  (ms / 1000).toFixed(1) + 's';

const ProgressCircle = ({
  className,
  interval = 100,
  jump = 100,
  ms = 5000,
  size = 100,
  onEnd,
  children = defaultChildren,
}: ProgressCircleProps) => {
  const time = useRef(ms);
  const [, setCounter] = useState(ms);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  const handleEnd = () => {
    onEnd && onEnd();
  };

  const clearIntervalRef = () => {
    intervalRef.current && clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      time.current -= jump;

      setCounter(time.current);

      if (time.current <= 0) {
        clearIntervalRef();
        handleEnd();
      }
    }, interval);

    return () => {
      clearIntervalRef();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={c('progress-circle', className)}
      style={{
        width: size,
        height: size,
      }}
    >
      <div
        className="progress-circle-front"
        style={{
          transform: `scale(${toPercentage(time.current / ms) / 100})`,
        }}
      />
      <Font className="progress-circle-text" variant="h6">
        {children(time.current)}
      </Font>
    </div>
  );
};

export { ProgressCircle };
