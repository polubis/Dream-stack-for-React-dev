import { act } from '@testing-library/react';
import { storeFixture } from '../test-utils';
import { authorize, unauthorize, useAuthStore } from './auth.store';
import type { AuthStoreStateKey } from './defs';

describe('Authorization works when: ', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('allows to check authorization status', () => {
    const { result, restore } = storeFixture(useAuthStore);

    expect(result.current.key).toBe('idle' as AuthStoreStateKey);

    act(() => {
      result.current.check();
    });

    expect(result.current.key).toBe('unauthorized' as AuthStoreStateKey);

    restore();
  });

  it('allows to authorize', () => {
    const { result, restore } = storeFixture(useAuthStore);

    expect(result.current.key).toBe('idle' as AuthStoreStateKey);

    act(() => {
      authorize();
    });

    expect(result.current.key).toBe('authorized' as AuthStoreStateKey);

    restore();
  });

  it('allows to unauthorize', () => {
    const { result, restore } = storeFixture(useAuthStore);

    expect(result.current.key).toBe('idle' as AuthStoreStateKey);

    act(() => {
      unauthorize();
    });

    expect(result.current.key).toBe('unauthorized' as AuthStoreStateKey);

    restore();
  });
});
