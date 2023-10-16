import { useCallback, useEffect, useMemo, useRef } from 'react';
import { Subject, Subscription, debounceTime } from 'rxjs';
import type { SubjectConfig, SubjectReturn } from './defs';

const useSubject = <T>(config: SubjectConfig<T>): SubjectReturn<T> => {
  const sub = useRef<Subscription>();
  const { action, action$ } = useMemo(() => {
    const action = new Subject<T>();

    return {
      action,
      action$: action.asObservable(),
    };
  }, []);

  useEffect(() => {
    sub.current = new Subscription();
    const current = sub.current;
    const delay = config.delay ?? 300;

    current.add(action$.pipe(debounceTime(delay)).subscribe(config.cb));

    return () => {
      current.unsubscribe();
    };
  }, [config.cb, config.delay, action$]);

  const emit = useCallback(
    (data: T) => {
      action.next(data);
    },
    [action]
  );

  return { emit, $: action$ };
};

export { useSubject };
