// The config passed to hook.
interface ToggleConfig<T = null> {
  data?: T | null;
  opened?: boolean;
}

// The shape of state used inside the hook.
interface ToggleState<T = null> {
  data: T | null;
  opened: boolean;
}

// This is what the hook will return.
interface ToggleReturn<T = null> extends ToggleState<T> {
  closed: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  set: (state: ToggleState<T>) => void;
  openWithData: (data?: T | null) => void;
  toggleWithData: (data?: T | null) => void;
}

export type { ToggleConfig, ToggleState, ToggleReturn };