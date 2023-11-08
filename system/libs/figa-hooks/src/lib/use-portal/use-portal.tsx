import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import type { UsePortal } from './defs';
import { useIsomorphicLayoutEffect } from '../use-isomorphic-layout-effect';

const usePortal: UsePortal = () => {
  const wrapper = useMemo(() => document.createElement('div'), []);

  useIsomorphicLayoutEffect(() => {
    document.body.appendChild(wrapper);

    return () => {
      document.body.removeChild(wrapper);
    };
  }, []);

  return {
    render: (children) => createPortal(children, wrapper),
  };
};

export { usePortal };
