import type { ReactNode } from 'react';

interface CodeBlockProps {
  className?: string;
  header?: (dots: ReactNode) => ReactNode;
  children: ReactNode;
}

export type { CodeBlockProps };
