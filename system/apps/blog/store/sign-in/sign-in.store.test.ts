import { act, waitFor } from '@testing-library/react';
import { reset, useSignInStore } from './sign-in.store';
import { storeFixture } from '../test-utils';
import type { ErrorState, SignInStateKey } from './defs';
import { authorize } from '../auth';
import {
  type SignInPayload,
  getError,
  signIn,
  mockResponseError,
} from '@system/blog-api';

jest.mock('@system/blog-api');
jest.mock('../auth');

describe('Allows to sign in user when: ', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const PAYLOAD: SignInPayload = {
    login: 'TOM199414',
    password: 'TOM199414',
  };

  it('success state transition is handled', async () => {
    const { result, restore } = storeFixture(useSignInStore);

    (signIn as jest.Mock).mockImplementation(() => Promise.resolve());
    (authorize as jest.Mock).mockImplementation(jest.fn());

    expect(result.current.key).toBe('idle' as SignInStateKey);

    act(() => {
      result.current.signIn(PAYLOAD);
    });

    expect(result.current.key).toBe('pending' as SignInStateKey);

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledTimes(1);
    });

    expect(authorize).toHaveBeenCalledTimes(1);
    expect(result.current.key).toBe('ok' as SignInStateKey);

    restore();
  });

  it('error state transition is handled', async () => {
    const { result, restore } = storeFixture(useSignInStore);

    (signIn as jest.Mock).mockImplementation(() => Promise.reject());
    (getError as jest.Mock).mockImplementation(
      jest.requireActual('@system/blog-api')['getError']
    );
    (mockResponseError as jest.Mock).mockImplementation(
      jest.requireActual('@system/blog-api')['mockResponseError']
    );

    expect(result.current.key).toBe('idle' as SignInStateKey);

    act(() => {
      result.current.signIn(PAYLOAD);
    });

    expect(result.current.key).toBe('pending' as SignInStateKey);

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledTimes(1);
    });

    expect(authorize).not.toHaveBeenCalled();
    expect(result.current.key).toBe('error' as SignInStateKey);
    expect((result.current as ErrorState).response).toEqual(
      mockResponseError()
    );

    restore();
  });

  it('allows to reset state to default', () => {
    const { result, restore } = storeFixture(useSignInStore, {
      key: 'pending',
      signIn: jest.fn(),
    });

    expect(result.current.key).toBe('pending' as SignInStateKey);

    act(() => {
      reset();
    });

    expect(result.current.key).toBe('idle' as SignInStateKey);

    restore();
  });
});
