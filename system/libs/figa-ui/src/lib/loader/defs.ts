import { ReactNode } from "react";

interface LoaderProps {
  className?: string;
  variant?: '1' | '2' | '3' | '4';
  children?: ReactNode;
}

export type { LoaderProps };