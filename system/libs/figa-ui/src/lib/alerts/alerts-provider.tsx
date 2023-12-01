import styled from 'styled-components';
import { createContext, useContext, useMemo, useState } from 'react';
import { Alert, AlertProps } from '../alert';
import { usePortal } from '@system/figa-hooks';
import { tokens } from '../theme-provider';
import type { AlertsProps, AlertsValue } from './defs';

const Container = styled.div`
  background: red;
  position: fixed;
  top: ${tokens.spacing[250]};
  left: 0;
  right: 0;
`;

const Context = createContext<AlertsValue | null>(null);

const AlertsProvider = ({ children }: AlertsProps) => {
  const [alerts, setAlerts] = useState<AlertProps[]>([]);

  const value = useMemo(
    (): AlertsValue => ({
      alerts,
      show: (alert: AlertProps) => {
        setAlerts((prevAlerts) => [...prevAlerts, alert]);
      },
      hide: (alert: AlertProps) => {
        setAlerts((prevAlerts) => [...prevAlerts, alert]);
      },
    }),
    [alerts]
  );

  const { render } = usePortal();

  return (
    <Context.Provider value={value}>
      {children}
      {render(
        <Container>
          {alerts.map((alert, idx) => (
            <Alert key={idx} {...alert} />
          ))}
        </Container>
      )}
    </Context.Provider>
  );
};

const useAlert = () => {
  const ctx = useContext(Context);

  if (!ctx)
    throw Error('Lack of <AlertsProvider> component wrapper in your components trees');

  return ctx;
};

export { AlertsProvider, useAlert };
