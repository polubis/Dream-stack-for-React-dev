import { Box } from '../box';
import type { ModalProps } from './defs';

import { usePortal, useScrollHide } from '@system/figa-hooks';

import c from 'classnames';

const Modal = ({ className, children, onClose, ...props }: ModalProps) => {
  useScrollHide();
  const { render } = usePortal();
  // @TODO: Add option to pass maxHeight, minHeight
  // @TODO: Add option to provide modal via ContextAPI to
  // remove prop-drilling.
  return render(
    <>
      <div className="backdrop" onClick={onClose} />
      <Box className={c('modal', className)} {...props}>
        {children}
      </Box>
    </>
  );
};

export { Modal };
