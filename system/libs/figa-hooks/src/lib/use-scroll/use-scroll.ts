import { useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from '../use-isomorphic-layout-effect';
import type {
  ScrollAxis,
  ScrollConfig,
  ScrollReturn,
  ScrollResult,
  ScrollState,
} from './defs';
import { debounceTime, fromEvent } from 'rxjs';

const warn = (): void => {
  console.warn(`
      Can't find the reference, and the window object. So this hook will not work.
  
      It may be caused because: 
        - you're rendering ref conditionally,
        - you forgot to use forwardRef() - when ref passed to component,
        - you're using this hook on a server.
    `);
};

const isHTMLElement = <T extends HTMLElement>(ref: T | Window): ref is T =>
  (ref as T).offsetTop !== undefined;

const getScrollYValue = <T extends HTMLElement>(ref: T | Window): number =>
  isHTMLElement(ref) ? ref.scrollTop : ref.scrollY;

const getScrollXValue = <T extends HTMLElement>(ref: T | Window): number =>
  isHTMLElement(ref) ? ref.scrollLeft : ref.scrollX;

const getScrollValue = <T extends HTMLElement>(
  axis: ScrollAxis,
  ref: T | Window
): number => (axis === 'x' ? getScrollXValue(ref) : getScrollYValue(ref));

const calculateProgress = (
  scrollOffset: number,
  scrollSize: number,
  containerSize: number
): number =>
  Number.parseFloat(
    ((scrollOffset * 100) / (scrollSize - containerSize)).toFixed(2)
  );

const getXProgress = <T extends HTMLElement>(ref: T | Window): number => {
  if (isHTMLElement(ref)) {
    const { width } = ref.getBoundingClientRect();

    return calculateProgress(ref.scrollLeft, ref.scrollWidth, width);
  }
  const { innerWidth, scrollX } = ref;
  const { scrollWidth } = document.documentElement;

  return calculateProgress(scrollX, scrollWidth, innerWidth);
};

const getYProgress = <T extends HTMLElement>(ref: T | Window): number => {
  if (isHTMLElement(ref)) {
    const { height } = ref.getBoundingClientRect();

    return calculateProgress(ref.scrollTop, ref.scrollHeight, height);
  }

  const { innerHeight, scrollY } = ref;
  const { scrollHeight } = document.documentElement;

  return calculateProgress(scrollY, scrollHeight, innerHeight);
};

const getProgress = <T extends HTMLElement>(
  axis: ScrollAxis,
  ref: T | Window
): number => (axis === 'x' ? getXProgress(ref) : getYProgress(ref));

const getScrollResult = (prev: number, curr: number): ScrollResult => {
  if (prev === curr) return 'unchanged';
  return prev < curr ? 'progress' : 'regress';
};

const useScroll = <T extends HTMLElement = HTMLElement>({
  axis = 'y',
  delay = 150,
  onScroll,
}: ScrollConfig = {}): ScrollReturn<T> => {
  const ref = useRef<T>(null);
  const [state, setState] = useState<ScrollState>(() => ({ is: 'idle' }));

  useIsomorphicLayoutEffect(() => {
    const target = ref.current ? ref.current : window;

    if (!target) {
      warn();
      return;
    }

    let prev = getScrollValue(axis, target);

    const obs$ = fromEvent(target, 'scroll')
      .pipe(debounceTime(delay))
      .subscribe(() => {
        const curr = getScrollValue(axis, target);
        const newState = {
          prev,
          curr,
          is: getScrollResult(prev, curr),
          value: getProgress(axis, target),
        };
     
        setState(newState);
        onScroll && onScroll(newState);

        prev = curr;
      });

    return () => {
      obs$.unsubscribe();
    };
  }, [delay, axis, onScroll]);

  return [state, ref];
};

export { useScroll };
