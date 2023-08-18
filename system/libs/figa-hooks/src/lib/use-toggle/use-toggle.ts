import { useMemo, useState } from 'react';
import type { ToggleConfig, ToggleReturn, ToggleState } from './defs';

const useToggle = <T = null>(
  config: ToggleConfig<T> = { data: null, opened: false }
): ToggleReturn<T> => {
  const [state, setState] = useState<ToggleState<T>>(() => ({
    opened: !!config.opened,
    data: config.data ?? null,
  }));

  return useMemo(
    (): ToggleReturn<T> => ({
      data: state.data,
      opened: state.opened,
      closed: !state.opened,
      open: () => setState(({ data }) => ({ data, opened: true })),
      close: () => setState(() => ({ data: null, opened: false })),
      toggle: () => setState(({ opened, data }) => ({ data, opened: !opened })),
      set: (state) => setState(state),
      openWithData: (data) => setState({ opened: true, data: data ?? null }),
      toggleWithData: (data) =>
        setState(({ opened }) => ({ opened: !opened, data: data ?? null })),
    }),
    [state]
  );
};

export { useToggle };
