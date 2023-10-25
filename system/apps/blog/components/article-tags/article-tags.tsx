import { Font } from '@system/figa-ui';
import type { ArticleTagsProps } from './defs';

const ArticleTags = ({ tags }: ArticleTagsProps) => (
  <Font variant="b2">{tags.join(', ')}</Font>
);

export { ArticleTags };
