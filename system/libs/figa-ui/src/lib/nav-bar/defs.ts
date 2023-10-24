import type { ReactNode } from 'react';

interface NavBarProps {
  className?: string;
  children: ReactNode;
  sticky?: boolean;
}

type NavBarHeaderProps = Omit<NavBarProps, 'sticky'>;

export type { NavBarProps, NavBarHeaderProps };
