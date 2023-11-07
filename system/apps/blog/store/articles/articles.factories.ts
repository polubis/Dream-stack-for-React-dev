import { ArticlesStore } from './defs';

const articles_factories: ArticlesStore.Factories = {
  defaultFilters: (lang) => ({
    lang,
    CurrentPage: 1,
    ItemsPerPage: 20,
    Status: 'Accepted',
    Search: '',
    Tags: [],
  }),
};

export { articles_factories };
