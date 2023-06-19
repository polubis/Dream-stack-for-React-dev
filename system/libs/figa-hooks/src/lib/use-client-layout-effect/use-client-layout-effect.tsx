import {
  type DependencyList,
  useLayoutEffect,
  type EffectCallback,
} from 'react';

import { isClient } from '@system/utils';

/**
 * Works exactly like useLayoutEffect hook but only on the client side.
 *
 * @param {cb} - Callback function to call if dependency changes.
 * @returns {deps} - List of deps. When one of them changes reference or value
 * it will trigger a callback.
 */
const useClientLayoutEffect = (
  cb: EffectCallback,
  deps: DependencyList = []
) => {
  useLayoutEffect(() => {
    if (isClient()) {
      const cleanUp = cb();

      return () => {
        cleanUp && cleanUp();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export { useClientLayoutEffect };
