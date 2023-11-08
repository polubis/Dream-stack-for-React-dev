import { useRef } from 'react';
import { createPortal } from 'react-dom';
import type { UsePortal } from './defs';
import { useIsomorphicLayoutEffect } from '../use-isomorphic-layout-effect';

const usePortal: UsePortal = () => {
  const wrapper = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const div = document.createElement('div');
    wrapper.current = div;

    document.body.appendChild(div);

    return () => {
      document.body.removeChild(div);
    };
  }, []);

  return {
    render: (children) =>
      wrapper.current ? createPortal(children, wrapper.current) : null,
  };
};

export { usePortal };
