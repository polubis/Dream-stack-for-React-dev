import type { ReactNode } from 'react';

interface NavProps {
  className?: string;
  children: ReactNode;
  actions: ReactNode;
  logo: ReactNode;
}

interface NavMobileProps {
  actions: ReactNode;
  children: ReactNode;
  onClose(): void;
}

export type { NavProps, NavMobileProps };
