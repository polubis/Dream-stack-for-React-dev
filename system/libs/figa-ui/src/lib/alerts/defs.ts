import type { ReactNode } from 'react';
import type { AlertProps } from '../alert';
import type { ALERT_POSITIONS } from './consts';

type AlertId = string;

type AlertPosition = (typeof ALERT_POSITIONS)[number];

interface AlertData extends AlertProps {
  id: AlertId;
  delay: number;
  position: AlertPosition;
}

type Alerts = Record<AlertPosition, AlertData[]>;

interface ShowAlertPayload extends AlertProps {
  delay?: number;
  position?: AlertPosition;
}

interface AlertsValue {
  show(payload: ShowAlertPayload): AlertData;
}

interface AlertsProps {
  children: ReactNode;
}

export type {
  AlertsProps,
  AlertsValue,
  AlertData,
  AlertId,
  AlertPosition,
  Alerts,
};
