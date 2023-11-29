import { form, maxLength, minLength, required } from '@system/utils';
import type { AddArticleReviewStore } from './defs';

const addArticleReviewForm = form<AddArticleReviewStore.FormData>()({
  content: [required, minLength(6), maxLength(500)],
});

export { addArticleReviewForm };
