import type { states } from './states';

type ClipboardValue = string;

type ClipboardValueObject = {
  value: ClipboardValue;
};

type ClipboardState = ReturnType<(typeof states)[number]>;

interface ClipboardConfig {
  cleansAfter?: number | null;
}

type CopyHandler = (value: ClipboardValue) => Promise<void>;

type ClipboardReturn = [ClipboardState, CopyHandler];

export type {
  ClipboardState,
  ClipboardConfig,
  CopyHandler,
  ClipboardReturn,
  ClipboardValueObject,
  ClipboardValue,
};
