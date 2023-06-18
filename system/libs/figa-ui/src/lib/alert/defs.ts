import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { ALERT_VARIANTS, ALERT_TYPES } from './consts';

type AlertVariant = (typeof ALERT_VARIANTS)[number];
type AlertType = (typeof ALERT_TYPES)[number];

interface AlertProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  variant?: AlertVariant;
  alertType: AlertType; 
  message: string
}

export type { AlertProps }