import type { ReactNode } from 'react';
import type { editor_tabs } from './consts';

type EditorTab = (typeof editor_tabs)[number];

interface EditorTabProps {
  children: (tab: EditorTab) => ReactNode;
}

type EditorScreenView = 'preview' | 'code' | 'both';

export type { EditorTab, EditorTabProps, EditorScreenView };
