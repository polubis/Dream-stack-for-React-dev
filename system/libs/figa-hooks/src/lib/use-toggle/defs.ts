type UseToggle = (initialOpen?: boolean) => {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export type { UseToggle };
