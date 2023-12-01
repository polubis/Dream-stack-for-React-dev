import type { ReactNode } from 'react';
import type { AlertProps } from '../alert/defs';

interface AlertsValue {
  show(alert: AlertProps): void;
  hide(alert: AlertProps): void;
  alerts: AlertProps[];
}

interface AlertsProps {
  children: ReactNode;
}

export type { AlertsProps, AlertsValue };
