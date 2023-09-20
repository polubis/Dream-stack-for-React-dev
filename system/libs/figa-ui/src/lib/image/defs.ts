import type { DetailedHTMLProps, SourceHTMLAttributes } from 'react';

type ImageHTMLElementProps = Omit<
  DetailedHTMLProps<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>,
  'children' | 'src'
>;

type ImageProps  = ImageHTMLElementProps & {
  alt: string;
  lazy?: boolean;
  src: string;
  maxWidth?: string;
  maxHeight?: string;
}

export type { ImageProps, ImageHTMLElementProps };
