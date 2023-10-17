import { useEffect, useRef, useState, useMemo } from 'react';
import { Subject, debounceTime } from 'rxjs';
import type {
  ElementSizeState,
  ElementSizeConfig,
  ElementSizeReturn,
} from './defs';
import { useIsomorphicLayoutEffect } from '../use-isomorphic-layout-effect';

/**
 * The hook responsible for detecting the height and width of
 * any HTML element. By default it checks body.
 *
 * It returns reference and state to work with.
 * @param {ElementSizeConfig} config - Configuration object.
 */
const useElementSize = <T extends HTMLElement>(
  config?: ElementSizeConfig
): ElementSizeReturn<T> => {
  const [state, setState] = useState<ElementSizeState>({
    status: 'undetected',
  });
  const ref = useRef<T | null>(null);
  const observerRef = useRef<ResizeObserver | null>(null);

  const { changed, changed$ } = useMemo(() => {
    const changed = new Subject<ElementSizeState>();
    const changed$ = changed.asObservable();
    return { changed, changed$ };
  }, []);

  useEffect(() => {
    const sub = changed$.pipe(debounceTime(config?.delay ?? 150)).subscribe({
      next: (size) => {
        setState(size);
      },
    });

    return () => {
      sub.unsubscribe();
    };
  }, [changed$, config?.delay]);

  useIsomorphicLayoutEffect(() => {
    const observeElement = () => {
      const target = ref?.current ?? document.body;

      const { width, height } = target.getBoundingClientRect();

      setState({ status: 'detected', height, width });

      observerRef.current = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        changed.next({ status: 'detected', height, width });
      });

      observerRef.current.observe(target);
    };

    observeElement();

    return () => {
      observerRef.current?.disconnect();
    };
  }, [changed]);

  return [state, ref];
};

export { useElementSize };
