import type { ReactNode, ReactPortal } from 'react';

type RenderPortal = (children: ReactNode) => ReactPortal | null;

type UsePortal = () => {
  render: RenderPortal;
};

export type { UsePortal, RenderPortal };
