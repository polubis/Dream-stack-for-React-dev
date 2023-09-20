import type { ReactNode } from 'react';

type ListProps  ={
  className?: string;
  children: ReactNode;
  ordered?: boolean;
}

type ListItemProps  ={
  className?: string;
  children: ReactNode;
}

export type { ListProps, ListItemProps };
