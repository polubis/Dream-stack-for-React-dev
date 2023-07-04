interface ElementSize {
  width: number;
  height: number;
}

interface UndetectedState {
  status: 'undetected';
}

interface DetectedState extends ElementSize {
  status: 'detected';
}

interface UnsupportedState {
  status: 'unsupported';
}

type ElementSizeState = UndetectedState | DetectedState | UnsupportedState;

type ElementSizeStateStatus = ElementSizeState['status'];

/** Configuration object. */
interface UseElementSizeConfig {
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
