import type { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  onClose?: () => void;
}

export type { ModalProps };
