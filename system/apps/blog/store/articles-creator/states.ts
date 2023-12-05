import type { ArticlesCreatorStore } from './defs';
import { creatorForm } from './form';

const articles_creator_store_states: ArticlesCreatorStore.States = {
  idle: () => ({
    is: 'idle',
    view: 'initial',
    form: creatorForm.init({
      title: '',
      description: '',
      tags: [],
      thumbnail: {
        file: null,
        preview: [],
      },
      content: '',
      lang: 'en',
      sendToReview: false,
    }),
  }),
};

export { articles_creator_store_states };
