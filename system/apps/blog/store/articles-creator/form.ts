import { form, maxLength, minLength, required } from '@system/utils';
import type { ArticlesCreator } from './defs';

const creatorForm = form<ArticlesCreator.FormData>()({
  title: [required],
  description: [required],
  content: [required],
  lang: [required],
  tags: [minLength(1), maxLength(10)],
  tagValue: [required, minLength(1), maxLength(20)],
});

export { creatorForm };
