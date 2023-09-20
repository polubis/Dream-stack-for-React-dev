type ElementSize  = {
  width: number;
  height: number;
}

type UndetectedState  = {
  status: 'undetected';
}

type DetectedState  = ElementSize & {
  status: 'detected';
}

type UnsupportedState  = {
  status: 'unsupported';
}

type ElementSizeState = UndetectedState | DetectedState | UnsupportedState;

type ElementSizeStateStatus = ElementSizeState['status'];

/** Configuration object. */
type UseElementSizeConfig  = {
  /** It quantifies how much time is needed to broadcast the next event in milliseconds. */
  delay?: number;
}

export type {
  UndetectedState,
  ElementSize,
  DetectedState,
  UnsupportedState,
  ElementSizeStateStatus,
  ElementSizeState,
  UseElementSizeConfig,
};
