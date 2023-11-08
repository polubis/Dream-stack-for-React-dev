import { useMemo } from 'react';
import { createPortal } from 'react-dom';
import type { UsePortal } from './defs';
import { useIsomorphicLayoutEffect } from '../use-isomorphic-layout-effect';
import { isServer } from '@system/utils';

const usePortal: UsePortal = () => {
  const wrapper = useMemo(
    () => (isServer() ? null : document.createElement('div')),
    []
  );

  useIsomorphicLayoutEffect(() => {
    if (!wrapper) return;

    document.body.appendChild(wrapper);

    return () => {
      document.body.removeChild(wrapper);
    };
  }, []);

  return {
    render: (children) => (wrapper ? createPortal(children, wrapper) : null),
  };
};

export { usePortal };
