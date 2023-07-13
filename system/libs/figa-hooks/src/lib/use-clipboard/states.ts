import type { ClipboardValueObject } from './defs';
import { is, isS } from './is';

const states = [
  is('idle'),
  is('unsupported'),
  is('ready'),
  isS('copying')<ClipboardValueObject>(),
  isS('copied')<ClipboardValueObject>(),
  is('error'),
] as const;

const [idle, unsupported, ready, copying, copied, error] = states;

export { states, idle, unsupported, ready, copied, copying, error };
