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
import type { AlertData, Alerts, AlertsProps, AlertsValue } from './defs';
import { appearIn, center } from '../shared';

const offset = tokens.spacing[200];

const Container = styled.div`
  ${center('column')}
  position: fixed;
  z-index: ${tokens.z[750]};
  width: max-content;
  height: max-content;

  & > *:not(:last-child) {
    margin-bottom: ${tokens.spacing[150]};
  }

  & > * {
    ${appearIn()}
  }

  &.t-l {
    top: ${offset};
    left: ${offset};
  }

  &.t-c {
    top: ${offset};
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  &.t-r {
    top: ${offset};
    right: ${offset};
  }

  &.c-l {
    top: 0;
    bottom: 0;
    left: ${offset};
    margin: auto 0;
  }

  &.c-c {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  &.c-r {
    top: 0;
    bottom: 0;
    right: ${offset};
    margin: auto 0;
  }

  &.b-l {
    bottom: ${offset};
    left: ${offset};
  }

  &.b-c {
    margin: 0 auto;
    bottom: ${offset};
    left: 0;
    right: 0;
  }

  &.b-r {
    bottom: ${offset};
    right: ${offset};
  }
`;

const Context = createContext<AlertsValue | null>(null);

const initialAlerts: Alerts = {
  't-l': [],
  't-c': [],
  't-r': [],
  'c-l': [],
  'c-c': [],
  'c-r': [],
  'b-l': [],
  'b-c': [],
  'b-r': [],
};

const AlertsProvider = ({ children }: AlertsProps) => {
  const [alerts, setAlerts] = useState(initialAlerts);
  const timeoutRefs = useRef(new Map<string, NodeJS.Timeout>());

  const hide = useCallback(({ id, position }: AlertData): void => {
    setAlerts((alerts) => ({
      ...alerts,
      [position]: alerts[position].filter((alert) => alert.id !== id),
    }));
  }, []);

  const value = useMemo(
    (): AlertsValue => ({
      show: (payload) => {
        const position = payload.position ?? 't-r';
        const delay = payload.delay ?? 5000;
        const id = new Date().toISOString();
        const alert: AlertData = {
          ...payload,
          position,
          id,
          delay,
        };

        timeoutRefs.current.set(
          id,
          setTimeout(() => {
            hide(alert);
          }, delay)
        );

        setAlerts((alerts) => ({
          ...alerts,
          [position]: [...alerts[position], alert],
        }));

        return alert;
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
      {Object.entries(alerts)
        .filter(([, alertsArr]) => alertsArr.length > 0)
        .map(([position, alertsArr]) =>
          render(
            <Container className={position}>
              {alertsArr.map((alert) => (
                <Alert
                  key={alert.id}
                  maxWidth="420px"
                  {...alert}
                  onClose={() => {
                    hide(alert);
                    alert.onClose?.();
                  }}
                />
              ))}
            </Container>
          )
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
