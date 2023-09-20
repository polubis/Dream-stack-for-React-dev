import type { ReactNode } from 'react';

type CodeBlockProps  ={
  className?: string;
  header?: (dots: ReactNode) => ReactNode;
  children: ReactNode;
}

export type { CodeBlockProps };
