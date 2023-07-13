import { useState, useCallback, useRef, useEffect } from 'react';
import type {
  ClipboardConfig,
  ClipboardReturn,
  ClipboardState,
  CopyHandler,
} from './defs';

/**
 * Hook responsible for saving string content in clipboard.
 *
 * It introduces a number of states that you can act on and show
 * a dedicated element on the UI.
 *
 * It also checks support and if clipboard feature is not supported
 * it changes to error state.
 *
 * @param {ClipboardConfig} config Configuration object.
 * @returns API to consume.
 */
const useClipboard = (
  { cleansAfter }: ClipboardConfig = {
    cleansAfter: 2500,
  }
): ClipboardReturn => {
  const [state, setState] = useState<ClipboardState>(() =>
    navigator?.clipboard ? { is: 'ready' } : { is: 'unsupported' }
  );
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const cleanUpTimeout = (): void => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const copy: CopyHandler = useCallback(async (value) => {
    cleanUpTimeout();

    setState({ value, is: 'copying' });

    try {
      await navigator.clipboard.writeText(value);

      setState({ value, is: 'copied' });

      if (typeof cleansAfter !== 'number') {
        return;
      }

      timeoutRef.current = setTimeout(() => {
        setState({ is: 'ready' });
      }, cleansAfter);
    } catch (error) {
      setState({ is: 'error' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    cleanUpTimeout();
  }, []);

  return [state, copy];
};

export { useClipboard };
