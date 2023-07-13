import type { ClipboardValueObject } from './defs';
import { Isable, is, isS } from './is';

const states = [
  is('idle'),
  is('unsupported'),
  is('ready'),
  isS('copying')<ClipboardValueObject>(),
  isS('copied')<ClipboardValueObject>(),
  is('error'),
] as const;

// const obj = {};

// type T = AsResult<{ is: 'f' } | { is: 'b' }>;

type AsResult<T extends string> = {
  [K in T]: Isable<K>;
};

const state = <A extends string, B extends string, C extends string>(
  ...args: [A, B, C]
) => {
  const obj = args.reduce<AsResult<A | B | C>>(
    (acc, key) => ({
      ...acc,
      [key]: is(key),
    }),
    {} as AsResult<A | B | C>
  );

  return obj;
};

const r = state('idle', 'unsupported', 'ready');

const [idle, unsupported, ready, copying, copied, error] = states;

export { states, idle, unsupported, ready, copied, copying, error };
