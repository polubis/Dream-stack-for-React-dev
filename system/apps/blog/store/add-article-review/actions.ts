import { createArticleReview, getError } from '@system/blog-api';
import type * as AddArticleReview from './defs';
import { addArticleReviewForm, useAddArticleReviewStore } from './store';

const { setState: set, getState: get } = useAddArticleReviewStore;

const add_article_review_actions: AddArticleReview.Actions = {
  setField: (key, value) => {
    set({ form: addArticleReviewForm.set(get().form)({ [key]: value }) });
  },
  confirm: async (id) => {
    const form = addArticleReviewForm.confirm(get().form);

    if (form.invalid) {
      set({ form });
      return;
    }

    set({ is: 'busy' });

    try {
      const response = await createArticleReview({
        id,
        ...get().form.values,
      });

      set({ is: 'ok' });
      add_article_review_actions.setField('content', '');

      return response;
    } catch (error: unknown) {
      set({ is: 'fail', error: getError(error) });
    }
  },
};

export { add_article_review_actions };
