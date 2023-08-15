interface ToggleConfig<T = null> {
  data?: T | null;
  opened?: boolean;
}

interface ToggleState<T = null> {
  data: T | null;
  opened: boolean;
  closed: boolean;
}

interface ToggleReturn<T = null> extends ToggleState<T> {
  open: (data?: T | null) => void;
  close: () => void;
  toggle: (data?: T | null) => void;
  setData: (data: T | null) => void;
}

export type { ToggleConfig, ToggleState, ToggleReturn };
