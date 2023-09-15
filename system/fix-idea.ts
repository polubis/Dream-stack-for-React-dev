import { useEffect, useLayoutEffect } from 'react';

// Simple check for environment.
const isClient = () => typeof window !== 'undefined';

// The "useEffect" is skipped on server side - so it's like empty function.
const useIsomorphicLayoutEffect = isClient() ? useLayoutEffect : useEffect;
// Empty function returned instead of hook.
const useSSRSafeEffect = isClient() ? useLayoutEffect : () => {};

export { useIsomorphicLayoutEffect, useSSRSafeEffect };
