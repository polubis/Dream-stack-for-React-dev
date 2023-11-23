import type {
  IntersectionObserverConfig,
  IntersectionObserverReturn,
} from './defs';

import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = <T extends HTMLElement>(
  config: IntersectionObserverConfig = {}
): IntersectionObserverReturn<T> => {
  const { threshold, root, rootMargin, once } = config;

  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isClient = typeof window !== 'undefined';
    const currentRef = ref.current;

    if (!isClient) return;

    const isSupported = 'IntersectionObserver' in window;

    if (!isSupported) {
      return;
    }

    if (!currentRef) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          once && observer.unobserve(currentRef);
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    currentRef && observer.observe(currentRef);

    return () => {
      currentRef && observer.unobserve(currentRef);
    };
  }, [threshold, root, rootMargin, once]);

  return { ref, visible };
};
