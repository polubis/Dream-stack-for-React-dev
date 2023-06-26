import type { LOADER_SIZES, LOADER_VARIANTS } from './consts';

type LoaderSize = (typeof LOADER_SIZES)[number];
type LoaderVariant = (typeof LOADER_VARIANTS)[number];

interface LoaderProps {
  className?: string;
  variant?: LoaderVariant;
  size?: LoaderSize;
}

export type { LoaderProps, LoaderSize };
