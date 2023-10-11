import { useCallback, useRef } from 'react';
import type { ScrollToReturn, ToTop } from './defs';

const useScrollTo = <
  T extends HTMLElement = HTMLElement
>(): ScrollToReturn<T> => {
  const ref = useRef<T>(null);

  const toTop: ToTop = useCallback((behavior) => {
    if (ref.current) ref.current.scrollTop = 0;
    else window.scrollTo({ top: 0, behavior });
  }, []);

  return [ref, { toTop }];
};

export { useScrollTo };
