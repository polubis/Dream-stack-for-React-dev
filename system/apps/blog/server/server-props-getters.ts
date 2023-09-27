import { getArticles } from '@system/blog-api';
import { articles_states } from '../store/articles/states';
import type { ServerPropsGetters } from './defs';
import type { GetArticlesParams } from '@system/blog-api-models';

const server_props_getters: ServerPropsGetters = {
  getArticles: async (lang, status) => {
    const filters: GetArticlesParams = {
      ItemsPerPage: 12,
      lang,
      Status: status,
    };

    const articles = (await getArticles(filters)).data;
    const state = articles_states.ok(articles, {
      lang,
      limit: filters.ItemsPerPage,
      status,
    });

    return {
      props: {
        state,
      },
    };
  },
};

export { server_props_getters };
