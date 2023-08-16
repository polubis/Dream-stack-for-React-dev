import type { UseClickOutsideConfig } from './defs';

import { useEffect, useRef } from 'react';

const assertIsNode = (target: EventTarget | Node | null): target is Node =>
  !!target && 'nodeType' in target;

const useClickOutside = <T extends HTMLElement>({
  onOutside,
}: UseClickOutsideConfig) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      (assertIsNode(target) && ref.current?.contains(target)) || onOutside();
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref };
};

export { useClickOutside };
