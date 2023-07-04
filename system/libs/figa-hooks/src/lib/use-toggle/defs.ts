interface UseToggleReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

type UseTogglePayload = [(boolean | (() => boolean))?];

export type { UseTogglePayload, UseToggleReturn };
