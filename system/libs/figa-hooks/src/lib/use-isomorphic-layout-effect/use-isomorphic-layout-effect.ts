import { isClient } from '@system/utils';
import { useEffect, useLayoutEffect } from 'react';

const useIsomorphicLayoutEffect = isClient() ? useLayoutEffect : useEffect;
// eslint-disable-next-line @typescript-eslint/no-empty-function
const useSSRSafeEffect = isClient() ? useLayoutEffect : () => {};

export { useIsomorphicLayoutEffect, useSSRSafeEffect };
