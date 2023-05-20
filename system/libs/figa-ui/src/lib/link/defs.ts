import type { ReactNode } from 'react';
import type { FontVariant } from '../font';
import type { LINK_MOTIVES } from './consts';

type LinkMotive = (typeof LINK_MOTIVES)[number];

interface LinkProps {
  className?: string;
  variant: FontVariant;
  children: ReactNode;
  motive?: LinkMotive;
}

export type { LinkProps, LinkMotive };
