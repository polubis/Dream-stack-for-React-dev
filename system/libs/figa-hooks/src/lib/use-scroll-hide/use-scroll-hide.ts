import { useEffect, useRef } from 'react';
import type { ScrollHideReturn, ScrollHideStyle } from './defs';

/**
 * Hook responsible for hide scroll when modal or other
 * similar UI component appears. It's for better UX.
 *
 * @returns {ScrollHideReturn} - API that any component will use.
 */
const useScrollHide = <T extends HTMLElement>(): ScrollHideReturn<T> => {
  const ref = useRef<T>(null);
  const initialStyle = useRef<ScrollHideStyle>({
    overflow: 'auto',
  });

  const getElement = (): HTMLElement => {
    const element = ref.current;
    const body = document.body;

    return element ?? body;
  };

  const show = (): void => {
    const element = getElement();
    const style = initialStyle.current;

    element.style.overflow = style.overflow;
  };

  const hide = (): void => {
    const element = getElement();
    initialStyle.current = {
      overflow: element.style.overflow || 'auto',
    };

    element.style.overflow = 'hidden';
  };

  useEffect(() => {
    hide();

    return () => {
      show();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref };
};

export { useScrollHide };
