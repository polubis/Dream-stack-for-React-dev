import { ArticlesStore } from './defs';

const articles_factories: ArticlesStore.Factories = {
  defaultFilters: (lang, yours) => ({
    lang,
    CurrentPage: 1,
    ItemsPerPage: 20,
    Status: 'Accepted',
    Search: '',
    Tags: [],
    yours,
  }),
};

export { articles_factories };
