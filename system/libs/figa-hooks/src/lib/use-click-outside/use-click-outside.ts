import type { UseClickOutsideConfig } from './defs';

import { useEffect, useId, useRef } from 'react';

const assertIsNode = (target: EventTarget | Node | null): target is Node =>
  !!target && 'nodeType' in target;

const useClickOutside = <T extends HTMLElement>({
  onOutside,
  exceptionRefs = [],
}: UseClickOutsideConfig) => {
  const contentRef = useRef<T>(null);
  const id = useId();

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      const trg = target;

      if (
        !assertIsNode(trg) ||
        contentRef.current?.contains(trg) ||
        exceptionRefs.some((ref) => ref.current?.contains(trg))
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

  return { id, contentRef };
};

export { useClickOutside };
