import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type BullshitMeterHTMLElementProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children' | 'onChange' | 'ref'
>;

type BullshitValue = number;

interface BullshitMeterProps extends BullshitMeterHTMLElementProps {
  onChange: (value: BullshitValue) => void;
  label?: ReactNode;
  value: BullshitValue;
}

export type {
  BullshitMeterProps,
  BullshitValue,
  BullshitMeterHTMLElementProps,
};
