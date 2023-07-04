import { useEffect, useRef, useState, useMemo } from 'react';
import { Subject, throttleTime } from 'rxjs';
import type { ElementSizeState, UseElementSizeConfig } from './defs';

/**
 * The hook responsible for detecting the height and width of
 * any HTML element. By default it checks body.
 *
 * It returns reference and state to work with.
 * @param {UseElementSizeConfig} config - Configuration object.
 */
const useElementSize = <T extends HTMLElement>(
  config?: UseElementSizeConfig
) => {
  const [state, setState] = useState<ElementSizeState>({
    status: 'undetected',
  });

  const ref = useRef<T>(null);
  const observerRef = useRef<ResizeObserver | null>(null);

  const changed = useMemo(() => new Subject<ElementSizeState>(), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changed$ = useMemo(() => changed.asObservable(), []);

  useEffect(() => {
    const sub = changed$.pipe(throttleTime(config?.delay ?? 150)).subscribe({
      next: (size) => {
        setState(size);
      },
    });

    return () => {
      sub.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const observeElement = () => {
      if (!ref?.current && !document.body) {
        changed.next({ status: 'unsupported' });
        return;
      }

      observerRef.current = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;

        changed.next({
          status: 'detected',
          height,
          width,
        });
      });

      observerRef.current.observe(ref?.current ?? document.body);
    };

    observeElement();

    return () => {
      observerRef.current?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    state,
    ref,
  };
};

export { useElementSize };
