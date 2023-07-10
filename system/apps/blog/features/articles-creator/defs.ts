import type { Components } from '@mdx-js/react/lib';
import type { ReactNode } from 'react';

interface ArticleMdRendererProps {
  code: string;
  components: Components;
  thumbnail: ReactNode;
}

interface ArticlesCreatorProps extends ArticleMdRendererProps {
  onChange: (code: string) => void;
}

export type { ArticleMdRendererProps, ArticlesCreatorProps, Components };
