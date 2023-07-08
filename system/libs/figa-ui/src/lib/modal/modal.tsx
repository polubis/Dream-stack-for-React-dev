import { Box } from '../box';
import type { ModalProps } from './defs';

import { usePortal } from '@system/figa-hooks';

import c from 'classnames';

const Modal = ({ className, children, onClose, ...props }: ModalProps) => {
  const { render } = usePortal();

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
