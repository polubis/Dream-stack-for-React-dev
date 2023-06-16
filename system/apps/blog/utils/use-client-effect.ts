import { useEffect } from 'react';
import { isClient } from './is-server';

type CleanUp = void | (() => void);

const useClientEffect = (effect: () => CleanUp, deps: unknown[] = []): void => {
  useEffect(() => {
    if (isClient()) {
      return;
    }

    const cleanUp = effect();

    return () => {
      cleanUp && cleanUp();
    };
  }, deps);
};

export { useClientEffect };
