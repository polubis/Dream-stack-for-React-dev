import type { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

type ChipHTMLElementProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ChipsProps {
  className?: string;
  children: ReactNode;
}

interface ChipProps extends ChipHTMLElementProps {
  active?: boolean;
}

export type { ChipsProps, ChipProps };
