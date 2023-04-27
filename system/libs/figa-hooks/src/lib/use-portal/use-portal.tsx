import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import type { UsePortal } from './defs';

// usePortal is an implementation of the facade pattern.
const usePortal: UsePortal = () => {
  // Creates only one instance of div.
  const wrapper = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    // Adds div tag to body.
    document.body.appendChild(wrapper);

    return () => {
      // After unmounting the component - removes the div created earlier.
      document.body.removeChild(wrapper);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Returns an object with function that will allow you to use the portal.
  return {
    // This anonymous function is an implementation of the factory method pattern.
    render: (children) => createPortal(children, wrapper),
  };
};

export { usePortal };
