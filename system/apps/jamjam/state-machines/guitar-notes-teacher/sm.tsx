import type { NoteNotation } from 'apps/jamjam/domain';
import { useEffect, useMemo, useRef, useState } from 'react';
import { BehaviorSubject } from 'rxjs';

type Obj = Record<string, any>;

type UnionOfSingleKeyObjects<T extends Obj> = keyof T extends infer K
  ? K extends keyof T
  ? { key: K } & T[K]
  : never
  : never;

type InferState<C extends Obj> = UnionOfSingleKeyObjects<{
  [K in keyof C]: ReturnType<C[K]> extends void ? {} : ReturnType<C[K]>;
}>;

type FirstArgument<T extends (...args: any[]) => any> = T extends (
  arg1: infer A,
  ...args: any[]
) => any
  ? A
  : never;

type InferActions<C extends Obj> = {
  [K in keyof C]: C[K] extends () => void
  ? () => void
  : (payload: FirstArgument<C[K]>) => void;
};

type Configuration = Record<string, (payload: any) => any>;

export const Machine = <C extends Configuration>(configuration: C) => {
  const state = new BehaviorSubject<InferState<C>>({} as InferState<C>);
  const state$ = state.asObservable();

  const set = (Object.keys(configuration) as (keyof C)[]).reduce((acc, key) => {
    acc[key] = (payload?: unknown) => {
      const action = configuration[key];
      const result = action(payload);
      const newState = {
        ...result,
        key,
      };
      state.next(newState);
    };

    return acc;
  }, {} as InferActions<C>);

  return {
    get: {
      initialState: state.getValue(),
      get state() {
        return state.getValue();
      },
      state$,
    },
    set,
  };
};

const { get } = Machine({
  idle: () => { },
  initial: () => { },
  settings: (notation: NoteNotation) => ({
    settings: { id: 1 },
  }),
  // counting: () => (),
});

const s = get.initialState;

// if (s.key === 'settings') {
//   s.settings;
// }

// if (s.key === 'idle') {
//   s.key;
// }

export const useM = <C extends Configuration>(configuration: C) => {
  const machine = useMemo(() => Machine(configuration), [])
  const state = useRef(machine.get.initialState);
  const [_, setCounter] = useState(0)

  const update = (newState: InferState<C>) => {
    state.current = newState;
    setCounter(prev => prev + 1)
  }

  useEffect(() => {
    const sub = machine.get.state$.subscribe(update)

    return () => {
      sub.unsubscribe()
    }
  }, [])

  return [state.current, machine.set] as const;
}