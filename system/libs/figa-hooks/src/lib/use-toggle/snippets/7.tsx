import { useMemo, useState } from 'react';
import type { ToggleConfig, ToggleReturn, ToggleState } from './defs';

const useToggle = <T = null>(
  config: ToggleConfig<T> = { data: null, opened: false }
): ToggleReturn<T> => {
  // We used a constructor to create the initial state -
  // to avoid the recreation of objects in every re-render.
  const [state, setState] = useState<ToggleState<T>>(() => ({
    opened: !!config.opened,
    // We converted the data to null if it's
    // undefined - to be sure that it will
    // be always provided data type via T generic
    // or null.
    data: config.data ?? null,
  }));

  // We explicitly assigned the type to be
  // sure that our implementation matches
  // provided contracts.
  return useMemo(
    // We've used "useMemo" to recreate the return
    // object only if the state changes. In another
    // way, all functions will be re-created in every render.
    (): ToggleReturn<T> => ({
      data: state.data,
      opened: state.opened,
      closed: !state.opened,
      // We're using the callback setter from the
      // "useState" hook to avoid potential problems
      // for developers if they'll do some async code stuff.
      open: () => setState(({ data }) => ({ data, opened: true })),
      close: () => setState(() => ({ data: null, opened: false })),
      toggle: () => setState(({ opened, data }) => ({ data, opened: !opened })),
      set: (state) => setState(state),
      openWithData: (data) => setState({ opened: true, data: data ?? null }),
      toggleWithData: (data) =>
        setState(({ opened }) => ({ opened: !opened, data: data ?? null })),
    }),
    // The "useMemo" hook will recreate the return object
    // only if the state itself changes.
    [state]
  );
};

export { useToggle };