import type { ModalProps } from './defs';

import { usePortal } from '@system/figa-hooks';

const Modal = ({ children, onClose }: ModalProps) => {
  const { render } = usePortal();

  return render(
    <>
      <div className="backdrop" onClick={onClose} />
      <div className="modal">{children}</div>
    </>
  );
};

export { Modal };
