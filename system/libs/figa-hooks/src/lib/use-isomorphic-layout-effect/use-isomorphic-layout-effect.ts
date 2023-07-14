import { isClient } from '@system/utils';
import { useEffect, useLayoutEffect } from 'react';

const useIsomorphicLayoutEffect = isClient() ? useLayoutEffect : useEffect;

export { useIsomorphicLayoutEffect };
