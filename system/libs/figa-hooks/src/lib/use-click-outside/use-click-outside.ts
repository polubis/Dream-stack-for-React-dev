import type { UseClickOutsideConfig } from './defs';

import { useEffect, useRef } from 'react';

/**
 * Hook responsible for detecting the moment
 * when the user is clicking outside any HTML element.
 *
 * @param {UseClickOutsideConfig} - Configuration object.
 * @returns {UseClickOutsideReturn} - API that any component will use.
 */
const useClickOutside = <T extends HTMLElement>({
  onOutside,
}: UseClickOutsideConfig) => {
  // Stores a reference to the HTML element that will be tracked.
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      ref.current?.contains(e.target as Node) || onOutside();
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
