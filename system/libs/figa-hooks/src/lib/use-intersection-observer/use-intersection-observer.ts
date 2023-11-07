import type {
  IntersectionObserverConfig,
  IntersectionObserverReturn,
} from './defs';

import { useEffect, useRef, useState } from 'react';

/**
 * Hook responsible for detecting the moment
 * when the user is near a particular HTML element.
 *
 * @param {IntersectionObserverConfig} - Configuration object.
 * @returns {IntersectionObserverReturn} - API that any component will use.
 */
export const useIntersectionObserver = <T extends HTMLElement>(
  config: IntersectionObserverConfig = {}
): IntersectionObserverReturn<T> => {
  const { threshold, root, rootMargin, once } = config;

  // Stores a reference to the HTML element that will be observed.
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Here we're checking support and blocking execution
    // on server-side.
    const isClient = typeof window !== 'undefined';

    if (!isClient) return;

    const isSupported = 'IntersectionObserver' in window;

    if (!isSupported) {
      console.error(
        'IntersectionObserver is not supported. Try to use polyfill.'
      );
      return;
    }

    // Variable to avoid multiple use of ref.current.
    const currentRef = ref.current;
    // Natively available API that supports detection.
    // It will call the listen function if it's near the element.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);

        if (once && entry.isIntersecting) {
          observer.disconnect();
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    // We're starting observations.
    currentRef && observer.observe(currentRef);

    return () => {
      // We detach our listener.
      currentRef && observer.unobserve(currentRef);
    };
    // If any of the values change we'll start a new subscription.
  }, [threshold, root, rootMargin, once]);

  return { ref, visible };
};
