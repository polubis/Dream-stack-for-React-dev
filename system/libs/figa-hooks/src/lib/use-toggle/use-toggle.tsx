import type { UseToggle } from './defs';

import { useState } from 'react';

const useToggle: UseToggle = (initialOpen = false) => {
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
