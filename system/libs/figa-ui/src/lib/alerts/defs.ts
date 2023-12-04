import type { ReactNode } from 'react';
import type { AlertProps } from '../alert';

interface AlertData extends AlertProps {
  id: string;
  delay?: number;
}

interface AlertsValue {
  show(alert: Omit<AlertData, 'id'>): void;
}

interface AlertsProps {
  children: ReactNode;
}

export type { AlertsProps, AlertsValue, AlertData };
