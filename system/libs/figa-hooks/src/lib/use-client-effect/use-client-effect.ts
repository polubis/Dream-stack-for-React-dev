import { type DependencyList, useEffect, type EffectCallback } from 'react';

import { isClient } from '@system/utils';

/**
 * Works exactly like useEffect hook but only on the client side.
 *
 * @param {cb} - Callback function to call if dependency changes.
 * @returns {deps} - List of deps. When one of them changes reference or value
 * it will trigger a callback.
 */
const useClientEffect = (cb: EffectCallback, deps: DependencyList = []) => {
  useEffect(() => {
    if (isClient()) {
      const cleanUp = cb();

      return () => {
        cleanUp && cleanUp();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export { useClientEffect };
