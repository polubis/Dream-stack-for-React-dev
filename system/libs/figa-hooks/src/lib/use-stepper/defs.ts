import type { ReactNode } from 'react';

/** Interface that describes a single step. */
interface Step {
  /** Unique step key. */
  key: string;
  /** Render function - takes any number of arguments. */
  Component: (...args: any[]) => ReactNode;
}

interface UseStepperActions<S extends Step> {
  /**
   * A function that checks whether the step key is equal
   * to the specified key - if so, it assigns the appropriate
   * type (type-guard).
   */
  is: <S extends Step, K extends S['key']>(
    step: S,
    key: K
  ) => step is Extract<
    S,
    {
      key: K;
    }
  >;
  /** Goes to first step. */
  first: () => void;
  /** Goes to last step. */
  last: () => void;
  /** Sets previous step. */
  previous: () => void;
  /** Sets next step. */
  next: () => void;
  /** Sets the step by a specific key. */
  set: <K extends S['key']>(key: K) => void;
}

/** Definition of the arguments that the hook will take. */
type UseStepperPayload<S extends Step, R extends readonly Step[]> = [
  S['key'],
  R
];

/** This must be returned by the hook. */
type UseStepperReturn<S extends Step> = [S, UseStepperActions<S>];

export type { Step, UseStepperActions, UseStepperReturn, UseStepperPayload };
