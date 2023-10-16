import { useCallback, useEffect, useMemo, useRef } from 'react';
import { Subject, Subscription, debounceTime, tap } from 'rxjs';
import type { SubjectConfig, SubjectReturn } from './defs';

const useSubject = <T>(config: SubjectConfig<T>): SubjectReturn<T> => {
  const sub = useRef(new Subscription());
  const { action, action$ } = useMemo(() => {
    const action = new Subject<T>();

    return {
      action,
      action$: action.asObservable(),
    };
  }, []);

  useEffect(() => {
    const current = sub.current;
    const delay = config.delay ?? 300;

    current.add(action$.pipe(debounceTime(delay), tap(config.cb)).subscribe());

    return () => {
      current.unsubscribe();
    };
  }, [action$, config.delay, config.cb]);

  const emit = useCallback(
    (data: T) => {
      action.next(data);
    },
    [action]
  );

  return { emit, $: action$ };
};

export { useSubject };
