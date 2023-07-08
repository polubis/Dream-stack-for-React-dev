import type { BoxProps } from '../box';

interface ModalProps extends BoxProps {
  onClose?: () => void;
}

export type { ModalProps };
