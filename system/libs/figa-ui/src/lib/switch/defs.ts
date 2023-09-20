import type { ReactNode, HTMLAttributes, DetailedHTMLProps } from 'react';

type SwitchHTMLElementProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children' | 'onClick'
>;

type SwitchProps  = SwitchHTMLElementProps & {
  label?: ReactNode;
  reversed?: boolean;
  active?: boolean;
  disabled?: boolean;
  onClick?(): void;
}

export type { SwitchProps, SwitchHTMLElementProps };
