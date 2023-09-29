import { render } from '@testing-library/react';
import { FilterableArticlesScreen } from './filterable-articles-screen';
import { storeFixture } from '../../store/test-utils';
import { useArticlesStore } from '../../store/articles';
import { articles_states } from '../../store/articles/states';

describe('Articles list display works when: ', () => {
  describe('[FRAGILE] the loader is displayed when loading process', () => {
    it('not started', () => {
      const { restore } = storeFixture(
        useArticlesStore,
        articles_states.idle()
      );

      const { container } = render(
        <FilterableArticlesScreen pathCreator={() => '/'} />
      );

      expect(container.querySelector('.loader.big')).toBeTruthy();

      restore();
    });

    it('started', () => {
      const { restore } = storeFixture(
        useArticlesStore,
        articles_states.busy()
      );

      const { container } = render(
        <FilterableArticlesScreen pathCreator={() => '/'} />
      );

      expect(container.querySelector('.loader.big')).toBeTruthy();

      restore();
    });
  });
});
