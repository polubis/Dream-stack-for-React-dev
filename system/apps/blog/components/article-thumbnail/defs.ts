import { ArticleStatus } from '@system/blog-api-models';

interface ArticleThumbnailProps {
  title: string;
  src: string;
  status: ArticleStatus;
}

type ArticleStatusColorsMap = Record<ArticleStatus, string>;

export type { ArticleThumbnailProps, ArticleStatusColorsMap };
