import type { ReactNode } from 'react';

interface ListProps {
  className?: string;
  children: ReactNode;
  ordered?: boolean;
}

interface ListItemProps {
  className?: string;
  children: ReactNode;
}

export type { ListProps, ListItemProps };
