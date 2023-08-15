import { useState } from 'react';
import type { ToggleConfig, ToggleReturn, ToggleState } from './defs';

const useToggle = <T = null>(
  config: ToggleConfig<T> = { data: null, opened: false }
): ToggleReturn<T> => {
  const [state, setState] = useState<ToggleState<T>>(() => ({
    opened: !!config.opened,
    closed: !config.opened,
    data: config.data ?? null,
  }));

  const open: ToggleReturn<T>['open'] = (data) => {
    setState({ opened: true, closed: false, data: data ?? null });
  };

  const close: ToggleReturn<T>['close'] = () => {
    setState({ opened: false, closed: true, data: null });
  };

  const toggle: ToggleReturn<T>['toggle'] = (data) => {
    if (state.opened) {
      close();
    } else {
      open(data);
    }
  };

  const setData: ToggleReturn<T>['setData'] = (data) => {
    setState((state) => ({ ...state, data }));
  };

  return {
    ...state,
    open,
    close,
    toggle,
    setData,
  };
};

export { useToggle };
