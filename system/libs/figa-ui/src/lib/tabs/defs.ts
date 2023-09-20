import type {
  ReactNode,
  DetailedHTMLProps,
  HTMLAttributes,
  ButtonHTMLAttributes,
} from 'react';

type TabsHTMLElementProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
  'children'
>;

type TabHTMLElementProps = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'children'
>;

type TabsProps  = TabsHTMLElementProps & {
  children: ReactNode;
}

type TabProps  = TabHTMLElementProps & {
  active?: boolean;
  children: ReactNode;
}

export type { TabsProps, TabProps, TabsHTMLElementProps, TabHTMLElementProps };
