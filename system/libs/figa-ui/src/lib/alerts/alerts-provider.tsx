import styled from 'styled-components';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Alert } from '../alert';
import { usePortal } from '@system/figa-hooks';
import { tokens } from '../theme-provider';
import type { AlertData, AlertsProps, AlertsValue } from './defs';
import { appearIn, center } from '../shared';

const Container = styled.div`
  ${center('column')}
  position: fixed;
  top: 0;
  z-index: ${tokens.z[750]};
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: ${tokens.spacing[250]};

  & > *:not(:last-child) {
    margin-bottom: ${tokens.spacing[150]};
  }

  & > * {
    ${appearIn()}
  }
`;

const Context = createContext<AlertsValue | null>(null);

const AlertsProvider = ({ children }: AlertsProps) => {
  const [alerts, setAlerts] = useState<AlertData[]>([]);
  const timeoutRefs = useRef(new Map<string, NodeJS.Timeout>());

  const hide = useCallback((id: string): void => {
    setAlerts((prevAlerts) => prevAlerts.filter((a) => a.id !== id));
  }, []);

  const value = useMemo(
    (): AlertsValue => ({
      show: (alert) => {
        const id = new Date().toISOString();
        timeoutRefs.current.set(
          id,
          setTimeout(() => {
            hide(id);
          }, alert.delay ?? 5000)
        );

        setAlerts((prevAlerts) => [
          ...prevAlerts,
          {
            ...alert,
            id,
          },
        ]);
      },
    }),
    [hide]
  );

  const { render } = usePortal();

  useEffect(() => {
    const timeouts = timeoutRefs.current;

    return () => {
      timeouts.forEach((timeout) => {
        clearTimeout(timeout);
      });
    };
  }, []);

  return (
    <Context.Provider value={value}>
      {children}
      {alerts.length > 0 &&
        render(
          <Container>
            {alerts.map((alert) => (
              <Alert
                key={alert.id}
                maxWidth="420px"
                {...alert}
                onClose={() => {
                  hide(alert.id);
                  alert.onClose?.();
                }}
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
