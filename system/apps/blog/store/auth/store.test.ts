import { act } from '@testing-library/react';
import { storeFixture } from '../test-utils';
import { useAuthStore } from './store';
import { storage } from '@system/utils';
import { mockSignedInUser } from '@system/blog-api-mocks';
import { auth_store_actions } from './actions';

describe('Authorization works when: ', () => {
  const authStorage = storage<Storage>();

  afterEach(() => {
    jest.clearAllMocks();
    authStorage.clear();
  });

  it('marks as authorized if authorization information is stored in local storage', () => {
    authStorage.set('user', mockSignedInUser());
    const { result, restore } = storeFixture(useAuthStore);

    expect(result.current.is).toBe('idle');

    act(() => {
      auth_store_actions.check();
    });

    expect(result.current.is).toBe('authorized');

    restore();
  });

  it('marks as unauthorized if no authorization info in local storage', () => {
    const { result, restore } = storeFixture(useAuthStore);

    expect(result.current.is).toBe('idle');

    act(() => {
      auth_store_actions.check();
    });

    expect(result.current.is).toBe('unauthorized');

    restore();
  });

  it('marks as unauthorized if user lost authorization information from local storage', () => {
    authStorage.set('user', null);
    const { result, restore } = storeFixture(useAuthStore);

    expect(result.current.is).toBe('idle');

    act(() => {
      auth_store_actions.check();
    });

    expect(result.current.is).toBe('unauthorized');

    restore();
  });

  it('allows to authorize', () => {
    const { result, restore } = storeFixture(useAuthStore);

    expect(result.current.is).toBe('idle');

    const user = mockSignedInUser();

    act(() => {
      auth_store_actions.authorize(user);
    });

    expect(authStorage.get('user')).toEqual(user);
    expect(result.current.is).toBe('authorized');

    restore();
  });

  it('allows to unauthorize', () => {
    const { result, restore } = storeFixture(useAuthStore);

    expect(result.current.is).toBe('idle');

    act(() => {
      auth_store_actions.unauthorize();
    });

    expect(authStorage.get('user')).toBe(null);
    expect(result.current.is).toBe('unauthorized');

    restore();
  });
});
