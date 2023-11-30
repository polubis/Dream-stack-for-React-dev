import { create } from 'zustand';
import type { AddArticleReviewStore } from './defs';
import { addArticleReviewForm } from './core';

const useAddArticleReviewStore = create<AddArticleReviewStore.State>(() => ({
  is: 'idle',
  form: addArticleReviewForm.init({ content: '' }),
}));

export { useAddArticleReviewStore, addArticleReviewForm };
