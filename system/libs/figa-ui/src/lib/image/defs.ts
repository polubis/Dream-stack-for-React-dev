import type { DetailedHTMLProps, SourceHTMLAttributes } from 'react';

type ImageHTMLElementProps = Omit<
  DetailedHTMLProps<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>,
  'children'
>;

interface ImageProps extends ImageHTMLElementProps {
  alt: string;
  lazy?: boolean;
  maxWidth?: string;
  maxHeight?: string;
}

export type { ImageProps, ImageHTMLElementProps };
