import { act } from '@testing-library/react';
import { useArticlesCreatorStore } from './store';
import { storeFixture } from '../test-utils';
import { articles_creator_actions } from './actions';

describe('Articles creation feature works when: ', () => {
  it('initial state is valid', () => {
    const { result, restore } = storeFixture(useArticlesCreatorStore);

    expect(result.current).toMatchSnapshot();

    restore();
  });

  it('initializes the form', () => {
    const { result, restore } = storeFixture(useArticlesCreatorStore);

    act(() => {
      articles_creator_actions.init('en');
    });

    expect(result.current).toMatchSnapshot();

    restore();
  });

  it('throws an exception when someone tries to change form field in not allowed state', () => {
    const { result, restore } = storeFixture(useArticlesCreatorStore);

    act(() => {
      articles_creator_actions.change('description', 'some-text');
    });

    expect(result.current).toMatchSnapshot();
    restore();
  });

  describe('throws an error during confirmation', () => {
    it('if thumbnail is missing', () => {
      const { result, restore } = storeFixture(useArticlesCreatorStore);

      act(() => {
        articles_creator_actions.init('en');
        articles_creator_actions.confirm();
      });

      expect(result.current).toMatchSnapshot();

      restore();
    });

    it('if form is confirmed when invalid', () => {
      const { result, restore } = storeFixture(useArticlesCreatorStore);

      act(() => {
        articles_creator_actions.init('en');
        articles_creator_actions.change('title', '');
        articles_creator_actions.confirm();
      });

      expect(result.current).toMatchSnapshot();

      restore();
    });

    it('if form is confirmed in not allowed state', () => {
      const { result, restore } = storeFixture(useArticlesCreatorStore);

      act(() => {
        articles_creator_actions.confirm();
      });

      expect(result.current.is).toBe('load-fail');
      expect(result.current).toMatchSnapshot();

      restore();
    });
  });

  it('allows to change and validate form fields', () => {
    const { result, restore } = storeFixture(useArticlesCreatorStore);

    act(() => {
      articles_creator_actions.init('en');
    });

    expect(result.current.is).toBe('creation');

    act(() => {
      articles_creator_actions.change('description', 'some-text');
    });

    expect(result.current).toMatchSnapshot();

    restore();
  });
});
