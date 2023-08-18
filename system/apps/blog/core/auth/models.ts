import type { ReactNode } from 'react';

interface GuardProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export type { GuardProps };
