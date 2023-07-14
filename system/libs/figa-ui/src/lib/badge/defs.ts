import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import type { BADGE_MOTIVES, BADGE_VARIANTS } from './consts';

type BadgeHTMLElementProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
>;

type BadgeMotive = (typeof BADGE_MOTIVES)[number];
type BadgeVariant = (typeof BADGE_VARIANTS)[number];

interface BadgeProps extends BadgeHTMLElementProps {
  children: ReactNode;
  motive?: BadgeMotive;
  variant?: BadgeVariant;
}

export type { BadgeProps, BadgeMotive, BadgeVariant };
