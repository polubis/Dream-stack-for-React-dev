import type { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

type ChipHTMLElementProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ChipsProps  = {
  className?: string;
  children: ReactNode;
}

type ChipProps  = ChipHTMLElementProps & {
  active?: boolean;
}

export type { ChipsProps, ChipProps };
