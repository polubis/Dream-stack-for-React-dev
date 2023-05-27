import { ArticleDto } from '@system/blog-api-models';

type ArticleModel = Omit<ArticleDto, 'authorEmail'>;

export type { ArticleModel };
