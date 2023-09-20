type ClipboardValue = string;

type BaseState  ={
  value: ClipboardValue;
}

type Idle  ={
  is: 'idle';
}

type Unsupported  ={
  is: 'unsupported';
}

type Ready  ={
  is: 'ready';
}

type Copying  = BaseState &{
  is: 'copying';
}

type Copied  = BaseState & {
  is: 'copied';
}

type Error   = {
  is: 'error';
}

type ClipboardState = Idle | Unsupported | Ready | Copying | Copied | Error;

type ClipboardConfig  = {
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
