import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type RadioHTMLElementProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
>;

type RadioCaseHTMLElementProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
>;

type RadioProps  = RadioHTMLElementProps &{
  children: ReactNode;
}

type RadioCaseProps  = RadioCaseHTMLElementProps & {
  label: ReactNode;
  name: string;
  value: string;
  active?: boolean;
  disabled?: boolean;
  reversed?: boolean;
}

export type {
  RadioProps,
  RadioCaseProps,
  RadioHTMLElementProps,
  RadioCaseHTMLElementProps,
};
