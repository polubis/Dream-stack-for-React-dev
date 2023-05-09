import type {
  ScrollPair,
  ScrollState,
  UseScrollYConfig,
  ScrollStateDirection,
  UseScrollYReturn,
} from './defs';

import { fromEvent, debounceTime } from 'rxjs';
import { useEffect, useRef, useState } from 'react';

const isHTMLElement = <T extends HTMLElement>(ref: T | Window): ref is T =>
  (ref as T).offsetTop !== undefined;

const getScrollY = <T extends HTMLElement>(ref: T | Window): number =>
  isHTMLElement(ref) ? ref.scrollTop : ref.scrollY;

const calculateDirection = (
  ...[prev, curr]: ScrollPair
): ScrollStateDirection => {
  if (prev === curr) {
    return 'unchanged';
  }

  return prev < curr ? 'down' : 'up';
};

const initialState = { direction: 'idle' } as ScrollState;

/**
 * Hook responsible for detecting the moment
 * when the user is scrolling up/down.
 *
 * It can be used on @Window object or any @HTMLElement.
 *
 * Also, contains 2 additional states "idle" and "unchanged".
 *
 * The "idle" is used to clarify situation when there is no scroll iteraction at all.
 *
 * The "unchanged" is used when user scrolls too fast and the position of the scroll
 * has not changed (user moved backwards and forwards). May happen when @delay
 * in @config is f.e 2s.
 *
 * @param {UseScrollYConfig} - Configuration object.
 * @returns {UseScrollYReturn} - API that any component will use.
 */
const useScrollY = <T extends HTMLElement>(
  config: UseScrollYConfig = {}
): UseScrollYReturn<T> => {
  const ref = useRef<T>(null);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const currentRef = ref.current ? ref.current : window;

    if (!currentRef) {
      console.warn(`
        Can't find the reference, and the window object. So this hook will not work.

        It may be caused because: 
          - you're rendering ref conditionally,
          - you forgot to use forwardRef(),
          - you're using this hook on a server (during SSR or SSG).
      `);
      return;
    }

    // Temp variable to store previous scroll position.
    let previousScroll = getScrollY(currentRef);

    // Transforms native browser event from callback to $observable
    // to be able to use rxjs operators.
    const obs$ = fromEvent(currentRef, 'scroll')
      .pipe(debounceTime(config.delay ?? 150))
      .subscribe(() => {
        const currentScroll = getScrollY(currentRef);

        setState({
          previousScroll,
          currentScroll,
          direction: calculateDirection(previousScroll, currentScroll),
        });

        previousScroll = currentScroll;
      });

    return () => {
      obs$.unsubscribe();
    };
  }, [config.delay]);

  return {
    state,
    ref,
  };
};

export { useScrollY };
