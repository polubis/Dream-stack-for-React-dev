import { type ChangeEvent, useMemo, useRef, useState } from 'react';
import { filter, type Observable, Subject } from 'rxjs';
import type { Fns, Form, FormSubmitEvent, Metadata, OnEvent, Values } from './defs';
import { validate } from './validate';

const createMetadata = (touched: boolean, confirmed: boolean): Metadata => ({
  touched,
  untouched: !touched,
  confirmed,
  unconfirmed: !confirmed,
});

export const useForm = <V extends Values>(initValues: V, fns: Fns<V> = {}) => {
  const [, setCounter] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const keys = useMemo(() => Object.keys(initValues), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initResult = useMemo(() => validate(keys, initValues, fns), []);
  const initMetadata = useMemo(() => createMetadata(false, false), []);
  const result = useRef(initResult);
  const values = useRef(initValues);
  const metadata = useRef(initMetadata);

  const changed = useMemo(() => new Subject<OnEvent<V, keyof V>>(), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changed$ = useMemo(() => changed.asObservable(), []);

  const rerender = (): void => {
    setCounter((prev) => prev + 1);
  };

  const set = <K extends keyof V>(key: K, value: V[K]): void => {
    values.current = {
      ...values.current,
      [key]: value,
    };
    result.current = validate(keys, values.current, fns);
    metadata.current = createMetadata(true, metadata.current.confirmed);

    changed.next({ key, value });
    rerender();
  };

  const change = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const key = e.target.name;

    if (!key) {
      console.error('Lack of name property in input element');
      return;
    }

    if (!keys.includes(key)) {
      console.error(
        'Unsupported property used as name attribute in input element'
      );
      return;
    }

    if (typeof values.current[key] !== typeof value) {
      console.error(
        'Unsupported change detected. Are you trying to change non-string property with a string value?'
      );
      return;
    }

    set(key, value as V[keyof V]);
  };

  const confirm = (): void => {
    result.current = validate(keys, values.current, fns);
    metadata.current = createMetadata(metadata.current.touched, true);

    rerender();
  };

  const submit = (e: FormSubmitEvent): void => {
    e.preventDefault();
    confirm();
  };

  const reset = (): void => {
    result.current = initResult;
    metadata.current = initMetadata;
    values.current = initValues;

    rerender();
  };

  const on = <K extends keyof V>(
    key: K,
    filterFn = (event: OnEvent<V, keyof V>): boolean => event.key === key
  ): Observable<OnEvent<V, K>> =>
    changed$.pipe(filter(filterFn)) as Observable<OnEvent<V, K>>;

  return {
    keys,
    values: values.current,
    ...result.current,
    ...metadata.current,
    set,
    confirm,
    submit,
    change,
    on,
    reset,
  } as Form<V>;
};
