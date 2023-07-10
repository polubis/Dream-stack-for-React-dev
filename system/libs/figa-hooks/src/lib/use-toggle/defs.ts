type ToggleData<T = null> = T | null;

interface ToggleReturn<T = null> {
  isOpen: boolean;
  data: ToggleData<T>;
  open: (data?: ToggleData<T>) => void;
  close: () => void;
  toggle: (data?: ToggleData<T>) => void;
  override: (data?: ToggleData<T>) => void;
}

type TogglePayload<T = null> = [boolean?, ToggleData<T>?];

export type { TogglePayload, ToggleReturn, ToggleData };
