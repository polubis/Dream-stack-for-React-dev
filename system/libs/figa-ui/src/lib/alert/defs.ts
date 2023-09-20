import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import type { ALERT_VARIANTS, ALERT_TYPES } from './consts';

type AlertVariant = (typeof ALERT_VARIANTS)[number];
type AlertType = (typeof ALERT_TYPES)[number];

type AlertHTMLElementProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
>;

type AlertProps  = AlertHTMLElementProps & {
  variant?: AlertVariant;
  type?: AlertType;
  trimmed?: boolean;
  maxWidth?: string;
  fixed?: boolean;
  children: ReactNode;
}

export type { AlertProps, AlertVariant, AlertType };
