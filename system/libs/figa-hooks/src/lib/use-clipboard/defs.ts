type ClipboardValue = string;

interface BaseState {
  value: ClipboardValue;
}

interface Idle {
  is: 'idle';
}

interface Unsupported {
  is: 'unsupported';
}

interface Ready {
  is: 'ready';
}

interface Copying extends BaseState {
  is: 'copying';
}

interface Copied extends BaseState {
  is: 'copied';
}

interface Error {
  is: 'error';
}

type ClipboardState = Idle | Unsupported | Ready | Copying | Copied | Error;

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
  Idle,
  Unsupported,
  Ready,
  Error,
  Copying,
  Copied,
  ClipboardValue,
};
