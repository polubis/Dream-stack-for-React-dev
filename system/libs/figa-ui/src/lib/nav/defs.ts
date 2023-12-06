import type { ReactNode } from 'react';

interface NavProps {
  className?: string;
  children: ReactNode;
  actions: ReactNode;
  logo: ReactNode;
}

export type { NavProps };
