import type { ReactNode } from 'react';

type DefaultComponentProps = {
  children: ReactNode;
  className?: string;
};

interface ExpandableLinkProps extends DefaultComponentProps {}

interface ExpandableLinkItemProps extends DefaultComponentProps {
  path: string;
}

interface ExpandableLinkNameProps extends DefaultComponentProps {
  isActive: boolean;
}

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
