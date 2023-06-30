import type { BlogSelectors } from './defs';

const get = (selector: BlogSelectors): BlogSelectors => {
  return selector;
};

const getter =
  <T extends { get: (selector: string) => ReturnType<T['get']> }>(cy: T) =>
  (selector: BlogSelectors): ReturnType<T['get']> => {
    return cy.get(`[data-i=${selector}]`);
  };

export { get, getter };
