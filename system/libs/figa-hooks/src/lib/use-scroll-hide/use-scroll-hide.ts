import { useRef } from 'react';
import type {
  HideScroll,
  ScrollHideReturn,
  ScrollHideStyle,
  ShowScroll,
} from './defs';
import { useIsomorphicLayoutEffect } from '../use-isomorphic-layout-effect';

const initial_style: ScrollHideStyle = {
  overflow: 'auto',
};

const useScrollHide = <T extends HTMLElement>(): ScrollHideReturn<T> => {
  const ref = useRef<T>(null);
  const initialStyle = useRef(initial_style);

  const getElement = (): HTMLElement => ref.current ?? document.body;

  const show: ShowScroll = () => {
    const element = getElement();
    const style = initialStyle.current;

    element.style.overflow = style.overflow;
  };

  const hide: HideScroll = () => {
    const element = getElement();
    initialStyle.current.overflow = element.style.overflow;

    element.style.overflow = 'hidden';
  };

  useIsomorphicLayoutEffect(() => {
    hide();

    return show;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, hide, show];
};

export { useScrollHide };
