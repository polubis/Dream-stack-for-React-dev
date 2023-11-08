import type { UseClickOutsideConfig } from './defs';

import { useEffect, useRef } from 'react';

const assertIsNode = (target: EventTarget | Node | null): target is Node =>
  !!target && 'nodeType' in target;

const useClickOutside = <T extends HTMLElement>({
  onOutside,
  exceptionRefs = [],
}: UseClickOutsideConfig) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      const trg = target;

      if (
        !assertIsNode(trg) ||
        ref.current?.contains(trg) ||
        exceptionRefs.some((r) => r.current?.contains(trg))
      )
        return;

      onOutside();
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onOutside]);

  return { ref };
};

export { useClickOutside };
