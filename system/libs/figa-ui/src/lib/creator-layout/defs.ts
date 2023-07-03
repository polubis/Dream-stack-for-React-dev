import type { UseToggleReturn } from '@system/figa-hooks';
import type { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

type CreatorLayoutHTMLElementProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
>;

interface CreatorLayoutPayload {
  code: UseToggleReturn;
  preview: UseToggleReturn;
}

interface CreatorLayoutProps extends CreatorLayoutHTMLElementProps {
  children: [ReactNode, ReactNode, ReactNode];
  codeToolbox: (payload: CreatorLayoutPayload) => ReactNode;
  previewToolbox: (payload: CreatorLayoutPayload) => ReactNode;
}

export type {
  CreatorLayoutProps,
  CreatorLayoutHTMLElementProps,
  CreatorLayoutPayload,
};
