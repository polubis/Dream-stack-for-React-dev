import type { BoxProps } from '../box';
import type { DIVIDER_AXIS, DIVIDER_MOTIVES } from './consts';

type DividerAxis = (typeof DIVIDER_AXIS)[number];
type DividerMotive = (typeof DIVIDER_MOTIVES)[number];

interface DividerProps
  extends Pick<BoxProps, 'className' | 'padding' | 'margin'> {
  axis?: DividerAxis;
  motive?: DividerMotive;
}

export type { DividerProps, DividerAxis };
