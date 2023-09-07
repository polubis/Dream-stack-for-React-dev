import { create } from 'zustand';
import type * as AddArticleReview from './defs';
import { form, maxLength, minLength, required } from '@system/utils';

const addArticleReviewForm = form<AddArticleReview.FormData>()({
  content: [required, minLength(6), maxLength(500)],
});

const useAddArticleReviewStore = create<AddArticleReview.State>(() => ({
  is: 'idle',
  form: addArticleReviewForm.init({ content: '' }),
}));

export { useAddArticleReviewStore, addArticleReviewForm };
