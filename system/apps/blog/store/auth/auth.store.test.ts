import { act } from '@testing-library/react';
import { storeFixture } from '../test-utils';
import { authorize, unauthorize, useAuthStore } from './auth.store';
import type { AuthStorage, AuthStoreStateKey } from './defs';
import { storage } from '@system/utils';
import { mockSignedInUser } from '@system/blog-api-mocks';

describe('Authorization works when: ', () => {
  const authStorage = storage<AuthStorage>();

  afterEach(() => {
    jest.clearAllMocks();
    authStorage.clear();
  });

  it('marks as authorized if authorization information is stored in local storage', () => {
    authStorage.set('user', mockSignedInUser());
    const { result, restore } = storeFixture(useAuthStore);

    expect(result.current.key).toBe('idle' as AuthStoreStateKey);

    act(() => {
      result.current.check();
    });

    expect(result.current.key).toBe('authorized' as AuthStoreStateKey);

    restore();
  });

  it('marks as unauthorized if no authorization info in local storage', () => {
    const { result, restore } = storeFixture(useAuthStore);

    expect(result.current.key).toBe('idle' as AuthStoreStateKey);

    act(() => {
      result.current.check();
    });

    expect(result.current.key).toBe('unauthorized' as AuthStoreStateKey);

    restore();
  });

  it('marks as unauthorized if user lost authorization information from local storage', () => {
    authStorage.set('user', null);
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

    const user = mockSignedInUser();

    act(() => {
      authorize(user);
    });

    expect(authStorage.get('user')).toEqual(user);
    expect(result.current.key).toBe('authorized' as AuthStoreStateKey);

    restore();
  });

  it('allows to unauthorize', () => {
    const { result, restore } = storeFixture(useAuthStore);

    expect(result.current.key).toBe('idle' as AuthStoreStateKey);

    act(() => {
      unauthorize();
    });

    expect(authStorage.get('user')).toBe(null);
    expect(result.current.key).toBe('unauthorized' as AuthStoreStateKey);

    restore();
  });
});
