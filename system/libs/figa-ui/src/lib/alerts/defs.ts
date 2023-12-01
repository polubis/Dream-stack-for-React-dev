import type { ReactNode } from 'react';
import type { AlertProps } from '../alert';

interface AlertData extends Omit<AlertProps, 'onClose'> {
  id: string;
}

interface AlertsValue {
  show(alert: AlertProps): void;
  hide(alert: AlertData['id']): void;
}

interface AlertsProps {
  children: ReactNode;
}

export type { AlertsProps, AlertsValue, AlertData };
