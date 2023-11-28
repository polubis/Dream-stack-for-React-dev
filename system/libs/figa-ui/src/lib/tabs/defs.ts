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

interface TabsProps extends TabsHTMLElementProps {
  children: ReactNode;
  rounded?: boolean;
}

interface TabProps extends TabHTMLElementProps {
  active?: boolean;
  children: ReactNode;
}

export type { TabsProps, TabProps, TabsHTMLElementProps, TabHTMLElementProps };
