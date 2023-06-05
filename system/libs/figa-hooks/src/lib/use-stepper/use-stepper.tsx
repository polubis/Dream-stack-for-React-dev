import { useMemo, useState } from 'react';
import type { Step, UseStepperPayload, UseStepperReturn } from './defs';

const cannotFindStepError = 'Cannot find step';

/**
 * This is type-guard. This means for given key it will
 * return already checked step object. So you can
 * avoid additional direct if statements.
 *
 * @param {step} - Any step to verify.
 * @param {key} - Key will be used to check equality of keys.
 *
 * @returns {boolean} - Returns true if keys are equal.
 */
const is = <S extends Step, K extends S['key']>(
  step: S,
  key: K
): step is Extract<S, { key: K }> => step.key === key;

/**
 * Hook responsible for changing steps. Can be used in
 * forms, multi-view features or as a client side routing.
 *
 * @param {initialKey} - Initial key.
 * @param {steps} - List of steps to manage.
 *
 * @returns {UseStepperReturn} - API to consume.
 */
const useStepper = <S extends Step, R extends readonly Step[]>(
  ...payload: UseStepperPayload<S, R>
): UseStepperReturn<S> => {
  const [initialKey, steps] = payload;
  const [key, setKey] = useState(initialKey);

  const set = <K extends S['key']>(key: K): void => {
    setKey(key);
  };

  const first = (): void => {
    setKey(steps[0].key);
  };

  const last = (): void => {
    setKey(steps[steps.length - 1].key);
  };

  const previous = (): void => {
    const idx = steps.findIndex((s) => s.key === key) - 1;
    const previousIdx = idx < 0 ? steps.length - 1 : idx;

    setKey(steps[previousIdx].key);
  };

  const next = (): void => {
    const idx = steps.findIndex((s) => s.key === key) + 1;
    const nextIdx = idx >= steps.length ? 0 : idx;

    setKey(steps[nextIdx].key);
  };

  const step = useMemo(() => {
    const foundStep = steps.find((s) => s.key === key);

    if (!foundStep) {
      throw new Error(cannotFindStepError);
    }

    return foundStep as S;
  }, [key, steps]);

  return [step, { is, set, previous, next, first, last }];
};

export { useStepper };
