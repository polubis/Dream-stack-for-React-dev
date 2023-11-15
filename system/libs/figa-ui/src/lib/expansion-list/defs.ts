import type { ReactNode } from 'react';

type SelectionMapId = number | string;

interface ExpansionListProps {
  className?: string;
  children: ReactNode[];
}

type SelectionMap = Record<string, boolean>;

interface ExpansionListItemProps {
  className?: string;
  children: [ReactNode, ReactNode];
}

interface ExpansionListHeaderProps {
  children: [ReactNode, ReactNode];
}

interface ExpansionListContentProps {
  opened?: boolean;
  children: ReactNode;
}

export type {
  ExpansionListProps,
  ExpansionListItemProps,
  ExpansionListHeaderProps,
  ExpansionListContentProps,
  SelectionMapId,
  SelectionMap,
};
