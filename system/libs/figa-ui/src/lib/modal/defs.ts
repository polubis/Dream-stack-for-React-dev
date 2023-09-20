import type { BoxProps } from '../box';

type ModalProps  = BoxProps & {
  onClose?: () => void;
}

export type { ModalProps };
