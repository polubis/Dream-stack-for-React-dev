import type { ReactNode } from 'react';

interface Step {
  key: string;
  Component: (...args: never[]) => ReactNode;
}

export type { Step };
