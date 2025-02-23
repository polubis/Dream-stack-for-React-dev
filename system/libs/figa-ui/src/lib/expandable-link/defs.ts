import type { ReactNode } from 'react';

type DefaultComponentProps = {
  children: ReactNode;
  className?: string;
};

interface ExpandableLinkProps extends DefaultComponentProps {
  active: boolean;
}

interface ExpandableLinkItemProps extends DefaultComponentProps {
  path: string;
}

interface ExpandableLinkNameProps extends DefaultComponentProps {}

interface ExpandableLinkListProps
  extends Omit<DefaultComponentProps, 'children'> {
  children: ReactNode[];
}

export type {
  ExpandableLinkProps,
  ExpandableLinkItemProps,
  ExpandableLinkNameProps,
  ExpandableLinkListProps,
};
