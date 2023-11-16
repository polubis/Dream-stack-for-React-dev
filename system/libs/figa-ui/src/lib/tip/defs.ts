import type { ReactNode } from 'react';
import type { SpacingKey } from '../theme-provider';
import type { tip_orientations } from './consts';

type TipOrientation = (typeof tip_orientations)[number];

interface TipProps {
  className?: string;
  children: ReactNode;
  content: ReactNode;
  offset?: SpacingKey;
  orientation?: TipOrientation;
}

export type { TipProps, TipOrientation };
