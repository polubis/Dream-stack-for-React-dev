import type { UseTogglePayload, UseToggleReturn } from './defs';

import { useState } from 'react';

const useToggle = (...payload: UseTogglePayload): UseToggleReturn => {
  const [initialOpen = false] = payload;
  const [isOpen, setIsOpen] = useState(initialOpen);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, open, close, toggle };
};

export { useToggle };
