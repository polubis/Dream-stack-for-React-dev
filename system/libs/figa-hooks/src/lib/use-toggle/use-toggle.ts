import type { TogglePayload, ToggleReturn, ToggleData } from './defs';

import { useState } from 'react';

const useToggle = <T = null>(...payload: TogglePayload<T>): ToggleReturn<T> => {
  const [initialOpen = false, initialData = null] = payload;
  const [data, setData] = useState<ToggleData<T>>(initialData);
  const [isOpen, setIsOpen] = useState(initialOpen);

  const override = (data?: ToggleData<T>): void => {
    setData(data ?? null);
  };

  const open = (data?: ToggleData<T>): void => {
    override(data);
    setIsOpen(true);
  };

  const close = (): void => {
    setData(null);
    setIsOpen(false);
  };

  const toggle = (data?: ToggleData<T>): void => {
    if (isOpen) {
      close();
    } else {
      open(data);
    }
  };

  return { isOpen, open, close, toggle, data, override };
};

export { useToggle };
