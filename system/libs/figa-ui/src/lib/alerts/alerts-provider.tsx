import styled from 'styled-components';
import { createContext, useContext, useMemo, useState } from 'react';
import { Alert, AlertProps } from '../alert';
import { usePortal } from '@system/figa-hooks';
import { tokens } from '../theme-provider';
import type { AlertData, AlertsProps, AlertsValue } from './defs';
import { center } from '../shared';

const Container = styled.div`
  ${center('column')}
  position: fixed;
  top: 0;
  z-index: ${tokens.z[800]};
  left: 0;
  right: 0;
  padding: ${tokens.spacing[250]};

  & > *:not(:last-child) {
    margin-bottom: ${tokens.spacing[150]};
  }

  & > * {
    max-width: 420px;
  }
`;

const Context = createContext<AlertsValue | null>(null);

const AlertsProvider = ({ children }: AlertsProps) => {
  const [alerts, setAlerts] = useState<AlertData[]>([]);

  const value = useMemo(
    (): AlertsValue => ({
      show: (alert: AlertProps) => {
        setAlerts((prevAlerts) => [
          ...prevAlerts,
          {
            ...alert,
            id: new Date().toISOString(),
          },
        ]);
      },
      hide: (id) => {
        setAlerts((prevAlerts) => prevAlerts.filter((a) => a.id !== id));
      },
    }),
    []
  );

  const { render } = usePortal();

  return (
    <Context.Provider value={value}>
      {children}
      {alerts.length > 0 &&
        render(
          <Container>
            {alerts.map((alert) => (
              <Alert
                key={alert.id}
                {...alert}
                onClose={() => value.hide(alert.id)}
              />
            ))}
          </Container>
        )}
    </Context.Provider>
  );
};

const useAlert = () => {
  const ctx = useContext(Context);

  if (!ctx)
    throw Error(
      'Lack of <AlertsProvider> component wrapper in your components tree'
    );

  return ctx;
};

export { AlertsProvider, useAlert };
