import type { ReactNode } from 'react';
import type { ALERT_VARIANTS, ALERT_TYPES } from './consts';

type AlertVariant = (typeof ALERT_VARIANTS)[number];
type AlertType = (typeof ALERT_TYPES)[number];

interface AlertProps {
  className?: string;
  variant?: AlertVariant;
  type?: AlertType;
  trimmed?: boolean;
  maxWidth?: string;
  fixed?: boolean;
  children: ReactNode;
  onClose?(): void;
}

export type { AlertProps, AlertVariant, AlertType };
