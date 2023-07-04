import { useEffect, useState } from 'react';
import { debounceTime, fromEvent, map, tap, throttleTime } from 'rxjs';
import type { ViewportData, ViewportConfig } from './defs';
import { isServer } from '@system/utils';

const measure = (): ViewportData => {
  if (isServer()) {
    return {
      height: 0,
      width: 0,
      status: 'idle',
    };
  }

  const width = window.innerWidth;
  const height = window.innerHeight;

  return {
    height,
    width,
    status: 'measured',
  };
};

const useViewport = (config: ViewportConfig = {}) => {
  const [data, setData] = useState(measure);

  useEffect(() => {
    const delay = config.delay ?? 150;
    let isMeasuringAssigned = false;

    const sub = fromEvent(window, 'resize')
      .pipe(
        tap(() => {
          if (config.measuringActive && !isMeasuringAssigned) {
            setData((prevData) => ({
              ...prevData,
              status: 'measuring',
            }));
            isMeasuringAssigned = true;
          }
        }),
        config.throttle ? throttleTime(delay) : debounceTime(delay),
        map(measure),
        tap((data) => {
          setData(data);
          isMeasuringAssigned = false;
        })
      )
      .subscribe();

    return () => {
      sub.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [data] as const;
};

export { useViewport };
