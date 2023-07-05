import type { ElementSizeState } from '@system/figa-hooks';
import type { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

type CreatorLayoutHTMLElementProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
>;

type CreatorLayoutView =
  | 'undetected'
  | 'both'
  | 'code'
  | 'preview'
  | 'code-full'
  | 'preview-full';

interface CreatorLayoutPayload {
  expandCode: () => void;
  expandPreview: () => void;
  expandBoth: () => void;
  view: CreatorLayoutView;
  size: ElementSizeState;
}

interface CreatorLayoutProps extends CreatorLayoutHTMLElementProps {
  children: [ReactNode, ReactNode];
  codeToolbox: (payload: CreatorLayoutPayload) => ReactNode;
  previewToolbox: (payload: CreatorLayoutPayload) => ReactNode;
  navigation: (payload: CreatorLayoutPayload) => ReactNode;
}

export type {
  CreatorLayoutProps,
  CreatorLayoutHTMLElementProps,
  CreatorLayoutPayload,
  CreatorLayoutView,
};
