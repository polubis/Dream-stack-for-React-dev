type ToggleConfig<T = null>  = {
  data?: T | null;
  opened?: boolean;
}

type ToggleState<T = null>  = {
  data: T | null;
  opened: boolean;
}

type ToggleReturn<T = null>  = ToggleState<T>  & {
  closed: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  set: (state: ToggleState<T>) => void;
  openWithData: (data?: T | null) => void;
  toggleWithData: (data?: T | null) => void;
}

export type { ToggleConfig, ToggleState, ToggleReturn };
